import Header from "../components/Header";
import Investments from "../components/Investments";
import Main from "../components/Main";
import { allInvestments } from "../data/investments";

export default function MyFundsPage() {
  return (
    <Main>
      <Header size="large">MY-FUNDS-WEB</Header>
      {allInvestments.investments.map(({ description, id }) => {
        return (
          <Investments title={description} key={id}>
            {allInvestments.reports.filter(
              ({ investmentId }) => investmentId === id
            )}
          </Investments>
        );
      })}
    </Main>
  );
}
