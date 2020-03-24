const recipes = [
  {
    id: 1,
    title: "Vegetarian Dishes",
    slug: "best-vegetarian",
    levelId: 2,
    category: "Healty"
  },
  {
    id: 2,
    title: "Healthy Diets",
    slug: "healthy",
    levelId: 2,
    category: "Healty"
  },
  {
    id: 3,
    title: "Weekend Meal Prep",
    slug: "meal-prep",
    levelId: 1,
    category: "Dinners"
  },
  {
    id: 4,
    title: "One Pot",
    slug: "one-pot",
    levelId: 1,
    category: "Dinners"
  },
  {
    id: 5,
    title: "No Bake Desserts",
    slug: "no-bake-desserts",
    levelId: 1,
    category: "Desserts"
  },
  {
    id: 6,
    title: "5 Ingredients or less",
    slug: "5-ingredients-or-less",
    levelId: 3,
    category: "Dinners"
  },
  {
    id: 7,
    title: "Game day",
    slug: "game-day",
    levelId: 1,
    category: "Desserts"
  },
  {
    id: 8,
    title: "Keto",
    slug: "keto",
    levelId: 3,
    category: "Dinners"
  },
  {
    id: 9,
    title: "Romantic dinners",
    slug: "romantic-dinners",
    levelId: 1,
    category: "Dinners"
  },
];

const levels = [
  { id: 1, name: "Hard" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Easy" }
];

const newRecipe = {
  id: null,
  title: "",
  levelId: null,
  category: ""
};

module.exports = {
  newRecipe,
  recipes,
  levels
};
