export default function getNumberColor(percentYield) {
  let textColor = "black";
  if (percentYield.toString().includes("-")) {
    textColor = "red";
  } else if (percentYield > 0) {
    textColor = "green";
  }
  return textColor;
}
