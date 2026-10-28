import { SYMPTOMS } from "./symptoms";
import { EXTRA_ORGANS, EXTRA_CONDITIONS, EXTRA_HABITS } from "./health";
import { FOODS, NUTRIENTS } from "./foods";
// All content here is DRAFT educational text. It must be reviewed by a
// registered dietitian / doctor before public launch (see README).

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  tags?: string[];
  seeDoctor?: string[];
  category?: string;
  diet?: "veg" | "egg" | "non-veg";
  allergens?: string[];
  sections: { heading: string; points: string[] }[];
  redFlags?: string[];
  related?: { section: string; slug: string }[];
  sources: string[];
};

export const SECTIONS: Record<string, { title: string; blurb: string; icon: string }> = {
  foods: { title: "Food Explorer", blurb: "South Indian foods, nutrients and healthier swaps.", icon: "🍛" },
  nutrients: { title: "Nutrients", blurb: "Plain-language guide to key nutrients and where to find them.", icon: "🥬" },
  habits: { title: "Food Habits & Risks", blurb: "How regular eating patterns relate to health.", icon: "⚖️" },
  organs: { title: "Organ Nutrition", blurb: "Everyday food guidance for liver, heart, kidneys, gut and more.", icon: "🫀" },
  conditions: { title: "Health Conditions", blurb: "General information and dietary patterns. Not treatment.", icon: "📋" },
  symptoms: { title: "Symptoms", blurb: "When to wait, when to see a doctor, when to go to emergency.", icon: "🩺" },
  wellness: { title: "Move & Mind", blurb: "Exercise, yoga, meditation and affirmations.", icon: "🧘" },
};

const GENERAL_SOURCES = [
  "ICMR-NIN Dietary Guidelines for Indians (2024)",
  "WHO healthy diet fact sheet",
];

