import {NameContainer, NameText, PupilContainer, SpanRightStyled, StyledBox} from "./Pupil.styled";
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Avatar } from './avatar.svg'
import {Button} from "shared/ui";

export const Pupil = () => {
  return <PupilContainer>
    <NameContainer>
      <Avatar />
      <NameText>Виктория Лукьянова</NameText>
    </NameContainer>
    <StyledBox>
      <Button variant="outlinedv5"> <SpanRightStyled>Прощедшие уроки</SpanRightStyled> <Arrow /> </Button>
    </StyledBox>
  </PupilContainer>
}
