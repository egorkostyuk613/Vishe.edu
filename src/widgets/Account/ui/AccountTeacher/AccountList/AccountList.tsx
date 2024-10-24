import {AccountCoursesRoot} from "./AccountList.styled";
import {AccountHeadText} from "../../Account.styled";
import {Stack} from "@mui/system";
import {Pupil} from "./Pupil";

export const AccountList = () => {
  return <AccountCoursesRoot>
    <AccountHeadText>Изменить информацию</AccountHeadText>
    <Stack spacing={15 / 8} mt={25 / 8}>
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
      <Pupil />
    </Stack>
  </AccountCoursesRoot>
}
