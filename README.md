
# Hailey's Recipes

Hailey’s Recipes is a recipe website I built as part of my web development diploma. It's a simple site where you can search and explore different recipes.

---

##  What This Project Is

This website lets you:
- **Search for recipes** using keywords (like "chicken" or "vegan")
- **Filter recipes** by category (like "Dinner", "Breakfast", etc.)
- **View recipes** as cards with a picture, title, short description, and rating

I made it because I wanted to learn how to build websites that are both useful and nice to look at. It’s designed to work well on phones, tablets, and computers.

---

## User Stories

These user stories describe the features and functionality of the application from the end-user’s perspective.

### As a visitor:
- As a user I want to search for a recipe using a keyword, so I can find relevant meal ideas quickly.
- As a user I want to browse popular or featured recipes on the homepage.


---

## What the Website Looks Like & Functionality Overview

### Search Bar
- Right near the top
- Type in what you’re looking for (like “pasta”) and it filters recipes right away

### Recipe Cards
- Each card shows:
  - A recipe picture
  - The name of the recipe
  - A short description
  - A category tag (like “Dinner”)

### Works on Any Device
- Whether you’re on your phone or laptop, the layout adjusts to fit your screen

---

## How It All Works

- **Search bar:** As you type, the list of recipes updates right away — no need to press Enter!
- **Navigation bar:** Has links to different pages like Home, Recipes, and About

---

## Where I Got Design Ideas

