// ========================
// AUTH PROTECTION
// ========================

function checkAuth() {
  const session = localStorage.getItem('archgen_session');

  if (!session) {
    window.location.href = 'auth.html';
    return;
  }

  const user = JSON.parse(session);

  if (!user.loggedIn) {
    window.location.href = 'auth.html';
    return;
  }

  document.getElementById('authCheck').style.display = 'none';
  document.getElementById('userName').textContent  = user.name;
  document.getElementById('userEmail').textContent = user.email;
  document.getElementById('userAvatar').textContent = user.avatar || user.name.slice(0,2).toUpperCase();

  loadProjects();
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('archgen_session');
  window.location.href = 'auth.html';
});

checkAuth();

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
// RANDOMIZE SEED
// ========================

document.getElementById('randomBtn').addEventListener('click', () => {
  document.getElementById('seed').value = Math.floor(Math.random() * 99999) + 1;
});

// ========================
// HELPER: GET SELECTED TOGGLES
// ========================

function getSelected(groupId) {
  const group  = document.getElementById(groupId);
  const active = group.querySelectorAll('.toggle.active');
  return [...active].map(btn => btn.dataset.val);
}

// ========================
// HELPER: SET STATUS
// ========================

function setStatus(text, active = false) {
  document.getElementById('statusText').textContent = text;
  const dot = document.getElementById('statusDot');
  active ? dot.classList.add('active') : dot.classList.remove('active');
}

// ========================
// HELPER: SHOW LOADING
// ========================

function showLoading(index) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  const result = document.getElementById('res'  + index);
  if (loader) loader.classList.add('show');
  if (ph)     ph.style.display     = 'none';
  if (result) result.style.display = 'none';
}

// ========================
// HELPER: SHOW RESULT
// ========================

function showResult(index, text) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  const result = document.getElementById('res'  + index);
  if (loader) loader.classList.remove('show');
  if (ph)     ph.style.display = 'none';
  if (result) {
    result.textContent        = text;
    result.style.display      = 'block';
    result.style.width        = '100%';
    result.style.textAlign    = 'left';
    result.style.fontSize     = '12px';
    result.style.lineHeight   = '1.8';
    result.style.whiteSpace   = 'pre-wrap';
    result.style.wordWrap     = 'break-word';
    result.style.color        = 'var(--text-main)';
    result.style.padding      = '4px 0';
  }
}

// ========================
// HELPER: SHOW ERROR
// ========================

function showError(message) {
  const box = document.getElementById('errorBox');
  if (box) { box.textContent = message; box.classList.add('show'); }
}

function clearError() {
  const box = document.getElementById('errorBox');
  if (box) box.classList.remove('show');
}

// ========================
// HELPER: SHOW PLACEHOLDER
// ========================

function showPlaceholder(index) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  if (loader) loader.classList.remove('show');
  if (ph)     ph.style.display = 'flex';
}

// ========================
// BUILD SUMMARY CARD
// ========================

function buildSummary(beds, baths, type, plotW, plotL, seed) {
  const card  = document.getElementById('summaryCard');
  const title = document.getElementById('summaryTitle');
  const grid  = document.getElementById('summaryGrid');
  if (!card || !title || !grid) return;

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
// GEMINI AI API CALL
// ========================

async function callClaude(prompt) {
  const GEMINI_KEY = 'PASTE_YOUR_GEMINI_KEY_HERE';

  const systemPrompt = 'You are MY ArchGen, a professional architectural design AI specializing in Nigerian and African residential buildings. Always describe the EXACT same building across all outputs. Same materials, colors, roof, windows, doors. Write in clear flowing prose. No bullet points. No markdown headers. No asterisks. Be specific, technical and vivid. Around 180 words per output.';

  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: systemPrompt + '\n\n' + prompt }]
        }],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7
        }
      })
    }
  );

  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  if (!data.candidates?.[0]?.content?.parts?.[0]) throw new Error('No response from Gemini AI');
  return data.candidates[0].content.parts[0].text;
}

// ========================
// CURRENT DESIGN STATE
// ========================

