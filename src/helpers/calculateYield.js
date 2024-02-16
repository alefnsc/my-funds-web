export default function calculateYield(
  firstMonthValue = 0,
  secondMonthValue = 0
) {
  if (secondMonthValue === 0) {
    return "0.00";
  }
  const percentageChange =
    ((firstMonthValue - secondMonthValue) / secondMonthValue) * 100;
  return percentageChange.toFixed(2);
}
