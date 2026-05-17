// ========================
// LANGUAGE TRANSLATIONS
// ========================

const translations = {
  en: {
    plotConfig: 'Plot Configuration', plotWidth: 'Plot Width', plotLength: 'Plot Length',
    buildingType: 'Building Type', bungalow: 'Bungalow', duplex: 'Duplex', terrace: 'Terrace',
    archStyle: 'Architectural Style', modernNigerian: 'Modern Nigerian', contemporary: 'Contemporary',
    colonial: 'Colonial', minimalist: 'Minimalist', roofStyle: 'Roof Style', hipRoof: 'Hip Roof',
    flatRoof: 'Flat Roof', gableRoof: 'Gable Roof', mansard: 'Mansard',
    roomsLayout: 'Rooms & Layout', bedrooms: 'Bedrooms', bathrooms: 'Bathrooms',
    livingRoom: 'Living Room', dining: 'Dining', kitchen: 'Kitchen',
    store: 'Store', study: 'Study', garage: 'Garage',
    siteConditions: 'Site Conditions', soilType: 'Soil Type', zoning: 'Zoning / Setback',
    consistencySeed: 'Consistency Seed', generationSeed: 'Generation Seed', randomize: 'Randomize',
    seedInfo: '🔒 Fixed seed keeps all 4 outputs showing the same building',
    specificReqs: 'Specific Requirements',
    requirementsPlaceholder: 'e.g. Master en-suite bedroom, open-plan living/dining...',
    generateBtn: 'Generate Blueprints', savedProjects: 'Saved Projects',
    noProjects: 'No saved projects yet.\nGenerate and save your first design!',
    designOutput: 'Design Output', saveProject: '💾 Save Project',
    readyToGenerate: 'Ready to generate', view3D: '3D Isometric View',
    frontFacade: 'Front Facade', floorPlan: 'Floor Plan Layout',
    interiorView: 'Interior Cutaway View', techSpecs: 'Technical Specifications & Materials',
    generatingExterior: 'Generating exterior...', renderingFacade: 'Rendering facade...',
    drawingFloorPlan: 'Drawing floor plan...', visualizingInterior: 'Visualizing interior...',
    compilingSpecs: 'Compiling specifications...', ph3D: '3D view will appear here',
    phFacade: 'Front elevation will appear here', phFloorPlan: 'Floor plan will appear here',
    phInterior: 'Dollhouse interior will appear here', phSpecs: 'Technical specs will appear here',
    chatWelcome: 'Hello! I am your ArchGen AI assistant. I can help you with building design questions, material recommendations, Nigerian building codes, and anything about your current project. How can I help you today?',
    chatPlaceholder: 'Ask about your building design...',
    chatSug1: 'What roof suits Lagos weather?',
    chatSug2: 'Best foundation for swampy soil?',
    chatSug3: 'How many rooms fit my plot?',
    chatSug4: 'Explain my floor plan',
  },
  ha: {
    plotConfig: 'Tsarin Fili', plotWidth: 'Fadin Fili', plotLength: 'Tsawon Fili',
    buildingType: 'Nau\'in Gini', bungalow: 'Bungalow', duplex: 'Duplex', terrace: 'Terrace',
    archStyle: 'Salon Gini', modernNigerian: 'Na Zamani na Najeriya', contemporary: 'Na Zamani',
    colonial: 'Colonial', minimalist: 'Mai Sauki', roofStyle: 'Salon Rufin',
    hipRoof: 'Rufi Mai Gangare', flatRoof: 'Rufi Mai Lebur', gableRoof: 'Rufi Mai Tsauni',
    mansard: 'Mansard', roomsLayout: 'Dakunan & Tsari', bedrooms: 'Dakunan Kwana',
    bathrooms: 'Gidajen Wanka', livingRoom: 'Dakin Zama', dining: 'Dakin Abinci',
    kitchen: 'Dakin Dafa', store: 'Ma\'aji', study: 'Dakin Karatu', garage: 'Garage',
    siteConditions: 'Yanayin Fili', soilType: 'Nau\'in Kasa', zoning: 'Yankin Gini',
    consistencySeed: 'Lambar Tsari', generationSeed: 'Lambar Samarwa', randomize: 'Zaɓi Bazuwar',
    seedInfo: '🔒 Lambar tsari tana kiyaye duk fitarwar guda daya',
    specificReqs: 'Bukatun Musamman', requirementsPlaceholder: 'Misali: Dakin kwana mai wanka...',
    generateBtn: 'Samar da Zane', savedProjects: 'Ayyukan da aka Adana',
    noProjects: 'Babu ayyukan da aka adana.\nSamar da zanen farko!',
    designOutput: 'Fitarwar Zane', saveProject: '💾 Adana Aikin',
    readyToGenerate: 'Shirye don samarwa', view3D: 'Kallonin 3D',
    frontFacade: 'Gaban Gini', floorPlan: 'Tsarin Bene',
    interiorView: 'Ciki na Gini', techSpecs: 'Bayanin Fasaha',
    generatingExterior: 'Ana samar da waje...', renderingFacade: 'Ana zana gaba...',
    drawingFloorPlan: 'Ana zana bene...', visualizingInterior: 'Ana nuna ciki...',
    compilingSpecs: 'Ana tattara bayanai...', ph3D: 'Kallonin 3D zai bayyana nan',
    phFacade: 'Gaban gini zai bayyana nan', phFloorPlan: 'Tsarin bene zai bayyana nan',
    phInterior: 'Cikin gini zai bayyana nan', phSpecs: 'Bayanin fasaha zai bayyana nan',
    chatWelcome: 'Sannu! Ni ne mataimakiyar ArchGen AI. Zan iya taimaka maka da tambayoyin zanen gini. Yaya zan taimake ka yau?',
    chatPlaceholder: 'Tambayi game da zanen gini...',
    chatSug1: 'Wane rufi ya dace da yanayin Lagos?',
    chatSug2: 'Mafi kyawun tushe don kasa mai ruwa?',
    chatSug3: 'Yawan dakuna da suka dace da filina?',
    chatSug4: 'Bayyana tsarin bene na',
  },
  yo: {
    plotConfig: 'Ètò Ilẹ̀', plotWidth: 'Ìgboro Ilẹ̀', plotLength: 'Gígùn Ilẹ̀',
    buildingType: 'Irú Ilé', bungalow: 'Bungalow', duplex: 'Duplex', terrace: 'Terrace',
    archStyle: 'Ìpìlẹ̀ Ilé', modernNigerian: 'Òde-Òní Nàìjíríà', contemporary: 'Òde-Òní',
    colonial: 'Colonial', minimalist: 'Ìrọ̀rùn', roofStyle: 'Irú Orí Ilé',
    hipRoof: 'Orí Ilé Tó Yíká', flatRoof: 'Orí Ilé Pẹlẹbẹ', gableRoof: 'Orí Ilé Gígùn',
    mansard: 'Mansard', roomsLayout: 'Àwọn Yàrá & Ètò', bedrooms: 'Yàrá Orun',
    bathrooms: 'Yàrá Ìwẹ̀', livingRoom: 'Yàrá Ìgbé', dining: 'Yàrá Oúnjẹ',
    kitchen: 'Yàrá Sísè', store: 'Stóò', study: 'Yàrá Kíkọ́', garage: 'Garage',
    siteConditions: 'Ipò Ilẹ̀', soilType: 'Irú Ilẹ̀', zoning: 'Ipin Ilẹ̀',
    consistencySeed: 'Nọ́mbà Ìṣọ̀kan', generationSeed: 'Nọ́mbà Ìṣẹ̀dá', randomize: 'Yan Lọ́nà',
    seedInfo: '🔒 Nọ́mbà ìṣọ̀kan mú gbogbo èsì jọ',
    specificReqs: 'Àwọn Ìbéèrè Pàtàkì', requirementsPlaceholder: 'Fún àpẹẹrẹ: Yàrá orun olóye...',
    generateBtn: 'Ṣẹ̀dá Àwòrán', savedProjects: 'Àwọn Iṣẹ́ Tí A Pamọ́',
    noProjects: 'Kò sí iṣẹ́ tí a pamọ́.\nṢẹ̀dá àwòrán àkọ́kọ́!',
    designOutput: 'Ìyọrísí Àwòrán', saveProject: '💾 Pamọ́ Iṣẹ́',
    readyToGenerate: 'Ṣetán láti ṣẹ̀dá', view3D: 'Ìwòran 3D',
    frontFacade: 'Iwájú Ilé', floorPlan: 'Ètò Ilẹ̀ Ilé',
    interiorView: 'Inú Ilé', techSpecs: 'Àlàyé Ìmọ̀-ẹ̀rọ',
    generatingExterior: 'Ń ṣẹ̀dá ìta...', renderingFacade: 'Ń ṣe iwájú...',
    drawingFloorPlan: 'Ń ya ètò...', visualizingInterior: 'Ń ṣe inú...',
    compilingSpecs: 'Ń kojọ àlàyé...', ph3D: 'Ìwòran 3D yóò farahàn níbí',
    phFacade: 'Iwájú ilé yóò farahàn níbí', phFloorPlan: 'Ètò ilé yóò farahàn níbí',
    phInterior: 'Inú ilé yóò farahàn níbí', phSpecs: 'Àlàyé ìmọ̀-ẹ̀rọ yóò farahàn níbí',
    chatWelcome: 'Ẹ káàbọ̀! Èmi ni olùrànlọ́wọ́ ArchGen AI. Mo lè ràn ọ́ lọ́wọ́ pẹ̀lú àwọn ìbéèrè ìpìlẹ̀ ilé. Báwo ni mo ṣe lè ràn ọ́ lọ́wọ́?',
    chatPlaceholder: 'Béèrè nípa ìpìlẹ̀ ilé rẹ...',
    chatSug1: 'Orí ilé wo ni o dára fún Lagos?',
    chatSug2: 'Ìpìlẹ̀ tó dára fún ilẹ̀ olomi?',
    chatSug3: 'Àwọn yàrá mélòó ni ó bá ilẹ̀ mi mu?',
    chatSug4: 'Ṣàlàyé ètò ilé mi',
  },
  ig: {
    plotConfig: 'Nhazi Ala', plotWidth: 'Obosara Ala', plotLength: 'Ogologo Ala',
    buildingType: 'Udi Ulo', bungalow: 'Bungalow', duplex: 'Duplex', terrace: 'Terrace',
    archStyle: 'Ụdị Ihe Owuwu', modernNigerian: 'Oge Ohuru Naịjirịa', contemporary: 'Nke Oge Ohuru',
    colonial: 'Colonial', minimalist: 'Nke Dị Mfe', roofStyle: 'Ụdị Elu Ulo',
    hipRoof: 'Elu Ulo Dị Gburugburu', flatRoof: 'Elu Ulo Dị Larịị', gableRoof: 'Elu Ulo Dị Elu',
    mansard: 'Mansard', roomsLayout: 'Ọnụ Ụlọ & Nhazi', bedrooms: 'Ụlọ Ụra',
    bathrooms: 'Ụlọ Mmiri', livingRoom: 'Ụlọ Obibi', dining: 'Ụlọ Oriri',
    kitchen: 'Ụlọ Esi', store: 'Ụlọ Ihe', study: 'Ụlọ Mmuta', garage: 'Garage',
    siteConditions: 'Ọnọdụ Ala', soilType: 'Ụdị Ala', zoning: 'Ngalaba Ala',
    consistencySeed: 'Nọmba Nhazi', generationSeed: 'Nọmba Mmepụta', randomize: 'Họrọ Ohere',
    seedInfo: '🔒 Nọmba nhazi na-echekwa mmepụta niile',
    specificReqs: 'Ihe A Chọrọ Kpọmkwem', requirementsPlaceholder: 'Ihe atụ: Ụlọ ụra nke ihe ọ bụla...',
    generateBtn: 'Mepụta Ihe Owuwu', savedProjects: 'Ọrụ Edekọtara',
    noProjects: 'Enweghị ọrụ edekọtara.\nMepụta ihe mbụ!',
    designOutput: 'Mmepụta Ihe Owuwu', saveProject: '💾 Chekwaa Ọrụ',
    readyToGenerate: 'Dị njikere imepụta', view3D: 'Ọhụụ 3D',
    frontFacade: 'Ihu Ulo', floorPlan: 'Atụmatụ Ala Ulo',
    interiorView: 'ime Ulo', techSpecs: 'Nkọwa Teknụzụ',
    generatingExterior: 'Na-emepụta mpụga...', renderingFacade: 'Na-ese ihu...',
    drawingFloorPlan: 'Na-ese atụmatụ...', visualizingInterior: 'Na-eme ime...',
    compilingSpecs: 'Na-anakọta nkọwa...', ph3D: 'Ọhụụ 3D ga-apụta ebe a',
    phFacade: 'Ihu ulo ga-apụta ebe a', phFloorPlan: 'Atụmatụ alo ga-apụta ebe a',
    phInterior: 'ime ulo ga-apụta ebe a', phSpecs: 'Nkọwa teknụzụ ga-apụta ebe a',
    chatWelcome: 'Nnọọ! Abụ m onye enyemaka ArchGen AI. Enwere m ike inyere gị aka na ajụjụ ihe owuwu ụlọ. Olee otú m ga-si enyere gị aka taa?',
    chatPlaceholder: 'Jụọ maka ihe owuwu ụlọ gị...',
    chatSug1: 'Elu ulo ole dị mma maka Lagos?',
    chatSug2: 'Ọdịda ala kacha mma maka ala mmiri?',
    chatSug3: 'Ụlọ ole ga-adabere n\'ala m?',
    chatSug4: 'Kọwaa atụmatụ ala m',
  },
  fr: {
    plotConfig: 'Configuration du Terrain', plotWidth: 'Largeur du Terrain',
    plotLength: 'Longueur du Terrain', buildingType: 'Type de Bâtiment',
    bungalow: 'Bungalow', duplex: 'Duplex', terrace: 'Terrasse',
    archStyle: 'Style Architectural', modernNigerian: 'Nigérian Moderne',
    contemporary: 'Contemporain', colonial: 'Colonial', minimalist: 'Minimaliste',
    roofStyle: 'Style de Toit', hipRoof: 'Toit en Croupe', flatRoof: 'Toit Plat',
    gableRoof: 'Toit à Pignon', mansard: 'Mansard', roomsLayout: 'Pièces & Disposition',
    bedrooms: 'Chambres', bathrooms: 'Salles de Bain', livingRoom: 'Salon',
    dining: 'Salle à Manger', kitchen: 'Cuisine', store: 'Débarras', study: 'Bureau',
    garage: 'Garage', siteConditions: 'Conditions du Site', soilType: 'Type de Sol',
    zoning: 'Zonage / Recul', consistencySeed: 'Graine de Cohérence',
    generationSeed: 'Graine de Génération', randomize: 'Aléatoire',
    seedInfo: '🔒 La graine fixe garde les 4 sorties identiques',
    specificReqs: 'Exigences Spécifiques', requirementsPlaceholder: 'Ex: Suite parentale...',
    generateBtn: 'Générer les Plans', savedProjects: 'Projets Sauvegardés',
    noProjects: 'Aucun projet sauvegardé.\nGénérez votre premier design!',
    designOutput: 'Résultat du Design', saveProject: '💾 Sauvegarder',
    readyToGenerate: 'Prêt à générer', view3D: 'Vue Isométrique 3D',
    frontFacade: 'Façade Avant', floorPlan: 'Plan de Masse',
    interiorView: 'Vue Intérieure', techSpecs: 'Spécifications Techniques',
    generatingExterior: 'Génération extérieure...', renderingFacade: 'Rendu de la façade...',
    drawingFloorPlan: 'Dessin du plan...', visualizingInterior: 'Visualisation intérieure...',
    compilingSpecs: 'Compilation des specs...', ph3D: 'La vue 3D apparaîtra ici',
    phFacade: 'La façade apparaîtra ici', phFloorPlan: 'Le plan apparaîtra ici',
    phInterior: 'L\'intérieur apparaîtra ici', phSpecs: 'Les specs apparaîtront ici',
    chatWelcome: 'Bonjour! Je suis votre assistant ArchGen AI. Je peux vous aider avec vos questions de conception architecturale. Comment puis-je vous aider aujourd\'hui?',
    chatPlaceholder: 'Posez une question sur votre bâtiment...',
    chatSug1: 'Quel toit pour le climat de Lagos?',
    chatSug2: 'Meilleure fondation pour sol marécageux?',
    chatSug3: 'Combien de pièces sur mon terrain?',
    chatSug4: 'Expliquez mon plan de masse',
  },
  ar: {
    plotConfig: 'تكوين القطعة', plotWidth: 'عرض القطعة', plotLength: 'طول القطعة',
    buildingType: 'نوع المبنى', bungalow: 'بنغالو', duplex: 'دوبلكس', terrace: 'تراس',
    archStyle: 'الطراز المعماري', modernNigerian: 'نيجيري حديث', contemporary: 'معاصر',
    colonial: 'استعماري', minimalist: 'بسيط', roofStyle: 'نوع السقف',
    hipRoof: 'سقف هرمي', flatRoof: 'سقف مسطح', gableRoof: 'سقف جملوني', mansard: 'مانسارد',
    roomsLayout: 'الغرف والتخطيط', bedrooms: 'غرف النوم', bathrooms: 'الحمامات',
    livingRoom: 'غرفة المعيشة', dining: 'غرفة الطعام', kitchen: 'المطبخ',
    store: 'المخزن', study: 'مكتب الدراسة', garage: 'الجراج',
    siteConditions: 'أحوال الموقع', soilType: 'نوع التربة', zoning: 'منطقة البناء',
    consistencySeed: 'بذرة الاتساق', generationSeed: 'بذرة التوليد', randomize: 'عشوائي',
    seedInfo: '🔒 البذرة الثابتة تحافظ على نفس المبنى',
    specificReqs: 'متطلبات خاصة', requirementsPlaceholder: 'مثال: غرفة رئيسية مع حمام...',
    generateBtn: 'توليد المخططات', savedProjects: 'المشاريع المحفوظة',
    noProjects: 'لا توجد مشاريع محفوظة.\nأنشئ تصميمك الأول!',
    designOutput: 'ناتج التصميم', saveProject: '💾 حفظ المشروع',
    readyToGenerate: 'جاهز للتوليد', view3D: 'عرض ثلاثي الأبعاد',
    frontFacade: 'الواجهة الأمامية', floorPlan: 'مخطط الطابق',
    interiorView: 'المنظر الداخلي', techSpecs: 'المواصفات التقنية',
    generatingExterior: 'جاري إنشاء الخارج...', renderingFacade: 'جاري رسم الواجهة...',
    drawingFloorPlan: 'جاري رسم المخطط...', visualizingInterior: 'جاري تصور الداخل...',
    compilingSpecs: 'جاري تجميع المواصفات...', ph3D: 'سيظهر العرض ثلاثي الأبعاد هنا',
    phFacade: 'ستظهر الواجهة هنا', phFloorPlan: 'سيظهر المخطط هنا',
    phInterior: 'سيظهر الداخل هنا', phSpecs: 'ستظهر المواصفات هنا',
    chatWelcome: 'مرحباً! أنا مساعد ArchGen الذكي. يمكنني مساعدتك في أسئلة التصميم المعماري. كيف يمكنني مساعدتك اليوم؟',
    chatPlaceholder: 'اسأل عن تصميم مبناك...',
    chatSug1: 'ما السقف المناسب لمناخ لاغوس؟',
    chatSug2: 'أفضل أساس للتربة المستنقعية؟',
    chatSug3: 'كم غرفة تتسع قطعتي؟',
    chatSug4: 'اشرح لي مخطط الطابق',
  }
};

