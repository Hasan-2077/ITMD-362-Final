Project: Limerence – Fashion E-Commerce Landing Page

1. Design Implemented
---------------------
This project implements a landing page for a fictional fashion e-commerce brand called "Limerence". The design is based on a clean, modern layout similar to a clothing brand homepage.

Key visual elements:
- A sticky dark header with navigation links for Women, Men, and Accessories.
- A large full-width hero video showcasing fashion imagery.
- A “New In” section with two full-width image rows for new arrivals.
- Category preview sections for T-Shirts, Jeans, Pants, and Hoodies & Sweatshirts.
- A structured footer with three columns: Shop, Corporate Info, and Help.

The design uses:
- Bodoni Moda and Buenard as the main fonts to create a premium editorial fashion feel.
- A light background (#EEE8E8) with a gold accent color (#FFD209).
- Flexbox for layout in the navbar, category sections, and footer columns.
- Full-bleed images and video using 100vw width and centered with CSS.


2. JavaScript Interactions
--------------------------
The website includes at least three JavaScript-driven interactions:

(1) Back-To-Top Button
- Element: The button with id="back-to-top" anchored in the bottom-right corner.
- Behavior:
  - The button stays hidden at the top of the page.
  - When the user scrolls down more than 300px, the button appears.
  - On click, the page smoothly scrolls back to the top using window.scrollTo with smooth behavior.
- Purpose: Improves user experience by making it easier to return to the top on a long page.

(2) Dark Mode Toggle
- Element: The button with id="dark-mode-toggle" in the navbar.
- Behavior:
  - On click, JavaScript toggles the "dark-mode" class on the <body> element.
  - The CSS for body.dark-mode changes background colors, text colors, and section backgrounds.
  - Links and footer colors are adjusted for readability in dark mode.
- Purpose: Gives users a second visual theme and demonstrates DOM manipulation with classList.

(3) Category Click Interaction
- Elements: All .category cards in the Category Preview and Additional Categories sections.
- Behavior:
  - JavaScript selects all elements with the class "category".
  - When a user clicks on a category card, an alert pops up showing the category name based on the .label span inside it, for example:
    "Browsing: T-Shirts (Coming Soon)"
  - This simulates navigating into a specific product category without actually loading a new page.
- Purpose: Adds a third type of interactivity that responds to user clicks on product categories and shows dynamic content based on the clicked element.


3. Challenges Faced
-------------------
(1) Centering the Logo in the Navbar
- It was tricky to keep the "Limerence" logo centered while also having navigation links on the left and icons (plus the dark mode button) on the right.
- I solved this using Flexbox by giving the left, center, and right parts of the navbar a flex: 1 property so that the logo stays centered between them.

(2) Making the Hero Video and "New In" Images Full Width
- I wanted the hero video and the "New In" image rows to stretch edge-to-edge across the screen, while keeping the rest of the content centered within a max-width.
- To achieve this, I used width: 100vw and margin-left: calc(-50vw + 50%) on those elements so they break out of the centered container and span the full viewport width.

(3) Implementing Dark Mode Cleanly
- It was challenging to keep dark mode styles organized and make sure everything was still readable.
- I solved this by:
  - Only toggling a single "dark-mode" class on the <body>.
  - Writing specific CSS overrides for sections, footer, and text colors under body.dark-mode.
- This kept the JavaScript simple and most of the work in CSS.

(4) Back-to-Top Button Visibility
- I had to figure out when the back-to-top button should appear without being distracting.
- I used window.scrollY in a scroll event listener and a simple condition:
  - If scrollY > 300, show the button.
  - Otherwise, hide it.
- This made the button feel natural when scrolling through the content.


File Structure
--------------
project-folder/
  index.html
  style.css
  script.js
  README.txt
  assets/ (contains images, icons, and video)
