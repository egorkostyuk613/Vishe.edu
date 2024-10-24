import {StyledLink, SuccessContainer, SuccessImg, SuccessSecondText} from "./Success.styled";
import {RegisterButtonsContainer, RegisterImg, RegisterTitle, RegisterWrapper, StyledSpan} from "./../Register.styled";
import {Button} from "shared/ui";
import arrow from "widgets/Register/arrow.png";
import successimg from './success.png'
import {Fragment} from "react";

export const Success = ({ select }: {select: "ученик" | "преподаватель"}) => {
  return <SuccessContainer>
    <RegisterButtonsContainer>
      {select === "ученик" ? <StyledLink to="/login">
        <Button variant="outlinedv4">В личный кабинет <RegisterImg src={arrow}/></Button>
      </StyledLink> : <StyledLink to="/"><Button variant="outlinedv4">На главную <RegisterImg src={arrow}/></Button></StyledLink>}

    </RegisterButtonsContainer>
    <RegisterWrapper>
        <SuccessImg src={successimg}/>
      {select === "ученик" ?
        <RegisterTitle><StyledSpan>Спасибо</StyledSpan> за регистрацию!</RegisterTitle>
        : <Fragment>
          <RegisterTitle><StyledSpan>Спасибо</StyledSpan> за заявку</RegisterTitle>
          <SuccessSecondText>В ближайшее время мы <br /> <StyledSpan>свяжемся</StyledSpan> с Вами</SuccessSecondText>
      </Fragment>}

    </RegisterWrapper>
  </SuccessContainer>
}