// ========================
// LANGUAGE
// ========================

let currentLang = localStorage.getItem('archgen-lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('archgen-lang', lang);
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    const key = el.getAttribute('data-lang-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('lang-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  // Update chat welcome message
  const welcomeMsg = document.getElementById('welcomeMsg');
  if (welcomeMsg && t.chatWelcome) welcomeMsg.textContent = t.chatWelcome;

  // Update chat placeholder
  const chatInput = document.getElementById('chatInput');
  if (chatInput && t.chatPlaceholder) chatInput.placeholder = t.chatPlaceholder;

  // Update chat suggestions
  const sugs = document.querySelectorAll('.chat-suggestion');
  const sugKeys = ['chatSug1','chatSug2','chatSug3','chatSug4'];
  sugs.forEach((s, i) => { if (t[sugKeys[i]]) s.textContent = t[sugKeys[i]]; });

  // Update voice language
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

// ========================
// PLAN CHECKING
// ========================

function getUserPlan() {
  const session = localStorage.getItem('archgen_session');
  if (!session) return 'free';
  try { return JSON.parse(session).plan || 'free'; } catch(e) { return 'free'; }
}

function isPro() { return getUserPlan() === 'pro' || getUserPlan() === 'studio'; }

// ========================
// GENERATION COUNTER
// ========================

const FREE_DAILY_LIMIT = 3;

function getTodayKey() {
  const session = JSON.parse(localStorage.getItem('archgen_session'));
  const date    = new Date().toISOString().split('T')[0];
  return 'archgen_gens_' + session.email.replace('@','_').replace('.','_') + '_' + date;
}

function getGenerationCount() {
  return parseInt(localStorage.getItem(getTodayKey()) || '0');
}

function incrementGenerationCount() {
  const key   = getTodayKey();
  const count = getGenerationCount() + 1;
  localStorage.setItem(key, count.toString());
  return count;
}

function checkGenerationLimit() {
  if (isPro()) return true;
  if (getGenerationCount() >= FREE_DAILY_LIMIT) { showUpgradeModal('generation'); return false; }
  return true;
}

function updateGenerationCounter() {
  const counter = document.getElementById('genCounter');
  if (!counter) return;
  if (isPro()) {
    counter.textContent = '∞ Unlimited generations';
    counter.style.color = 'var(--accent)';
  } else {
    const remaining = Math.max(0, FREE_DAILY_LIMIT - getGenerationCount());
    counter.textContent = remaining + ' free generations left today';
    counter.style.color = remaining === 0 ? '#F09595' : remaining === 1 ? '#E2A057' : 'var(--text-muted)';
  }
}

// ========================
// UPGRADE MODAL
// ========================

function showUpgradeModal(reason) {
  const modal    = document.getElementById('upgradeModal');
  const title    = document.getElementById('upgradeTitle');
  const subtitle = document.getElementById('upgradeSubtitle');
  const msgs = {
    generation: ['🚀 Daily Limit Reached!', 'You have used all 3 free generations for today. Upgrade to Pro for unlimited designs every day!'],
    save:       ['💾 Pro Feature', 'Saving projects is a Pro feature. Upgrade to save unlimited designs!'],
    specs:      ['📋 Pro Feature', 'Technical specifications are a Pro feature. Upgrade to get full AI-generated specs!'],
    language:   ['🌍 Pro Feature', 'Language switching is a Pro feature. Upgrade to access all 6 languages!'],
    settings:   ['⚙️ Pro Feature', 'Advanced settings are a Pro feature. Upgrade to access full settings!'],
    chat:       ['💬 Pro Feature', 'The AI Chat Assistant is a Pro feature. Upgrade to get instant design advice in any language!'],
  };
  const msg = msgs[reason] || msgs.generation;
  title.textContent    = msg[0];
  subtitle.textContent = msg[1];
  modal.classList.add('show');
}

function closeUpgradeModal() {
  document.getElementById('upgradeModal').classList.remove('show');
}

// ========================
// AUTH PROTECTION
// ========================

function checkAuth() {
  const session = localStorage.getItem('archgen_session');
  if (!session) { window.location.href = 'auth.html'; return; }
  const user = JSON.parse(session);
  if (!user.loggedIn) { window.location.href = 'auth.html'; return; }

  document.getElementById('authCheck').style.display  = 'none';
  document.getElementById('userName').textContent      = user.name;
  document.getElementById('userEmail').textContent     = user.email;
  document.getElementById('userAvatar').textContent    = user.avatar || user.name.slice(0,2).toUpperCase();
  document.getElementById('settingsAvatar').textContent = user.avatar || user.name.slice(0,2).toUpperCase();
  document.getElementById('settingsName').textContent   = user.name;
  document.getElementById('settingsEmail').textContent  = user.email;
  document.getElementById('newName').value              = user.name;
  document.getElementById('newEmail').value             = user.email;

  const planBadge = document.getElementById('planBadge');
  if (planBadge) {
    planBadge.textContent = isPro() ? '⭐ Pro Plan' : '🆓 Free Plan';
    planBadge.style.color = isPro() ? '#C9A84C' : '#8A8880';
  }

  updateGenerationCounter();
  loadProjects();
  applyLanguage(currentLang);
  loadAccentColor();
  loadTheme();
  initChat();
}

checkAuth();

// ========================
// SETTINGS
// ========================

function openSettings() {
  if (!isPro()) { showUpgradeModal('settings'); return; }
  document.getElementById('settingsPanel').classList.add('open');
  document.getElementById('settingsOverlay').classList.add('show');
}

function closeSettings() {
  document.getElementById('settingsPanel').classList.remove('open');
  document.getElementById('settingsOverlay').classList.remove('show');
}

function saveAccount() {
  const name     = document.getElementById('newName').value.trim();
  const email    = document.getElementById('newEmail').value.trim();
  const password = document.getElementById('newPassword').value;
  const confirm  = document.getElementById('confirmPassword').value;
  const msg      = document.getElementById('accountMsg');

  if (!name || !email) { msg.textContent = 'Name and email are required'; msg.className = 'settings-msg error'; return; }
  if (password && password !== confirm) { msg.textContent = 'Passwords do not match'; msg.className = 'settings-msg error'; return; }
  if (password && password.length < 6) { msg.textContent = 'Password must be at least 6 characters'; msg.className = 'settings-msg error'; return; }

  const session = JSON.parse(localStorage.getItem('archgen_session'));
  session.name = name; session.email = email; session.avatar = name.slice(0,2).toUpperCase();
  localStorage.setItem('archgen_session', JSON.stringify(session));

  const users = JSON.parse(localStorage.getItem('archgen_users') || '[]');
  const idx   = users.findIndex(u => u.email === email);
  if (idx !== -1) { users[idx].name = name; users[idx].email = email; if (password) users[idx].password = password; localStorage.setItem('archgen_users', JSON.stringify(users)); }

  document.getElementById('userName').textContent       = name;
  document.getElementById('userEmail').textContent      = email;
  document.getElementById('userAvatar').textContent     = name.slice(0,2).toUpperCase();
  document.getElementById('settingsAvatar').textContent = name.slice(0,2).toUpperCase();
  document.getElementById('settingsName').textContent   = name;
  document.getElementById('settingsEmail').textContent  = email;
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';

  msg.textContent = '✓ Account updated successfully!';
  msg.className   = 'settings-msg success';
  setTimeout(() => { msg.textContent = ''; }, 3000);
}

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light'); localStorage.setItem('archgen-theme','light');
    document.getElementById('themeLight').classList.add('active');
    document.getElementById('themeDark').classList.remove('active');
  } else {
    document.body.classList.remove('light'); localStorage.setItem('archgen-theme','dark');
    document.getElementById('themeDark').classList.add('active');
    document.getElementById('themeLight').classList.remove('active');
  }
}

