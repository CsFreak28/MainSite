import {
  processUserMessage,
  sendUserMessage,
  typeTextWithPauses,
} from "./chatBot.js";
export async function addUniversity(element, uniDetail) {
  addUniversityLogo(element, uniDetail);
  await typeTextWithPauses(uniDetail.uniName, ["ghhohguigv"], element);
}
export function addUniversityLogo(element, uniDetail) {
  let logoSpace = element.querySelector(".rinovateLogoSpace");
  //add multiplication sign
  let theMultiplicationSign = document.createElement("span");
  theMultiplicationSign.textContent = "x";
  theMultiplicationSign.classList.add("multiplicationSign");
  logoSpace.appendChild(theMultiplicationSign);
  let theLogo = document.createElement("img");
  theLogo.src = uniDetail.img;
  theLogo.classList.add("schoolLogo");
  logoSpace.appendChild(theLogo);
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
