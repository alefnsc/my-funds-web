import calculateYield from "../helpers/calculateYield";
import Investment from "./Investment";
import { currencyFormat, percentFormat } from "../helpers/numberFormats";
import useTextColor from "../hooks/useTextColor";

export default function Investments({ children: reports = [], title }) {
  const finalInvestmentValue = reports[reports.length - 1].value;
  const firstInvestmentValue = reports[0].value;

  let totalYield = calculateYield(finalInvestmentValue, firstInvestmentValue);

  let classname = useTextColor(totalYield);

  return (
    <div className="border container mx-auto p-4 m-10">
      <h1 className="text-center text-xl font-semibold">{title}</h1>
      <h1 className="text-center text-l font-medium">
        Rendimento total:
        <span className={classname}>
          {` ${currencyFormat(
            finalInvestmentValue - firstInvestmentValue
          )} (${percentFormat(totalYield)}%)`}
        </span>
      </h1>
      <div>
        {reports
          .sort((a, b) => {
            if (a.year !== b.year) {
              return a.year - b.year;
            }
            return a.month - b.month;
          })
          .map(({ id, month, year, value }, index) => {
            const currentMonthValue = value;
            const previousMonthValue = index > 0 ? reports[index - 1].value : 0;
            return (
              <Investment
                key={id}
                month={month}
                year={year}
                investmentValue={value}
                percentYield={calculateYield(
                  currentMonthValue,
                  previousMonthValue
                )}
              />
            );
          })}
      </div>
    </div>
  );
}
