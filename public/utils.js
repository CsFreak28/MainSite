export function addContactUsImage(element) {
  let image = document.createElement("img");
  let mobileImage = visualViewport.width < 500;
  image.src = mobileImage
    ? "./images/danielsPicture_500.webp"
    : "./images/danielsPicture_800.webp";
  image.classList.add("contactImage");
  element.appendChild(image);
}