function loadTheme() {
  setTheme(localStorage.getItem('archgen-theme') === 'light' ? 'light' : 'dark');
}

function setAccent(color, dark) {
  document.documentElement.style.setProperty('--accent', color);
  document.documentElement.style.setProperty('--accent-dark', dark);
  document.documentElement.style.setProperty('--gold', color);
  document.documentElement.style.setProperty('--gold-dark', dark);
  localStorage.setItem('archgen-accent', color);
  localStorage.setItem('archgen-accent-dark', dark);
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
}

function loadAccentColor() {
  const color = localStorage.getItem('archgen-accent');
  const dark  = localStorage.getItem('archgen-accent-dark');
  if (color && dark) {
    document.documentElement.style.setProperty('--accent', color);
    document.documentElement.style.setProperty('--accent-dark', dark);
    document.documentElement.style.setProperty('--gold', color);
    document.documentElement.style.setProperty('--gold-dark', dark);
  }
}

function setLanguage(lang) {
  if (!isPro() && lang !== 'en') { showUpgradeModal('language'); return; }
  applyLanguage(lang);
}

function deleteAccount() {
  if (!window.confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
  const session = JSON.parse(localStorage.getItem('archgen_session'));
  let users = JSON.parse(localStorage.getItem('archgen_users') || '[]');
  users = users.filter(u => u.email !== session.email);
  localStorage.setItem('archgen_users', JSON.stringify(users));
  localStorage.removeItem('archgen_session');
  window.location.href = 'auth.html';
}

function signOutFull() {
  localStorage.removeItem('archgen_session');
  window.location.href = 'auth.html';
}

// ========================
// TOGGLE BUTTONS
// ========================

document.querySelectorAll('.toggle-group').forEach(group => {
  const isMulti = group.classList.contains('multi');
  group.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      if (isMulti) { btn.classList.toggle('active'); }
      else { group.querySelectorAll('.toggle').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
    });
  });
});

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
    result.textContent      = text;
    result.style.display    = 'block';
    result.style.width      = '100%';
    result.style.textAlign  = currentLang === 'ar' ? 'right' : 'left';
    result.style.fontSize   = '12px';
    result.style.lineHeight = '1.8';
    result.style.whiteSpace = 'pre-wrap';
    result.style.wordWrap   = 'break-word';
    result.style.color      = 'var(--text-main)';
    result.style.padding    = '16px';
  }
}

