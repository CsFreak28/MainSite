export const GLOBALSTATE = {
  rinovateIsStillTyping: false,
};
export function setRinovateHasFinishedTyping() {
  GLOBALSTATE["rinovateIsStillTyping"] = false;
}
export function setRinovateIsTyping() {
  GLOBALSTATE["rinovateIsStillTyping"] = true;
}
export function getRinovateIsTypingValue() {
  return GLOBALSTATE["rinovateIsStillTyping"];
}
