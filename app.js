// ========================
// AUTH PROTECTION
// ========================

function checkAuth() {
  const session = localStorage.getItem('archgen_session');
  if (!session) { window.location.href = 'auth.html'; return; }
  const user = JSON.parse(session);
  if (!user.loggedIn) { window.location.href = 'auth.html'; return; }
  document.getElementById('authCheck').style.display = 'none';
  document.getElementById('userName').textContent = user.name;
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

document.querySelectorAll('.toggle-group').forEach(group => {
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
// HELPERS
// ========================

function getSelected(groupId) {
  return [...document.querySelectorAll('#' + groupId + ' .toggle.active')].map(b => b.dataset.val);
}

function setStatus(text, active = false) {
  document.getElementById('statusText').textContent = text;
  const dot = document.getElementById('statusDot');
  active ? dot.classList.add('active') : dot.classList.remove('active');
}

function showLoading(index) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  const result = document.getElementById('res'  + index);
  const svg    = document.getElementById('svg'  + index);
  if (loader) loader.classList.add('show');
  if (ph)     ph.style.display     = 'none';
  if (result) result.style.display = 'none';
  if (svg)    svg.style.display    = 'none';
}

function showResult(index, text) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  const result = document.getElementById('res'  + index);
  if (loader) loader.classList.remove('show');
  if (ph)     ph.style.display = 'none';
  if (result) {
    result.innerHTML       = '';
    result.textContent     = text;
    result.style.display   = 'block';
    result.style.width     = '100%';
    result.style.textAlign = 'left';
    result.style.fontSize  = '12px';
    result.style.lineHeight = '1.8';
    result.style.whiteSpace = 'pre-wrap';
    result.style.wordWrap  = 'break-word';
    result.style.color     = 'var(--text-main)';
    result.style.padding   = '4px 0';
  }
}

function showSVG(index, svgCode) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  const svg    = document.getElementById('svg'  + index);
  if (loader) loader.classList.remove('show');
  if (ph)     ph.style.display  = 'none';
  if (svg) {
    svg.innerHTML      = svgCode;
    svg.style.display  = 'block';
    svg.style.width    = '100%';
  }
}

function showError(message) {
  const box = document.getElementById('errorBox');
  if (box) { box.textContent = message; box.classList.add('show'); }
}

function clearError() {
  const box = document.getElementById('errorBox');
  if (box) box.classList.remove('show');
}

function showPlaceholder(index) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  if (loader) loader.classList.remove('show');
  if (ph)     ph.style.display = 'flex';
}

function buildSummary(beds, baths, type, plotW, plotL, seed) {
  const card  = document.getElementById('summaryCard');
  const title = document.getElementById('summaryTitle');
  const grid  = document.getElementById('summaryGrid');
  if (!card || !title || !grid) return;
  title.textContent = beds + '-Bedroom ' + type + ' Design';
  grid.innerHTML = `
    <div class="summary-item"><div class="summary-val">${plotW}×${plotL}</div><div class="summary-key">Plot (ft)</div></div>
    <div class="summary-item"><div class="summary-val">${beds}BR / ${baths}BA</div><div class="summary-key">Rooms</div></div>
    <div class="summary-item"><div class="summary-val">${seed}</div><div class="summary-key">Seed</div></div>
    <div class="summary-item"><div class="summary-val">4</div><div class="summary-key">Outputs</div></div>
  `;
  card.classList.add('show');
}

// ========================
// GEMINI AI API CALL
// ========================

async function callAI(prompt) {
  const GEMINI_KEY = 'AIzaSyB79uyTnw91NzlNLRh-s_GmwT6j2Wz32ug';
  const systemPrompt = 'You are MY ArchGen, a professional architectural design AI specializing in Nigerian and African residential buildings. Always describe the EXACT same building across all outputs. Same materials, colors, roof, windows, doors. Write in clear flowing prose. No bullet points. No markdown headers. No asterisks. Be specific, technical and vivid. Around 180 words per output.';
  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt + '\n\n' + prompt }] }],
        generationConfig: { maxOutputTokens: 1000, temperature: 0.7 }
      })
    }
  );
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  if (!data.candidates?.[0]?.content?.parts?.[0]) throw new Error('No response from Gemini AI');
  return data.candidates[0].content.parts[0].text;
}

// ========================
// SVG DIAGRAM GENERATORS
// ========================

