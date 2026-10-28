const topics = {
  "food-explorer": { kicker: "FOOD", title: "Food Explorer", body: "Explore vegetables, fruits, grains, pulses, nuts, seeds, dairy foods and alternatives, and vegetarian or non-vegetarian meals. Future versions will add local names, portion context, nutrients, allergens, and evidence references." },
  "organ-nutrition": { kicker: "ORGANS", title: "Organ-Based Nutrition", body: "Learn about general dietary patterns that support health across the body. No single food can cleanse or cure an organ. Advice must account for individual health conditions and clinician-prescribed restrictions." },
  "conditions": { kicker: "HEALTH", title: "Health Conditions", body: "Condition pages will provide general information, risk factors, evidence-aware lifestyle guidance, and questions to discuss with a qualified healthcare professional." },
  "food-risks": { kicker: "FOOD HABITS", title: "Food Habits & Health Risks", body: "Frequent excess intake of energy-dense foods high in added sugar or saturated fat may contribute to metabolic risk for some people. The overall eating pattern, portions, activity, and individual factors matter. Fatty liver has multiple possible causes and needs professional assessment." },
  "symptoms": { kicker: "SYMPTOMS", title: "Symptoms & Guidance", body: "A symptom can have many explanations and does not confirm one disease. A future symptom guide will provide general information and reviewed guidance on when to seek routine, urgent, or emergency care. It will not diagnose." },
  "nutrients": { kicker: "NUTRIENTS", title: "Nutrients & Alternatives", body: "Learn about nutrients, common food sources, and practical substitutions. Future guidance will consider allergies, dietary restrictions, and local food options." },
  "wellness": { kicker: "WELLNESS", title: "Exercise, Yoga & Meditation", body: "Explore general movement and relaxation ideas. Choose activities that fit your abilities and health situation, and seek professional guidance when a condition makes exercise uncertain." },
  "affirmations": { kicker: "MINDSET", title: "Positive Affirmations", body: "Positive affirmations can be used as gentle prompts for reflection and daily routines. They are not a substitute for medical or mental-health care." }
};
const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".card")];
const count = document.getElementById("count");
const noResults = document.getElementById("no-results");
let activeFilter = "all";
function filterCards() {
  const query = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const matchesText = card.innerText.toLowerCase().includes(query);
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const visible = matchesText && matchesCategory;
    card.hidden = !visible;
    if (visible) shown++;
  });
  count.textContent = `${shown} topic${shown === 1 ? "" : "s"}`;
  noResults.hidden = shown !== 0;
}
search.addEventListener("input", filterCards);
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === button));
    filterCards();
  });
});
const dialog = document.getElementById("topic-dialog");
document.querySelectorAll("[data-topic]").forEach(button => {
  button.addEventListener("click", () => {
    const topic = topics[button.dataset.topic];
    document.getElementById("dialog-kicker").textContent = topic.kicker;
    document.getElementById("dialog-title").textContent = topic.title;
    document.getElementById("dialog-body").textContent = topic.body;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else alert(`${topic.title}\n\n${topic.body}`);
  });
});
document.getElementById("close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
