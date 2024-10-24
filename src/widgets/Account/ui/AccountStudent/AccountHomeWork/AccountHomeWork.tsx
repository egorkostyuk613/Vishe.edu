import {AccountHomeWorkRoot, AccountHwTitle} from "./AccountHomeWork.styled";
import {Hw} from "./hw";
import {Stack} from "@mui/system";

export const AccountHomeWork = () => {
  return <AccountHomeWorkRoot>
    <AccountHwTitle>Домашние задания</AccountHwTitle>
    <Stack spacing={10 / 8} mt={12 / 8}>
      <Hw />
      <Hw />
    </Stack>
    <AccountHwTitle>Выполненные задания</AccountHwTitle>
    <Stack spacing={10 / 8} mt={12 / 8}>
      <Hw />
      <Hw />
    </Stack>
  </AccountHomeWorkRoot>
}