function showSVG(index, svgCode) {
  const loader = document.getElementById('load' + index);
  const ph     = document.getElementById('ph'   + index);
  const svg    = document.getElementById('svg'  + index);
  if (loader) loader.classList.remove('show');
  if (ph)     ph.style.display = 'none';
  if (svg)    { svg.innerHTML = svgCode; svg.style.display = 'block'; svg.style.width = '100%'; }
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
    <div class="summary-item"><div class="summary-val">${beds}BR/${baths}BA</div><div class="summary-key">Rooms</div></div>
    <div class="summary-item"><div class="summary-val">${seed}</div><div class="summary-key">Seed</div></div>
    <div class="summary-item"><div class="summary-val">${isPro() ? '∞' : Math.max(0, FREE_DAILY_LIMIT - getGenerationCount())}</div><div class="summary-key">${isPro() ? 'Pro' : 'Left Today'}</div></div>
  `;
  card.classList.add('show');
}

// ========================
// AI API CALL
// ========================

async function callAI(prompt) {
  const GEMINI_KEY = 'AIzaSyB5HCs_uuycGTg_yhDhVfsb-s6ighpBIYk';
  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 1000, temperature: 0.7 }
      })
    }
  );
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  if (!data.candidates?.[0]?.content?.parts?.[0]) throw new Error('No response from AI');
  return data.candidates[0].content.parts[0].text;
}

// ========================
// SVG GENERATORS
// ========================

function addWatermark(svgCode) {
  if (isPro()) return svgCode;
  return svgCode.replace('</svg>',
    `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
      font-family="monospace" font-size="28" fill="rgba(201,168,76,0.15)"
      transform="rotate(-30, 260, 160)" font-weight="bold">MY ArchGen FREE</text></svg>`);
}

function generate3DSVG(config) {
  const { beds, type, roof, style } = config;
  const wallColor = style==='Modern Nigerian'?'#F5DEB3':style==='Contemporary'?'#E8E8E8':style==='Colonial'?'#FFF8DC':'#F0F0F0';
  const roofColor = '#8B4513'; const trimColor = '#8B6914';
  const floors = type==='Duplex'?2:1; const floorH=80; const buildingW=200; const buildingH=floors*floorH;
  const roofH = roof==='Flat Roof'?10:50; const cx=260; const cy=80; const depth=60;
  const windows = [];
  const winCount = Math.min(parseInt(beds)||3, 5);
  for (let i=0;i<winCount;i++) {
    const wx = cx-buildingW/2+30+i*((buildingW-40)/Math.max(winCount-1,1));
    windows.push(`<rect x="${wx-12}" y="${cy+buildingH-55}" width="24" height="28" fill="#87CEEB" stroke="${trimColor}" stroke-width="2" rx="2"/>
      <line x1="${wx}" y1="${cy+buildingH-55}" x2="${wx}" y2="${cy+buildingH-27}" stroke="${trimColor}" stroke-width="1"/>
      <line x1="${wx-12}" y1="${cy+buildingH-41}" x2="${wx+12}" y2="${cy+buildingH-41}" stroke="${trimColor}" stroke-width="1"/>`);
    if (floors===2) windows.push(`<rect x="${wx-12}" y="${cy+buildingH-120}" width="24" height="28" fill="#87CEEB" stroke="${trimColor}" stroke-width="2" rx="2"/>`);
  }
  const roofPath = roof==='Flat Roof'
    ?`<rect x="${cx-buildingW/2-5}" y="${cy-roofH}" width="${buildingW+10}" height="${roofH}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`
    :`<polygon points="${cx},${cy-roofH} ${cx-buildingW/2-5},${cy} ${cx+buildingW/2+5},${cy}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`;
  return addWatermark(`<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
    <rect width="520" height="320" fill="#E8F4FF" rx="6"/>
    <rect y="240" width="520" height="80" fill="#90EE90" opacity="0.3"/>
    <ellipse cx="${cx+depth/2}" cy="245" rx="${buildingW/2+20}" ry="10" fill="rgba(0,0,0,0.15)"/>
    <polygon points="${cx+buildingW/2},${cy} ${cx+buildingW/2+depth},${cy+depth/2} ${cx+buildingW/2+depth},${cy+buildingH+depth/2} ${cx+buildingW/2},${cy+buildingH}" fill="#D4A853" stroke="#8B6914" stroke-width="1.5"/>
    <rect x="${cx-buildingW/2}" y="${cy}" width="${buildingW}" height="${buildingH}" fill="${wallColor}" stroke="#8B6914" stroke-width="2"/>
    ${floors===2?`<line x1="${cx-buildingW/2}" y1="${cy+floorH}" x2="${cx+buildingW/2}" y2="${cy+floorH}" stroke="${trimColor}" stroke-width="1.5" stroke-dasharray="4,3"/>`:''}
    ${windows.join('')}
    <rect x="${cx-16}" y="${cy+buildingH-45}" width="32" height="45" fill="#8B4513" stroke="${trimColor}" stroke-width="2" rx="2"/>
    <circle cx="${cx+12}" cy="${cy+buildingH-23}" r="2.5" fill="#FFD700"/>
    ${roofPath}
    <ellipse cx="${cx-buildingW/2-50}" cy="210" rx="18" ry="22" fill="#228B22" opacity="0.8"/>
    <rect x="${cx-buildingW/2-53}" y="225" width="6" height="18" fill="#8B4513"/>
    <rect x="10" y="10" width="130" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
    <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">3D ISOMETRIC VIEW</text>
  </svg>`);
}