function generate3DSVG(config) {
  const { beds, type, roof, style } = config;
  const roofColor  = '#8B4513';
  const wallColor  = style === 'Modern Nigerian' ? '#F5DEB3' : style === 'Contemporary' ? '#E8E8E8' : style === 'Colonial' ? '#FFF8DC' : '#F0F0F0';
  const trimColor  = '#8B6914';
  const floors     = type === 'Duplex' ? 2 : 1;
  const floorH     = 80;
  const buildingW  = 200;
  const buildingH  = floors * floorH;
  const roofH      = roof === 'Flat Roof' ? 10 : 50;
  const cx         = 260; const cy = 80;
  const depth      = 60;

  const windows = [];
  const winCount = Math.min(beds, 4);
  for (let i = 0; i < winCount; i++) {
    const wx = cx - buildingW/2 + 30 + i * ((buildingW - 40) / Math.max(winCount - 1, 1));
    windows.push(`
      <rect x="${wx - 12}" y="${cy + buildingH - 55}" width="24" height="28" fill="#87CEEB" stroke="${trimColor}" stroke-width="2" rx="2"/>
      <line x1="${wx}" y1="${cy + buildingH - 55}" x2="${wx}" y2="${cy + buildingH - 27}" stroke="${trimColor}" stroke-width="1"/>
      <line x1="${wx - 12}" y1="${cy + buildingH - 41}" x2="${wx + 12}" y2="${cy + buildingH - 41}" stroke="${trimColor}" stroke-width="1"/>
    `);
    if (floors === 2) {
      windows.push(`
        <rect x="${wx - 12}" y="${cy + buildingH - 120}" width="24" height="28" fill="#87CEEB" stroke="${trimColor}" stroke-width="2" rx="2"/>
        <line x1="${wx}" y1="${cy + buildingH - 120}" x2="${wx}" y2="${cy + buildingH - 92}" stroke="${trimColor}" stroke-width="1"/>
        <line x1="${wx - 12}" y1="${cy + buildingH - 106}" x2="${wx + 12}" y2="${cy + buildingH - 106}" stroke="${trimColor}" stroke-width="1"/>
      `);
    }
  }

  const roofPath = roof === 'Flat Roof'
    ? `<rect x="${cx - buildingW/2 - 5}" y="${cy - roofH}" width="${buildingW + 10}" height="${roofH}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`
    : roof === 'Hip Roof'
    ? `<polygon points="${cx},${cy - roofH} ${cx - buildingW/2 - 5},${cy} ${cx + buildingW/2 + 5},${cy}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`
    : roof === 'Gable Roof'
    ? `<polygon points="${cx},${cy - roofH} ${cx - buildingW/2 - 5},${cy} ${cx + buildingW/2 + 5},${cy}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`
    : `<polygon points="${cx - 10},${cy - roofH + 15} ${cx + 10},${cy - roofH + 15} ${cx + buildingW/2 + 5},${cy} ${cx - buildingW/2 - 5},${cy}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`;

  const sidePoints = `${cx + buildingW/2},${cy} ${cx + buildingW/2 + depth},${cy + depth/2} ${cx + buildingW/2 + depth},${cy + buildingH + depth/2} ${cx + buildingW/2},${cy + buildingH}`;
  const topPoints  = `${cx - buildingW/2},${cy} ${cx + buildingW/2},${cy} ${cx + buildingW/2 + depth},${cy + depth/2} ${cx - buildingW/2 + depth},${cy + depth/2}`;

  return `
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#87CEEB" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#E0F0FF" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#90EE90" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#228B22" stop-opacity="0.2"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="520" height="320" fill="url(#skyGrad)" rx="6"/>
      <rect y="240" width="520" height="80" fill="url(#groundGrad)" rx="0"/>

      <!-- Ground shadow -->
      <ellipse cx="${cx + depth/2}" cy="245" rx="${buildingW/2 + 20}" ry="10" fill="rgba(0,0,0,0.15)"/>

      <!-- Side wall (3D effect) -->
      <polygon points="${sidePoints}" fill="#D4A853" stroke="#8B6914" stroke-width="1.5"/>

      <!-- Top surface -->
      <polygon points="${topPoints}" fill="#E8C87A" stroke="#8B6914" stroke-width="1.5"/>

      <!-- Front wall -->
      <rect x="${cx - buildingW/2}" y="${cy}" width="${buildingW}" height="${buildingH}" fill="${wallColor}" stroke="#8B6914" stroke-width="2"/>

      <!-- Floor line for duplex -->
      ${floors === 2 ? `<line x1="${cx - buildingW/2}" y1="${cy + floorH}" x2="${cx + buildingW/2}" y2="${cy + floorH}" stroke="${trimColor}" stroke-width="1.5" stroke-dasharray="4,3"/>` : ''}

      <!-- Windows -->
      ${windows.join('')}

      <!-- Door -->
      <rect x="${cx - 16}" y="${cy + buildingH - 45}" width="32" height="45" fill="#8B4513" stroke="${trimColor}" stroke-width="2" rx="2"/>
      <rect x="${cx - 14}" y="${cy + buildingH - 43}" width="11" height="20" fill="#A0522D" rx="1"/>
      <rect x="${cx + 3}" y="${cy + buildingH - 43}" width="11" height="20" fill="#A0522D" rx="1"/>
      <circle cx="${cx + 12}" cy="${cy + buildingH - 23}" r="2.5" fill="#FFD700"/>

      <!-- Roof -->
      ${roofPath}

      <!-- Roof ridge line -->
      ${roof !== 'Flat Roof' ? `<line x1="${cx}" y1="${cy - roofH}" x2="${cx + depth}" y2="${cy - roofH + depth/2}" stroke="#5D2E0C" stroke-width="1" stroke-dasharray="3,2"/>` : ''}

      <!-- Fence -->
      <line x1="${cx - buildingW/2 - 30}" y1="242" x2="${cx + buildingW/2 + 60}" y2="242" stroke="#8B6914" stroke-width="3"/>
      ${[...Array(8)].map((_, i) => `<rect x="${cx - buildingW/2 - 30 + i * 22}" y="232" width="6" height="12" fill="#8B6914" rx="1"/>`).join('')}

      <!-- Trees -->
      <ellipse cx="${cx - buildingW/2 - 50}" cy="210" rx="18" ry="22" fill="#228B22" opacity="0.8"/>
      <rect x="${cx - buildingW/2 - 53}" y="225" width="6" height="18" fill="#8B4513"/>
      <ellipse cx="${cx + buildingW/2 + 80}" cy="215" rx="15" ry="18" fill="#2E8B57" opacity="0.8"/>
      <rect x="${cx + buildingW/2 + 77}" y="228" width="6" height="15" fill="#8B4513"/>

      <!-- Label -->
      <rect x="10" y="10" width="130" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
      <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">3D ISOMETRIC VIEW</text>

      <!-- Compass -->
      <circle cx="480" cy="30" r="16" fill="rgba(0,0,0,0.4)" stroke="#C9A84C" stroke-width="1"/>
      <text x="480" y="24" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">N</text>
      <text x="480" y="38" text-anchor="middle" font-family="monospace" font-size="9" fill="white">S</text>
      <text x="470" y="32" text-anchor="middle" font-family="monospace" font-size="9" fill="white">W</text>
      <text x="491" y="32" text-anchor="middle" font-family="monospace" font-size="9" fill="white">E</text>
    </svg>
  `;
}

