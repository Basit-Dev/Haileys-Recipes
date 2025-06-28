// Simple variables to remember what's happening
let allRecipes = []; // stores all the recipes we load

// Show the spinner when loading data
function showSpinner() {
  let spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.display = 'flex';
  }
}

// Hide the spinner when loading is done
function hideSpinner() {
  let spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

// Load recipes from the JSON file
async function fetchRecipesFromFile() {
    showSpinner(); 
  try {
    let response = await fetch('assets/data/sample_meals.json'); // Fetch the file
    let data = await response.json();   // Convert to JSON
    return data.meals; // Return the array inside 'meals'
  } catch (error) {
    console.log('Oops, something went wrong while getting recipes!', error);
    return []; // Return an empty array on error
  } finally {
    hideSpinner(); // always hide spinner at the end otherwise it will keep showing the spinner
  }
}


/**
 * Displays recipe cards on the web page.
 * 
 * @param {Array} recipeArray - An array of recipe objects to display.
 */

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