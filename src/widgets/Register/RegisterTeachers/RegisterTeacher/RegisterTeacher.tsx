import {
  AboutText,
  AboutWrapeer,
  NameText, RatingText, StarImg,
  StyledRootButton,
  TeacherButtonContainer,
  TeacherImageContainer,
  TeacherInfoContainer,
  TeacherRoot, TeachInfoHeadText
} from "./RegisterTeacher.styled";
import {Button} from "shared/ui";
import {Stack} from "@mui/system";
import star from './star.png'
import {registerModel} from "../../model/Register.model";

export const RegisterTeacher = () => {
  return <TeacherRoot>
    <TeacherInfoContainer>
      <TeacherImageContainer></TeacherImageContainer>
      <Stack spacing={18 / 8}>
        <Stack spacing={12 / 8}>
          <NameText>Валентина Петровна <StarImg src={star}/> <RatingText>5,0</RatingText> </NameText>
          <AboutWrapeer>
            <AboutText>Опыт: 20 лет</AboutText>
            <AboutText>Возраст: 57 лет</AboutText>
            <AboutText>Отзывы: 12</AboutText>
          </AboutWrapeer>
        </Stack>
        <Stack spacing={12 / 8}>
          <TeachInfoHeadText>Образование</TeachInfoHeadText>
          <AboutText>МГУ, инженер-технолог, профессор информационных технологий</AboutText>
        </Stack>
        <Stack spacing={12 / 8}>
          <TeachInfoHeadText>О себе</TeachInfoHeadText>
          <AboutText>«Активная, легко нахожу подход к ученику вне зависимости от сложности, уроки составляю с элементами игры и фрагментами из фильмов»</AboutText>
        </Stack>
      </Stack>
    </TeacherInfoContainer>
    <TeacherButtonContainer>
      <Button onClick={registerModel.setPage}>Записаться</Button>
      <Button variant="outlined" slots={{
        root: StyledRootButton
      }}>Видео-знакомство</Button>
    </TeacherButtonContainer>
  </TeacherRoot>
}
