export type Swap = { from: string; fromE: string; to: string; toE: string; why: string; href?: string };

export const SWAPS: Swap[] = [
  { from: "Parotta", fromE: "🫓", to: "Chapati or ragi roti", toE: "🌾", why: "More fibre, less oil", href: "/foods/parotta/" },
  { from: "Murukku, chips", fromE: "🥨", to: "Sundal or roasted channa", toE: "🫘", why: "Protein and fibre, not deep-fried", href: "/foods/sundal/" },
  { from: "Soft drink", fromE: "🥤", to: "Buttermilk", toE: "🥛", why: "No added sugar", href: "/foods/buttermilk/" },
  { from: "Vada", fromE: "🍩", to: "Idli with sambar", toE: "🍚", why: "Steamed, not fried", href: "/foods/idli/" },
  { from: "Fried chicken", fromE: "🍗", to: "Grilled chicken or fish curry", toE: "🐟", why: "Less oil and salt", href: "/foods/chicken-65/" },
  { from: "Ice cream", fromE: "🍨", to: "Fruit with plain curd", toE: "🍌", why: "Less sugar and fat", href: "/habits/frequent-fried-and-sweet-foods/" },
  { from: "Big biryani plate", fromE: "🍛", to: "Half plate and a salad", toE: "🥗", why: "Smaller portion, more veg", href: "/foods/biryani/" },
  { from: "Packaged juice", fromE: "🧃", to: "A whole fruit, like guava", toE: "🍐", why: "Fibre stays in", href: "/foods/guava/" },
  { from: "Very sweet tea", fromE: "☕", to: "Less sugar, bit by bit", toE: "🍵", why: "Your taste adjusts", href: "/habits/sugary-drinks-and-sweet-tea/" },
  { from: "Rice-heavy plate", fromE: "🍚", to: "More veg and dal, some millets", toE: "🥦", why: "Balanced and filling", href: "/habits/refined-grains-large-portions/" },
];
