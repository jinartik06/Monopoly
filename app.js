const STORAGE_KEY = "monopoly_new_world_armenia_app";
const LOCAL_USERS_KEY = "monopoly_new_world_armenia_local_users";
const API_BASE = `${window.location.origin}/api`;
const STARTING_DOLLARS = 1500;
const PASS_START_BONUS = 200;
const LAB_BAIL_COST = 180;
const MAX_LOG = 20;
const MOVE_DELAY = 340;
const TRANSITIONS_DELAY = 700;

const translations = {
  ru: {
    top_tag: "economic warfare simulator",
    lang_label: "Язык",
    theme_label: "Тема",
    theme_tech: "Технологии",
    theme_forest: "Лес",
    theme_ocean: "Океан",
    theme_dawn: "Рассвет",
    theme_gradient: "Градиент",
    hero_eyebrow: "умная стратегическая игра",
    hero_title: "Не играй в рынок. Перестрой его под себя.",
    hero_text: "Стартапы, облака, дроны, кибербезопасность, капитал и данные. Здесь важнее давление, тайминг и контроль, чем удача.",
    hero_start: "Начать империю",
    hero_login: "Войти в штаб",
    hero_modes: "Режимы",
    hero_style: "Атмосфера",
    hero_style_value: "Техно-триллер",
    hero_goal: "Цель",
    hero_goal_value: "Полная монополия",
    market_core: "ЯДРО РЫНКА",
    login_eyebrow: "защищённый доступ",
    login_title: "Вход в контур управления рынком",
    login_text: "Войди, чтобы продолжить кампании, менять атмосферу и вернуться к последней партии.",
    login_form_title: "Вход",
    nickname: "Никнейм",
    password: "Пароль",
    login_button: "Войти",
    register_eyebrow: "новый основатель",
    register_title: "Создай аккаунт и займи место в новой цифровой иерархии",
    register_text: "Пока регистрация локальная, но интерфейс уже собран как будущий флагманский релиз.",
    register_form_title: "Регистрация",
    register_button: "Создать профиль",
    founder_profile: "профиль основателя",
    new_game: "Новая партия",
    continue_game: "Продолжить",
    logout: "Выйти",
    rooms: "комнаты",
    lobby_title: "Командный узел лобби",
    market_feed: "лента рынка",
    world_feed: "Лента мира",
    new_campaign: "новая кампания",
    setup_title: "Собери следующую войну за рынок",
    founder_name: "Имя основателя",
    mode: "Режим",
    single_vs_ai: "Одиночный против ИИ",
    local_mode: "До 4 игроков на одном устройстве",
    players_count: "Количество игроков",
    ai_difficulty: "Сложность ИИ",
    easy: "Лёгкий",
    medium: "Средний",
    devil: "Дьявол",
    launch_campaign: "Запустить кампанию",
    back_to_lobby: "Назад в лобби",
    current_player: "Текущий игрок",
    cash: "Деньги",
    income: "Доход",
    expenses: "Расходы",
    position: "Позиция",
    available_actions: "Возможности",
    command: "командование",
    roll_dice: "Бросить кубики",
    buy_asset: "Купить актив",
    upgrade_asset: "Улучшить актив",
    invest: "Инвестировать",
    leave_lab: "Выйти из Lab",
    end_turn: "Завершить ход",
    market_reactor: "реактор рынка",
    to_lobby: "В лобби",
    cards: "карточки",
    asset_cards: "Карточки активов",
    live_feed: "живая лента",
    battle_feed: "Боевая лента"
    ,deal_desk: "переговорный стол"
    ,negotiations: "Переговоры"
    ,target_player: "Цель"
    ,asset_to_sell: "Актив на продажу"
    ,price_offer: "Цена сделки"
    ,send_deal: "Отправить оффер"
    ,apply_pressure: "Давление"
  },
  en: {
    top_tag: "economic warfare simulator",
    lang_label: "Language",
    theme_label: "Theme",
    theme_tech: "Tech",
    theme_forest: "Forest",
    theme_ocean: "Ocean",
    theme_dawn: "Dawn",
    theme_gradient: "Gradient",
    hero_eyebrow: "smart strategic board game",
    hero_title: "Don’t play the market. Rebuild it under your command.",
    hero_text: "Startups, clouds, drones, cybersecurity, capital and data. Here pressure, timing and control matter more than luck.",
    hero_start: "Start Empire",
    hero_login: "Enter HQ",
    hero_modes: "Modes",
    hero_style: "Atmosphere",
    hero_style_value: "Tech Thriller",
    hero_goal: "Goal",
    hero_goal_value: "Total Monopoly",
    market_core: "MARKET CORE",
    login_eyebrow: "secure access",
    login_title: "Enter the market control layer",
    login_text: "Sign in to continue campaigns, switch atmosphere and return to your latest game.",
    login_form_title: "Sign In",
    nickname: "Nickname",
    password: "Password",
    login_button: "Sign In",
    register_eyebrow: "new founder",
    register_title: "Create an account and join the next digital hierarchy",
    register_text: "Registration is local for now, but the interface already feels like a flagship release.",
    register_form_title: "Registration",
    register_button: "Create Profile",
    founder_profile: "founder profile",
    new_game: "New Game",
    continue_game: "Continue",
    logout: "Logout",
    rooms: "rooms",
    lobby_title: "Lobby Command Node",
    market_feed: "market feed",
    world_feed: "World Feed",
    new_campaign: "new campaign",
    setup_title: "Build the next market war",
    founder_name: "Founder Name",
    mode: "Mode",
    single_vs_ai: "Single vs AI",
    local_mode: "Up to 4 on one device",
    players_count: "Players Count",
    ai_difficulty: "AI Difficulty",
    easy: "Easy",
    medium: "Medium",
    devil: "Devil",
    launch_campaign: "Launch Campaign",
    back_to_lobby: "Back to Lobby",
    current_player: "Current Player",
    cash: "Cash",
    income: "Income",
    expenses: "Expenses",
    position: "Position",
    available_actions: "Actions",
    command: "command",
    roll_dice: "Roll Dice",
    buy_asset: "Buy Asset",
    upgrade_asset: "Upgrade Asset",
    invest: "Invest",
    leave_lab: "Leave Lab",
    end_turn: "End Turn",
    market_reactor: "market reactor",
    to_lobby: "To Lobby",
    cards: "cards",
    asset_cards: "Asset Cards",
    live_feed: "live feed",
    battle_feed: "Battle Feed"
    ,deal_desk: "deal desk"
    ,negotiations: "Negotiations"
    ,target_player: "Target Player"
    ,asset_to_sell: "Asset to Sell"
    ,price_offer: "Price Offer"
    ,send_deal: "Send Deal"
    ,apply_pressure: "Apply Pressure"
  },
  hy: {
    top_tag: "economic warfare simulator",
    lang_label: "Լեզու",
    theme_label: "Թեմա",
    theme_tech: "Տեխնո",
    theme_forest: "Անտառ",
    theme_ocean: "Օվկիանոս",
    theme_dawn: "Արշալույս",
    theme_gradient: "Գրադիենտ",
    hero_eyebrow: "խելացի ռազմավարական խաղ",
    hero_title: "Մի խաղա շուկայում։ Վերակառուցիր այն քո հրամանատարության ներքո։",
    hero_text: "Սթարթափներ, ամպային հզորություններ, դրոններ, կիբերանվտանգություն, կապիտալ և տվյալներ։ Այստեղ ճնշումը, ժամանակավորումը և վերահսկողությունն ավելի կարևոր են, քան բախտը։",
    hero_start: "Սկսել կայսրությունը",
    hero_login: "Մուտք շտաբ",
    hero_modes: "Ռեժիմներ",
    hero_style: "Մթնոլորտ",
    hero_style_value: "Տեխնո թրիլլեր",
    hero_goal: "Նպատակ",
    hero_goal_value: "Լիակատար մենաշնորհ",
    market_core: "ՇՈՒԿԱՅԻ ՄԻՋՈՒԿ",
    login_eyebrow: "պաշտպանված մուտք",
    login_title: "Մուտք գործիր շուկայի կառավարման շերտ",
    login_text: "Մուտք գործիր՝ շարունակելու արշավները, փոխելու մթնոլորտը և վերադառնալու վերջին խաղին։",
    login_form_title: "Մուտք",
    nickname: "Անուն",
    password: "Գաղտնաբառ",
    login_button: "Մուտք գործել",
    register_eyebrow: "նոր հիմնադիր",
    register_title: "Ստեղծիր հաշիվ և միացիր հաջորդ թվային հիերարխիային",
    register_text: "Գրանցումն առայժմ տեղային է, բայց ինտերֆեյսն արդեն նման է մեծ ռելիզի։",
    register_form_title: "Գրանցում",
    register_button: "Ստեղծել պրոֆիլ",
    founder_profile: "հիմնադրի պրոֆիլ",
    new_game: "Նոր խաղ",
    continue_game: "Շարունակել",
    logout: "Դուրս գալ",
    rooms: "սենյակներ",
    lobby_title: "Լոբբիի հրամանատարական հանգույց",
    market_feed: "շուկայի լենտա",
    world_feed: "Աշխարհի լենտա",
    new_campaign: "նոր արշավ",
    setup_title: "Կառուցիր հաջորդ շուկայական պատերազմը",
    founder_name: "Հիմնադրի անուն",
    mode: "Ռեժիմ",
    single_vs_ai: "Մենախաղ ընդդեմ ԱԲ",
    local_mode: "Մինչև 4 խաղացող մեկ սարքի վրա",
    players_count: "Խաղացողների քանակ",
    ai_difficulty: "ԱԲ բարդություն",
    easy: "Թեթև",
    medium: "Միջին",
    devil: "Սատանայական",
    launch_campaign: "Գործարկել արշավը",
    back_to_lobby: "Վերադառնալ լոբբի",
    current_player: "Ընթացիկ խաղացող",
    cash: "Գումար",
    income: "Եկամուտ",
    expenses: "Ծախսեր",
    position: "Դիրք",
    available_actions: "Հնարավորություններ",
    command: "հրամանատարություն",
    roll_dice: "Նետել զառերը",
    buy_asset: "Գնել ակտիվը",
    upgrade_asset: "Արդիականացնել ակտիվը",
    invest: "Ներդնել",
    leave_lab: "Դուրս գալ լաբ-ից",
    end_turn: "Ավարտել քայլը",
    market_reactor: "շուկայի ռեակտոր",
    to_lobby: "Դեպի լոբբի",
    cards: "քարտեր",
    asset_cards: "Ակտիվների քարտեր",
    live_feed: "կենդանի լենտա",
    battle_feed: "Մարտական լենտա"
    ,deal_desk: "գործարքների սեղան"
    ,negotiations: "Բանակցություններ"
    ,target_player: "Թիրախ խաղացող"
    ,asset_to_sell: "Վաճառվող ակտիվ"
    ,price_offer: "Առաջարկի գին"
    ,send_deal: "Ուղարկել առաջարկ"
    ,apply_pressure: "Ճնշում"
  }
};

