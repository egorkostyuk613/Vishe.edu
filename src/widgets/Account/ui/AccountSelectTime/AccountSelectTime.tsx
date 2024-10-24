import {
  AccountSelectTimeRoot,
  AccountTable,
  AccountTableHead,
  AccountTableTh,
  AccountTableTr
} from "./AccountSelectTime.styled";
import {AccountTimes} from "./helper";

export const AccountSelectTime = () => {

  return <AccountSelectTimeRoot>
    <AccountTable>
      <AccountTableHead>
        <AccountTableTr>
          <AccountTableTh></AccountTableTh>
          {AccountTimes.map((value) => (<AccountTableTh>{value.day}</AccountTableTh>))}
        </AccountTableTr>
      </AccountTableHead>
    </AccountTable>
  </AccountSelectTimeRoot>
}
