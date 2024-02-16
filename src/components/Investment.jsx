import { dateFormat } from "../helpers/dateFormat";
import { currencyFormat, percentFormat } from "../helpers/numberFormats";
import useTextColor from "../hooks/useTextColor";

export default function Investment({
  month = 1,
  year = 2023,
  investmentValue = 0,
  percentYield = 0,
}) {
  const className = useTextColor(percentYield);
  return (
    <div className="flex justify-between border-b px-2">
      <div className="flex flex-1">
        <div className="flex-1">{dateFormat(month, year)}</div>
        <div className={`flex-1 ${className} font-bold`}>
          {currencyFormat(investmentValue)}
        </div>
      </div>
      <div className={`flex-1 ${className} font-bold text-right`}>
        {`${percentFormat(percentYield)} %`}
      </div>
    </div>
  );
}
