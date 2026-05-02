// ========================
// TOGGLE BUTTON LOGIC
// ========================

const toggleGroups = document.querySelectorAll('.toggle-group');

toggleGroups.forEach(group => {
  const isMulti = group.classList.contains('multi');

  group.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      if (isMulti) {
        btn.classList.toggle('active');
      } else {
        group.querySelectorAll('.toggle').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
});

// ========================
// RANDOMIZE SEED BUTTON
// ========================

document.getElementById('randomBtn').addEventListener('click', () => {
  const randomSeed = Math.floor(Math.random() * 99999) + 1;
  document.getElementById('seed').value = randomSeed;
});

// ========================
// HELPER: GET SELECTED TOGGLES
// ========================

function getSelected(groupId) {
  const group = document.getElementById(groupId);
  const active = group.querySelectorAll('.toggle.active');
  return [...active].map(btn => btn.dataset.val);
}

// ========================
// HELPER: SET STATUS
// ========================

function setStatus(text, active = false) {
  document.getElementById('statusText').textContent = text;
  const dot = document.getElementById('statusDot');
  if (active) {
    dot.classList.add('active');
  } else {
    dot.classList.remove('active');
  }
}

// ========================
// HELPER: SHOW LOADING
// ========================

function showLoading(index) {
  document.getElementById('load' + index).classList.add('show');
  document.getElementById('ph' + index).style.display = 'none';
  document.getElementById('res' + index).style.display = 'none';
}

// ========================
// HELPER: SHOW RESULT
// ========================

function showResult(index, text) {
  document.getElementById('load' + index).classList.remove('show');
  const resultEl = document.getElementById('res' + index);
  resultEl.textContent = text;
  resultEl.style.display = 'block';
}

// ========================
// HELPER: SHOW ERROR
// ========================

function showError(message) {
  const box = document.getElementById('errorBox');
  box.textContent = message;
  box.classList.add('show');
}

function clearError() {
  document.getElementById('errorBox').classList.remove('show');
}

// ========================
// HELPER: SHOW PLACEHOLDER
// ========================

function showPlaceholder(index) {
  document.getElementById('load' + index).classList.remove('show');
  document.getElementById('ph' + index).style.display = 'block';
}

// ========================
// BUILD SUMMARY CARD
// ========================

function buildSummary(beds, baths, type, plotW, plotL, seed) {
  const card = document.getElementById('summaryCard');
  const title = document.getElementById('summaryTitle');
  const grid = document.getElementById('summaryGrid');

  title.textContent = beds + '-Bedroom ' + type + ' Design';

  grid.innerHTML = `
    <div class="summary-item">
      <div class="summary-val">${plotW}×${plotL}</div>
      <div class="summary-key">Plot (ft)</div>
    </div>
    <div class="summary-item">
      <div class="summary-val">${beds}BR / ${baths}BA</div>
      <div class="summary-key">Rooms</div>
    </div>
    <div class="summary-item">
      <div class="summary-val">${seed}</div>
      <div class="summary-key">Seed</div>
    </div>
    <div class="summary-item">
      <div class="summary-val">4</div>
      <div class="summary-key">Outputs</div>
    </div>
  `;

  card.classList.add('show');
}

// ========================
// GROQ AI API CALL
// ========================

async function callClaude(prompt) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_GROQ_KEY_HERE'
    },
    body: JSON.stringify({
      model: 'llama3-70b-8192',
      max_tokens: 1000,
      messages: [
        {
          role: 'system',
          content: 'You are MY ArchGen, a professional architectural design AI specializing in Nigerian and African residential buildings. Always describe the EXACT same building across all outputs. Same materials, colors, roof, windows, doors. Write in clear flowing prose. No bullet points. No markdown headers. Be specific, technical and vivid. Around 180 words per output.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  return data.choices[0].message.content;
}

// ========================
// MAIN GENERATE FUNCTION
// ========================

async function generate() {

  const plotW        = document.getElementById('plotW').value;
  const plotL        = document.getElementById('plotL').value;
  const type         = getSelected('buildingType')[0] || 'Bungalow';
  const style        = getSelected('archStyle')[0]    || 'Modern Nigerian';
  const roof         = getSelected('roofStyle')[0]    || 'Hip Roof';
  const beds         = document.getElementById('bedrooms').value;
  const baths        = document.getElementById('bathrooms').value;
  const extrasArr    = getSelected('extras');
  const extras       = extrasArr.join(', ') || 'Living Room, Kitchen';
  const soil         = document.getElementById('soil').value;
  const zoning       = document.getElementById('zoning').value;
  const seed         = document.getElementById('seed').value;
  const requirements = document.getElementById('requirements').value.trim();

  const baseDesign = `
    ${beds}-bedroom ${style} ${type} on a ${plotW}ft x ${plotL}ft plot.
    Roof style: ${roof}.
    Rooms included: ${extras}, ${baths} bathrooms.
    Soil condition: ${soil}.
    Zoning: ${zoning}.
    Generation seed: ${seed}.
    ${requirements ? 'Additional requirements: ' + requirements : ''}
  `;

  const prompts = [

    // Card 0: 3D Isometric View
    `Describe a detailed 3D isometric exterior view of this building:
    ${baseDesign}
    Show all four sides from a 45-degree elevated angle.
    Include exact roof shape and tile color, wall finish and color,
    window count and placement, front door style, perimeter fence,
    compound area, landscaping elements and decorative details.`,

    // Card 1: Front Facade
    `Describe the front facade elevation of this building:
    ${baseDesign}
    Describe the exact front face as seen straight-on.
    Include window positions and sizes, door style and material,
    facade texture and color, roof overhang, columns or pillars,
    any balcony, gate and entrance path, and symmetry details.`,

    // Card 2: Floor Plan
    `Describe the floor plan layout of this building:
    ${baseDesign}
    Include all rooms with approximate dimensions,
    their positions relative to each other,
    door and window placements, corridor widths,
    kitchen layout type, master bedroom en-suite details,
    bathroom positions, and traffic flow through the home.`,

    // Card 3: Interior Cutaway
    `Describe a dollhouse cutaway interior view of this building:
    ${baseDesign}
    The front wall is removed revealing all rooms at once.
    Include living room furniture and finish, kitchen cabinets
    and countertop material, bedroom furniture, bathroom fittings,
    flooring types per room, wall colors, ceiling treatment,
    lighting positions and how rooms connect visually.`,

    // Card 4: Technical Specs
    `Generate technical specifications for this building:
    ${baseDesign}
    Include foundation type for ${soil} soil, structural system,
    wall construction and block thickness, roofing material and pitch,
    window frame material, total floor area estimate in sq ft,
    number of structural columns, plumbing zones,
    electrical panel location, recommended material finishes
    for Nigerian climate, and 3 zoning compliance notes for ${zoning}.`

  ];

  // --- Reset UI ---
  clearError();
  document.getElementById('generateBtn').disabled = true;
  document.getElementById('specsCard').classList.add('show');
  setStatus('Generating your design...', true);
  [0, 1, 2, 3, 4].forEach(i => showLoading(i));
  buildSummary(beds, baths, type, plotW, plotL, seed);

  // --- Call Groq for all 5 outputs ---
  try {

    const results = await Promise.allSettled(
      prompts.map(p => callClaude(p))
    );

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        showResult(index, result.value);
      } else {
        showPlaceholder(index);
        console.error('Card ' + index + ' failed:', result.reason);
      }
    });

    setStatus('Generation complete ✓', true);
    setTimeout(() => setStatus('Ready to generate', false), 4000);

  } catch (error) {
    showError('Generation failed: ' + error.message);
    setStatus('Error — please try again', false);
    [0, 1, 2, 3, 4].forEach(i => showPlaceholder(i));

  } finally {
    document.getElementById('generateBtn').disabled = false;
  }

}