function generateFacadeSVG(config) {
  const { beds, type, roof, style } = config;
  const wallColor  = style === 'Modern Nigerian' ? '#F5DEB3' : style === 'Contemporary' ? '#E8E8E8' : style === 'Colonial' ? '#FFF8DC' : '#F0F0F0';
  const roofColor  = '#8B4513';
  const trimColor  = '#8B6914';
  const floors     = type === 'Duplex' ? 2 : 1;
  const floorH     = 90;
  const buildingW  = 320;
  const buildingH  = floors * floorH;
  const startX     = 100;
  const startY     = 240 - buildingH;
  const roofH      = roof === 'Flat Roof' ? 12 : 55;
  const winCount   = Math.min(parseInt(beds), 4);

  const windows = [];
  const spacing  = (buildingW - 60) / Math.max(winCount, 1);
  for (let f = 0; f < floors; f++) {
    for (let i = 0; i < winCount; i++) {
      if (f === 0 && i === Math.floor(winCount / 2)) continue;
      const wx = startX + 30 + i * spacing + spacing/2 - 15;
      const wy = startY + f * floorH + 20;
      windows.push(`
        <rect x="${wx}" y="${wy}" width="30" height="36" fill="#87CEEB" stroke="${trimColor}" stroke-width="2" rx="2"/>
        <line x1="${wx + 15}" y1="${wy}" x2="${wx + 15}" y2="${wy + 36}" stroke="${trimColor}" stroke-width="1"/>
        <line x1="${wx}" y1="${wy + 18}" x2="${wx + 30}" y2="${wy + 18}" stroke="${trimColor}" stroke-width="1"/>
        <rect x="${wx - 3}" y="${wy - 4}" width="36" height="6" fill="${trimColor}" opacity="0.6" rx="1"/>
      `);
    }
  }

  const roofSVG = roof === 'Flat Roof'
    ? `<rect x="${startX - 10}" y="${startY - roofH}" width="${buildingW + 20}" height="${roofH}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5" rx="2"/>
       <rect x="${startX - 15}" y="${startY - roofH - 5}" width="${buildingW + 30}" height="8" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1"/>`
    : roof === 'Mansard'
    ? `<polygon points="${startX - 10},${startY} ${startX + buildingW/2},${startY - roofH} ${startX + buildingW + 10},${startY}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>
       <rect x="${startX + 30}" y="${startY - roofH + 10}" width="30" height="24" fill="#87CEEB" stroke="${trimColor}" stroke-width="1.5" rx="1"/>`
    : `<polygon points="${startX - 10},${startY} ${startX + buildingW/2},${startY - roofH} ${startX + buildingW + 10},${startY}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`;

  const columns = type === 'Colonial'
    ? `<rect x="${startX + 20}" y="${startY}" width="16" height="${buildingH}" fill="#FFF8DC" stroke="${trimColor}" stroke-width="1.5"/>
       <rect x="${startX + buildingW - 36}" y="${startY}" width="16" height="${buildingH}" fill="#FFF8DC" stroke="${trimColor}" stroke-width="1.5"/>`
    : '';

  return `
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
      <defs>
        <linearGradient id="skyF" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#C9E8FF" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#E8F4FF" stop-opacity="0.1"/>
        </linearGradient>
      </defs>

      <!-- Sky -->
      <rect width="520" height="300" fill="url(#skyF)" rx="6"/>

      <!-- Ground -->
      <rect y="240" width="520" height="60" fill="#90EE90" opacity="0.3" rx="0"/>
      <line x1="0" y1="240" x2="520" y2="240" stroke="#5D8B22" stroke-width="1" opacity="0.5"/>

      <!-- Building shadow -->
      <rect x="${startX + 8}" y="${startY + 8}" width="${buildingW}" height="${buildingH}" fill="rgba(0,0,0,0.1)" rx="2"/>

      <!-- Main wall -->
      <rect x="${startX}" y="${startY}" width="${buildingW}" height="${buildingH}" fill="${wallColor}" stroke="${trimColor}" stroke-width="2.5"/>

      <!-- Columns -->
      ${columns}

      <!-- Floor divider for duplex -->
      ${floors === 2 ? `
        <line x1="${startX}" y1="${startY + floorH}" x2="${startX + buildingW}" y2="${startY + floorH}" stroke="${trimColor}" stroke-width="2"/>
        <rect x="${startX}" y="${startY + floorH - 4}" width="${buildingW}" height="8" fill="${trimColor}" opacity="0.3"/>
      ` : ''}

      <!-- Windows -->
      ${windows.join('')}

      <!-- Door -->
      <rect x="${startX + buildingW/2 - 22}" y="${startY + buildingH - 60}" width="44" height="60" fill="#8B4513" stroke="${trimColor}" stroke-width="2" rx="3"/>
      <polygon points="${startX + buildingW/2 - 22},${startY + buildingH - 60} ${startX + buildingW/2},${startY + buildingH - 80} ${startX + buildingW/2 + 22},${startY + buildingH - 60}" fill="${roofColor}"/>
      <rect x="${startX + buildingW/2 - 19}" y="${startY + buildingH - 57}" width="17}" height="28" fill="#A0522D" rx="1"/>
      <rect x="${startX + buildingW/2 + 2}" y="${startY + buildingH - 57}" width="17" height="28" fill="#A0522D" rx="1"/>
      <circle cx="${startX + buildingW/2 + 18}" cy="${startY + buildingH - 30}" r="3" fill="#FFD700"/>

      <!-- Steps -->
      <rect x="${startX + buildingW/2 - 28}" y="238" width="56" height="5" fill="${trimColor}" opacity="0.7" rx="1"/>
      <rect x="${startX + buildingW/2 - 32}" y="242" width="64" height="5" fill="${trimColor}" opacity="0.5" rx="1"/>

      <!-- Roof -->
      ${roofSVG}

      <!-- Roof tiles detail -->
      ${roof !== 'Flat Roof' ? `
        <line x1="${startX + buildingW/2 - 30}" y1="${startY - 15}" x2="${startX - 10}" y2="${startY}" stroke="#5D2E0C" stroke-width="0.5" opacity="0.4"/>
        <line x1="${startX + buildingW/2 + 30}" y1="${startY - 15}" x2="${startX + buildingW + 10}" y2="${startY}" stroke="#5D2E0C" stroke-width="0.5" opacity="0.4"/>
      ` : ''}

      <!-- Balcony for duplex -->
      ${floors === 2 ? `
        <rect x="${startX + buildingW/2 - 50}" y="${startY + floorH - 5}" width="100" height="8" fill="${trimColor}" opacity="0.8" rx="1"/>
        ${[...Array(6)].map((_, i) => `<rect x="${startX + buildingW/2 - 48 + i * 18}" y="${startY + floorH}" width="4" height="28" fill="${trimColor}" opacity="0.6" rx="1"/>`).join('')}
        <line x1="${startX + buildingW/2 - 48}" y1="${startY + floorH + 28}" x2="${startX + buildingW/2 + 52}" y2="${startY + floorH + 28}" stroke="${trimColor}" stroke-width="2" opacity="0.7"/>
      ` : ''}

      <!-- Label -->
      <rect x="10" y="10" width="130" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
      <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">FRONT ELEVATION</text>

      <!-- Scale bar -->
      <line x1="380" y1="270" x2="480" y2="270" stroke="#C9A84C" stroke-width="1.5"/>
      <line x1="380" y1="265" x2="380" y2="275" stroke="#C9A84C" stroke-width="1.5"/>
      <line x1="480" y1="265" x2="480" y2="275" stroke="#C9A84C" stroke-width="1.5"/>
      <text x="430" y="285" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">SCALE 1:100</text>
    </svg>
  `;
}