function generateFacadeSVG(config) {
  const { beds, type, roof, style } = config;
  const wallColor = style==='Modern Nigerian'?'#F5DEB3':style==='Contemporary'?'#E8E8E8':'#FFF8DC';
  const roofColor='#8B4513'; const trimColor='#8B6914';
  const floors=type==='Duplex'?2:1; const floorH=90; const buildingW=320; const buildingH=floors*floorH;
  const startX=100; const startY=240-buildingH; const roofH=roof==='Flat Roof'?12:55;
  const winCount=Math.min(parseInt(beds)||3,5); const windows=[];
  const spacing=(buildingW-60)/Math.max(winCount,1);
  for(let f=0;f<floors;f++) {
    for(let i=0;i<winCount;i++) {
      if(f===0&&i===Math.floor(winCount/2)) continue;
      const wx=startX+30+i*spacing+spacing/2-15; const wy=startY+f*floorH+20;
      windows.push(`<rect x="${wx}" y="${wy}" width="30" height="36" fill="#87CEEB" stroke="${trimColor}" stroke-width="2" rx="2"/>
        <line x1="${wx+15}" y1="${wy}" x2="${wx+15}" y2="${wy+36}" stroke="${trimColor}" stroke-width="1"/>
        <line x1="${wx}" y1="${wy+18}" x2="${wx+30}" y2="${wy+18}" stroke="${trimColor}" stroke-width="1"/>`);
    }
  }
  const roofSVG=roof==='Flat Roof'
    ?`<rect x="${startX-10}" y="${startY-roofH}" width="${buildingW+20}" height="${roofH}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`
    :`<polygon points="${startX-10},${startY} ${startX+buildingW/2},${startY-roofH} ${startX+buildingW+10},${startY}" fill="${roofColor}" stroke="#5D2E0C" stroke-width="1.5"/>`;
  return addWatermark(`<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
    <rect width="520" height="300" fill="#E8F4FF" rx="6"/>
    <rect y="240" width="520" height="60" fill="#90EE90" opacity="0.3"/>
    <rect x="${startX}" y="${startY}" width="${buildingW}" height="${buildingH}" fill="${wallColor}" stroke="${trimColor}" stroke-width="2.5"/>
    ${floors===2?`<line x1="${startX}" y1="${startY+floorH}" x2="${startX+buildingW}" y2="${startY+floorH}" stroke="${trimColor}" stroke-width="2"/>`:''}
    ${windows.join('')}
    <rect x="${startX+buildingW/2-22}" y="${startY+buildingH-60}" width="44" height="60" fill="#8B4513" stroke="${trimColor}" stroke-width="2" rx="3"/>
    <circle cx="${startX+buildingW/2+18}" cy="${startY+buildingH-30}" r="3" fill="#FFD700"/>
    ${roofSVG}
    <rect x="10" y="10" width="130" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
    <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">FRONT ELEVATION</text>
  </svg>`);
}

