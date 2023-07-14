export function addContactUsImage(element) {
  let image = document.createElement("img");
  let imageBackDrop = document.createElement("span");
  imageBackDrop.classList.add("imageBackDrop");
  image.src = "./images/dannysPicture.png";
  image.classList.add("contactImage");
  //   imageBackDrop.appendChild(image);
  //   let imgContainer = document.createElement("span");
  //   imgContainer.classList.add("contactUsContainer");
  let flexParentContainer = document.createElement("span");
  flexParentContainer.classList.add("flexParentContainer");
  flexParentContainer.appendChild(imageBackDrop);
  let contactUsPerson = document.createElement("span");
  contactUsPerson.classList.add("contactParagraph");
  let pContactUs = addOutPutElement(contactUsPerson);
  flexParentContainer.appendChild(pContactUs);
  element.appendChild(flexParentContainer);
  return pContactUs;
}
export function addContactOptions(element) {
  let containerSpan = document.createElement("span");
  let phoneSvg = `<svg id="phone_number" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
<path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
<path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="#fff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z" fill="#fff"/>
</svg>`;
  let facebookSvg = `<svg id="Facebook_handle" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24">
<path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
</svg>`;
  let instagramSvg = `<svg id="Instagram_handle" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 960 960" fill="none">
<path d="M599.256 326.893C638.207 324.995 644.199 388.816 601.453 383.223C565.997 382.224 561.503 327.892 599.256 326.893Z" fill="#25d366"/>
<path d="M726.895 478.902C729.991 250.487 638.505 220.924 429.866 233.608C286.146 222.522 229.716 331.386 229.317 460.125C221.527 586.168 260.378 745.468 417.282 732.085C613.137 728.59 735.984 708.714 726.895 478.902ZM384.423 85.7931C608.743 64.9192 868.418 97.079 871.514 377.828C879.404 507.066 883.599 645.593 820.278 762.847C752.862 877.503 640.503 872.709 523.649 875.406C420.877 879.501 314.91 888.39 215.834 854.732C114.86 819.776 87.3942 743.571 89.5915 643.895C86.0959 558.103 82.6002 472.51 84.0984 386.617C89.0921 183.071 177.981 81.099 384.423 85.7931Z" fill="#fff"/>
<path d="M429.866 233.608C638.505 220.924 729.89 250.487 726.894 478.902C735.983 708.714 613.136 728.49 417.381 732.085C260.377 745.469 221.626 586.068 229.416 460.125C229.716 331.386 286.145 222.522 429.866 233.608ZM682.949 486.093C682.949 344.67 665.571 269.763 504.972 276.954C457.231 281.648 401.401 274.557 353.461 290.837C257.181 337.878 270.465 467.216 279.354 556.904C288.043 701.823 408.193 697.528 520.652 681.349C658.779 674.058 684.248 614.432 682.949 486.093Z" fill="#25d366"/>
<path d="M495.188 393.309C393.515 388.116 362.155 555.606 473.715 560.101C578.584 557.604 594.664 423.172 495.188 393.309ZM473.915 354.857C649.495 342.972 638.709 602.448 473.116 600.65C316.212 595.856 330.894 368.84 473.915 354.857Z" fill="white"/>
<path d="M473.813 560.102C362.252 555.508 393.513 388.017 495.286 393.31C594.662 423.173 578.582 557.605 473.813 560.102Z" fill="white/>
<path d="M504.973 276.955C665.572 269.664 683.05 344.67 682.95 486.093C684.149 614.433 658.781 674.058 520.653 681.349C408.194 697.529 288.044 701.823 279.355 556.905C270.466 467.117 257.282 337.878 353.462 290.837C401.402 274.558 457.233 281.649 504.973 276.955ZM473.213 600.65C638.706 602.448 649.592 342.972 474.012 354.857C330.89 368.84 316.209 595.856 473.213 600.65ZM601.452 383.222C644.199 388.815 638.206 325.094 599.255 326.892C561.502 327.891 565.997 382.223 601.452 383.222Z" fill="#fff"/>
</svg>`;
  let whatsappSvg = `<svg id="WhatsApp_number" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 20 20" version="1.1">
    
    <title>whatsapp [#128]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#fff">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]">

</path>
            </g>
        </g>
    </g>
</svg>`;
  let emailSvg = `<svg id="Email_address" xmlns="http://www.w3.org/2000/svg" fill="#25d366" width="800px" height="800px" viewBox="0 0 1920 1920">
    <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"/>
</svg>`;
  containerSpan.classList.add("socialMediaLinksContainer");
  containerSpan.innerHTML += phoneSvg;
  containerSpan.innerHTML += facebookSvg;
  containerSpan.innerHTML += instagramSvg;
  containerSpan.innerHTML += whatsappSvg;
  containerSpan.innerHTML += emailSvg;
  let svgs = [...containerSpan.querySelectorAll("svg")];
  svgs.forEach((svg) => {
    addEventListenersForInput(svg);
  });
  element.appendChild(containerSpan);
}
export function createEmphasisText(element) {
  let emphasisText = document.createElement("span");
  let outPutElement = document.createElement("span");
  outPutElement.classList.add("outputElement");
  let cursor = document.createElement("span");
  cursor.classList.add("cursor");
  emphasisText.classList.add("emphasisText");
  emphasisText.appendChild(outPutElement);
  emphasisText.appendChild(cursor);
  let elementOutPutElement = element.querySelector(".outputElement");
  elementOutPutElement.appendChild(emphasisText);
  return emphasisText;
}
function addOutPutElement(element) {
  let outputElement = document.createElement("span");
  let cursorElement = document.createElement("span");
  outputElement.classList.add("outputElement");
  cursorElement.classList.add("cursor");
  element.appendChild(outputElement);
  element.appendChild(cursorElement);
  return element;
}

