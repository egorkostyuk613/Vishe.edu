import {AccountCoursesHeadText, AccountCoursesRoot} from "./AccountCourses.styled";
import {Stack} from "@mui/system";
import {Course} from "./Course/Course";
import {getCourse, getCourses} from "./api.ts";

export const AccountCourses = () => {
  // getCourses()
  // getCourse()
  return <AccountCoursesRoot>
    <AccountCoursesHeadText>Мои курсы</AccountCoursesHeadText>

    <Stack spacing={1} mb={25 / 8}>
      <Course />
    </Stack>

    <AccountCoursesHeadText>Все курсы</AccountCoursesHeadText>

    <Stack spacing={1}>
      <Course />
      <Course />
    </Stack>
  </AccountCoursesRoot>
}
