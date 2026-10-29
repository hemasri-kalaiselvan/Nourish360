export const SECTION_ICON: Record<string, string> = {
  foods: "🍛", nutrients: "🥬", habits: "⚖️", organs: "🫀", conditions: "📋", symptoms: "🩺", wellness: "🧘",
};

const E: Record<string, Record<string, string>> = {
  foods: {
    "idli": "🍚", "dosa": "🥞", "pongal": "🥣", "upma": "🥣", "ragi": "🌾", "kambu": "🌾", "samai": "🌾",
    "curd-rice": "🍚", "parotta": "🫓", "sambar": "🍲", "rasam": "🍲", "kootu": "🥘", "sundal": "🫘",
    "poriyal": "🥦", "drumstick-leaves": "🌿", "banana-stem": "🌿", "guava": "🍐", "amla": "🍏",
    "groundnuts": "🥜", "coconut": "🥥", "jaggery": "🍯", "curd": "🥛", "egg": "🥚", "fish-curry": "🐟",
    "chicken-65": "🍗", "biryani": "🍛", "vada": "🍩", "payasam": "🍮", "murukku-fried-snacks": "🥨",
    "appam": "🥞", "puttu": "🥥", "adai": "🥞", "pesarattu": "🥞", "kuzhi-paniyaram": "🍡",
    "keerai-masiyal": "🥬", "avial": "🥘", "kozhukattai": "🥟", "buttermilk": "🥛", "tender-coconut-water": "🥥",
  },
  nutrients: {
    "protein": "💪", "fibre": "🌾", "iron": "🩸", "calcium": "🦴", "vitamin-b12": "🧬", "vitamin-d": "☀️", "omega-3": "🐟",
  },
  habits: {
    "frequent-fried-and-sweet-foods": "🍟", "high-salt-intake": "🧂", "sugary-drinks-and-sweet-tea": "🥤",
    "refined-grains-large-portions": "🥖", "reused-frying-oil": "🛢️", "ultra-processed-packaged-foods": "📦",
    "late-night-heavy-meals": "🌙", "low-vegetable-and-fibre-intake": "🥦",
  },
  organs: {
    "liver": "⚖️", "heart": "❤️", "kidneys": "🫘", "gut": "🦠", "brain": "🧠", "bones": "🦴", "skin": "🧴",
  },
  conditions: {
    "fatty-liver": "⚖️", "type-2-diabetes": "🍬", "hypertension": "🩺", "high-cholesterol": "🧈",
    "iron-deficiency-anaemia": "🩸", "overweight-and-obesity": "⚖️", "pcos": "🌸",
  },
  symptoms: {
    "fatigue": "😴", "heartburn": "🔥", "chest-pain": "🚨", "shortness-of-breath": "😮", "headache": "🤕",
    "fever": "🌡️", "diarrhoea-vomiting": "🤢", "constipation": "🚽", "dizziness": "😵",
    "unexplained-weight-loss": "📉", "increased-thirst-urination": "💧", "swollen-feet": "🦶",
  },
  wellness: {
    "daily-walking": "🚶", "strength-basics": "💪", "chair-exercises": "🪑", "stretching-and-mobility": "🤸",
    "exercise-with-health-conditions": "🩺", "sleep-habits": "😴", "yoga-safety-basics": "🧘",
    "mountain-pose-tadasana": "🏔️", "cat-cow-pose": "🐈", "child-pose": "🙇", "relaxation-pose-savasana": "🛌",
    "slow-breathing": "🌬️", "simple-breathing-meditation": "🧘", "body-scan": "🧍", "walking-meditation": "🚶",
    "gratitude-practice": "🙏", "daily-affirmation": "💬",
  },
};

export function emojiFor(section: string, slug: string): string {
  return E[section]?.[slug] ?? SECTION_ICON[section] ?? "🥗";
}
