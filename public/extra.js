import { processUserMessage, sendUserMessage } from "./chatBot.js";

const navbar = document.querySelector(".chatTitle");

// Variable to keep track of scroll position
let previousScrollPosition = window.pageYOffset;
console.log("sduper");
// Function to handle scroll event
const handleScroll = () => {
  // Get the current scroll position
  console.log("john", navbar);
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