let currentDesign = null;

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
    `Describe a detailed 3D isometric exterior view of this building: ${baseDesign} Show all four sides from a 45-degree elevated angle. Include exact roof shape and tile color, wall finish and color, window count and placement, front door style, perimeter fence, compound area, landscaping elements and decorative details.`,
    `Describe the front facade elevation of this building: ${baseDesign} Describe the exact front face as seen straight-on. Include window positions and sizes, door style and material, facade texture and color, roof overhang, columns or pillars, any balcony, gate and entrance path, and symmetry details.`,
    `Describe the floor plan layout of this building: ${baseDesign} Include all rooms with approximate dimensions, their positions relative to each other, door and window placements, corridor widths, kitchen layout type, master bedroom en-suite details, bathroom positions, and traffic flow through the home.`,
    `Describe a dollhouse cutaway interior view of this building: ${baseDesign} The front wall is removed revealing all rooms at once. Include living room furniture and finish, kitchen cabinets and countertop material, bedroom furniture, bathroom fittings, flooring types per room, wall colors, ceiling treatment, lighting positions and how rooms connect visually.`,
    `Generate technical specifications for this building: ${baseDesign} Include foundation type for ${soil} soil, structural system, wall construction and block thickness, roofing material and pitch, window frame material, total floor area estimate in sq ft, number of structural columns, plumbing zones, electrical panel location, recommended material finishes for Nigerian climate, and 3 zoning compliance notes for ${zoning}.`
  ];

  clearError();
  document.getElementById('generateBtn').disabled = true;
  document.getElementById('saveBtn').style.display = 'none';
  const specsCard = document.getElementById('specsCard');
  if (specsCard) specsCard.classList.add('show');
  setStatus('Generating your design...', true);
  [0,1,2,3,4].forEach(i => showLoading(i));
  buildSummary(beds, baths, type, plotW, plotL, seed);

  try {
    const results = await Promise.allSettled(prompts.map(p => callClaude(p)));
    const outputs  = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        showResult(index, result.value);
        outputs[index] = result.value;
      } else {
        showPlaceholder(index);
        outputs[index] = '';
        console.error('Card ' + index + ' failed:', result.reason);
      }
    });

    // Store current design for saving
    currentDesign = {
      plotW, plotL, type, style, roof,
      beds, baths, extras, soil, zoning,
      seed, requirements, outputs,
      generatedAt: new Date().toISOString()
    };

    // Show save button
    document.getElementById('saveBtn').style.display = 'block';

    setStatus('Generation complete ✓', true);
    setTimeout(() => setStatus('Ready to generate', false), 4000);

  } catch (error) {
    showError('Generation failed: ' + error.message);
    setStatus('Error — please try again', false);
    [0,1,2,3,4].forEach(i => showPlaceholder(i));
  } finally {
    document.getElementById('generateBtn').disabled = false;
  }
}

document.getElementById('generateBtn').addEventListener('click', () => generate());

// ========================
// SAVE PROJECT LOGIC
// ========================

document.getElementById('saveBtn').addEventListener('click', () => {
  document.getElementById('saveModal').classList.add('show');
  document.getElementById('projectNameInput').focus();
});

document.getElementById('cancelSave').addEventListener('click', () => {
  document.getElementById('saveModal').classList.remove('show');
  document.getElementById('projectNameInput').value = '';
});

document.getElementById('confirmSave').addEventListener('click', () => {
  const name = document.getElementById('projectNameInput').value.trim();
  if (!name) {
    document.getElementById('projectNameInput').style.borderColor = '#E24B4A';
    setTimeout(() => {
      document.getElementById('projectNameInput').style.borderColor = '';
    }, 2000);
    return;
  }
  saveProject(name);
});

function saveProject(name) {
  if (!currentDesign) return;

  const session = JSON.parse(localStorage.getItem('archgen_session'));
  const userKey = 'archgen_projects_' + session.email.replace('@','_').replace('.','_');

  const projects  = getProjects();
  const newProject = {
    id: Date.now(),
    name: name,
    ...currentDesign,
    savedAt: new Date().toISOString()
  };

  projects.unshift(newProject);
  localStorage.setItem(userKey, JSON.stringify(projects));

  document.getElementById('saveModal').classList.remove('show');
  document.getElementById('projectNameInput').value = '';

  loadProjects();
  setStatus('Project saved! ✓', true);
  setTimeout(() => setStatus('Ready to generate', false), 3000);
}

// ========================
// LOAD PROJECTS
// ========================

function getProjects() {
  const session = JSON.parse(localStorage.getItem('archgen_session'));
  const userKey = 'archgen_projects_' + session.email.replace('@','_').replace('.','_');
  const stored  = localStorage.getItem(userKey);
  return stored ? JSON.parse(stored) : [];
}

