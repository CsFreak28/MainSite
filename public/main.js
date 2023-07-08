import { sendUserMessage, processUserMessage } from "./chatBot.js";
let sendMessageButton = document.querySelector(".iconContainer");
sendMessageButton.addEventListener("click", () => {
  let inputValue = document.querySelector(".inputInnerBox input").value;
  if (inputValue !== "") {
    console.log(inputValue);
    sendUserMessage(inputValue);
    document.querySelector(".inputInnerBox input").value = "";
    //process message from chatBot
    let msgObj = {
      message: inputValue,
    };
  }
});
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    console.log("enter key was pressed");
    sendMessageButton.click();
  }
});