function generateFloorPlanSVG(config) {
  const { beds, baths, extras, plotW, plotL } = config;
  const hasLiving  = extras.includes('Living Room');
  const hasDining  = extras.includes('Dining');
  const hasKitchen = extras.includes('Kitchen');
  const hasStore   = extras.includes('Store');
  const hasStudy   = extras.includes('Study');
  const hasGarage  = extras.includes('Garage');
  const numBeds    = parseInt(beds);
  const numBaths   = parseInt(baths);

  const scale = 0.9;
  const W     = 400 * scale;
  const H     = 340 * scale;
  const sx    = 60;
  const sy    = 30;
  const wallT = 6;
  const wallC = '#333';
  const roomC = {
    bedroom:  '#FFF3E0',
    living:   '#E8F5E9',
    dining:   '#E3F2FD',
    kitchen:  '#FCE4EC',
    bathroom: '#E8EAF6',
    store:    '#F3E5F5',
    study:    '#E0F7FA',
    garage:   '#EFEBE9',
    corridor: '#FAFAFA'
  };

  const rooms = [];

  // Living room
  if (hasLiving) {
    rooms.push({ x: sx, y: sy, w: 150, h: 100, color: roomC.living, label: 'LIVING ROOM', sub: '5.0 x 4.0m' });
  }

  // Dining
  if (hasDining) {
    rooms.push({ x: sx + 150, y: sy, w: 110, h: 80, color: roomC.dining, label: 'DINING', sub: '4.0 x 3.5m' });
  }

  // Kitchen
  if (hasKitchen) {
    rooms.push({ x: sx + 260, y: sy, w: 100, h: 80, color: roomC.kitchen, label: 'KITCHEN', sub: '3.5 x 3.0m' });
  }

  // Corridor
  rooms.push({ x: sx, y: sy + 100, w: 360, h: 25, color: roomC.corridor, label: 'CORRIDOR', sub: '' });

  // Bedrooms
  const bedW = numBeds <= 2 ? 130 : numBeds === 3 ? 110 : 90;
  for (let i = 0; i < numBeds; i++) {
    const isMaster = i === 0;
    rooms.push({
      x: sx + i * bedW,
      y: sy + 125,
      w: bedW,
      h: isMaster ? 115 : 100,
      color: roomC.bedroom,
      label: isMaster ? 'MASTER BED' : 'BED ' + (i + 1),
      sub: isMaster ? '4.5 x 4.0m' : '3.5 x 3.5m'
    });
  }

  // Bathrooms
  const bathX = sx + numBeds * bedW;
  for (let i = 0; i < Math.min(numBaths, 2); i++) {
    rooms.push({
      x: bathX,
      y: sy + 125 + i * 58,
      w: 80,
      h: 55,
      color: roomC.bathroom,
      label: i === 0 ? 'BATH 1' : 'BATH 2',
      sub: '2.5 x 2.0m'
    });
  }

  // Store
  if (hasStore) {
    rooms.push({ x: sx + 310, y: sy + 125, w: 50, h: 55, color: roomC.store, label: 'STORE', sub: '' });
  }

  // Study
  if (hasStudy) {
    rooms.push({ x: sx + 310, y: sy + 180, w: 50, h: 55, color: roomC.study, label: 'STUDY', sub: '' });
  }

  // Garage
  if (hasGarage) {
    rooms.push({ x: sx, y: sy + 240, w: 120, h: 60, color: roomC.garage, label: 'GARAGE', sub: '6.0 x 3.0m' });
  }

  const roomSVG = rooms.map(r => `
    <rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.color}" stroke="${wallC}" stroke-width="${wallT/2}"/>
    <text x="${r.x + r.w/2}" y="${r.y + r.h/2 - 4}" text-anchor="middle" font-family="monospace" font-size="9" font-weight="bold" fill="#333">${r.label}</text>
    <text x="${r.x + r.w/2}" y="${r.y + r.h/2 + 10}" text-anchor="middle" font-family="monospace" font-size="8" fill="#666">${r.sub}</text>
  `).join('');

  const doors = rooms.filter(r => r.label !== 'CORRIDOR').map(r => `
    <line x1="${r.x + r.w/2 - 8}" y1="${r.y + r.h}" x2="${r.x + r.w/2 + 8}" y2="${r.y + r.h}" stroke="#8B4513" stroke-width="2.5"/>
    <path d="M ${r.x + r.w/2 - 8} ${r.y + r.h} Q ${r.x + r.w/2 - 8} ${r.y + r.h - 16} ${r.x + r.w/2 + 8} ${r.y + r.h}" fill="none" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,2"/>
  `).join('');

  return `
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
      <rect width="520" height="320" fill="#F8F6F0" rx="6"/>

      <!-- Grid lines -->
      ${[...Array(10)].map((_, i) => `<line x1="${60 + i*40}" y1="20" x2="${60 + i*40}" y2="300" stroke="#E0DDD8" stroke-width="0.5"/>`).join('')}
      ${[...Array(8)].map((_, i) => `<line x1="60" y1="${20 + i*36}" x2="460" y2="${20 + i*36}" stroke="#E0DDD8" stroke-width="0.5"/>`).join('')}

      <!-- Outer wall -->
      <rect x="${sx - wallT}" y="${sy - wallT}" width="372" height="312" fill="none" stroke="${wallC}" stroke-width="${wallT}"/>

      <!-- Rooms -->
      ${roomSVG}

      <!-- Doors -->
      ${doors}

      <!-- North arrow -->
      <circle cx="490" cy="30" r="14" fill="rgba(0,0,0,0.1)" stroke="#C9A84C" stroke-width="1"/>
      <text x="490" y="25" text-anchor="middle" font-family="monospace" font-size="9" font-weight="bold" fill="#C9A84C">N</text>
      <line x1="490" y1="27" x2="490" y2="40" stroke="#C9A84C" stroke-width="1.5"/>
      <polygon points="490,20 487,28 493,28" fill="#C9A84C"/>

      <!-- Main entrance arrow -->
      <text x="${sx + 160}" y="305" text-anchor="middle" font-family="monospace" font-size="9" fill="#8B4513">▼ MAIN ENTRANCE</text>

      <!-- Label -->
      <rect x="10" y="10" width="110" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
      <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">FLOOR PLAN</text>

      <!-- Plot info -->
      <text x="10" y="310" font-family="monospace" font-size="9" fill="#666">PLOT: ${plotW}ft × ${plotL}ft</text>
    </svg>
  `;
}

