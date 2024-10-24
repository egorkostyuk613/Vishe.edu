import {TeachersRoot, TeachersTitle} from "widgets/Teachers/Teachers.styled";
import {Stack} from "@mui/system";
import {Teacher} from "./Teacher";

export const Teachers = () => {
  return <TeachersRoot>
    <TeachersTitle>Выбор преподавателя</TeachersTitle>
    <Stack spacing={35 / 8} mt={65 / 8}>
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
    </Stack>
  </TeachersRoot>
}
