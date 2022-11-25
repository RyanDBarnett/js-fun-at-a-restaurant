function nameMenuItem(item) {
  return "Delicious " + item;
}

function createMenuItem(name, price, type) {
  return {name, price, type};
}

function addIngredients(ingredient, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i] === ingredient) {
      return;
    }
  }
  ingredients.push(ingredient);
}

function formatPrice(price) {
  return "$" + price;
}

function decreasePrice(price) {
  return price - (price * .10);
}

function createRecipe(title, ingredients, type) {
  return {title, ingredients, type};
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