function loadProjects() {
  const projects = getProjects();
  const list     = document.getElementById('projectsList');
  if (!list) return;

  if (projects.length === 0) {
    list.innerHTML = '<div class="no-projects">No saved projects yet.<br/>Generate and save your first design!</div>';
    return;
  }

  list.innerHTML = projects.map(p => `
    <div class="project-item" onclick="loadProject(${p.id})">
      <div class="project-item-info">
        <div class="project-item-name">${p.name}</div>
        <div class="project-item-meta">${p.beds}BR ${p.type} · ${p.plotW}×${p.plotL}ft · Seed ${p.seed}</div>
      </div>
      <button class="project-item-delete" onclick="deleteProject(event, ${p.id})">🗑️</button>
    </div>
  `).join('');
}

// ========================
// LOAD A SAVED PROJECT
// ========================

function loadProject(id) {
  const projects = getProjects();
  const project  = projects.find(p => p.id === id);
  if (!project) return;

  // Restore form values
  document.getElementById('plotW').value = project.plotW;
  document.getElementById('plotL').value = project.plotL;
  document.getElementById('bedrooms').value = project.beds;
  document.getElementById('bathrooms').value = project.baths;
  document.getElementById('soil').value = project.soil;
  document.getElementById('zoning').value = project.zoning;
  document.getElementById('seed').value = project.seed;
  document.getElementById('requirements').value = project.requirements || '';

  // Restore toggles
  restoreToggle('buildingType', project.type);
  restoreToggle('archStyle', project.style);
  restoreToggle('roofStyle', project.roof);
  restoreMultiToggle('extras', project.extras);

  // Show outputs
  const specsCard = document.getElementById('specsCard');
  if (specsCard) specsCard.classList.add('show');

  project.outputs.forEach((text, index) => {
    if (text) {
      showResult(index, text);
    } else {
      showPlaceholder(index);
    }
  });

  buildSummary(project.beds, project.baths, project.type, project.plotW, project.plotL, project.seed);

  currentDesign = project;
  document.getElementById('saveBtn').style.display = 'block';
  setStatus('Project loaded ✓', true);
  setTimeout(() => setStatus('Ready to generate', false), 3000);

  // Scroll to top of canvas
  document.querySelector('.canvas').scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================
// DELETE A PROJECT
// ========================

function deleteProject(event, id) {
  event.stopPropagation();

  const session = JSON.parse(localStorage.getItem('archgen_session'));
  const userKey = 'archgen_projects_' + session.email.replace('@','_').replace('.','_');

  let projects = getProjects();
  projects     = projects.filter(p => p.id !== id);

  localStorage.setItem(userKey, JSON.stringify(projects));
  loadProjects();
}

// ========================
// RESTORE TOGGLE HELPERS
// ========================

function restoreToggle(groupId, value) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.toggle').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.val === value) btn.classList.add('active');
  });
}

function restoreMultiToggle(groupId, valuesStr) {
  const group  = document.getElementById(groupId);
  if (!group) return;
  const values = valuesStr ? valuesStr.split(', ') : [];
  group.querySelectorAll('.toggle').forEach(btn => {
    btn.classList.remove('active');
    if (values.includes(btn.dataset.val)) btn.classList.add('active');
  });
}

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
    if (nightIcon)  nightIcon.textContent  = '☀️';
    if (nightLabel) nightLabel.textContent = 'Day Mode';
  } else {
    document.body.classList.remove('light');
    if (nightIcon)  nightIcon.textContent  = '🌙';
    if (nightLabel) nightLabel.textContent = 'Night Mode';
  }
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light');
  if (isLight) {
    document.body.classList.remove('light');
    if (nightIcon)  nightIcon.textContent  = '🌙';
    if (nightLabel) nightLabel.textContent = 'Night Mode';
    localStorage.setItem('archgen-theme', 'dark');
  } else {
    document.body.classList.add('light');
    if (nightIcon)  nightIcon.textContent  = '☀️';
    if (nightLabel) nightLabel.textContent = 'Day Mode';
    localStorage.setItem('archgen-theme', 'light');
  }
}

if (nightToggle) nightToggle.addEventListener('click', toggleTheme);
loadTheme();

// ========================
// LOG READY
// ========================

console.log('MY ArchGen — Save Project Ready — Powered by Gemini AI');
