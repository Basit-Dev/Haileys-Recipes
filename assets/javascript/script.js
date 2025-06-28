// Simple variables to remember what's happening
let allRecipes = []; // stores all the recipes we load

// Load recipes from the JSON file
async function fetchRecipesFromFile() {
  try {
    let response = await fetch('assets/data/sample_meals.json');
    let data = await response.json();
    return data.meals;
  } catch (error) {
    console.log('Oops, something went wrong while getting recipes!', error);
    return [];
  }
}

// Show the recipes on the page
function displayRecipeCards(recipeArray) {
  let recipeSection = document.getElementById('recipes');

  // go through each recipe and create a card
  recipeArray.forEach(function (recipe) {
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <div class="badge time">~15 min</div>
        <div class="card-content">
          <h3>${recipe.strMeal}</h3>
          <p>${recipe.strInstructions.slice(0, 85)}...</p>
          <span class="category">${recipe.strCategory}</span>
        </div>
    `;

    recipeSection.appendChild(card);
  });
}



// Start the app when the page is ready
document.addEventListener('DOMContentLoaded', async function () {

  // Display the recipes
    allRecipes = await fetchRecipesFromFile();
    displayRecipeCards(allRecipes);
});