export const DATA: Record<string, Topic[]> = {
  foods: FOODS,
  nutrients: NUTRIENTS,

  habits: [
    {
      slug: "frequent-fried-and-sweet-foods",
      title: "Frequent fried and sweet foods",
      summary: "Regular large amounts of foods high in added sugar, saturated fat or salt can make it harder to maintain metabolic health.",
      tags: ["sugar", "fried", "ice cream", "sweets", "fatty liver", "weight"],
      sections: [
        { heading: "What is known", points: ["Frequent excess calories and diets high in added sugar or saturated fat can contribute to weight gain, insulin resistance and fatty liver in some people.", "Risk depends on the whole diet, portion sizes, body weight, activity, genetics, alcohol and other factors; no single food is the sole cause of a disease."] },
        { heading: "What helps", points: ["Make sweets and fried foods occasional rather than daily.", "Choose smaller portions, and add vegetables, pulses and fruit to meals.", "Prefer water, buttermilk or unsweetened drinks to sugary drinks."] },
        { heading: "Healthier swaps", points: ["Ice cream → fresh fruit, plain curd with fruit.", "Fried chicken → grilled, baked or lightly pan-cooked chicken or fish; more dal and vegetables.", "Packaged sweets → a small portion of a traditional sweet, once in a while."] },
        { heading: "Important", points: ["This page is general information. It does not say any particular food will cause or cure a condition. If you have been told you have a health condition such as fatty liver, ask your doctor or dietitian about diagnosis, monitoring and a plan for you."] },
      ],
      related: [{ section: "conditions", slug: "fatty-liver" }, { section: "organs", slug: "liver" }],
      sources: GENERAL_SOURCES,
    },
    {
      slug: "high-salt-intake",
      title: "High salt intake",
      summary: "Pickles, papads, dry fish, instant foods and restaurant food can add a lot of salt.",
      tags: ["salt", "sodium", "blood pressure", "pickle", "papad"],
      sections: [
        { heading: "What is known", points: ["Diets high in salt are linked with higher blood pressure, which is a risk factor for heart disease and stroke."] },
        { heading: "What helps", points: ["Cook with measured salt; taste before adding more at the table.", "Limit pickles, papads, salted snacks and instant noodles.", "Use lemon, pepper, curry leaves, ginger and spices for flavour."] },
        { heading: "Important", points: ["If you have high blood pressure, heart or kidney disease, follow the salt advice given by your clinician."] },
      ],
      related: [{ section: "organs", slug: "heart" }],
      sources: GENERAL_SOURCES,
    },
  ],

  organs: [
    {
      slug: "liver",
      title: "Liver",
      summary: "Everyday eating habits that support a healthy weight and metabolic health also support liver health.",
      tags: ["liver", "fatty liver", "alcohol", "weight"],
      sections: [
        { heading: "General guidance", points: ["Aim for a healthy body weight through balanced meals and regular activity.", "Limit added sugar, sugary drinks and frequent deep-fried foods.", "Eat more vegetables, pulses, whole grains and fruit.", "Alcohol harms the liver; ask your doctor about what is safe for you."] },
        { heading: "Myths to avoid", points: ["There is no food or drink that reliably 'detoxes' the liver.", "Do not start herbal supplements without medical advice; some can harm the liver."] },
      ],
      related: [{ section: "conditions", slug: "fatty-liver" }],
      redFlags: ["Yellow eyes or skin, dark urine, severe abdominal pain, vomiting blood or black stools: seek medical care urgently."],
      sources: GENERAL_SOURCES,
    },
    {
      slug: "heart",
      title: "Heart",
      summary: "Heart-friendly eating focuses on overall pattern: less salt, less saturated fat, more fibre and plants.",
      tags: ["heart", "cholesterol", "blood pressure", "salt"],
      sections: [
        { heading: "General guidance", points: ["Reduce salt and highly processed foods.", "Choose a variety of vegetables, fruit, pulses, whole grains and nuts.", "Limit frequent deep-fried foods and large portions of red meat or fatty meats.", "Stay active and avoid tobacco."] },
      ],
      related: [{ section: "habits", slug: "high-salt-intake" }],
      redFlags: ["Chest pain or pressure, pain spreading to arm or jaw, sudden breathlessness, fainting: call emergency services immediately."],
      sources: GENERAL_SOURCES,
    },
  ],

  conditions: [
    {
      slug: "fatty-liver",
      title: "Fatty liver",
      summary: "Extra fat stored in liver cells. Often related to metabolic health, and in some people to alcohol.",
      tags: ["liver", "NAFLD", "MASLD", "weight", "diabetes"],
      sections: [
        { heading: "Overview", points: ["Fatty liver is common and often causes no symptoms.", "It has several possible contributors: excess weight, insulin resistance or diabetes, high triglycerides, alcohol, some medicines and other causes.", "It is not the same as hepatitis, cirrhosis or liver cancer. Progression is not inevitable, and risk varies by person."] },
        { heading: "Eating and lifestyle", points: ["Gradual weight loss in people who are overweight can improve liver fat.", "Eat more vegetables, pulses, whole grains and fruit; cut back sugary drinks and frequent fried or sugary foods.", "Regular physical activity, as advised by your doctor."] },
        { heading: "Talk to a clinician", points: ["Staging and follow-up (blood tests, scans) should be interpreted by a doctor.", "Ask about alcohol, medicines and diabetes or cholesterol checks."] },
      ],
      redFlags: ["Yellow eyes or skin, swelling of the belly or legs, vomiting blood, black stools or confusion: seek urgent medical care."],
      related: [{ section: "organs", slug: "liver" }, { section: "habits", slug: "frequent-fried-and-sweet-foods" }],
      sources: GENERAL_SOURCES,
    },
    {
      slug: "type-2-diabetes",
      title: "Type 2 diabetes",
      summary: "A long-term condition in which blood sugar is higher than normal. Diet and activity are important parts of management.",
      tags: ["diabetes", "blood sugar", "rice", "carbohydrate"],
      sections: [
        { heading: "Eating pattern", points: ["Pay attention to portion sizes of rice, tiffin items and sweets.", "Pair carbohydrate foods with vegetables, pulses or protein.", "Choose whole grains and millets where suitable, and limit sugary drinks."] },
        { heading: "Important", points: ["Medicine, insulin and diet plans must be set by your doctor. Do not stop or change medicines because of anything you read here."] },
      ],
      redFlags: ["Very high thirst and urination with drowsiness, vomiting or fruity-smelling breath; or low sugar with sweating, shaking and confusion: seek urgent care."],
      sources: GENERAL_SOURCES,
    },
  ],

  symptoms: SYMPTOMS,

  wellness: [
    {
      slug: "daily-walking",
      title: "Daily walking",
      summary: "A simple, low-cost way to be more active.",
      tags: ["exercise", "walking", "activity"],
      sections: [
        { heading: "General guidance", points: ["Adults are generally advised to aim for around 150 minutes a week of moderate activity; start with what you can do and build up gradually.", "Short walks after meals are an easy habit to start."] },
        { heading: "Cautions", points: ["If you have heart disease, joint problems, are pregnant or have not been active for a long time, check with your doctor first.", "Stop and seek care if you get chest pain, severe breathlessness or dizziness."] },
      ],
      sources: ["WHO physical activity guidelines"],
    },
    {
      slug: "simple-breathing-meditation",
      title: "Simple breathing meditation",
      summary: "A few quiet minutes of slow breathing can help with relaxation and stress.",
      tags: ["meditation", "stress", "breathing", "yoga"],
      sections: [
        { heading: "Try this (5 minutes)", points: ["Sit comfortably with your back supported.", "Breathe in gently through the nose for about 4 counts and out for about 6.", "When your mind wanders, notice it and return to the breath."] },
        { heading: "Important", points: ["This is a relaxation practice, not a treatment for any disease. If you feel persistently low, anxious or unable to cope, please talk to a doctor or counsellor."] },
      ],
      sources: ["General wellness practice; clinician review pending"],
    },
    {
      slug: "daily-affirmation",
      title: "Daily affirmation",
      summary: "Kind, realistic self-talk can support motivation for healthy habits.",
      tags: ["affirmation", "motivation", "mind"],
      sections: [
        { heading: "Examples", points: ["“I am making small choices that look after my health.”", "“Progress matters more than perfection.”"] },
      ],
      sources: ["General wellness practice"],
    },
  ],
};

DATA.organs.push(...EXTRA_ORGANS);
DATA.conditions.push(...EXTRA_CONDITIONS);
DATA.habits.push(...EXTRA_HABITS);

export function getTopic(section: string, slug: string) {
  return DATA[section]?.find((t) => t.slug === slug);
}

export const ALL_ITEMS = Object.entries(DATA).flatMap(([section, topics]) =>
  topics.map((t) => ({
    section,
    slug: t.slug,
    title: t.title,
    summary: t.summary,
    haystack: [t.title, t.summary, ...(t.tags ?? []), t.category ?? ""].join(" ").toLowerCase(),
  }))
);
