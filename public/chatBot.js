export function processUserMessage(msgObj) {
  rinovateIsTyping();
  if (msgObj.type == "preWritten") {
    processPreWrittenMsg(msgObj.msg);
  } else {
    //send to trained chat gpt model
  }
}
function processPreWrittenMsg(msg) {
  if (msg == "Hey") {
    let text = wrapWordWithSpan(
      "Hello there Gideon,\nRinovate is a company dedicated to building faster and more convenient tech for institutions.\nfeel free to ask me anything about rinovate.",
      "Rinovate"
    );
    console.log(text);
    rinovateIsNoLongerTyping();
    let element = appendRinoMessage();
    bringRinovateDownToType().then(() => {
      typeTextWithPauses(text, [""], element).then(() => {
        bringRinovateLogoUp();
      });
    });
    // setTimeout(() => {
    // }, 1500);
  } else if (msg == "What is rinovate about") {
  }
}
async function bringRinovateDownToType() {
  let mainLogo = document.querySelector(".upSvg");
  mainLogo.classList.replace("upSvg", "downSvg");
  let downSvg = document.querySelector(".rinoMessageSvg");
  setTimeout(() => {
    downSvg.classList.replace("downSvg", "upSvg");
    resolve();
  }, 50);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
  // const tl = gsap.timeline();
}
function bringRinovateLogoUp() {
  let upSvg = document.querySelector(".upSvg");
  upSvg.classList.replace("upSvg", "downSvg");
  document.querySelector(".rinovateLogoSpace").style.width = "0px";
  let downSvg = document.querySelector(".downSvg");
  downSvg.classList.replace("downSvg", "upSvg");
  upSvg.remove();
}
export function sendUserMessage(usersMessage) {
  let paragraph = createUserMessage(usersMessage);
  addParagraphToChat(paragraph);
}
export function addParagraphToChat(paragraph) {
  let chatRoom = document.querySelector(".chatContainer");
  chatRoom.appendChild(paragraph);
}
function rinovateIsTyping() {
  let rinovateTypingBubble = document.querySelector(".thinking");
  rinovateTypingBubble.style.opacity = "1";
}
function rinovateIsNoLongerTyping() {
  let rinovateTypingBubble = document.querySelector(".thinking");
  rinovateTypingBubble.style.opacity = "0";
}
function createUserMessage(usersMessage) {
  let paragraph = document.createElement("p");
  paragraph.classList.add("userMessage");
  let wrappedWithSpan = wrapWordWithSpan(usersMessage, "rinovate");
  paragraph.innerHTML += wrappedWithSpan;
  return paragraph;
}
export function wrapWordWithSpan(text, word) {
  const regex = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(regex, `<span class="ourName">$&</span>`);
}
function appendRinoMessage() {
  const elementToAppend = document.createElement("div");
  elementToAppend.classList.add("rinoMessage");
  let rinovateLogoSpace = document.createElement("div");
  rinovateLogoSpace.classList.add("rinovateLogoSpace");
  rinovateLogoSpace.innerHTML += `<svg
              class="downSvg rinoMessageSvg"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.3571 0.507948C3.29025 0.8081 2.53261 5.77216 1.66355 11.5443C0.81678 17.3165 0.0591415 22.2344 0.0145745 22.4422C-0.0745595 22.8116 0.170559 22.8578 2.88915 22.8578H5.83057L5.98655 21.7495C6.47679 17.963 7.10073 14.315 7.25671 14.4766C7.34584 14.5689 8.32632 16.4853 9.41821 18.7018L11.4237 22.7423L14.7885 22.8116L18.1533 22.8809L16.7495 20.5027C15.9696 19.1867 14.744 17.1318 14.0309 15.9312C12.5825 13.4838 11.4683 12.2832 9.75246 11.2673C7.63553 10.0205 6.76647 8.49662 7.10073 6.62644C7.16758 6.18776 7.39041 5.65672 7.56868 5.40274C7.90293 4.96406 7.92522 4.96406 8.19262 5.40274C8.3486 5.63363 8.66057 6.14158 8.90569 6.55718C9.52963 7.5269 10.3987 7.64234 10.9335 6.78806C11.3123 6.18776 11.3123 6.14158 10.7329 5.0795C9.90845 3.55565 9.93073 3.37094 11.0672 3.55565C12.2705 3.76345 13.0281 4.24831 13.6966 5.26421C14.1423 5.91069 14.276 6.48791 14.4097 8.21956C14.588 10.9671 15.1451 13.022 15.6353 12.8373C16.9055 12.3293 18.2648 10.4361 18.755 8.45045C19.4681 5.63363 18.599 2.86299 16.4821 1.33914C14.9445 0.230884 13.4515 -2.77534e-06 8.19262 -2.77534e-06C3.46852 -2.77534e-06 3.44623 -2.77534e-06 3.3571 0.507948Z"
                fill="#F5F5F5"
              />
            </svg>`;
  let outputElement = document.createElement("span");
  outputElement.classList.add("outputElement");
  elementToAppend.appendChild(rinovateLogoSpace);
  // rinovateLogoSpace.style.width = "25px";
  let cursor = document.createElement("span");
  cursor.classList.add("cursor");
  elementToAppend.appendChild(outputElement);
  elementToAppend.appendChild(cursor);
  document.querySelector(".chatContainer").appendChild(elementToAppend);
  return elementToAppend;
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeTextWithPauses(text, pauseWords, elementToAppend) {
  const outputElement = elementToAppend.querySelector(".outputElement");
  const cursorElement = elementToAppend.querySelector(".cursor");
  let currentWordIndex = 0;
  let currentCharIndex = 0;

  function typeNextChar() {
    if (currentCharIndex === text.length) {
      return; // End of text
    }

    const char = text.charAt(currentCharIndex);
    const nextChar = text.charAt(currentCharIndex + 1);
    const currentWord = text.split(" ")[currentWordIndex];
    const isPauseWord = pauseWords.includes(currentWord);

    if (char === "<") {
      // Skip HTML tags
      const endIndex = text.indexOf(">", currentCharIndex);
      currentCharIndex = endIndex !== -1 ? endIndex + 1 : currentCharIndex;
    } else if (char === "&") {
      // Handle HTML entities
      const endIndex = text.indexOf(";", currentCharIndex);
      outputElement.innerHTML += text.substring(currentCharIndex, endIndex + 1);
      currentCharIndex = endIndex + 1;
    } else {
      if (currentWord === "Rinovate") {
        outputElement.innerHTML += `<span class="ourName">${char}`;
        currentCharIndex++;
        while (
          currentCharIndex < text.length &&
          text.charAt(currentCharIndex) !== " "
        ) {
          outputElement.innerHTML += text.charAt(currentCharIndex);
          currentCharIndex++;
        }
        outputElement.innerHTML += "</span>";
      } else {
        outputElement.innerHTML += char;
        currentCharIndex++;
      }
    }

    if (char === " " || nextChar === "\n") {
      currentWordIndex++;
    }

    if (char === "\n") {
      outputElement.innerHTML += "<br>";
      currentWordIndex = 0;
    }

    if (isPauseWord) {
      return delay(2000).then(typeNextChar);
    } else {
      return delay(30).then(typeNextChar);
    }
  }

  await typeNextChar();

  // Code execution will continue after the typing is finished
  console.log("Typing finished!");

  // Update cursor visibility
  cursorElement.style.visibility = "hidden";
}
// Usage example:

// typeTextWithPauses("superman is probably the\n fastest man on earth", ["man"]);

//get the thinking dots from the chat bubble
let thinkingDots = [...document.querySelector(".thinkingDots").children];
gsap.to(thinkingDots, 0.2, {
  y: "-4px",
  stagger: 0.14,
  repeat: -1,
  yoyo: true,
});
console.log(thinkingDots);
let secondThinkingDots = [
  ...document.querySelector(".secondThinkingDots").children,
];
gsap.to(secondThinkingDots, 0.2, {
  y: "-4px",
  stagger: 0.14,
  repeat: -1,
  yoyo: true,
});

const userInput = document.querySelector("input");
let timeoutId;
userInput.addEventListener("input", (e) => {
  clearTimeout(timeoutId);
  let value = e.target.value;
  let userTypingBubble = document.querySelector(".secondThinking");
  let iconContainer = document.querySelector(".iconContainer");
  let sendIcon = document.getElementById("sendIcon");
  if (value !== "") {
    // console.log(userTypingBubble);
    iconContainer.style.backgroundColor = "#25d366";
    userTypingBubble.style.opacity = "1";
    sendIcon.style.fill = "white";
    // console.log("superman");
  } else {
    iconContainer.style.backgroundColor = "white";
    sendIcon.style.fill = "grey";
  }
  timeoutId = setTimeout(function () {
    if (userTypingBubble) {
      userTypingBubble.style.opacity = 0;
    }
  }, 1000);
});