function generateInteriorSVG(config) {
  const { beds, style } = config;
  const wallC   = style === 'Modern Nigerian' ? '#F5DEB3' : style === 'Contemporary' ? '#E8E8E8' : '#FFF8DC';
  const floorC  = style === 'Contemporary' ? '#D2B48C' : '#C19A6B';
  const ceilC   = '#FFFFF0';

  return `
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
      <defs>
        <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${floorC}"/>
          <stop offset="100%" stop-color="#8B6914" stop-opacity="0.5"/>
        </linearGradient>
        <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${ceilC}"/>
          <stop offset="100%" stop-color="${wallC}"/>
        </linearGradient>
      </defs>

      <!-- Background ceiling -->
      <rect width="520" height="300" fill="url(#wallG)" rx="6"/>

      <!-- Floor -->
      <polygon points="0,240 520,240 480,300 40,300" fill="url(#floorG)"/>

      <!-- Floor tiles -->
      ${[...Array(6)].map((_, i) => `<line x1="${i*88}" y1="240" x2="${i*88 - 40}" y2="300" stroke="${floorC}" stroke-width="0.5" opacity="0.4"/>`).join('')}
      ${[...Array(4)].map((_, i) => `<line x1="0" y1="${240 + i*20}" x2="520" y2="${240 + i*20}" stroke="${floorC}" stroke-width="0.5" opacity="0.3"/>`).join('')}

      <!-- Back wall -->
      <rect x="0" y="60" width="520" height="180" fill="${wallC}" opacity="0.3"/>

      <!-- Wall panels -->
      <rect x="20" y="80" width="100" height="140" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5" rx="2"/>
      <rect x="400" y="80" width="100" height="140" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5" rx="2"/>

      <!-- Ceiling -->
      <rect x="0" y="0" width="520" height="60" fill="${ceilC}" opacity="0.6"/>
      <line x1="0" y1="60" x2="520" y2="60" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>

      <!-- Ceiling light -->
      <ellipse cx="260" cy="20" rx="30" ry="8" fill="#FFE87C" opacity="0.6"/>
      <line x1="260" y1="28" x2="260" y2="50" stroke="#888" stroke-width="2"/>
      <ellipse cx="260" cy="52" rx="12" ry="6" fill="#FFD700" opacity="0.9"/>
      <ellipse cx="260" cy="52" rx="12" ry="6" fill="#FFE87C" opacity="0.4"/>
      <line x1="260" y1="58" x2="220" y2="100" stroke="rgba(255,232,124,0.2)" stroke-width="20"/>

      <!-- Left room divider wall -->
      <rect x="140" y="60" width="8" height="180" fill="#8B6914" opacity="0.6"/>

      <!-- Right room divider wall -->
      <rect x="372" y="60" width="8" height="180" fill="#8B6914" opacity="0.6"/>

      <!-- LIVING ROOM (center) -->
      <!-- Sofa -->
      <rect x="175" y="175" width="120" height="45" fill="#8B4513" rx="5"/>
      <rect x="175" y="165" width="120" height="18" fill="#A0522D" rx="3"/>
      <rect x="175" y="165" width="16" height="55" fill="#A0522D" rx="3"/>
      <rect x="279" y="165" width="16" height="55" fill="#A0522D" rx="3"/>
      <!-- Cushions -->
      <rect x="185" y="168" width="28" height="14" fill="#C19A6B" rx="2"/>
      <rect x="220" y="168" width="28" height="14" fill="#C19A6B" rx="2"/>
      <rect x="255" y="168" width="28" height="14" fill="#C19A6B" rx="2"/>
      <!-- Coffee table -->
      <rect x="205" y="225" width="80" height="12" fill="#6B4226" rx="2"/>
      <rect x="208" y="215" width="74" height="12" fill="#8B5E3C" rx="1"/>
      <!-- TV unit -->
      <rect x="180" y="120" width="110" height="8" fill="#333" rx="2"/>
      <rect x="185" y="90" width="100" height="32" fill="#1a1a1a" rx="3"/>
      <rect x="188" y="93" width="94" height="26" fill="#87CEEB" opacity="0.4" rx="2"/>
      <!-- TV stand legs -->
      <rect x="210" y="128" width="6" height="12" fill="#555"/>
      <rect x="264" y="128" width="6" height="12" fill="#555"/>

      <!-- BEDROOM (left section) -->
      <!-- Bed -->
      <rect x="30" y="145" width="95" height="85" fill="#E8C87A" rx="4"/>
      <rect x="30" y="145" width="95" height="22" fill="#D4A853" rx="4"/>
      <!-- Pillow -->
      <rect x="38" y="149" width="35" height="14" fill="#FFF8DC" rx="3"/>
      <rect x="78" y="149" width="35" height="14" fill="#FFF8DC" rx="3"/>
      <!-- Blanket -->
      <rect x="30" y="167" width="95" height="63" fill="#C19A6B" rx="2"/>
      <!-- Bedside table -->
      <rect x="15" y="175" width="18" height="35" fill="#8B6914" rx="2"/>
      <rect x="12" y="172" width="24" height="5" fill="#8B6914" rx="1"/>
      <!-- Lamp -->
      <rect x="21" y="160" width="4" height="14" fill="#888"/>
      <polygon points="17,160 29,160 24,148" fill="#FFE87C" opacity="0.8"/>
      <!-- Wardrobe -->
      <rect x="15" y="90" width="110" height="48" fill="#8B6914" rx="3"/>
      <line x1="70" y1="90" x2="70" y2="138" stroke="#6B4226" stroke-width="1.5"/>
      <circle cx="63" cy="114" r="3" fill="#FFD700"/>
      <circle cx="77" cy="114" r="3" fill="#FFD700"/>

      <!-- KITCHEN (right section) -->
      <!-- Counter top -->
      <rect x="385" y="100" width="110" height="18" fill="#E0E0E0" rx="2"/>
      <rect x="385" y="118" width="110" height="60" fill="#BDBDBD" rx="0"/>
      <!-- Sink -->
      <rect x="395" y="103" width="35" height="13" fill="#90A4AE" rx="2"/>
      <circle cx="412" cy="109" r="3" fill="#78909C"/>
      <!-- Stove -->
      <rect x="440" y="103" width="45" height="13" fill="#424242" rx="2"/>
      <circle cx="450" cy="109" r="4" fill="#616161"/>
      <circle cx="463" cy="109" r="4" fill="#616161"/>
      <circle cx="476" cy="109" r="4" fill="#616161"/>
      <!-- Cabinet doors -->
      <rect x="385" y="120" width="52" height="55" fill="#D4A853" stroke="#8B6914" stroke-width="1" rx="1"/>
      <rect x="440" y="120" width="55" height="55" fill="#D4A853" stroke="#8B6914" stroke-width="1" rx="1"/>
      <circle cx="413" cy="148" r="3" fill="#FFD700"/>
      <circle cx="468" cy="148" r="3" fill="#FFD700"/>
      <!-- Upper cabinets -->
      <rect x="385" y="65" width="110" height="32" fill="#C9A84C" stroke="#8B6914" stroke-width="1" rx="2"/>
      <line x1="440" y1="65" x2="440" y2="97" stroke="#8B6914" stroke-width="1"/>
      <!-- Refrigerator -->
      <rect x="385" y="178" width="38" height="55" fill="#E0E0E0" stroke="#BDBDBD" stroke-width="1.5" rx="2"/>
      <line x1="385" y1="210" x2="423" y2="210" stroke="#BDBDBD" stroke-width="1"/>
      <circle cx="420" cy="194" r="2" fill="#888"/>
      <circle cx="420" cy="224" r="2" fill="#888"/>

      <!-- Window back wall center -->
      <rect x="220" y="70" width="80" height="55" fill="#87CEEB" opacity="0.6" stroke="#8B6914" stroke-width="2" rx="2"/>
      <line x1="260" y1="70" x2="260" y2="125" stroke="#8B6914" stroke-width="1.5"/>
      <line x1="220" y1="97" x2="300" y2="97" stroke="#8B6914" stroke-width="1.5"/>

      <!-- Room labels -->
      <rect x="170" y="63" width="80" height="18" fill="rgba(0,0,0,0.4)" rx="3"/>
      <text x="210" y="75" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">LIVING ROOM</text>

      <rect x="30" y="63" width="80" height="18" fill="rgba(0,0,0,0.4)" rx="3"/>
      <text x="70" y="75" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">BEDROOM</text>

      <rect x="390" y="63" width="70" height="18" fill="rgba(0,0,0,0.4)" rx="3"/>
      <text x="425" y="75" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">KITCHEN</text>

      <!-- Label -->
      <rect x="10" y="10" width="150" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
      <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">INTERIOR CUTAWAY VIEW</text>
    </svg>
  `;
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

  const config = { plotW, plotL, type, style, roof, beds, baths, extras, soil, zoning, seed };

  const baseDesign = `
    ${beds}-bedroom ${style} ${type} on a ${plotW}ft x ${plotL}ft plot.
    Roof style: ${roof}. Rooms: ${extras}, ${baths} bathrooms.
    Soil: ${soil}. Zoning: ${zoning}. Seed: ${seed}.
    ${requirements ? 'Extra: ' + requirements : ''}
  `;

  clearError();
  document.getElementById('generateBtn').disabled = true;
  document.getElementById('saveBtn').style.display = 'none';
  const specsCard = document.getElementById('specsCard');
  if (specsCard) specsCard.classList.add('show');
  setStatus('Generating your design...', true);
  [0,1,2,3,4].forEach(i => showLoading(i));
  buildSummary(beds, baths, type, plotW, plotL, seed);

  // Generate SVG diagrams instantly
  setTimeout(() => { showSVG(0, generate3DSVG(config)); },    200);
  setTimeout(() => { showSVG(1, generateFacadeSVG(config)); }, 400);
  setTimeout(() => { showSVG(2, generateFloorPlanSVG(config)); }, 600);
  setTimeout(() => { showSVG(3, generateInteriorSVG(config)); }, 800);

  // Generate AI text for specs card only
  try {
    const specPrompt = `Generate technical specifications for this building:
      ${baseDesign}
      Include foundation type for ${soil} soil, structural system,
      wall construction, roofing material, floor area estimate in sq ft,
      number of columns, plumbing zones, electrical panel location,
      recommended materials for Nigerian climate,
      and 3 zoning compliance notes for ${zoning}.`;

    const specResult = await callAI(specPrompt);
    showResult(4, specResult);

    currentDesign = {
      plotW, plotL, type, style, roof,
      beds, baths, extras, soil, zoning,
      seed, requirements,
      svgs: [
        generate3DSVG(config),
        generateFacadeSVG(config),
        generateFloorPlanSVG(config),
        generateInteriorSVG(config)
      ],
      specs: specResult,
      generatedAt: new Date().toISOString()
    };

    document.getElementById('saveBtn').style.display = 'block';
    setStatus('Generation complete ✓', true);
    setTimeout(() => setStatus('Ready to generate', false), 4000);

  } catch (error) {
    showResult(4, 'Technical specs unavailable — please check your API key.');
    showError('AI specs failed: ' + error.message + ' — But your diagrams are ready!');
    setStatus('Diagrams ready ✓', true);

    currentDesign = {
      plotW, plotL, type, style, roof,
      beds, baths, extras, soil, zoning,
      seed, requirements,
      svgs: [
        generate3DSVG(config),
        generateFacadeSVG(config),
        generateFloorPlanSVG(config),
        generateInteriorSVG(config)
      ],
      specs: '',
      generatedAt: new Date().toISOString()
    };

    document.getElementById('saveBtn').style.display = 'block';
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
    setTimeout(() => { document.getElementById('projectNameInput').style.borderColor = ''; }, 2000);
    return;
  }
  saveProject(name);
});

