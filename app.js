// ========================
// TOGGLE BUTTON LOGIC
// ========================

// Get all toggle groups on the page
const toggleGroups = document.querySelectorAll('.toggle-group');

toggleGroups.forEach(group => {

  // Check if this group allows multiple selections
  const isMulti = group.classList.contains('multi');

  group.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {

      if (isMulti) {
        // Multi-select: toggle on/off individually
        btn.classList.toggle('active');
      } else {
        // Single-select: deactivate all, activate clicked
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
// HELPER: SHOW STATUS
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
  // Hide spinner
  document.getElementById('load' + index).classList.remove('show');

  // Show result text
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
// GENERATE BUTTON CLICK
// ========================

document.getElementById('generateBtn').addEventListener('click', () => {
  generate();
});

// ========================
// LOG READY
// ========================

console.log('MY ArchGen app.js loaded successfully');