const roomPreview = [
  { name: "Yerevan Black Grid", players: "3/4", mode: "Hot-seat", note: { ru: "Жёсткая локальная партия с агрессивным захватом активов.", en: "Hard local match with aggressive asset capture.", hy: "Կոշտ տեղային խաղ՝ ակտիվների ագրեսիվ զավթմամբ։" } },
  { name: "Ararat Devil Run", players: "1/4", mode: "Solo AI", note: { ru: "Режим против дьявольского ИИ. Ошибок не прощает.", en: "Mode against devil AI. It forgives nothing.", hy: "Ռեժիմ սատանայական ԱԲ-ի դեմ։ Սխալներ չի ներում։" } },
  { name: "Silicon Republic", players: "4/4", mode: "Closed", note: { ru: "Стол заполнен, и там уже идёт корпоративная война.", en: "Table is full and a corporate war is already underway.", hy: "Սեղանը լիքն է, և կորպորատիվ պատերազմն արդեն սկսված է։" } }
];

const marketFeed = [
  { tone: "urgent", title: "Drone corridor secured", text: { ru: "Оборонные тех-кластеры дорожают на фоне госзаказа.", en: "Defense clusters surge after a state contract.", hy: "Պաշտպանական կլաստերները թանկանում են պետական պայմանագրից հետո։" } },
  { tone: "good", title: "AI contracts surge", text: { ru: "Рынок облачных вычислений снова качает весь сектор.", en: "Cloud contracts are pushing the whole sector up again.", hy: "Ամպային պայմանագրերը կրկին բարձրացնում են ամբողջ ոլորտը։" } },
  { tone: "urgent", title: "Cyber intrusion detected", text: { ru: "Кибератаки становятся нормой, защита дороже, но и ценнее.", en: "Cyberattacks are now standard, defense is pricier and more valuable.", hy: "Կիբերհարձակումները դարձել են նորմա, պաշտպանությունն ավելի թանկ, բայց ավելի արժեքավոր է։" } }
];

const artCards = [
  { title: "Executive Cell", type: "Leadership", artClass: "art-executive" },
  { title: "Armed Board", type: "Force", artClass: "art-armed" },
  { title: "Industrial Spine", type: "Factory", artClass: "art-factory" },
  { title: "Corporate Stack", type: "Corporation", artClass: "art-corporation" },
  { title: "Black Signal", type: "Event", artClass: "art-event" }
];

const boardTemplate = [
  { id: "start", type: "start", name: "Launch Pad", family: "Start", price: 0, rents: [0], upgradeCost: [], note: { ru: "Старт. При прохождении +$200.", en: "Start. Pass and gain $200.", hy: "Սկիզբ։ Անցնելիս +$200։" } },
  { id: "ai-cloud", type: "asset", family: "Compute", name: "AI Cloud", price: 170, rents: [24, 62, 132], upgradeCost: [120, 170], note: { ru: "Облачные мощности и inference.", en: "Cloud compute and inference.", hy: "Ամպային հաշվարկ և ինֆերենս։" }, artClass: "art-corporation" },
  { id: "event-1", type: "event", family: "Event", name: "Signal Event", price: 0, rents: [0], upgradeCost: [], note: { ru: "Случайный удар или подарок рынка.", en: "A random strike or market gift.", hy: "Պատահական հարված կամ շուկայի նվեր։" }, artClass: "art-event" },
  { id: "semi", type: "asset", family: "Hardware", name: "Semiconductor Cluster", price: 220, rents: [28, 70, 150], upgradeCost: [130, 180], note: { ru: "Чипы, литография, железо.", en: "Chips, lithography, hardware.", hy: "Չիպեր, լիթոգրաֆիա, սարքավորում։" }, artClass: "art-factory" },
  { id: "tax", type: "tax", family: "Tax", name: "Infra Tax", amount: 120, price: 0, rents: [0], upgradeCost: [], note: { ru: "Налог на цифровую инфраструктуру.", en: "Tax on digital infrastructure.", hy: "Թվային ենթակառուցվածքի հարկ։" }, artClass: "art-event" },
  { id: "cyber", type: "asset", family: "Security", name: "Cyber Vault", price: 250, rents: [34, 82, 176], upgradeCost: [150, 210], note: { ru: "Щиты, сети, защита активов.", en: "Shields, networks, asset defense.", hy: "Վահաններ, ցանցեր, ակտիվների պաշտպանություն։" }, artClass: "art-armed" },
  { id: "lab", type: "lab", family: "Lab", name: "R&D Lab", price: 0, rents: [0], upgradeCost: [], note: { ru: "2 хода изоляции или выкуп за $180.", en: "2 turns isolated or pay $180 bail.", hy: "2 քայլ մեկուսացում կամ $180 փրկագին։" }, artClass: "art-executive" },
  { id: "fintech", type: "asset", family: "Finance", name: "Fintech Crypto Hub", price: 270, rents: [38, 92, 194], upgradeCost: [155, 220], note: { ru: "Капитал, кошельки, потоки.", en: "Capital, wallets, flows.", hy: "Կապիտալ, դրամապանակներ, հոսքեր։" }, artClass: "art-corporation" },
  { id: "event-2", type: "event", family: "Event", name: "Signal Event", price: 0, rents: [0], upgradeCost: [], note: { ru: "Рынок кидает новые вводные.", en: "The market drops a new signal.", hy: "Շուկան նոր ազդանշան է տալիս։" }, artClass: "art-event" },
  { id: "drones", type: "asset", family: "Defense", name: "Defense Drones", price: 290, rents: [42, 102, 214], upgradeCost: [160, 230], note: { ru: "Контракты, оборона и масштаб.", en: "Contracts, defense and scale.", hy: "Պայմանագրեր, պաշտպանություն և մասշտաբ։" }, artClass: "art-armed" },
  { id: "supply", type: "asset", family: "Logistics", name: "Supply Chain Nexus", price: 310, rents: [46, 110, 234], upgradeCost: [170, 240], note: { ru: "Цепочки, маршруты, контроль.", en: "Chains, routes, control.", hy: "Շղթաներ, ուղիներ, վերահսկողություն։" }, artClass: "art-factory" },
  { id: "court", type: "court", family: "Court", name: "Digital Court", price: 0, rents: [0], upgradeCost: [], note: { ru: "Секретный рычаг жёсткого давления.", en: "A secret lever for aggressive pressure.", hy: "Ագրեսիվ ճնշման գաղտնի լծակ։" }, artClass: "art-executive" },
  { id: "quantum", type: "asset", family: "Compute", name: "Quantum Foundry", price: 340, rents: [52, 122, 256], upgradeCost: [190, 270], note: { ru: "Передовой compute-узел.", en: "Advanced compute node.", hy: "Առաջատար հաշվարկային հանգույց։" }, artClass: "art-corporation" },
  { id: "event-3", type: "event", family: "Event", name: "Signal Event", price: 0, rents: [0], upgradeCost: [], note: { ru: "Рынок не отпускает.", en: "The market never lets go.", hy: "Շուկան երբեք չի թողնում։" }, artClass: "art-event" },
  { id: "data", type: "asset", family: "Data", name: "Data Harbor", price: 360, rents: [58, 136, 286], upgradeCost: [210, 300], note: { ru: "Данные, storage, pipeline.", en: "Data, storage, pipeline.", hy: "Տվյալներ, պահեստավորում, խողովակաշար։" }, artClass: "art-corporation" },
  { id: "green", type: "asset", family: "Energy", name: "Green Reactor Grid", price: 390, rents: [64, 148, 308], upgradeCost: [220, 320], note: { ru: "Энергия и устойчивость системы.", en: "Energy and system resilience.", hy: "Էներգիա և համակարգի կայունություն։" }, artClass: "art-factory" }
];

