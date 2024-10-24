import {CourseContainer, CoursePurpleButton, HeadText, ImageContainer, MainText} from "./Course.styled";
import back from './6.png'
import {Box, Stack} from "@mui/system";

export const Course = () => {
  return <CourseContainer>
    <ImageContainer src={back} />
    <Stack spacing={10 / 8} mt={14 / 8}>
      <HeadText>Мир Знаний</HeadText>
      <MainText>Курсы для школьников, охватывающие основные школьные предметы, подготовку к экзаменам и развитие дополнительных навыков.</MainText>
      <Box>
        <CoursePurpleButton>Выбрать</CoursePurpleButton>
      </Box>
    </Stack>
  </CourseContainer>
}