function generateFloorPlanSVG(config) {
  const { beds, baths, extras, plotW, plotL } = config;
  const numBeds=parseInt(beds)||3; const numBaths=parseInt(baths)||2;
  const hasLiving=extras.includes('Living Room'); const hasDining=extras.includes('Dining'); const hasKitchen=extras.includes('Kitchen');
  const sx=60; const sy=30; const wallC='#333';
  const roomC={bedroom:'#FFF3E0',living:'#E8F5E9',dining:'#E3F2FD',kitchen:'#FCE4EC',bathroom:'#E8EAF6',corridor:'#FAFAFA'};
  const rooms=[];
  if(hasLiving)  rooms.push({x:sx,y:sy,w:150,h:100,color:roomC.living,label:'LIVING ROOM',sub:'5.0x4.0m'});
  if(hasDining)  rooms.push({x:sx+150,y:sy,w:110,h:80,color:roomC.dining,label:'DINING',sub:'4.0x3.5m'});
  if(hasKitchen) rooms.push({x:sx+260,y:sy,w:100,h:80,color:roomC.kitchen,label:'KITCHEN',sub:'3.5x3.0m'});
  rooms.push({x:sx,y:sy+100,w:360,h:25,color:roomC.corridor,label:'CORRIDOR',sub:''});
  const bedW=numBeds<=2?130:numBeds<=3?110:numBeds<=4?90:75;
  for(let i=0;i<Math.min(numBeds,5);i++) rooms.push({x:sx+i*bedW,y:sy+125,w:bedW,h:i===0?115:100,color:roomC.bedroom,label:i===0?'MASTER BED':'BED '+(i+1),sub:i===0?'4.5x4.0m':'3.5x3.5m'});
  for(let i=0;i<Math.min(numBaths,3);i++) rooms.push({x:sx+Math.min(numBeds,5)*bedW,y:sy+125+i*58,w:70,h:55,color:roomC.bathroom,label:i===0?'BATH 1':'BATH '+(i+1),sub:'2.5x2.0m'});
  const roomSVG=rooms.map(r=>`
    <rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.color}" stroke="${wallC}" stroke-width="3"/>
    <text x="${r.x+r.w/2}" y="${r.y+r.h/2-4}" text-anchor="middle" font-family="monospace" font-size="9" font-weight="bold" fill="#333">${r.label}</text>
    <text x="${r.x+r.w/2}" y="${r.y+r.h/2+10}" text-anchor="middle" font-family="monospace" font-size="8" fill="#666">${r.sub}</text>
  `).join('');
  return addWatermark(`<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
    <rect width="520" height="320" fill="#F8F6F0" rx="6"/>
    <rect x="${sx-6}" y="${sy-6}" width="372" height="312" fill="none" stroke="${wallC}" stroke-width="6"/>
    ${roomSVG}
    <circle cx="490" cy="30" r="14" fill="rgba(0,0,0,0.1)" stroke="#C9A84C" stroke-width="1"/>
    <text x="490" y="25" text-anchor="middle" font-family="monospace" font-size="9" font-weight="bold" fill="#C9A84C">N</text>
    <rect x="10" y="10" width="110" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
    <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">FLOOR PLAN</text>
    <text x="10" y="310" font-family="monospace" font-size="9" fill="#666">PLOT: ${plotW}ft × ${plotL}ft</text>
  </svg>`);
}

function generateInteriorSVG(config) {
  const { style } = config;
  const wallC = style==='Modern Nigerian'?'#F5DEB3':style==='Contemporary'?'#E8E8E8':'#FFF8DC';
  return addWatermark(`<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:6px;">
    <rect width="520" height="300" fill="${wallC}" opacity="0.3" rx="6"/>
    <polygon points="0,240 520,240 480,300 40,300" fill="#C19A6B" opacity="0.6"/>
    <rect x="140" y="60" width="8" height="180" fill="#8B6914" opacity="0.6"/>
    <rect x="372" y="60" width="8" height="180" fill="#8B6914" opacity="0.6"/>
    <rect x="175" y="175" width="120" height="45" fill="#8B4513" rx="5"/>
    <rect x="175" y="165" width="120" height="18" fill="#A0522D" rx="3"/>
    <rect x="185" y="90" width="100" height="32" fill="#1a1a1a" rx="3"/>
    <rect x="188" y="93" width="94" height="26" fill="#87CEEB" opacity="0.4" rx="2"/>
    <rect x="30" y="145" width="95" height="85" fill="#E8C87A" rx="4"/>
    <rect x="30" y="145" width="95" height="22" fill="#D4A853" rx="4"/>
    <rect x="385" y="100" width="110" height="18" fill="#E0E0E0" rx="2"/>
    <rect x="385" y="118" width="110" height="60" fill="#BDBDBD"/>
    <rect x="30" y="63" width="80" height="18" fill="rgba(0,0,0,0.4)" rx="3"/>
    <text x="70" y="75" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">BEDROOM</text>
    <rect x="170" y="63" width="80" height="18" fill="rgba(0,0,0,0.4)" rx="3"/>
    <text x="210" y="75" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">LIVING ROOM</text>
    <rect x="390" y="63" width="70" height="18" fill="rgba(0,0,0,0.4)" rx="3"/>
    <text x="425" y="75" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C">KITCHEN</text>
    <rect x="10" y="10" width="150" height="22" fill="rgba(0,0,0,0.5)" rx="4"/>
    <text x="18" y="25" font-family="monospace" font-size="11" fill="#C9A84C">INTERIOR CUTAWAY</text>
  </svg>`);
}

