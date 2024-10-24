import {TeachersRoot, TeachersTitle} from "./RegisterTeachers.styled";
import {Stack} from "@mui/system";
import {RegisterTeacher} from "./RegisterTeacher";

export const RegisterTeachers = () => {
  return <TeachersRoot>
    <TeachersTitle>Выбор преподавателя</TeachersTitle>
    <Stack spacing={30 / 8} mt={34 / 8}>
      <RegisterTeacher />
      <RegisterTeacher />
      <RegisterTeacher />
    </Stack>
  </TeachersRoot>
}