function saveProject(name) {
  if (!currentDesign) return;
  const session  = JSON.parse(localStorage.getItem('archgen_session'));
  const userKey  = 'archgen_projects_' + session.email.replace('@','_').replace('.','_');
  const projects = getProjects();
  projects.unshift({ id: Date.now(), name, ...currentDesign, savedAt: new Date().toISOString() });
  localStorage.setItem(userKey, JSON.stringify(projects));
  document.getElementById('saveModal').classList.remove('show');
  document.getElementById('projectNameInput').value = '';
  loadProjects();
  setStatus('Project saved! ✓', true);
  setTimeout(() => setStatus('Ready to generate', false), 3000);
}

// ========================
// LOAD & DELETE PROJECTS
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
        <div class="project-item-meta">${p.beds}BR ${p.type} · ${p.plotW}×${p.plotL}ft</div>
      </div>
      <button class="project-item-delete" onclick="deleteProject(event,${p.id})">🗑️</button>
    </div>
  `).join('');
}

function loadProject(id) {
  const project = getProjects().find(p => p.id === id);
  if (!project) return;

  document.getElementById('plotW').value    = project.plotW;
  document.getElementById('plotL').value    = project.plotL;
  document.getElementById('bedrooms').value = project.beds;
  document.getElementById('bathrooms').value = project.baths;
  document.getElementById('soil').value     = project.soil;
  document.getElementById('zoning').value   = project.zoning;
  document.getElementById('seed').value     = project.seed;
  document.getElementById('requirements').value = project.requirements || '';

  restoreToggle('buildingType', project.type);
  restoreToggle('archStyle',    project.style);
  restoreToggle('roofStyle',    project.roof);
  restoreMultiToggle('extras',  project.extras);

  const specsCard = document.getElementById('specsCard');
  if (specsCard) specsCard.classList.add('show');

  if (project.svgs) {
    project.svgs.forEach((svg, i) => showSVG(i, svg));
  }

  if (project.specs) showResult(4, project.specs);

  buildSummary(project.beds, project.baths, project.type, project.plotW, project.plotL, project.seed);
  currentDesign = project;
  document.getElementById('saveBtn').style.display = 'block';
  setStatus('Project loaded ✓', true);
  setTimeout(() => setStatus('Ready to generate', false), 3000);
  document.querySelector('.canvas').scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProject(event, id) {
  event.stopPropagation();
  const session  = JSON.parse(localStorage.getItem('archgen_session'));
  const userKey  = 'archgen_projects_' + session.email.replace('@','_').replace('.','_');
  const projects = getProjects().filter(p => p.id !== id);
  localStorage.setItem(userKey, JSON.stringify(projects));
  loadProjects();
}

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
// NIGHT MODE
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

console.log('MY ArchGen — SVG Diagrams + AI Specs Ready!');