// ========================
// CURRENT DESIGN STATE
// ========================

let currentDesign = null;

// ========================
// GENERATE FUNCTION
// ========================

async function generate() {
  if (!checkGenerationLimit()) return;

  const plotW        = document.getElementById('plotW').value;
  const plotL        = document.getElementById('plotL').value;
  const type         = getSelected('buildingType')[0] || 'Bungalow';
  const style        = getSelected('archStyle')[0]    || 'Modern Nigerian';
  const roof         = getSelected('roofStyle')[0]    || 'Hip Roof';
  const beds         = document.getElementById('bedrooms').value || '3';
  const baths        = document.getElementById('bathrooms').value || '2';
  const extrasArr    = getSelected('extras');
  const extras       = extrasArr.join(', ') || 'Living Room, Kitchen';
  const soil         = document.getElementById('soil').value;
  const zoning       = document.getElementById('zoning').value;
  const seed         = document.getElementById('seed').value;
  const requirements = document.getElementById('requirements').value.trim();
  const config       = { plotW, plotL, type, style, roof, beds, baths, extras, soil, zoning, seed };
  const baseDesign   = `${beds}-bedroom ${style} ${type} on ${plotW}ft x ${plotL}ft plot. Roof: ${roof}. Rooms: ${extras}, ${baths} bathrooms. Soil: ${soil}. Zoning: ${zoning}. Seed: ${seed}. ${requirements?'Extra: '+requirements:''}`;

  clearError();
  document.getElementById('generateBtn').disabled  = true;
  document.getElementById('saveBtn').style.display = 'none';
  const specsCard = document.getElementById('specsCard');
  if (specsCard) specsCard.classList.add('show');
  setStatus('Generating your design...', true);
  [0,1,2,3,4].forEach(i => showLoading(i));
  buildSummary(beds, baths, type, plotW, plotL, seed);
  incrementGenerationCount();
  updateGenerationCounter();

  setTimeout(() => showSVG(0, generate3DSVG(config)),       200);
  setTimeout(() => showSVG(1, generateFacadeSVG(config)),    400);
  setTimeout(() => showSVG(2, generateFloorPlanSVG(config)), 600);
  setTimeout(() => showSVG(3, generateInteriorSVG(config)),  800);

  if (isPro()) {
    try {
      const specResult = await callAI(`You are MY ArchGen, a professional architectural AI for Nigerian buildings. Generate technical specifications for: ${baseDesign}. Include foundation type for ${soil} soil, structural system, wall construction, roofing material, floor area in sq ft, columns, plumbing, electrical, Nigerian climate materials, and 3 zoning notes for ${zoning}. Write in clear prose, no bullet points.`);
      showResult(4, specResult);
    } catch(err) {
      showResult(4, 'Technical specs unavailable. Please check your API key.');
    }
  } else {
    document.getElementById('load4').classList.remove('show');
    document.getElementById('ph4').style.display = 'none';
    const res4 = document.getElementById('res4');
    res4.innerHTML = `<div style="text-align:center;padding:30px 20px;">
      <div style="font-size:32px;margin-bottom:12px;">🔒</div>
      <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:14px;color:var(--text-main);margin-bottom:8px;">Pro Feature</div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px;line-height:1.6;">Technical specifications are available on the Pro plan.</div>
      <button onclick="showUpgradeModal('specs')" style="background:linear-gradient(135deg,#B8860B,#C9A84C);border:none;color:#0F0E0C;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;padding:10px 20px;border-radius:6px;cursor:pointer;">⚡ Upgrade to Pro</button>
    </div>`;
    res4.style.display = 'block';
  }

  currentDesign = { plotW, plotL, type, style, roof, beds, baths, extras, soil, zoning, seed, requirements,
    svgs: [generate3DSVG(config), generateFacadeSVG(config), generateFloorPlanSVG(config), generateInteriorSVG(config)],
    specs: '', generatedAt: new Date().toISOString() };

  document.getElementById('saveBtn').style.display = 'block';
  setStatus('Generation complete ✓', true);
  setTimeout(() => setStatus(translations[currentLang].readyToGenerate, false), 4000);
  document.getElementById('generateBtn').disabled = false;
}

document.getElementById('generateBtn').addEventListener('click', () => generate());

// ========================
// SAVE PROJECT
// ========================

