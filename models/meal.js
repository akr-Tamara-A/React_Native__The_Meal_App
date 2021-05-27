export default class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    compleity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegatarian,
    isLactoseFree,
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.affordability = affordability;
    this.compleity = compleity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegatarian = isVegatarian;
    this.isLactoseFree = isLactoseFree;
  }
}