const events = [
  {
    tone: "positive",
    text: {
      ru: "Госконтракт на дроны приносит тебе $180.",
      en: "A drone contract brings you $180.",
      hy: "Դրոնների պետական պայմանագիրը քեզ բերում է $180։"
    },
    effect: { type: "cash", amount: 180 }
  },
  {
    tone: "negative",
    text: {
      ru: "Хакерская атака сжигает $140 на восстановление.",
      en: "A cyberattack burns $140 in recovery costs.",
      hy: "Կիբերհարձակումը $140 է այրում վերականգնման վրա։"
    },
    effect: { type: "cash", amount: -140 }
  },
  {
    tone: "positive",
    text: {
      ru: "Прорыв в ИИ удваивает следующий доход с твоего актива.",
      en: "An AI breakthrough doubles the next income from your asset.",
      hy: "ԱԲ առաջխաղացումը կրկնապատկում է քո ակտիվի հաջորդ եկամուտը։"
    },
    effect: { type: "buff", buff: "doubleIncome" }
  },
  {
    tone: "negative",
    text: {
      ru: "Регулятор замораживает операции. Пропусти следующий ход.",
      en: "The regulator freezes operations. Skip the next turn.",
      hy: "Կարգավորիչը սառեցնում է գործողությունները։ Բաց թող հաջորդ քայլը։"
    },
    effect: { type: "skip", turns: 1 }
  },
  {
    tone: "positive",
    text: {
      ru: "Фонд роста вливает по $90 за каждый твой актив.",
      en: "A growth fund injects $90 for each of your assets.",
      hy: "Աճի ֆոնդը քո յուրաքանչյուր ակտիվի համար տալիս է $90։"
    },
    effect: { type: "perAsset", amount: 90 }
  },
  {
    tone: "negative",
    text: {
      ru: "Перегрев сектора. Плати по $60 за каждый актив уровня 2.",
      en: "Sector overheating. Pay $60 for each level 2 asset.",
      hy: "Ոլորտի գերտաքացում։ Վճարիր $60 յուրաքանչյուր 2-րդ մակարդակի ակտիվի համար։"
    },
    effect: { type: "levelFee", amount: 60 }
  },
  {
    tone: "positive",
    text: {
      ru: "Киберщит активирован. Следующая аренда блокируется.",
      en: "Cyber shield active. The next rent is blocked.",
      hy: "Կիբերվահանը ակտիվ է։ Հաջորդ վարձավճարը կասեցվում է։"
    },
    effect: { type: "shield" }
  }
];

const boardSlots = [0,1,2,3,4,15,null,null,null,5,14,null,null,null,6,13,null,null,null,7,12,11,10,9,8];
const aiNames = {
  easy: ["Echo Unit", "Neon Mint", "Silent Pixel"],
  medium: ["Vector Pulse", "Helix Forge", "Static Crown"],
  devil: ["Leviathan Core", "Crimson Apex", "Black Radius"]
};
const playerColors = ["#5cf0ff", "#ff4c66", "#70ffbf", "#ffc65c"];

const elements = {
  views: [...document.querySelectorAll(".view")],
  topbarActions: document.getElementById("topbar-actions"),
  languageSelect: document.getElementById("language-select"),
  themeSelect: document.getElementById("theme-select"),
  profileName: document.getElementById("profile-name"),
  profileLine: document.getElementById("profile-line"),
  roomList: document.getElementById("room-list"),
  feedPreview: document.getElementById("feed-preview"),
  boardGrid: document.getElementById("board-grid"),
  playersPanel: document.getElementById("players-panel"),
  eventLog: document.getElementById("event-log"),
  turnTitle: document.getElementById("turn-title"),
  roundChip: document.getElementById("round-chip"),
  statusLine: document.getElementById("status-line"),
  die1: document.getElementById("die-1"),
  die2: document.getElementById("die-2"),
  diceTotal: document.getElementById("dice-total"),
  tileFocus: document.getElementById("tile-focus"),
  centerSummary: document.getElementById("center-summary"),
  positionTracker: document.getElementById("position-tracker"),
  artGrid: document.getElementById("art-grid"),
    dealTarget: document.getElementById("deal-target"),
  dealType: document.getElementById("deal-type"),
    dealAsset: document.getElementById("deal-asset"),
    dealPrice: document.getElementById("deal-price"),
    sendDealButton: document.getElementById("send-deal-button"),
  openDealModalButton: document.getElementById("open-deal-modal-button"),
  closeDealModalButton: document.getElementById("close-deal-modal-button"),
  dealDialog: document.getElementById("deal-dialog"),
    pressureButton: document.getElementById("pressure-button"),
  pendingDeals: document.getElementById("pending-deals"),
  purchaseBurst: document.getElementById("purchase-burst"),
  loginForm: document.getElementById("login-form"),
  registerForm: document.getElementById("register-form"),
  setupForm: document.getElementById("setup-form"),
  newGameButton: document.getElementById("new-game-button"),
  continueGameButton: document.getElementById("continue-game-button"),
  logoutButton: document.getElementById("logout-button"),
  backToLobbyButton: document.getElementById("back-to-lobby-button"),
  rollButton: document.getElementById("roll-button"),
  buyButton: document.getElementById("buy-button"),
  upgradeButton: document.getElementById("upgrade-button"),
  investButton: document.getElementById("invest-button"),
  bailButton: document.getElementById("bail-button"),
  endTurnButton: document.getElementById("end-turn-button"),
  overviewPlayer: document.getElementById("overview-player"),
  overviewCash: document.getElementById("overview-cash"),
  overviewIncome: document.getElementById("overview-income"),
  overviewExpenses: document.getElementById("overview-expenses"),
  overviewPosition: document.getElementById("overview-position"),
  overviewActions: document.getElementById("overview-actions")
};

let appState = loadAppState() || createInitialAppState();
let socket = null;

function createInitialAppState() {
  return {
    screen: "landing",
    user: null,
    game: null,
    fxLock: false,
    language: "ru",
    theme: "tech",
    authToken: null,
    sessionCode: null,
    onlineMode: false
  };
}

function t(key) {
  return translations[appState.language]?.[key] || translations.ru[key] || key;
}

function localizeText(value) {
  if (typeof value === "string") return value;
  return value?.[appState.language] || value?.ru || "";
}

function defaultGameConfig(userName = "Founder Prime") {
  return { playerName: userName, mode: "single", playerCount: 3, aiDifficulty: "medium" };
}

function createGame(config) {
  const players = [makePlayer("human-1", config.playerName, false, "human", playerColors[0])];
  if (config.mode === "single") {
    const pool = aiNames[config.aiDifficulty];
    for (let index = 1; index < config.playerCount; index += 1) {
      players.push(makePlayer(`ai-${index}`, pool[index - 1], true, config.aiDifficulty, playerColors[index]));
    }
  } else {
    for (let index = 1; index < config.playerCount; index += 1) {
      players.push(makePlayer(`human-${index + 1}`, `Player ${index + 1}`, false, "human", playerColors[index]));
    }
  }
  return {
    config,
    board: boardTemplate.map((tile) => ({ ...tile, ownerId: null, level: 0, investors: [] })),
    players,
    currentPlayerIndex: 0,
    round: 1,
    pendingAction: null,
    dice: null,
    winnerId: null,
    dealCounter: 1,
    pendingDeals: [],
    lastAction: { ru: "Рынок готов к открытию. Первый ход за основателем.", en: "The market is open. First move belongs to the founder.", hy: "Շուկան բաց է։ Առաջին քայլը հիմնադրինն է։" },
    log: [makeLog("neutral", { ru: "Система синхронизирована. Стартовая позиция активна.", en: "System synchronized. Starting position is active.", hy: "Համակարգը համաժամեցված է։ Մեկնարկային դիրքն ակտիվ է։" })]
  };
}

function makePlayer(id, name, isAi, difficulty, color) {
  return { id, name, isAi, difficulty, color, money: STARTING_DOLLARS, position: 0, labTurns: 0, skipTurns: 0, shield: false, buffs: [], bankrupt: false, secretCourtUsed: false, investments: [], pressureUsed: false, dealUsed: false };
}

function loadAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveAppState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); }
function loadLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}
function authHeaders() {
  return appState.authToken ? { Authorization: `Bearer ${appState.authToken}` } : {};
}

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...(options.headers || {})
    }
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || "API_ERROR");
  }
  return payload;
}

async function localRegister(username, password) {
  const users = loadLocalUsers();
  const exists = users.some((user) => user.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    throw new Error("LOCAL_USER_EXISTS");
  }
  const user = {
    id: Date.now(),
    username,
    password
  };
  users.push(user);
  saveLocalUsers(users);
  return user;
}

async function localLogin(username, password) {
  const users = loadLocalUsers();
  const user = users.find((item) => item.username.toLowerCase() === username.toLowerCase());
  if (!user || user.password !== password) {
    throw new Error("LOCAL_INVALID_CREDENTIALS");
  }
  return {
    token: `local-${user.id}`,
    user: {
      id: user.id,
      username: user.username
    }
  };
}
function makeLog(tone, text) { return { tone, text, time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }) }; }
function navigate(screen) { appState.screen = screen; render(); saveAppState(); }
function setUser(name) { appState.user = { name, tagline: { ru: "Контролирует будущий рынок и не терпит слабых позиций.", en: "Controls the future market and hates weak positions.", hy: "Վերահսկում է ապագայի շուկան և չի հանդուրժում թույլ դիրքեր։" } }; }
function formatMoney(value) { return `$${value}`; }
function initials(name) { return name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase(); }
function currentGame() { return appState.game; }
function getCurrentPlayer() { return currentGame().players[currentGame().currentPlayerIndex]; }
function ownedTiles(playerId) { return currentGame().board.filter((tile) => tile.ownerId === playerId); }

function addLog(tone, text) {
  const game = currentGame();
  game.log.unshift(makeLog(tone, text));
  game.log = game.log.slice(0, MAX_LOG);
  game.lastAction = text;
}

function render() {
  renderViews();
  renderThemeAndLanguage();
  renderStaticI18n();
  renderTopbar();
  renderLobby();
  renderGame();
}

function renderViews() {
  elements.views.forEach((view) => view.classList.toggle("active", view.dataset.view === appState.screen));
}

function renderThemeAndLanguage() {
  document.body.className = `theme-${appState.theme}`;
  elements.languageSelect.value = appState.language;
  elements.themeSelect.value = appState.theme;
}

function renderStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (node.tagName === "OPTION") {
      node.textContent = t(key);
      return;
    }
    node.textContent = t(key);
  });
}

function renderTopbar() {
  elements.topbarActions.innerHTML = appState.user ? `
    <button class="ghost-button" data-nav="lobby">${t("rooms")}</button>
    <button class="ghost-button" data-nav="setup">${t("new_game")}</button>
    <button class="accent-button" data-nav="game">${t("continue_game")}</button>
  ` : `
    <button class="ghost-button" data-nav="landing">${t("hero_goal")}</button>
    <button class="ghost-button" data-nav="login">${t("login_button")}</button>
    <button class="accent-button" data-nav="register">${t("register_button")}</button>
  `;
}

