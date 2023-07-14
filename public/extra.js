import { processUserMessage, sendUserMessage } from "./chatBot.js";
export function addUniversityLogo() {
  let logoSpace = elememt.querySelector(".rinovateLogoSpace");
  //add multiplication sign
  let theMultiplicationSign = document.createElement("span");
  theMultiplicationSign.textContent = "x";
  theMultiplicationSign.classList.add("multiplicationSign");
  //add the school's logo
}
const navbar = document.querySelector(".chatTitle");

// Variable to keep track of scroll position
let previousScrollPosition = window.pageYOffset;
// Function to handle scroll event
const handleScroll = () => {
  // Get the current scroll position
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > previousScrollPosition) {
    // Scrolling down, add box shadow to the navbar
  } else {
    // Scrolling up, remove box shadow from the navbar
    navbar.style.boxShadow = "none";
  }

  // Update the previous scroll position
  previousScrollPosition = currentScrollPosition;
};

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
