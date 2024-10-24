import {
  ButtonPill,
  CenterContainer,
  MainTitleText, PillPlusImg,
  PillSquere,
  StartNowContainer, StyledSpan
} from "widgets/StartNow/StartNow.styled";
import plus from './plus.png'

export const StartNow = () => {
  return <StartNowContainer>
    <CenterContainer>
      <MainTitleText>Начать <br/> учиться уже <br/> сейчас</MainTitleText>
      <ButtonPill>
        <StyledSpan>
          Записаться на урок
        </StyledSpan>
        <PillSquere>
          <PillPlusImg src={plus} />
        </PillSquere>
      </ButtonPill>
    </CenterContainer>
  </StartNowContainer>
}
