/* global document, window, console, fetch, alert, URLSearchParams */

// Simple variables to remember what's happening
let allRecipes = []; // stores all the recipes we load

// Show the spinner when loading data
function showSpinner() {
  const spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.display = 'flex';
  }
}

// Hide the spinner when loading is done
function hideSpinner() {
  const spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

/**
 * Loads recipes from the JSON file.
 * @returns {Promise} A Promise that resolves to an array of recipe objects.
 */

// Load recipes from the JSON file
async function fetchRecipesFromFile() {
  showSpinner();
  try {
    const response = await fetch('assets/data/sample_meals.json');
    const data = await response.json(); // Convert to JSON
    return data.meals; // Return the array inside 'meals'
  } catch (error) {
    console.log('Oops, something went wrong while getting recipes!', error);
    return []; // Return an empty array on error
  } finally {
    hideSpinner();
    // always hide spinner at the end otherwise it will keep showing the spinner
  }
}

/**
 * Displays recipe cards on the web page.
 *
 * @param {Array} recipeArray - An array of recipe objects to display.
 */

// Show the recipes on the page
function displayRecipeCards(recipeArray) {
  const recipeSection = document.getElementById('recipes');
  const noRecipesFoundMessage = document.getElementById('no-recipes');

  recipeSection.innerHTML = '';
  // Clear any old cards for when searching recipes

  // show no recipes found message
  if (recipeArray.length === 0) {
    noRecipesFoundMessage.style.display = 'block';
    return; // Stop here if no recipes found
  }
  noRecipesFoundMessage.style.display = 'none';

  // go through each recipe and create a card
  recipeArray.forEach((recipe) => {
    const card = document.createElement('div');
    card.classList.add('card');

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
  const response = await fetch('assets/data/sample_meals.json');
  const data = await response.json();
  return data.meals.find((meal) => meal.idMeal === recipeId);
}

/**
 * Displays recipe information on the recipe page.
 *
 * @param {Array} recipe - An array of recipe information to display.
 */

function showRecipePageDetails(recipe) {
  document.querySelector('.recipe-header h2').textContent = recipe.strMeal;
  document.querySelector('.recipe-image').src = recipe.strMealThumb;

  // Show ingredients
  const ingredientsList = document.querySelector('.ingredients ul');
  ingredientsList.innerHTML = '';
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    // Trim the checkbox list otherwise 20 ingredients boxes will display
    if (ingredient && ingredient.trim()) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<input type="checkbox" /> ${measure} ${ingredient}`;
      ingredientsList.appendChild(listItem);
    }
  }

  // Show instructions and display in a numbered steps sequence
  // Get the full instruction text from the recipe
  const instructions = recipe.strInstructions;

  // Split the instructions into parts (by newlines or periods REGEX)
  const instructionExtracted = instructions.split(/\r?\n|\.\s+/);

  // Create an empty list to hold the clean INSTRCUTION steps
  const stepList = [];

  // Go through each step and clean it up
  for (let i = 0; i < instructionExtracted.length; i++) {
    const step = instructionExtracted[i].trim(); // remove extra spaces

    if (step.length > 0) {
      stepList.push(step); // only add it if it's not empty
    }
  }

  const instructionSteps = document.querySelector('.instructions');
  instructionSteps.innerHTML = '<h3>Instructions</h3>';

  stepList.forEach((steps, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.classList.add('step');
    stepDiv.innerHTML = `
      <div class="circle">${index + 1}</div>
      <p>${steps}</p>
    `;
    instructionSteps.appendChild(stepDiv);
  });

  // Show meta info
  const metaInfo = document.querySelector('.meta');
  metaInfo.innerHTML = `
    <span>⏱️ ~15 mins</span>
    <span>🍽️ 2 servings</span>
    <span>🌱 ${recipe.strCategory || 'No Category'}</span>
  `; // Display No Category if not available
}

/**
 * Function to find recipes.
 * It listens for typing and shows recipes that match the text.
 */
function searchRecipes() {
  const searchBox = document.getElementById('search-input');

  if (searchBox) {
    searchBox.addEventListener('input', () => {
      // Get what the user typed and make it lowercase
      const searchText = searchBox.value.toLowerCase();

      // Make a new list of recipes that match the search
      const foundRecipes = allRecipes.filter((recipe) => {
        // Include what the user typed
        const name = recipe.strMeal.toLowerCase().includes(searchText);
        const instruction = recipe.strInstructions
          .toLowerCase()
          .includes(searchText);
        const category = recipe.strCategory.toLowerCase().includes(searchText);

        return name || instruction || category;
      });

      // Show the filtered recipes
      displayRecipeCards(foundRecipes);
    });
  }
}

// Start the app when the page is ready
document.addEventListener('DOMContentLoaded', async () => {
  // Check which page has loaded
  const recipeHomePage = document.getElementById('recipes');
  const recipePage = document.querySelector('.recipe-header');

  // If we're on the main recipe list page
  if (recipeHomePage) {
    allRecipes = await fetchRecipesFromFile();
    displayRecipeCards(allRecipes);
    searchRecipes();
  }
  // If we're on the recipe details page
  if (recipePage) {
    const recipeId = new URLSearchParams(window.location.search).get('id');
    if (recipeId) {
      const recipe = await getRecipeInfo(recipeId);
      showRecipePageDetails(recipe);
    }
  }
  // Form submit function
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop actual form submit
      alert('Form sent! Thank you for your message.');
      form.reset(); // Optional: clear the form
    });
  }

  // Highlight the active links in the nav bar
  const currentFile = window.location.pathname.split('/').pop();
  const menuLinks = document.querySelectorAll('#nav-menu a');

  menuLinks.forEach((link) => {
    if (link.getAttribute('href') === currentFile) {
      link.classList.add('active');
    }
  });
});