function renderLobby() {
  if (!appState.user) return;
  elements.profileName.textContent = appState.user.name;
  elements.profileLine.textContent = localizeText(appState.user.tagline);
  elements.roomList.innerHTML = roomPreview.map((room) => `
    <article class="room-card">
      <div class="room-row">
        <strong>${room.name}</strong>
        <span class="flag">${room.mode}</span>
      </div>
      <p>${localizeText(room.note)}</p>
      <div class="room-row">
        <span class="flag">${room.players}</span>
        <button class="ghost-button">${t("continue_game")}</button>
      </div>
    </article>
  `).join("");
  elements.feedPreview.innerHTML = marketFeed.map((item) => `
    <article class="feed-card ${item.tone}">
      <div class="feed-head">
        <strong>${item.title}</strong>
        <span class="flag">${item.tone === "good" ? "UP" : "ALERT"}</span>
      </div>
      <p>${localizeText(item.text)}</p>
    </article>
  `).join("");
}

function renderGame() {
  const game = currentGame();
  renderArtGrid();
  if (!game) {
    elements.boardGrid.innerHTML = "";
    elements.playersPanel.innerHTML = "";
    elements.eventLog.innerHTML = "";
    elements.tileFocus.innerHTML = "";
    elements.positionTracker.innerHTML = "";
    elements.turnTitle.textContent = "-";
    elements.roundChip.textContent = "-";
    elements.statusLine.textContent = "-";
    elements.centerSummary.textContent = "";
    updateDiceFace("-", "-");
    return;
  }

  const player = getCurrentPlayer();
  renderBoard(game, player);
  renderPlayers(game, player);
  renderEventLog(game);
  renderTileFocus(game, player);
  renderControls(game, player);
  renderOverview(game, player);
  renderPositionTracker(game);
  renderDealDesk(game, player);

  elements.turnTitle.textContent = game.winnerId ? `${t("current_player")}: ${game.players.find((item) => item.id === game.winnerId)?.name}` : `${t("current_player")}: ${player.name}`;
  elements.roundChip.textContent = `${t("position")} ${game.round}`;
  elements.statusLine.textContent = localizeText(game.lastAction);
  elements.centerSummary.textContent = player.labTurns > 0
    ? `${player.name} · ${localizeText({ ru: "изоляция в R&D Lab. Можно заплатить залог или ждать шанс на побег.", en: "isolated in R&D Lab. Pay bail or wait for a breakout chance.", hy: "մեկուսացված է R&D Lab-ում։ Կարող է վճարել կամ սպասել փախուստի շանսի։" })}`
    : `${player.name} · ${ownedTiles(player.id).length} ${localizeText({ ru: "активов под контролем", en: "assets under control", hy: "ակտիվ վերահսկողության տակ" })} · ${formatMoney(player.money)}`;
}

function renderOverview(game, player) {
  const income = ownedTiles(player.id).reduce((sum, tile) => sum + tile.rents[tile.level], 0);
  const expenses = player.labTurns > 0 ? LAB_BAIL_COST : 0;
  const tile = game.board[player.position];
  const actions = [];
  if (!game.pendingAction || player.labTurns > 0) actions.push(t("roll_dice"));
  if (game.pendingAction === "resolveCell" && tile.type === "asset" && !tile.ownerId && player.money >= tile.price) actions.push(t("buy_asset"));
  if (game.pendingAction === "resolveCell" && tile.type === "asset" && tile.ownerId === player.id && canUpgrade(player, tile)) actions.push(t("upgrade_asset"));
  if (game.pendingAction === "resolveCell" && tile.type === "asset" && tile.ownerId && tile.ownerId !== player.id && canInvest(player, tile)) actions.push(t("invest"));
  if ((game.pendingAction === "endTurn" || (player.labTurns > 0 && game.pendingAction === "labChoice"))) actions.push(t("end_turn"));

  elements.overviewPlayer.textContent = player.name;
  elements.overviewCash.textContent = formatMoney(player.money);
  elements.overviewIncome.textContent = formatMoney(income);
  elements.overviewExpenses.textContent = formatMoney(expenses);
  elements.overviewPosition.textContent = `#${player.position} · ${tile.name}`;
  elements.overviewActions.textContent = actions.length ? actions.join(" / ") : "-";
  elements.openDealModalButton.disabled = player.isAi || !game.players.some((item) => !item.bankrupt && item.id !== player.id);
}

