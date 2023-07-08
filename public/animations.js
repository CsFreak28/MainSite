export function showSuggestions() {
  let suggestions = [...document.querySelectorAll(".suggestionTitle")];
  gsap.to(suggestions, 0.5, {
    y: "0px",
    stagger: 0.1,
  });
  console.log("so");
}
