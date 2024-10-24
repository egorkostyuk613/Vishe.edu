import {AccountScheduleRoot} from "./AccountSchedule.styled";
import {Calendar} from "../../../../Calendar/Calendar";
import {AccountStudentTitle} from "../AccountStudent.styled";

export const AccountSchedule = () => {
  return <AccountScheduleRoot>
    <AccountStudentTitle>Выбрать время</AccountStudentTitle>
    <Calendar />
  </AccountScheduleRoot>
}
