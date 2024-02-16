import getNumberColor from "../helpers/numberStyle";

export default function useTextColor(percentYield) {
  const textColor = getNumberColor(percentYield);

  let className;
  switch (textColor) {
    case "red":
      className = "text-red-600";
      break;
    case "green":
      className = "text-green-600";
      break;
    default:
      className = "text-black";
  }

  return className;
}