// ========================
// GENERATE BUTTON CLICK
// ========================

document.getElementById('generateBtn').addEventListener('click', () => {
  generate();
});

// ========================
// NIGHT MODE TOGGLE
// ========================

const nightToggle = document.getElementById('nightToggle');
const nightIcon   = document.querySelector('.night-icon');
const nightLabel  = document.querySelector('.night-label');

function loadTheme() {
  const saved = localStorage.getItem('archgen-theme');
  if (saved === 'light') {
    document.body.classList.add('light');
    nightIcon.textContent = '☀️';
    nightLabel.textContent = 'Day Mode';
  } else {
    document.body.classList.remove('light');
    nightIcon.textContent = '🌙';
    nightLabel.textContent = 'Night Mode';
  }
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light');
  if (isLight) {
    document.body.classList.remove('light');
    nightIcon.textContent = '🌙';
    nightLabel.textContent = 'Night Mode';
    localStorage.setItem('archgen-theme', 'dark');
  } else {
    document.body.classList.add('light');
    nightIcon.textContent = '☀️';
    nightLabel.textContent = 'Day Mode';
    localStorage.setItem('archgen-theme', 'light');
  }
}

nightToggle.addEventListener('click', toggleTheme);
loadTheme();

// ========================
// LOG READY
// ========================

console.log('MY ArchGen — Powered by Groq AI — Ready');
