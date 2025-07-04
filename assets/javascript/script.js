// Simple variables to remember what's happening
let allRecipes = []; // stores all the recipes we load

// Show the spinner when loading data
function showSpinner() {
  let spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.style.display = "flex";
  }
}

// Hide the spinner when loading is done
function hideSpinner() {
  let spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.style.display = "none";
  }
}

// Load recipes from the JSON file
async function fetchRecipesFromFile() {
  showSpinner();
  try {
    let response = await fetch("assets/data/sample_meals.json"); // Fetch the file
    let data = await response.json(); // Convert to JSON
    return data.meals; // Return the array inside 'meals'
  } catch (error) {
    console.log("Oops, something went wrong while getting recipes!", error);
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
  let recipeSection = document.getElementById("recipes");
  let noRecipesFoundMessage = document.getElementById("no-recipes");

  // show no recipes found message
  if (recipeArray.length === 0) {
    noRecipesFoundMessage.style.display = "block";
    return;
  } else {
    noRecipesFoundMessage.style.display = "none";
  }

  // go through each recipe and create a card
  recipeArray.forEach(function (recipe) {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <a href="recipe.html?id=${recipe.idMeal}">
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <div class="badge time">~15 min</div>
        <div class="card-content">
          <h3>${recipe.strMeal}</h3>
          <p>${recipe.strInstructions.slice(0, 85)}...</p>
          <span class="category">${recipe.strCategory}</span>
        </div>
        </a>
    `;

    recipeSection.appendChild(card);
  });
}

/**
 * Get the recipe information that matches the ID.
 *
 * @param {String} recipeId - To display a recipe based of the ID.
 * @returns {String} - Recipe ID
 */

// Get recipe details for the recipe page that matches the ID
async function getRecipeInfo(recipeId) {
  let response = await fetch("assets/data/sample_meals.json");
  let data = await response.json();
  return data.meals.find(function (meal) {
    return meal.idMeal === recipeId;
  });
}

/**
 * Displays recipe information on the recipe page.
 *
 * @param {Array} recipe - An array of recipe information to display.
 */

function showRecipePageDetails(recipe) {
  document.querySelector(".recipe-header h2").textContent = recipe.strMeal;
  document.querySelector(".recipe-image").src = recipe.strMealThumb;

  // Show ingredients
  let ingredientsList = document.querySelector(".ingredients ul");
  ingredientsList.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    let ingredient = recipe["strIngredient" + i];
    let measure = recipe["strMeasure" + i];
    // Trim the checkbox list otherwise 20 ingredients boxes will display
    if (ingredient && ingredient.trim()) {
      let listItem = document.createElement("li");
      listItem.innerHTML = `<input type="checkbox" /> ${measure} ${ingredient}`;
      ingredientsList.appendChild(listItem);
    }
  }

  // Show instructions
  let instructions = recipe.strInstructions;
  let instructionSteps = document.querySelector(".instructions");
  instructionSteps.innerHTML = "<h3>Instructions</h3>";

  let stepDiv = document.createElement("div");
  stepDiv.classList.add("step");
  stepDiv.innerHTML = `
      <div class="circle">${1}</div>
      <p>${instructions}</p>
    `;
  instructionSteps.appendChild(stepDiv);
}

// Start the app when the page is ready
document.addEventListener("DOMContentLoaded", async function () {
  // Check which page has loaded
  let recipeHomePage = document.getElementById("recipes");
  let recipePage = document.querySelector(".recipe-header");

  // If we're on the main recipe list page
  if (recipeHomePage) {
    allRecipes = await fetchRecipesFromFile();
    displayRecipeCards(allRecipes);
  }
  // If we're on the recipe details page
  if (recipePage) {
    let recipeId = new URLSearchParams(window.location.search).get("id");
    if (recipeId) {
      let recipe = await getRecipeInfo(recipeId);
      showRecipePageDetails(recipe);
    }
  }
});