document.getElementById('saveBtn').addEventListener('click', () => {
  if (!isPro()) { showUpgradeModal('save'); return; }
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
  setTimeout(() => setStatus(translations[currentLang].readyToGenerate, false), 3000);
}

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
    list.innerHTML = `<div class="no-projects">${translations[currentLang].noProjects}</div>`;
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
  if (!isPro()) { showUpgradeModal('save'); return; }
  const project = getProjects().find(p => p.id === id);
  if (!project) return;
  document.getElementById('plotW').value        = project.plotW;
  document.getElementById('plotL').value        = project.plotL;
  document.getElementById('bedrooms').value     = project.beds;
  document.getElementById('bathrooms').value    = project.baths;
  document.getElementById('soil').value         = project.soil;
  document.getElementById('zoning').value       = project.zoning;
  document.getElementById('seed').value         = project.seed;
  document.getElementById('requirements').value = project.requirements || '';
  restoreToggle('buildingType', project.type);
  restoreToggle('archStyle',    project.style);
  restoreToggle('roofStyle',    project.roof);
  restoreMultiToggle('extras',  project.extras);
  const specsCard = document.getElementById('specsCard');
  if (specsCard) specsCard.classList.add('show');
  if (project.svgs) project.svgs.forEach((svg, i) => showSVG(i, svg));
  if (project.specs) showResult(4, project.specs);
  buildSummary(project.beds, project.baths, project.type, project.plotW, project.plotL, project.seed);
  currentDesign = project;
  document.getElementById('saveBtn').style.display = 'block';
  setStatus('Project loaded ✓', true);
  setTimeout(() => setStatus(translations[currentLang].readyToGenerate, false), 3000);
  document.querySelector('.canvas').scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProject(event, id) {
  event.stopPropagation();
  const session  = JSON.parse(localStorage.getItem('archgen_session'));
  const userKey  = 'archgen_projects_' + session.email.replace('@','_').replace('.','_');
  localStorage.setItem(userKey, JSON.stringify(getProjects().filter(p => p.id !== id)));
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
// CHAT ASSISTANT
// ========================

let chatOpen       = false;
let voiceEnabled   = true;
let isListening    = false;
let recognition    = null;
let chatHistory    = [];

function initChat() {
  const t = translations[currentLang];
  const welcomeMsg = document.getElementById('welcomeMsg');
  if (welcomeMsg && t.chatWelcome) welcomeMsg.textContent = t.chatWelcome;
  const chatInput = document.getElementById('chatInput');
  if (chatInput && t.chatPlaceholder) chatInput.placeholder = t.chatPlaceholder;

  // Enter key to send
  if (chatInput) {
    chatInput.addEventListener('keypress', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
    });
  }

  // Show badge after 3 seconds
  setTimeout(() => {
    const badge = document.getElementById('chatBadge');
    if (badge && !chatOpen) badge.style.display = 'flex';
  }, 3000);

  // Init speech recognition
  initSpeechRecognition();
}

function openChat() {
  if (!isPro()) { showUpgradeModal('chat'); return; }
  chatOpen = true;
  document.getElementById('chatDrawer').classList.add('open');
  document.getElementById('chatOverlay').classList.add('show');
  document.getElementById('chatBadge').style.display = 'none';
  document.getElementById('chatFab').style.display   = 'none';
  setTimeout(() => { document.getElementById('chatInput').focus(); }, 300);
}

function closeChat() {
  chatOpen = false;
  document.getElementById('chatDrawer').classList.remove('open');
  document.getElementById('chatOverlay').classList.remove('show');
  document.getElementById('chatFab').style.display = 'flex';
  if (isListening && recognition) { recognition.stop(); }
}

// ========================
// SEND CHAT MESSAGE
// ========================

function sendSuggestion(btn) {
  document.getElementById('chatInput').value = btn.textContent;
  document.getElementById('chatSuggestions').style.display = 'none';
  sendChatMessage();
}

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;

  input.value = '';
  addChatMessage(text, 'user');
  chatHistory.push({ role: 'user', text });

  // Hide suggestions after first message
  document.getElementById('chatSuggestions').style.display = 'none';

  // Show typing indicator
  const typingId = addTypingIndicator();

  // Build context from current design
  let designContext = '';
  if (currentDesign) {
    designContext = `Current user design: ${currentDesign.beds}-bedroom ${currentDesign.style} ${currentDesign.type} on ${currentDesign.plotW}ft x ${currentDesign.plotL}ft plot. Roof: ${currentDesign.roof}. Rooms: ${currentDesign.extras}. Soil: ${currentDesign.soil}. Zoning: ${currentDesign.zoning}.`;
  }

  // Language instruction
  const langNames = { en:'English', ha:'Hausa', yo:'Yoruba', ig:'Igbo', fr:'French', ar:'Arabic' };
  const langInstruction = `Always respond in ${langNames[currentLang] || 'English'}.`;

  const systemPrompt = `You are ArchGen AI, a friendly and expert architectural assistant specializing in Nigerian and African residential building design. You know about Nigerian building codes, local materials, soil types, climate conditions, and construction practices. ${designContext} ${langInstruction} Keep responses concise, helpful and practical. Max 150 words per response.`;

  try {
    const response = await callAI(systemPrompt + '\n\nUser question: ' + text);
    removeTypingIndicator(typingId);
    addChatMessage(response, 'assistant');
    chatHistory.push({ role: 'assistant', text: response });

    // Speak the response if voice is enabled
    if (voiceEnabled) speakText(response);

  } catch(err) {
    removeTypingIndicator(typingId);
    const errMsg = 'Sorry, I could not connect right now. Please check your API key and try again.';
    addChatMessage(errMsg, 'assistant');
    if (voiceEnabled) speakText(errMsg);
  }
}

function addChatMessage(text, role) {
  const messages = document.getElementById('chatMessages');
  const session  = JSON.parse(localStorage.getItem('archgen_session') || '{}');
  const avatar   = role === 'user' ? (session.avatar || 'U') : '🏗️';
  const time     = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });

  const msgEl = document.createElement('div');
  msgEl.className = 'chat-msg ' + role;
  msgEl.innerHTML = `
    <div class="chat-msg-avatar">${avatar}</div>
    <div class="chat-msg-bubble">
      <div class="chat-msg-text">${text}</div>
      <div class="chat-msg-time">${time}</div>
    </div>
  `;

  messages.appendChild(msgEl);
  messages.scrollTop = messages.scrollHeight;
  return msgEl;
}

function addTypingIndicator() {
  const messages = document.getElementById('chatMessages');
  const id       = 'typing_' + Date.now();
  const el       = document.createElement('div');
  el.className   = 'chat-msg assistant';
  el.id          = id;
  el.innerHTML   = `
    <div class="chat-msg-avatar">🏗️</div>
    <div class="chat-typing">
      <span></span><span></span><span></span>
    </div>
  `;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ========================
// VOICE — TEXT TO SPEECH
// ========================

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  const btn = document.getElementById('voiceToggle');
  if (voiceEnabled) {
    btn.textContent = '🔊';
    btn.classList.add('active');
    btn.title = 'Voice ON — click to mute';
  } else {
    btn.textContent = '🔇';
    btn.classList.remove('active');
    btn.title = 'Voice OFF — click to enable';
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
}

function speakText(text) {
  if (!voiceEnabled) return;
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate   = 0.9;
  utterance.pitch  = 1.0;
  utterance.volume = 1.0;

  // Set language for speech
  const langCodes = {
    en: 'en-NG', // Nigerian English
    ha: 'ha',
    yo: 'yo',
    ig: 'ig',
    fr: 'fr-FR',
    ar: 'ar-SA'
  };

  utterance.lang = langCodes[currentLang] || 'en-NG';

  // Pick best available voice
  const voices    = window.speechSynthesis.getVoices();
  const langVoice = voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
  if (langVoice) utterance.voice = langVoice;

  window.speechSynthesis.speak(utterance);
}

// ========================
// VOICE — SPEECH TO TEXT
// ========================

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.continuous    = false;
  recognition.interimResults = true;

  const langCodes = { en:'en-NG', ha:'ha', yo:'yo', ig:'ig', fr:'fr-FR', ar:'ar-SA' };
  recognition.lang = langCodes[currentLang] || 'en-NG';

  recognition.onstart = () => {
    isListening = true;
    document.getElementById('micBtn').classList.add('listening');
    document.getElementById('micBtn').textContent = '🔴';
    document.getElementById('chatInput').placeholder = 'Listening...';
  };

  recognition.onresult = (event) => {
    const transcript = [...event.results].map(r => r[0].transcript).join('');
    document.getElementById('chatInput').value = transcript;
    if (event.results[event.results.length - 1].isFinal) {
      isListening = false;
      document.getElementById('micBtn').classList.remove('listening');
      document.getElementById('micBtn').textContent = '🎤';
      document.getElementById('chatInput').placeholder = translations[currentLang].chatPlaceholder || 'Ask about your building design...';
      sendChatMessage();
    }
  };

  recognition.onerror = () => {
    isListening = false;
    document.getElementById('micBtn').classList.remove('listening');
    document.getElementById('micBtn').textContent = '🎤';
    document.getElementById('chatInput').placeholder = translations[currentLang].chatPlaceholder || 'Ask about your building design...';
  };

  recognition.onend = () => {
    isListening = false;
    document.getElementById('micBtn').classList.remove('listening');
    document.getElementById('micBtn').textContent = '🎤';
  };
}

function startVoiceInput() {
  if (!isPro()) { showUpgradeModal('chat'); return; }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Voice input is not supported in your browser. Please use Chrome or Edge.');
    return;
  }

  if (isListening) {
    recognition.stop();
    return;
  }

  // Update language before starting
  const langCodes = { en:'en-NG', ha:'ha', yo:'yo', ig:'ig', fr:'fr-FR', ar:'ar-SA' };
  recognition.lang = langCodes[currentLang] || 'en-NG';
  recognition.start();
}

console.log('MY ArchGen — Chat Assistant + Voice Ready! 🏗️💬🎤');