- Wep page designs by (https://dribbble.com)
- Markdown Guide by (https://www.markdownguide.org/basic-syntax/)

These helped me figure out how to keep things simple and clean.

---

## API
- There is a charge for the API from https://www.themealdb.com/ therefore I have created a sample JSON file that represents the data.

## Credits and Acknowledge
- Logo by Canva
- Icons by https://icons8.com
- Show instructions and display in a numbered steps sequence credits to StackOverflow and YouTube.
- Sample ingredients list credit to https://www.themealdb.com/
- Spinner design based on CSS Loaders (https://cssloaders.github.io/).
- Tutorial guidance from the Net Ninja’s JavaScript series.

---
## What I Used to Build This

- **HTML** — for the structure
- **CSS** — for the styling
- **JavaScript** — to make it interactive
- **Figma** — to plan the design and layout

---

## Figma Files

<p align="center">
  <strong>Colour Theme</strong><br>
  <img src="documentation/wireframes/figma/colour-theme.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Home Page Wireframe</strong><br>
  <img src="documentation/wireframes/figma/home-page-wireframe.png" alt="Home page Wireframe" width="300" />
</p>   

<p align="center">
  <strong>Recipe Page Wireframe</strong><br>
  <img src="documentation/wireframes/figma/recipe-page-wireframe.png" alt="Recipe page Wireframe" width="300" />
</p>

<p align="center">
  <strong>About Page Wireframe</strong><br>
  <img src="documentation/wireframes/figma/about-page-wireframe.png" alt="About page Wireframe" width="300" />
</p>

<p align="center">
  <strong>Tablet Home Page Wireframe</strong><br>
  <img src="documentation/wireframes/figma/tablet-home-page-wireframe.png" alt="Tablet home page Wireframe" width="300" />
</p>

<p align="center">
  <strong>Mobile Home Page Wireframe</strong><br>
  <img src="documentation/wireframes/figma/mobile-home-page-wireframe.png" alt="Mobile home page Wireframe" width="300" />
</p>

<p align="center">
  <strong>Mobile Recipe Page Wireframe</strong><br>
  <img src="documentation/wireframes/figma/mobile-recipe-page-wireframe.png" alt="Mobile recipe page Wireframe" width="300" />
</p>

<p align="center">
  <strong>Home Page Hi-Fi</strong><br>
  <img src="documentation/wireframes/figma/home-page-hifi.png" alt="Home page hifi" width="300" />
</p>

<p align="center">
  <strong>Recipe Page Hi-Fi</strong><br>
  <img src="documentation/wireframes/figma/recipe-page-hifi.png" alt="Recipe page hifi" width="300" />
</p>

<p align="center">
  <strong>About Page Hi-Fi</strong><br>
  <img src="documentation/wireframes/figma/about-page-hifi.png" alt="About page hifi" width="300" />
</p>

---


## Color Palette

I chose this color palette to create a clean, modern, and inviting recipe browsing experience. Since the focus of the site is on food, I kept the background mostly white to let the vibrant recipe images pop. Here's a breakdown of the reasoning behind the choices:

- **White background**  
  Keeps everything feeling open, fresh, and minimal. It puts the spotlight on the food and makes the interface easier to scan.

- **Orange**  
  This gives a welcoming, energetic feel. Orange is often associated with appetite and positivity. I used it sparingly to highlight actions like filters and “Load More Recipes” without being overwhelming.

- **Dark grey and black text**  
  Used for strong readability and contrast against the white background. Keeps the content professional and easy to navigate.

  ---

## Testing: Manual vs Automated

To make sure this website works correctly and looks great, we need to test it to ensure everything works.

### Manual Testing – Test by Hand

This is when you manually test the website.

#### Use manual testing for:

- User experience (UX)
- Layout and design
- Quick checks
- Open the site
- Try searching recipes
- Click recipe cards
- Submit the contact form

---

### Automated Testing by using code

Automated testing uses tools like Jest to test the logic.

#### Use automated testing for:

- Reusable functions
- Quick, repeatable checks
- Avoiding bugs after changes

---


## Testing 

This test plan checks the website for functionality, usability, and responsiveness.

### 1. Functionality – Does everything work?

1. Open the home page – Recipes load automatically from the JSON file.
2. Use the search bar – Typing something like "chicken" it filters the recipes.
3. Click a recipe card – Takes you to the detailed recipe page.
4. Check the recipe page – Ingredients and steps should show properly.
5. Fill out the contact form – After clicking "Send", an alert appears and the form resets.
6. Click navigation links – Takes you to the correct pages.
7. Loading - Whilst recipes are loading the spinner shows.
8. No data - If there isnt any data or recipes found a message displays highlighting that.

---

### 2. Usability – Is the site easy to use?

1. Look at the layout – Its clean and easy to follow.
2. Try the contact form – Fields are easy to understand and fill.
3. Use the search bar – Results displays and is fast.
4. Click around the nav bar – Displays which page you're on.
5. Check buttons and links – Easy to click.

---

### 3. Responsiveness – Does it work on different screen sizes?

1. Open on a mobile phone – Layout adjusts and be readable.
2. Open on a tablet – Everything looks clean and fits the screen.
3. Open on a desktop – Page fills the space nicely.
4. Use the hamburger menu on small screens – It opens and show the nav links.

---

### 4. Re-check After Changes

1. After making changes to the code or styles, go through these steps again.
2. Make sure search, recipes, and the contact form still work as expected.

### 4. Manual testing Spredsheet

<p align="center">
  <strong>Manual testing Spredsheet</strong><br>
  <img src="documentation/test/manual-test-spreadsheet.png" alt="Colour Theme" width="300" />
</p>

---


## Screenshots of validation

<p align="center">
  <strong>index.html</strong><br>
  <img src="documentation/validation/index.html validation.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>recipe.html</strong><br>
  <img src="documentation/validation/recipe.html validation.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>about.html</strong><br>
  <img src="documentation/validation/about.html validation.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>CSS</strong><br>
  <img src="documentation/validation/css-validation.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>JavaScript</strong><br>
  <img src="documentation/validation/js-validation.png" alt="Colour Theme" width="300" />
</p>

---

## Screenshots of working project

<p align="center">
  <strong>index.html</strong><br>
  <img src="documentation/test/index.html screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>recipe.html</strong><br>
  <img src="documentation/test/recipe.html screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>about.html</strong><br>
  <img src="documentation/test/about.html screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Search Meal</strong><br>
  <img src="documentation/test/search-meal-screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">     
  <strong>Search Ingredient</strong><br>
  <img src="documentation/test/search-ingredient-screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>No Recipe Found Message</strong><br>
  <img src="documentation/test/no-recipe-found-screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>About Message Input Field</strong><br>
  <img src="documentation/test/about-message-screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>About Message Input Field Error</strong><br>
  <img src="documentation/test/about-message-input-error-screenshot.png" alt="Colour Theme" width="300" />
</p>


<p align="center">
  <strong>About Message Sent Alert</strong><br>
  <img src="documentation/test/about-message-sent-screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Recipe Not Selected</strong><br>
  <img src="documentation/test/recipe-not-selected-screenshot.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Responsive 1</strong><br>
  <img src="documentation/test/responsive-screenshot-1.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Responsive 2</strong><br>
  <img src="documentation/test/responsive-screenshot-2.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Responsive 3</strong><br>
  <img src="documentation/test/responsive-screenshot-3.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Responsive 4</strong><br>
  <img src="documentation/test/responsive-screenshot-4.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Responsive 5</strong><br>
  <img src="documentation/test/responsive-screenshot-5.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Chrome Home</strong><br>
  <img src="documentation/test/browser/chrome-home.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Chrome About</strong><br>
  <img src="documentation/test/browser/chrome-about.png" alt="Colour Theme" width="300" />
</p>
 
<p align="center">
  <strong>FireFox Home</strong><br>
  <img src="documentation/test/browser/firefox-home.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>FireFox Recipe</strong><br>
  <img src="documentation/test/browser/firefox-recipe.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Safari Home</strong><br>
  <img src="documentation/test/browser/safari-home.png" alt="Colour Theme" width="300" />
</p>

---

## Deployment GitHub Pages Live Link of working project

I followed these steps to deploy on GitHub Pages.

1. Enabled GitHub Pages:
   - Went to the repository on GitHub.
   - Opened the settings tab.
   - Scrolled to the pages section.
   - Selected the main branch and the /root folder.
   - Clicked Save.

3. Waited for deployment:
   - GitHub took a few seconds to build and deploy the site.
   - The live site was available at: https://basit-dev.github.io/Haileys-Recipes/index.html

---

## Screenshots of Git Commits

<p align="center">
  <strong>Screenshot 1</strong><br>
  <img src="documentation/commits/git-commits-1.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Screenshot 2</strong><br>
  <img src="documentation/commits/git-commits-2.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>Screenshot 3</strong><br>
  <img src="documentation/commits/git-commits-3.png" alt="Colour Theme" width="300" />
</p>

---

## Project Development

### Development Steps & Key Milestones

- **Project Initialization:** Set up the file structure using HTML, CSS, and JavaScript. Organized assets into logical folders.
- **Recipe Card Rendering:** Fetched local JSON data and dynamically generated recipe cards using JavaScript DOM manipulation.
- **Search Implementation:** Created a live search filter that matches user input across recipe names, instructions, and categories.
- **Details Page:** Implemented recipe detail views with ingredients and instructions parsed from structured fields.
- **Form Functionality:** Added a contact form with JavaScript alert feedback and form reset functionality.
- **Loading Experience:** Included a custom loading spinner and conditional rendering for “no results found.”

---

### Challenges & How They Were Overcome

- **Handling Missing Data:** Some recipes had incomplete ingredient lists. Solved by validating each item before displaying it.
- **Sticky Footer on Short Pages:** The footer didn’t align with the bottom on small-content pages. Fixed using a flexbox layout with `min-height: 100vh`.
- **Strict Linting (JSLint):** Faced multiple warnings related to globals, and quotes. Declared globals like `alert` and `URLSearchParams`, and followed ESLint’s formatting rules.
- **Mobile Optimization:** Resolved overlapping layout issues and fine-tuned spacing for various screen sizes using media queries.

---

### Tools & Practices

- **Languages:** HTML5, CSS3, JavaScript.
- **Version Control:** Git and GitHub for repository hosting.
- **Linting:** ESLint used for code quality and consistency.
- **Debugging & Testing:** Browser DevTools for layout testing and responsive design.
- **Deployment:** GitHub Pages for live project hosting.
- **Best Practices:** Used semantic HTML, organized code into logical functions, and included accessibility-friendly labels and alt text.

---

### Performance & Accessibility (LightHouse)

<p align="center">
  <strong>LightHouse Home</strong><br>
  <img src="documentation/test/performance/lighthouse-home.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>LightHouse Recipe</strong><br>
  <img src="documentation/test/performance/lighthouse-recipe.png" alt="Colour Theme" width="300" />
</p>

<p align="center">
  <strong>LightHouse About</strong><br>
  <img src="documentation/test/performance/lighthouse-about.png" alt="Colour Theme" width="300" />
</p>

---

### Installation / Setup Instructions

If someone wants to run this project locally:

1. Clone the repository:
   - git clone https://github.com/Basit-Dev/Haileys-Recipes.git
   - Navigate to the project folder.
   - Open the index.html file in the browser.

--- 

### Additional Content

  **Future Improvements:**
  - Add a backend to store user-submitted recipes.
	- Implement dark mode.
	- Add pagination or lazy loading for large recipe datasets.
	- Improve animations and transitions for smoother UX.    


## How to Use the Website

Using this recipe website is simple and intuitive. Here's how:

1. **Browse Recipes**  
   - On the homepage, a selection of recipes will load automatically.

2. **Search Recipes**  
   - Use the search bar at the top to find recipes by name, ingredient, or category.

3. **View Recipe Details**  
   - Click on any recipe card to open a detailed page with ingredients and instructions.

4. **Check Ingredients**  
   - Tick the checkbox next to ingredients as you collect them.

5. **Follow Cooking Steps**  
   - Instructions are shown in clear, numbered steps.

6. **Use Navigation**  
   - Navigate between pages (Home, Recipes, About) using the header menu.

7. **Submit Contact Form**  
   - Go to the "About" section and fill out the form to send a message.  
   - A confirmation alert will show once submitted.

--- 