function addEventListenersForInput(element) {
  element.addEventListener("click", () => {
    let id = element.id;
    let parentElement = element.parentElement.parentElement;
    addContactInput(id, parentElement);
    console.log("this is the id", id);
  });
}
function addContactInput(inputType, element) {
  let input = document.createElement("input");
  //refine inputType
  let button = document.createElement("button");
  button.classList.add("contactUsButton");
  let formattedText = formatText(inputType);
  if (document.querySelector(".contactUsInput") !== null) {
    document.querySelector(".contactUsInput").remove();
    document.querySelector(".contactUsButton").remove();
    input.classList.add("contactUsInput");
    input.placeholder = `Please enter your ${formattedText}`;
    let contactMethod = extractWord(inputType);
    button.textContent = `Contact me through ${contactMethod}`;
    input.addEventListener("input", (e) => {
      let value = input.value;
      if (value !== "") {
        button.style.backgroundColor = "#25d366";
      } else {
        button.style.backgroundColor = "grey";
      }
    });
    button.addEventListener("click", () => {});
    element.appendChild(input);
    element.appendChild(button);
  } else {
    input.classList.add("contactUsInput");
    input.placeholder = `Please enter your ${formattedText}`;
    let contactMethod = extractWord(inputType);
    sessionStorage.setItem("contactMethod", contactMethod);
    button.textContent = `Contact me through ${contactMethod}`;
    input.addEventListener("input", (e) => {
      let value = input.value;
      if (value !== "") {
        button.style.backgroundColor = "#25d366";
      } else {
        button.style.backgroundColor = "grey";
      }
    });
    button.addEventListener("click", () => {
      //send users details to backend
      let animationContainer = document.createElement("span");
      animationContainer.classList.add("animation_container");
      let chosenContactMethod = sessionStorage.getItem("contactMethod");
      animationContainer.textContent = `Daniel will contact you through ${chosenContactMethod}`;
      let input = document.querySelector(".contactUsInput");
      input.remove();
      let button = document.querySelector(".contactUsButton");
      button.remove();
      let element = document.querySelector(".contactParagraph");
      element.appendChild(animationContainer);
      addCheckmark();
    });
    element.appendChild(input);
    element.appendChild(button);
  }
}
function formatText(value) {
  return value.replace(/_/g, " ");
}
function extractWord(value) {
  const parts = value.split("_");
  return parts[0];
}
