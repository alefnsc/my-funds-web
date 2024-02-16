export function currencyFormat(num = 0) {
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function percentFormat(num = 0) {
  const formatedNum = num.toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
  });

  return formatedNum > 0 ? `+${formatedNum}` : formatedNum;
}
