let preloader = document.querySelector(".preloader");
let betterSpans = [...document.querySelector(".better").children];
const tl = gsap.timeline();
gsap.to(betterSpans, 1.2, {
  stagger: "0.1",
  top: "0px",
  ease: "Power4.easeOut",
});
let fasterSpans = [...document.querySelector(".faster").children];
tl.to(fasterSpans, 0.6, {
  stagger: "0.1",
  delay: 0.5,
  top: "0px",
  ease: "Power2.easeOut",
});
const and = document.querySelector(".sideText");
gsap.to(and, 0.3, {
  color: "#25d366",
  delay: 2,
});
let seamlessSpans = [...document.querySelector(".seamless").children];
tl.to(seamlessSpans, 0.8, {
  stagger: 0.1,
  opacity: 1,
});
const experience = [
  ...document.querySelector(".experience").children,
].reverse();
gsap.to(experience, 1, {
  stagger: 0.1,
  opacity: 1,
  delay: 2,
  color: "#25d366",
});
tl.to(document.querySelector(".preloader"), 0.5, {
  opacity: 0,
  delay: 2.5,
  onComplete: () => {
    document.querySelector(".preloader").style.display = "none";
  },
});
// uncomment code above to play preloader animation...
