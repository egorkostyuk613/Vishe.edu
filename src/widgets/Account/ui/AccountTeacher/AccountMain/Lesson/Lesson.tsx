import {
  BootomContaier,
  ButtonsContainer,
  DateContainer,
  LessonContainer,
  NameContainer,
  NameText, SpanRightStyled, SpanStyled
} from "./Lesson.styled";
import { ReactComponent as Avatar } from './avatar.svg'
import { ReactComponent as Close } from './close.svg'
import { ReactComponent as Arrow } from './arrow.svg'
import {Button} from "shared/ui";

export const Lesson = () => {
  return <LessonContainer>
    <DateContainer>24 июля, среда, 16:00</DateContainer>
    <BootomContaier>
      <NameContainer>
        <Avatar />
        <NameText>Виктория Лукьянова</NameText>
      </NameContainer>
      <ButtonsContainer>
        <Button variant='textv2'> <Close/> <SpanStyled>Отменить</SpanStyled> </Button>
        <Button variant="containedv2"> <SpanRightStyled> Перейти</SpanRightStyled> <Arrow /> </Button>
      </ButtonsContainer>

    </BootomContaier>
  </LessonContainer>
}
