import {
  ButtonPill, PillArrowImg,
  PillSquere, StyledLink, StyledSpan,
  WhyBlock,
  WhyMainText,
  WhyRoot,
  WhySecondText,
  WhyText,
  WhyWrapper
} from "widgets/Why/Why.styled";

import arrow from './assets/arrow.png';

export const Why = () => {
  return <WhyWrapper>
    <WhyText>Почему именно мы?</WhyText>
    <WhyRoot>
      <WhyBlock style={{ gridArea: 'left1' }}>
        <WhyMainText>Начни заниматься <br /> уже сейчас!</WhyMainText>
      </WhyBlock>
      <WhyBlock style={{gridArea: 'left2'}}>
        <WhyMainText>Начни заниматься <br/> уже сейчас!</WhyMainText>
        <StyledLink to="/register">
          <ButtonPill>
            <StyledSpan>Зарегестрироваться</StyledSpan>
            <PillSquere>
              <PillArrowImg src={arrow}/>
            </PillSquere>
          </ButtonPill>
        </StyledLink>
      </WhyBlock>
      <WhyBlock style={{ gridArea: 'right' }}>
        <WhyMainText>Занимайтесь<br/>
          из любой точки <br/> земли!</WhyMainText>
        <WhySecondText>Все, что вам нужно для занятий <br/> - стабильное интернет <br/> соединение и
          мотивация.</WhySecondText>
      </WhyBlock>
    </WhyRoot>
  </WhyWrapper>
}