function renderBoard(game, currentPlayer) {
  elements.boardGrid.innerHTML = boardSlots.map((boardIndex) => {
    if (boardIndex === null) return `<div class="hidden-cell"></div>`;
    const tile = game.board[boardIndex];
    const owner = game.players.find((player) => player.id === tile.ownerId);
    const occupants = game.players.filter((player) => !player.bankrupt && player.position === boardIndex);
    const classes = ["board-tile", tile.type === "asset" ? "asset" : "special", currentPlayer.position === boardIndex ? "current" : "", tile.ownerId ? "owned" : "", tile.level > 0 ? "upgraded" : ""].join(" ");
    return `
      <article class="${classes}">
        <div class="tile-topline">
          <span class="eyebrow">${tile.family}</span>
          <span class="flag">#${boardIndex}</span>
        </div>
        <div class="tile-art ${tile.artClass}"></div>
        <div>
          <h4>${tile.name}</h4>
          <p class="tile-meta">${describeTile(tile, owner)}</p>
          <div class="token-cluster">
            ${occupants.map((occupant) => `<span class="token" style="background:${occupant.color}">${initials(occupant.name)}</span>`).join("")}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function describeTile(tile, owner) {
  if (tile.type === "asset") {
    return owner
      ? `${localizeText({ ru: "Контроль", en: "Control", hy: "Վերահսկում" })}: ${owner.name} · ${localizeText({ ru: "доход", en: "income", hy: "եկամուտ" })} ${formatMoney(tile.rents[tile.level])} · L${tile.level}`
      : `${localizeText({ ru: "Свободен", en: "Free", hy: "Ազատ" })} · ${localizeText({ ru: "цена", en: "price", hy: "գին" })} ${formatMoney(tile.price)} · ${localizeText({ ru: "доход", en: "income", hy: "եկամուտ" })} ${formatMoney(tile.rents[0])}`;
  }
  if (tile.type === "tax") return `${localizeText({ ru: "Платёж", en: "Payment", hy: "Վճարում" })} ${formatMoney(tile.amount)}`;
  return localizeText(tile.note);
}

function renderPlayers(game, currentPlayer) {
  elements.playersPanel.innerHTML = game.players.map((player) => {
    const assets = ownedTiles(player.id);
    const flags = [
      `${formatMoney(player.money)}`,
      `${assets.length} ${localizeText({ ru: "активов", en: "assets", hy: "ակտիվ" })}`,
      player.labTurns > 0 ? `R&D ${player.labTurns}` : null,
      player.skipTurns > 0 ? `${localizeText({ ru: "пропуск", en: "skip", hy: "բացթողում" })} ${player.skipTurns}` : null,
      player.shield ? localizeText({ ru: "щит", en: "shield", hy: "վահան" }) : null
    ].filter(Boolean);
    return `
      <article class="player-card ${player.id === currentPlayer.id ? "active" : ""} ${player.bankrupt ? "bankrupt" : ""}">
        <div class="player-head">
          <div class="player-head">
            <div class="avatar" style="background:${player.color}">${initials(player.name)}</div>
            <div>
              <strong>${player.name}</strong>
              <p>${player.isAi ? `AI: ${player.difficulty}` : localizeText({ ru: "Человек", en: "Human", hy: "Մարդ" })}</p>
            </div>
          </div>
          <strong>${formatMoney(player.money)}</strong>
        </div>
        <div class="player-flags">${flags.map((flag) => `<span class="flag">${flag}</span>`).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderEventLog(game) {
  elements.eventLog.innerHTML = game.log.map((entry) => `
    <article class="feed-item ${entry.tone}">
      <div class="feed-meta"><span>${entry.time}</span><span>${entry.tone}</span></div>
      <p>${localizeText(entry.text)}</p>
    </article>
  `).join("");
}

function renderTileFocus(game, player) {
  const tile = game.board[player.position];
  const owner = game.players.find((item) => item.id === tile.ownerId);
  elements.tileFocus.innerHTML = `
    <article class="tile-focus-card">
      <div class="section-head">
        <div><p class="eyebrow">${t("cards")}</p><h3>${tile.name}</h3></div>
        <span class="flag">${tile.type}</span>
      </div>
      <div class="tile-art ${tile.artClass}"></div>
      <p>${describeTile(tile, owner)}</p>
      <p>${buildTileInstruction(tile, owner, player)}</p>
    </article>
  `;
}

function buildTileInstruction(tile, owner, player) {
  if (tile.type === "asset" && !owner) return localizeText({ ru: `Можно купить актив за ${formatMoney(tile.price)} и сразу открыть поток дохода.`, en: `You can buy this asset for ${formatMoney(tile.price)} and open an income stream.`, hy: `Կարող ես գնել այս ակտիվը ${formatMoney(tile.price)}-ով և բացել եկամտի հոսք։` });
  if (tile.type === "asset" && owner && owner.id === player.id) return localizeText({ ru: "Это твой сектор. Проверь, хватает ли денег на апгрейд.", en: "This is your sector. Check if you have enough cash to upgrade.", hy: "Սա քո սեկտորն է։ Ստուգիր՝ արդյոք գումարը բավական է արդիականացնելու համար։" });
  if (tile.type === "asset" && owner && owner.id !== player.id) return localizeText({ ru: "Чужой сектор. Заплати аренду или заходи инвестором, если окно открыто.", en: "Enemy sector. Pay rent or enter as investor if the window is open.", hy: "Օտար սեկտոր։ Վճարիր վարձը կամ մտիր որպես ներդրող, եթե պատուհանը բաց է։" });
  return localizeText(tile.note);
}

function renderControls(game, player) {
  const tile = game.board[player.position];
  const canRollNow = !game.winnerId && !appState.fxLock && (!game.pendingAction || player.labTurns > 0) && !player.isAi;
  const canBuyNow = !game.winnerId && !appState.fxLock && game.pendingAction === "resolveCell" && tile.type === "asset" && !tile.ownerId && player.money >= tile.price && !player.isAi;
  const canUpgradeNow = !game.winnerId && !appState.fxLock && game.pendingAction === "resolveCell" && tile.type === "asset" && tile.ownerId === player.id && canUpgrade(player, tile) && !player.isAi;
  const canInvestNow = !game.winnerId && !appState.fxLock && game.pendingAction === "resolveCell" && tile.type === "asset" && tile.ownerId && tile.ownerId !== player.id && canInvest(player, tile) && !player.isAi;
  const canBailNow = !game.winnerId && !appState.fxLock && player.labTurns > 0 && player.money >= LAB_BAIL_COST && !player.isAi;
  const canEndNow = !game.winnerId && !appState.fxLock && (game.pendingAction === "endTurn" || (player.labTurns > 0 && game.pendingAction === "labChoice")) && !player.isAi;
  elements.rollButton.disabled = !canRollNow;
  elements.buyButton.disabled = !canBuyNow;
  elements.upgradeButton.disabled = !canUpgradeNow;
  elements.investButton.disabled = !canInvestNow;
  elements.bailButton.disabled = !canBailNow;
  elements.endTurnButton.disabled = !canEndNow;
}

function renderPositionTracker(game) {
  elements.positionTracker.innerHTML = game.players.filter((player) => !player.bankrupt).map((player) => {
    const tile = game.board[player.position];
    return `<div class="position-badge"><strong style="color:${player.color}">${player.name}</strong><span>#${player.position} · ${tile.name}</span></div>`;
  }).join("");
}

function renderDealDesk(game, player) {
  const targets = game.players.filter((item) => !item.bankrupt && item.id !== player.id);
  elements.dealTarget.innerHTML = targets.map((item) => `<option value="${item.id}">${item.name}</option>`).join("");
  updateDealAssetOptions();
  const availableAssets = elements.dealAsset.options.length && elements.dealAsset.value;

  elements.sendDealButton.disabled = player.isAi || !targets.length || !availableAssets || player.dealUsed;
  elements.pressureButton.disabled = player.isAi || !targets.length || player.money < 120 || player.pressureUsed;

  const visibleDeals = game.pendingDeals.filter((deal) => deal.fromId === player.id || deal.toId === player.id);
  elements.pendingDeals.innerHTML = visibleDeals.length ? visibleDeals.map((deal) => {
    const from = game.players.find((item) => item.id === deal.fromId);
    const to = game.players.find((item) => item.id === deal.toId);
    const isRecipient = deal.toId === player.id && !player.isAi;
    return `
      <article class="pending-deal-card">
        <strong>${from.name} → ${to.name}</strong>
        <p>${deal.assetName} · ${formatMoney(deal.price)}</p>
        <p>${localizeText({ ru: "Статус: ожидает решения", en: "Status: waiting for response", hy: "Կարգավիճակ՝ սպասում է պատասխանին" })}</p>
        ${isRecipient ? `
          <div class="pending-deal-actions">
            <button class="accent-button" data-deal-action="accept" data-deal-id="${deal.id}">OK</button>
            <button class="ghost-button" data-deal-action="reject" data-deal-id="${deal.id}">No</button>
          </div>
        ` : ""}
      </article>
    `;
  }).join("") : `<div class="pending-deal-card"><p>${localizeText({ ru: "Активных офферов пока нет.", en: "No active offers yet.", hy: "Ակտիվ առաջարկներ դեռ չկան։" })}</p></div>`;
}

function updateDealAssetOptions() {
  const game = currentGame();
  if (!game || !elements.dealTarget) return;
  const player = getCurrentPlayer();
  const targetId = elements.dealTarget.value;
  const dealType = elements.dealType?.value || "sell";
  const target = game.players.find((item) => item.id === targetId);

  let assets = [];
  if (dealType === "sell") {
    assets = ownedTiles(player.id);
  } else if (dealType === "buyout" && target) {
    assets = ownedTiles(target.id);
  }

  elements.dealAsset.innerHTML = assets.length
    ? assets.map((tile) => `<option value="${tile.id}">${tile.name} · ${formatMoney(tile.rents[tile.level])}</option>`).join("")
    : `<option value="">-</option>`;
}

function openDealDialog() {
  if (!elements.dealDialog.open) {
    elements.dealDialog.showModal();
  }
}

function closeDealDialog() {
  if (elements.dealDialog.open) {
    elements.dealDialog.close();
  }
}

function renderArtGrid() {
  elements.artGrid.innerHTML = artCards.map((card) => `
    <article class="art-card ${card.artClass}">
      <div class="art-head"><strong>${card.title}</strong><span class="flag">${card.type}</span></div>
      <p>${localizeText({ ru: "Атмосферная карточка для активов, событий и будущих режимов.", en: "Atmospheric card for assets, events and future modes.", hy: "Մթնոլորտային քարտ ակտիվների, իրադարձությունների և ապագա ռեժիմների համար։" })}</p>
    </article>
  `).join("");
}

async function handleAuth(name, password, mode = "login") {
  let loginPayload;

  try {
    if (mode === "register") {
      await apiFetch("/register", {
        method: "POST",
        body: JSON.stringify({ username: name, password })
      });
    }

    loginPayload = await apiFetch("/login", {
      method: "POST",
      body: JSON.stringify({ username: name, password })
    });
  } catch (error) {
    if (mode === "register") {
      await localRegister(name, password);
    }
    loginPayload = await localLogin(name, password);
  }

  appState.authToken = loginPayload.token;
  setUser(loginPayload.user.username || name || "Founder Prime");
  if (!appState.game) appState.game = createGame(defaultGameConfig(appState.user.name));
  appState.onlineMode = true;
  ensureSocket();
  navigate("lobby");
}

function startGameFromSetup(formData) {
  const config = {
    playerName: formData.get("playerName").trim() || appState.user?.name || "Founder Prime",
    mode: formData.get("mode"),
    playerCount: Number(formData.get("playerCount")),
    aiDifficulty: formData.get("aiDifficulty")
  };
  appState.game = createGame(config);
  addLog("positive", { ru: `Новая партия запущена. ${config.playerName} открывает рынок.`, en: `A new game starts. ${config.playerName} opens the market.`, hy: `Նոր խաղը սկսվեց։ ${config.playerName}-ը բացում է շուկան։` });
  navigate("game");
  saveAppState();
}

async function createOnlineSession() {
  if (!appState.authToken) return;
  const payload = await apiFetch("/sessions", { method: "POST", body: JSON.stringify({}) });
  appState.sessionCode = payload.sessionCode;
  appState.onlineMode = true;
  ensureSocket();
  socket.emit("session:join", { sessionCode: appState.sessionCode });
  addLog("positive", {
    ru: `Создана онлайн-комната ${appState.sessionCode}.`,
    en: `Online room ${appState.sessionCode} created.`,
    hy: `Ստեղծվել է առցանց սենյակ ${appState.sessionCode}։`
  });
  saveAppState();
}

function ensureSocket() {
  if (socket || typeof io === "undefined") return;
  socket = io(window.location.origin, { transports: ["websocket", "polling"] });
  socket.on("session:state", (serverGameState) => {
    if (!serverGameState) return;
    const localConfig = appState.game?.config || defaultGameConfig(appState.user?.name || "Founder Prime");
    appState.game = {
      ...appState.game,
      ...serverGameState,
      config: localConfig
    };
    render();
    saveAppState();
  });
}

async function syncGameState(eventText) {
  if (!appState.onlineMode || !appState.sessionCode || !appState.authToken || !appState.game) return;
  await apiFetch(`/sessions/${appState.sessionCode}/move`, {
    method: "POST",
    body: JSON.stringify({
      gameState: appState.game,
      eventText
    })
  });
}

async function rollDiceTurn() {
  const game = currentGame();
  const player = getCurrentPlayer();
  if (!game || game.winnerId || appState.fxLock) return;
  appState.fxLock = true;
  animateDiceStart();
  const dice = await animateDiceResult();
  game.dice = dice;

  if (player.labTurns > 0) {
    if (dice[0] === dice[1] || (dice[0] + dice[1]) % 2 === 0) {
      player.labTurns = 0;
      addLog("positive", { ru: `${player.name} вырывается из R&D Lab комбинацией ${dice[0]}:${dice[1]}.`, en: `${player.name} breaks out of R&D Lab with ${dice[0]}:${dice[1]}.`, hy: `${player.name}-ը դուրս է գալիս R&D Lab-ից ${dice[0]}:${dice[1]} համադրությամբ։` });
      await movePlayerAnimated(player, dice[0] + dice[1]);
      resolveTile(player);
    } else {
      player.labTurns -= 1;
      game.pendingAction = "labChoice";
      addLog("negative", { ru: `${player.name} не смог выйти из R&D Lab. Осталось ходов: ${player.labTurns}.`, en: `${player.name} failed to leave R&D Lab. Turns left: ${player.labTurns}.`, hy: `${player.name}-ը չկարողացավ դուրս գալ R&D Lab-ից։ Մնաց ${player.labTurns} քայլ։` });
    }
    appState.fxLock = false; render(); saveAppState(); return;
  }

  addLog("neutral", { ru: `${player.name} бросает ${dice[0]} и ${dice[1]}.`, en: `${player.name} rolls ${dice[0]} and ${dice[1]}.`, hy: `${player.name}-ը նետում է ${dice[0]} և ${dice[1]}։` });
  await movePlayerAnimated(player, dice[0] + dice[1]);
  resolveTile(player);
  appState.fxLock = false;
  render();
  saveAppState();
}

function animateDiceStart() { elements.die1.classList.add("rolling"); elements.die2.classList.add("rolling"); }
function animateDiceResult() {
  return new Promise((resolve) => {
    let ticks = 0;
    const timer = setInterval(() => {
      updateDiceFace(randDie(), randDie());
      ticks += 1;
      if (ticks >= 10) {
        clearInterval(timer);
        const result = [randDie(), randDie()];
        updateDiceFace(result[0], result[1]);
        elements.die1.classList.remove("rolling");
        elements.die2.classList.remove("rolling");
        resolve(result);
      }
    }, 120);
  });
}
function updateDiceFace(left, right) { elements.die1.textContent = left; elements.die2.textContent = right; elements.diceTotal.textContent = left === "-" ? "-" : `${left} + ${right} = ${Number(left) + Number(right)}`; }
function randDie() { return 1 + Math.floor(Math.random() * 6); }

async function movePlayerAnimated(player, steps) {
  const game = currentGame();
  for (let step = 0; step < steps; step += 1) {
    await wait(MOVE_DELAY);
    player.position = (player.position + 1) % game.board.length;
    if (player.position === 0) {
      player.money += PASS_START_BONUS;
      addLog("positive", { ru: `${player.name} пересекает Launch Pad и получает ${formatMoney(PASS_START_BONUS)}.`, en: `${player.name} crosses Launch Pad and gains ${formatMoney(PASS_START_BONUS)}.`, hy: `${player.name}-ը անցնում է Launch Pad-ը և ստանում ${formatMoney(PASS_START_BONUS)}։` });
    }
    render();
  }
}

function resolveTile(player) {
  const game = currentGame();
  const tile = game.board[player.position];
  game.pendingAction = "resolveCell";
  if (tile.type === "asset") {
    if (!tile.ownerId) {
      addLog("neutral", { ru: `${player.name} вышел на свободный актив "${tile.name}".`, en: `${player.name} lands on free asset "${tile.name}".`, hy: `${player.name}-ը կանգնում է ազատ "${tile.name}" ակտիվի վրա։` });
      return;
    }
    if (tile.ownerId === player.id) {
      addLog("positive", { ru: `${player.name} вошёл в свой сектор "${tile.name}".`, en: `${player.name} enters own sector "${tile.name}".`, hy: `${player.name}-ը մտնում է իր "${tile.name}" սեկտորը։` });
      return;
    }
    chargeRent(player, tile);
    game.pendingAction = "endTurn";
    return;
  }
  if (tile.type === "event") { runEvent(player); game.pendingAction = "endTurn"; return; }
  if (tile.type === "tax") { applyPayment(player, tile.amount, { ru: `${player.name} платит инфраструктурный налог ${formatMoney(tile.amount)}.`, en: `${player.name} pays infrastructure tax ${formatMoney(tile.amount)}.`, hy: `${player.name}-ը վճարում է ենթակառուցվածքային հարկ ${formatMoney(tile.amount)}։` }); game.pendingAction = "endTurn"; return; }
  if (tile.type === "lab") { player.labTurns = 2; game.pendingAction = "labChoice"; addLog("negative", { ru: `${player.name} отправлен в R&D Lab на 2 хода.`, en: `${player.name} is sent to R&D Lab for 2 turns.`, hy: `${player.name}-ը ուղարկվում է R&D Lab 2 քայլով։` }); return; }
  if (tile.type === "court") { runCourt(player); game.pendingAction = "endTurn"; return; }
  addLog("positive", { ru: `${player.name} усиливает позиции на Launch Pad.`, en: `${player.name} strengthens the Launch Pad position.`, hy: `${player.name}-ը ուժեղացնում է Launch Pad դիրքը։` });
  game.pendingAction = "endTurn";
}

function runEvent(player) {
  const card = events[Math.floor(Math.random() * events.length)];
  addLog(card.tone, { ru: `${player.name}: ${card.text.ru}`, en: `${player.name}: ${card.text.en}`, hy: `${player.name}: ${card.text.hy}` });
  if (card.effect.type === "cash") {
    if (card.effect.amount >= 0) player.money += card.effect.amount;
    else applyPayment(player, Math.abs(card.effect.amount), { ru: `${player.name} теряет ${formatMoney(Math.abs(card.effect.amount))}.`, en: `${player.name} loses ${formatMoney(Math.abs(card.effect.amount))}.`, hy: `${player.name}-ը կորցնում է ${formatMoney(Math.abs(card.effect.amount))}։` });
  }
  if (card.effect.type === "buff") player.buffs.push(card.effect.buff);
  if (card.effect.type === "skip") player.skipTurns += card.effect.turns;
  if (card.effect.type === "perAsset") player.money += ownedTiles(player.id).length * card.effect.amount;
  if (card.effect.type === "levelFee") {
    const levelTwo = ownedTiles(player.id).filter((tile) => tile.level >= 2).length;
    if (levelTwo > 0) applyPayment(player, levelTwo * card.effect.amount, { ru: `${player.name} платит ${formatMoney(levelTwo * card.effect.amount)} за перегрев сектора.`, en: `${player.name} pays ${formatMoney(levelTwo * card.effect.amount)} for sector overheating.`, hy: `${player.name}-ը վճարում է ${formatMoney(levelTwo * card.effect.amount)} ոլորտի գերտաքացման համար։` });
  }
  if (card.effect.type === "shield") player.shield = true;
}

function runCourt(player) {
  const game = currentGame();
  const rivals = game.players.filter((item) => !item.bankrupt && item.id !== player.id);
  const qualified = !player.secretCourtUsed && ownedTiles(player.id).length >= 3 && player.money >= 350;
  if (!qualified || !rivals.length) {
    addLog("neutral", { ru: `${player.name} входит в Digital Court, но секретное условие не выполнено.`, en: `${player.name} enters Digital Court but the secret condition is not met.`, hy: `${player.name}-ը մտնում է Digital Court, բայց գաղտնի պայմանը կատարված չէ։` });
    return;
  }
  const target = rivals.sort((a, b) => totalAssetsValue(b) - totalAssetsValue(a))[0];
  player.secretCourtUsed = true;
  bankruptPlayer(target, { ru: `${player.name} обнуляет ${target.name} через Digital Court.`, en: `${player.name} wipes out ${target.name} through Digital Court.`, hy: `${player.name}-ը ոչնչացնում է ${target.name}-ին Digital Court-ի միջոցով։` });
}

function totalAssetsValue(player) {
  return ownedTiles(player.id).reduce((sum, tile) => sum + tile.price + tile.upgradeCost.slice(0, tile.level).reduce((acc, item) => acc + item, 0), 0);
}

function applyPayment(player, amount, logText, receiver) {
  player.money -= amount;
  if (receiver) receiver.money += amount;
  addLog("negative", logText);
  if (player.money < 0) recoverOrBankrupt(player);
}

function recoverOrBankrupt(player) {
  while (player.money < 0) {
    const assets = ownedTiles(player.id).sort((a, b) => (b.price + b.level * 50) - (a.price + a.level * 50));
    if (!assets.length) { bankruptPlayer(player, { ru: `${player.name} больше не может закрывать обязательства и банкротится.`, en: `${player.name} can no longer cover obligations and goes bankrupt.`, hy: `${player.name}-ը այլևս չի կարողանում փակել պարտավորությունները և սնանկանում է։` }); return; }
    sellAssetToBank(player, assets[0], { ru: `${player.name} распродаёт "${assets[0].name}" ради ликвидности.`, en: `${player.name} liquidates "${assets[0].name}" for liquidity.`, hy: `${player.name}-ը վաճառում է "${assets[0].name}" իրացվելիության համար։` });
  }
}

function sellAssetToBank(player, tile, reason) {
  const refund = Math.floor((tile.price + tile.upgradeCost.slice(0, tile.level).reduce((sum, item) => sum + item, 0)) * 0.5);
  player.money += refund;
  tile.ownerId = null;
  tile.level = 0;
  tile.investors = [];
  currentGame().players.forEach((item) => { item.investments = item.investments.filter((inv) => inv.tileId !== tile.id); });
  addLog("negative", { ru: `${reason.ru} Возврат ${formatMoney(refund)}.`, en: `${reason.en} Refund ${formatMoney(refund)}.`, hy: `${reason.hy} Վերադարձ ${formatMoney(refund)}։` });
}

function chargeRent(player, tile) {
  const owner = currentGame().players.find((item) => item.id === tile.ownerId);
  let rent = tile.rents[tile.level];
  if (owner.buffs.includes("doubleIncome")) { rent *= 2; owner.buffs = owner.buffs.filter((buff) => buff !== "doubleIncome"); }
  if (player.shield) {
    player.shield = false;
    addLog("positive", { ru: `${player.name} гасит арендный удар по "${tile.name}" киберщитом.`, en: `${player.name} blocks the rent hit on "${tile.name}" with a cyber shield.`, hy: `${player.name}-ը կասեցնում է "${tile.name}"-ի վարձավճարը կիբերվահանով։` });
    return;
  }
  applyPayment(player, rent, { ru: `${player.name} платит ${formatMoney(rent)} владельцу "${tile.name}".`, en: `${player.name} pays ${formatMoney(rent)} to the owner of "${tile.name}".`, hy: `${player.name}-ը վճարում է ${formatMoney(rent)} "${tile.name}"-ի տիրոջը։` }, owner);
}

function canUpgrade(player, tile) { return tile.level < 2 && player.money >= tile.upgradeCost[tile.level]; }

function buyAsset() {
  const game = currentGame();
  const player = getCurrentPlayer();
  const tile = game.board[player.position];
  if (tile.type !== "asset" || tile.ownerId || player.money < tile.price) return;
  player.money -= tile.price;
  tile.ownerId = player.id;
  addLog("positive", { ru: `${player.name} покупает "${tile.name}" за ${formatMoney(tile.price)}.`, en: `${player.name} buys "${tile.name}" for ${formatMoney(tile.price)}.`, hy: `${player.name}-ը գնում է "${tile.name}"-ը ${formatMoney(tile.price)}-ով։` });
  triggerPurchaseFx();
  game.pendingAction = "endTurn";
  render();
  saveAppState();
  syncGameState(localizeText({ ru: `${player.name} покупает ${tile.name}.`, en: `${player.name} buys ${tile.name}.`, hy: `${player.name}-ը գնում է ${tile.name}-ը։` })).catch(() => {});
}

function triggerPurchaseFx() {
  elements.purchaseBurst.classList.remove("active");
  void elements.purchaseBurst.offsetWidth;
  elements.purchaseBurst.classList.add("active");
}

function upgradeAsset() {
  const game = currentGame();
  const player = getCurrentPlayer();
  const tile = game.board[player.position];
  if (tile.type !== "asset" || tile.ownerId !== player.id || !canUpgrade(player, tile)) return;
  const cost = tile.upgradeCost[tile.level];
  player.money -= cost;
  tile.level += 1;
  addLog("positive", { ru: `${player.name} усиливает "${tile.name}" до уровня ${tile.level} за ${formatMoney(cost)}.`, en: `${player.name} upgrades "${tile.name}" to level ${tile.level} for ${formatMoney(cost)}.`, hy: `${player.name}-ը արդիականացնում է "${tile.name}"-ը մինչև ${tile.level} մակարդակ ${formatMoney(cost)}-ով։` });
  triggerPurchaseFx();
  game.pendingAction = "endTurn";
  render();
  saveAppState();
  syncGameState(localizeText({ ru: `${player.name} улучшает ${tile.name}.`, en: `${player.name} upgrades ${tile.name}.`, hy: `${player.name}-ը բարելավում է ${tile.name}-ը։` })).catch(() => {});
}

function canInvest(player, tile) { return player.money >= Math.floor(tile.price * 0.35) && !tile.investors.includes(player.id); }

function investAsset() {
  const game = currentGame();
  const player = getCurrentPlayer();
  const tile = game.board[player.position];
  if (tile.type !== "asset" || !tile.ownerId || tile.ownerId === player.id || !canInvest(player, tile)) return;
  const amount = Math.floor(tile.price * 0.35);
  player.money -= amount;
  tile.investors.push(player.id);
  player.investments.push({ tileId: tile.id, share: 20 });
  addLog("positive", { ru: `${player.name} заходит инвестором в "${tile.name}" на ${formatMoney(amount)}.`, en: `${player.name} enters "${tile.name}" as an investor for ${formatMoney(amount)}.`, hy: `${player.name}-ը մտնում է "${tile.name}" որպես ներդրող՝ ${formatMoney(amount)}-ով։` });
  game.pendingAction = "endTurn";
  render();
  saveAppState();
  syncGameState(localizeText({ ru: `${player.name} инвестирует в ${tile.name}.`, en: `${player.name} invests in ${tile.name}.`, hy: `${player.name}-ը ներդրում է անում ${tile.name}-ում։` })).catch(() => {});
}

function bailFromLab() {
  const game = currentGame();
  const player = getCurrentPlayer();
  if (player.labTurns > 0 && player.money >= LAB_BAIL_COST) {
    player.money -= LAB_BAIL_COST;
    player.labTurns = 0;
    game.pendingAction = null;
    addLog("negative", { ru: `${player.name} платит ${formatMoney(LAB_BAIL_COST)} и выходит из R&D Lab.`, en: `${player.name} pays ${formatMoney(LAB_BAIL_COST)} and exits R&D Lab.`, hy: `${player.name}-ը վճարում է ${formatMoney(LAB_BAIL_COST)} և դուրս գալիս R&D Lab-ից։` });
    render();
    saveAppState();
    syncGameState(localizeText({ ru: `${player.name} выходит из R&D Lab.`, en: `${player.name} exits R&D Lab.`, hy: `${player.name}-ը դուրս է գալիս R&D Lab-ից։` })).catch(() => {});
  }
}

function bankruptPlayer(player, text) {
  player.bankrupt = true;
  player.money = 0;
  currentGame().board.forEach((tile) => {
    if (tile.ownerId === player.id) { tile.ownerId = null; tile.level = 0; tile.investors = []; }
  });
  addLog("negative", text);
  checkVictory();
}

function checkVictory() {
  const game = currentGame();
  const alive = game.players.filter((player) => !player.bankrupt);
  if (alive.length === 1 && game.players.filter((player) => player.id !== alive[0].id).every((player) => player.bankrupt && player.money <= 0)) {
    game.winnerId = alive[0].id;
    addLog("positive", { ru: `${alive[0].name} остаётся единственным архитектором цифровой экономики.`, en: `${alive[0].name} becomes the only architect of the digital economy.`, hy: `${alive[0].name}-ը դառնում է թվային տնտեսության միակ ճարտարապետը։` });
  }
}

function endTurn() {
  const game = currentGame();
  if (!game || game.winnerId) return;
  game.pendingAction = null;
  game.dice = null;
  const current = getCurrentPlayer();
  current.pressureUsed = false;
  current.dealUsed = false;
  updateDiceFace("-", "-");

  let nextIndex = game.currentPlayerIndex;
  let wrapped = false;
  do {
    nextIndex = (nextIndex + 1) % game.players.length;
    if (nextIndex === 0) wrapped = true;
  } while (game.players[nextIndex].bankrupt);

  game.currentPlayerIndex = nextIndex;
  if (wrapped) game.round += 1;

  const player = getCurrentPlayer();
  if (player.skipTurns > 0) {
    player.skipTurns -= 1;
    addLog("negative", { ru: `${player.name} пропускает ход по требованию рынка.`, en: `${player.name} skips a turn due to market pressure.`, hy: `${player.name}-ը բաց է թողնում քայլը շուկայի ճնշման պատճառով։` });
    endTurn();
    return;
  }

  render();
  saveAppState();
  if (player.isAi) window.setTimeout(runAiTurn, TRANSITIONS_DELAY);
}

async function runAiTurn() {
  const game = currentGame();
  const player = getCurrentPlayer();
  if (!game || game.winnerId || !player.isAi || appState.fxLock) return;
  if (!game.pendingAction || player.labTurns > 0) await rollDiceTurn();
  const tile = game.board[player.position];
  if (game.pendingAction === "resolveCell" && tile.type === "asset") {
    if (!tile.ownerId && player.money >= tile.price + 160) buyAsset();
    else if (tile.ownerId === player.id && canUpgrade(player, tile) && player.money >= tile.upgradeCost[tile.level] + 180) upgradeAsset();
    else if (tile.ownerId && tile.ownerId !== player.id && canInvest(player, tile) && tile.level >= 1) investAsset();
    else { game.pendingAction = "endTurn"; render(); }
  }
  if (!player.dealUsed && ownedTiles(player.id).length && Math.random() > 0.7) createAiDeal(player);
  if (!player.pressureUsed && player.money >= 120 && Math.random() > 0.74) applyPressure(player);
  if (game.pendingAction === "labChoice" || game.pendingAction === "endTurn") window.setTimeout(endTurn, TRANSITIONS_DELAY);
}

function sendDealOffer() {
  const game = currentGame();
  const player = getCurrentPlayer();
  const dealType = elements.dealType.value;
  const targetId = elements.dealTarget.value;
  const assetId = elements.dealAsset.value;
  const price = Number(elements.dealPrice.value);
  const tile = game.board.find((item) => item.id === assetId);
  const target = game.players.find((item) => item.id === targetId);
  if (!tile || !target || player.dealUsed || price <= 0) return;
  if (dealType === "sell" && tile.ownerId !== player.id) return;
  if (dealType === "buyout" && tile.ownerId !== target.id) return;

  const offer = {
    id: game.dealCounter++,
    fromId: player.id,
    toId: target.id,
    dealType,
    assetId: tile.id,
    assetName: tile.name,
    price
  };
  game.pendingDeals.push(offer);
  player.dealUsed = true;
  addLog("neutral", {
    ru: dealType === "buyout"
      ? `${player.name} отправляет ${target.name} оффер на выкуп "${tile.name}" за ${formatMoney(price)}.`
      : `${player.name} отправляет ${target.name} оффер на "${tile.name}" за ${formatMoney(price)}.`,
    en: dealType === "buyout"
      ? `${player.name} sends ${target.name} a buyout offer for "${tile.name}" at ${formatMoney(price)}.`
      : `${player.name} sends ${target.name} an offer for "${tile.name}" at ${formatMoney(price)}.`,
    hy: dealType === "buyout"
      ? `${player.name}-ը ${target.name}-ին ուղարկում է "${tile.name}"-ի գնման առաջարկ ${formatMoney(price)}-ով։`
      : `${player.name}-ը ${target.name}-ին ուղարկում է "${tile.name}"-ի առաջարկ ${formatMoney(price)}-ով։`
  });
  render();
  saveAppState();
  closeDealDialog();

  if (target.isAi) {
    window.setTimeout(() => resolveAiDeal(offer.id), 900);
  }
}

function resolveAiDeal(dealId) {
  const game = currentGame();
  const offer = game.pendingDeals.find((item) => item.id === dealId);
  if (!offer) return;
  const buyer = offer.dealType === "buyout"
    ? game.players.find((item) => item.id === offer.fromId)
    : game.players.find((item) => item.id === offer.toId);
  const tile = game.board.find((item) => item.id === offer.assetId);
  const fairPrice = tile.price + tile.upgradeCost.slice(0, tile.level).reduce((sum, value) => sum + value, 0);
  if (buyer.money >= offer.price && offer.price <= fairPrice * 1.2) {
    acceptDeal(offer.id, true);
  } else {
    rejectDeal(offer.id, true);
  }
}

function acceptDeal(dealId, silent = false) {
  const game = currentGame();
  const offerIndex = game.pendingDeals.findIndex((item) => item.id === dealId);
  if (offerIndex === -1) return;
  const offer = game.pendingDeals[offerIndex];
  const seller = offer.dealType === "buyout"
    ? game.players.find((item) => item.id === offer.toId)
    : game.players.find((item) => item.id === offer.fromId);
  const buyer = offer.dealType === "buyout"
    ? game.players.find((item) => item.id === offer.fromId)
    : game.players.find((item) => item.id === offer.toId);
  const tile = game.board.find((item) => item.id === offer.assetId);
  if (!tile || tile.ownerId !== seller.id || buyer.money < offer.price) {
    game.pendingDeals.splice(offerIndex, 1);
    render();
    saveAppState();
    return;
  }

  buyer.money -= offer.price;
  seller.money += offer.price;
  tile.ownerId = buyer.id;
  tile.investors = tile.investors.filter((id) => id !== buyer.id);
  game.pendingDeals.splice(offerIndex, 1);
  addLog("positive", {
    ru: offer.dealType === "buyout"
      ? `${seller.name} соглашается на выкуп, и ${buyer.name} получает "${tile.name}" за ${formatMoney(offer.price)}.`
      : `${buyer.name} принимает сделку и выкупает "${tile.name}" за ${formatMoney(offer.price)}.`,
    en: offer.dealType === "buyout"
      ? `${seller.name} accepts the buyout, and ${buyer.name} gets "${tile.name}" for ${formatMoney(offer.price)}.`
      : `${buyer.name} accepts the deal and buys "${tile.name}" for ${formatMoney(offer.price)}.`,
    hy: offer.dealType === "buyout"
      ? `${seller.name}-ը համաձայնում է վաճառել, և ${buyer.name}-ը ստանում է "${tile.name}"-ը ${formatMoney(offer.price)}-ով։`
      : `${buyer.name}-ը ընդունում է գործարքը և գնում "${tile.name}"-ը ${formatMoney(offer.price)}-ով։`
  });
  triggerPurchaseFx();
  const pendingCard = elements.pendingDeals.firstElementChild;
  if (pendingCard) pendingCard.classList.add("accepted");
    render();
    saveAppState();
  syncGameState(localizeText({ ru: `${buyer.name} принимает сделку.`, en: `${buyer.name} accepts the deal.`, hy: `${buyer.name}-ը ընդունում է գործարքը։` })).catch(() => {});
}

function rejectDeal(dealId, silent = false) {
  const game = currentGame();
  const offerIndex = game.pendingDeals.findIndex((item) => item.id === dealId);
  if (offerIndex === -1) return;
  const offer = game.pendingDeals[offerIndex];
  const seller = game.players.find((item) => item.id === offer.fromId);
  const buyer = game.players.find((item) => item.id === offer.toId);
  game.pendingDeals.splice(offerIndex, 1);
  addLog("negative", {
    ru: `${buyer.name} отклоняет предложение ${seller.name} по "${offer.assetName}".`,
    en: `${buyer.name} rejects ${seller.name}'s offer for "${offer.assetName}".`,
    hy: `${buyer.name}-ը մերժում է ${seller.name}-ի "${offer.assetName}" առաջարկը։`
  });
  if (!silent) {
    render();
    saveAppState();
    syncGameState(localizeText({ ru: `${buyer.name} отклоняет сделку.`, en: `${buyer.name} rejects the deal.`, hy: `${buyer.name}-ը մերժում է գործարքը։` })).catch(() => {});
  }
}

function createAiDeal(player) {
  const game = currentGame();
  const assets = ownedTiles(player.id);
  const buyers = game.players.filter((item) => !item.bankrupt && item.id !== player.id);
  if (!assets.length || !buyers.length) return;
  const tile = assets[0];
  const buyer = buyers.sort((a, b) => b.money - a.money)[0];
  const price = Math.floor(tile.price * 1.15);
  const offer = { id: game.dealCounter++, fromId: player.id, toId: buyer.id, assetId: tile.id, assetName: tile.name, price };
  game.pendingDeals.push(offer);
  player.dealUsed = true;
  addLog("neutral", {
    ru: `${player.name} начинает торг и предлагает "${tile.name}" игроку ${buyer.name}.`,
    en: `${player.name} opens negotiation and offers "${tile.name}" to ${buyer.name}.`,
    hy: `${player.name}-ը սկսում է բանակցություն և առաջարկում "${tile.name}"-ը ${buyer.name}-ին։`
  });
  if (buyer.isAi) window.setTimeout(() => resolveAiDeal(offer.id), 700);
}

function applyPressure(actor = getCurrentPlayer()) {
  const game = currentGame();
  const targetId = actor.isAi ? game.players.filter((item) => !item.bankrupt && item.id !== actor.id).sort((a, b) => b.money - a.money)[0]?.id : elements.dealTarget.value;
  const target = game.players.find((item) => item.id === targetId);
  if (!target || actor.pressureUsed || actor.money < 120) return;

  actor.money -= 120;
  actor.pressureUsed = true;
  const hit = Math.min(target.money, Math.max(120, Math.floor(target.money * 0.15) + Math.floor(Math.random() * 40)));
  if (target.money > 160) {
    target.money -= hit;
    target.skipTurns += 1;
    addLog("negative", {
      ru: `${actor.name} запускает давление на ${target.name}. Тот теряет ${formatMoney(hit)} и пропускает следующий ход.`,
      en: `${actor.name} applies pressure to ${target.name}. The target loses ${formatMoney(hit)} and skips the next turn.`,
      hy: `${actor.name}-ը ճնշում է գործադրում ${target.name}-ի վրա։ Թիրախը կորցնում է ${formatMoney(hit)} և բաց է թողնում հաջորդ քայլը։`
    });
  } else {
    target.money = Math.max(0, target.money - 90);
    target.skipTurns += 2;
    addLog("negative", {
      ru: `${actor.name} политически душит ${target.name}. Тот теряет ликвидность и вылетает из темпа на 2 хода.`,
      en: `${actor.name} politically strangles ${target.name}. The target loses liquidity and drops out for 2 turns.`,
      hy: `${actor.name}-ը քաղաքականորեն խեղդում է ${target.name}-ին։ Թիրախը կորցնում է իրացվելիություն և 2 քայլ դուրս է մնում տեմպից։`
    });
  }
  if (target.money < 0) recoverOrBankrupt(target);
  render();
  saveAppState();
  syncGameState(localizeText({ ru: `${actor.name} применяет давление к ${target.name}.`, en: `${actor.name} applies pressure to ${target.name}.`, hy: `${actor.name}-ը ճնշում է գործադրում ${target.name}-ի վրա։` })).catch(() => {});
}

function logout() { appState.user = null; appState.screen = "landing"; saveAppState(); render(); }
function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

document.addEventListener("click", (event) => {
  const navTarget = event.target.closest("[data-nav]");
  if (!navTarget) return;
  const target = navTarget.dataset.nav;
  if (target === "setup" && appState.user) {
    const playerField = elements.setupForm.elements.playerName;
    if (playerField) playerField.value = appState.user.name;
  }
  navigate(target);
});

elements.languageSelect.addEventListener("change", () => { appState.language = elements.languageSelect.value; render(); saveAppState(); });
elements.themeSelect.addEventListener("change", () => { appState.theme = elements.themeSelect.value; render(); saveAppState(); });
elements.loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(elements.loginForm);
  try {
    await handleAuth(form.get("username").trim(), form.get("password"), "login");
  } catch (error) {
    alert("Не удалось войти. Проверь логин и пароль.");
  }
});
elements.registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(elements.registerForm);
  try {
    await handleAuth(form.get("username").trim(), form.get("password"), "register");
  } catch (error) {
    alert("Не удалось зарегистрироваться. Возможно, такой пользователь уже существует.");
  }
});
elements.setupForm.addEventListener("submit", (event) => { event.preventDefault(); startGameFromSetup(new FormData(elements.setupForm)); });
elements.newGameButton.addEventListener("click", async () => {
  const playerField = elements.setupForm.elements.playerName;
  if (playerField) playerField.value = appState.user?.name || "Founder Prime";
  if (appState.authToken) {
    await createOnlineSession().catch(() => {});
  }
  navigate("setup");
});
elements.continueGameButton.addEventListener("click", () => { if (!appState.game) appState.game = createGame(defaultGameConfig(appState.user?.name || "Founder Prime")); navigate("game"); });
elements.logoutButton.addEventListener("click", logout);
elements.backToLobbyButton.addEventListener("click", () => navigate("lobby"));
elements.rollButton.addEventListener("click", rollDiceTurn);
elements.buyButton.addEventListener("click", buyAsset);
elements.upgradeButton.addEventListener("click", upgradeAsset);
elements.investButton.addEventListener("click", investAsset);
elements.bailButton.addEventListener("click", bailFromLab);
elements.endTurnButton.addEventListener("click", endTurn);
elements.sendDealButton.addEventListener("click", sendDealOffer);
elements.openDealModalButton.addEventListener("click", openDealDialog);
elements.closeDealModalButton.addEventListener("click", closeDealDialog);
elements.pressureButton.addEventListener("click", () => applyPressure());
elements.dealType.addEventListener("change", updateDealAssetOptions);
elements.dealTarget.addEventListener("change", updateDealAssetOptions);

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-deal-action]");
  if (!button) return;
  const dealId = Number(button.dataset.dealId);
  if (button.dataset.dealAction === "accept") acceptDeal(dealId);
  if (button.dataset.dealAction === "reject") rejectDeal(dealId);
});

if (appState.user && !appState.game) appState.game = createGame(defaultGameConfig(appState.user.name));
render();
saveAppState();
if (appState.screen === "game" && appState.game && getCurrentPlayer().isAi) window.setTimeout(runAiTurn, TRANSITIONS_DELAY);
