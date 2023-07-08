import { sendUserMessage, processUserMessage } from "./chatBot.js";
import {
  getRinovateIsTypingValue,
  setRinovateIsTyping,
} from "./globalState.js";
let sendMessageButton = document.querySelector(".iconContainer");
function startChat() {
  sendUserMessage("Hey!!");
  let msgObj = {
    type: "preWritten",
    msg: "Hey",
  };
  processUserMessage(msgObj);
  setRinovateIsTyping();
}
startChat();

sendMessageButton.addEventListener("click", () => {
  let inputValue = document.querySelector(".inputInnerBox input").value;
  let rinovateIsTyping = getRinovateIsTypingValue();
  if (inputValue !== "") {
    if (!rinovateIsTyping) {
      console.log(inputValue);
      sendUserMessage(inputValue);
      document.querySelector(".inputInnerBox input").value = "";
      //process message from chatBot
      let msgObj = {
        message: inputValue,
        type: "chatgpt",
      };
      processUserMessage(msgObj);
    }
  }
});
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    console.log("enter key was pressed");
    sendMessageButton.click();
  }
});
let suggestions = [...document.querySelectorAll(".suggestion")];
suggestions.forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    console.log("i was clicked");
    let msg = suggestion.innerText;
    console.log(msg);
    sendUserMessage(msg);
    let msgObj = {
      type: "preWritten",
      msg,
    };
    processUserMessage(msgObj);
    setRinovateIsTyping();
  });
});
