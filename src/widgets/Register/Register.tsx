import {
  GridWrapper,
  InputContainer, InputStyled, RegisterButtonsContainer,
  RegisterForm, RegisterImg,
  RegisterRoot, RegisterSelect, RegisterSelectContainer, RegisterText,
  RegisterTitle,
  RegisterWrapper,
  StyledSpan
} from "widgets/Register/Register.styled";
import {Stack} from "@mui/system";
import {Button} from "shared/ui";
import { useState} from "react";
import arrow from './arrow.png'
import {Success} from "widgets/Register/Success";
import {useForm} from "react-hook-form";
import {RegisterFunc} from "./apis/api";
import {RegisterFormSubmit} from "./Register.styled";
import {RegisterType} from "./Register.types";
import {RegisterTarif} from "./RegisterTarif/RegisterTarif";
import {registerModel} from "./model/Register.model";
import {observer} from "mobx-react";
import {RegisterTeachers} from "./RegisterTeachers";
import {Calendar} from "../Calendar/Calendar";

export const Register = observer(() => {
  const [select, setSelect] = useState<"ученик" | "преподаватель">("ученик");

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    RegisterFunc({
      email: data.email,
      password: data.password,
      name: data.name,
      network: data.network,
      surname: data.surname,
      role: select === "преподаватель" ? 1 : 2,
      termsAgreement: data.politics,
    })
    // registerModel.setPage()
  }

  const renderFunc = () => {
    switch (registerModel.registerPage) {
      case RegisterType.info:
      return <RegisterFormSubmit onSubmit={handleSubmit(onSubmit)}>
        <RegisterButtonsContainer>
          <Button variant="outlinedv4">Войти <RegisterImg src={arrow}/></Button>
        </RegisterButtonsContainer>
        <RegisterWrapper>
          <RegisterTitle>Заполните <StyledSpan>форму</StyledSpan> и мы обязательно свяжемся с Вами.</RegisterTitle>
          <RegisterForm>
            <Stack spacing={20 / 8} mt={28 / 8}>
              <GridWrapper>
                <InputContainer slots={{
                  input: InputStyled
                }} placeholder="Имя" {...register('name')}/>
                <InputContainer slots={{
                  input: InputStyled
                }} placeholder="Фамилия" {...register('surname')}/>
              </GridWrapper>
              <InputContainer slots={{
                input: InputStyled
              }} placeholder="Социальная сеть" {...register('network')}/>
              <InputContainer slots={{
                input: InputStyled
              }} placeholder="Электронная почта" type="email" {...register('email')}/>
              <InputContainer slots={{
                input: InputStyled
              }} placeholder="Пароль" type="password" {...register('password')}/>

              <input type="checkbox" {...register("politics")} /> я согласен что иду нахуй

            </Stack>
          </RegisterForm>
          <RegisterText>Вы хотите зарегестрироваться как?</RegisterText>
          <RegisterSelectContainer>
            <RegisterSelect $select={select === "ученик"} onClick={() => setSelect("ученик")}>УЧЕНИК</RegisterSelect>
            <RegisterSelect $select={select === "преподаватель"} onClick={() => setSelect("преподаватель")}>ПРЕПОДАВАТЕЛЬ</RegisterSelect>
          </RegisterSelectContainer>
        </RegisterWrapper>
        <RegisterButtonsContainer>
          {select === "ученик" && <Button variant="outlinedv4" onClick={() => window.history.back()}>Назад</Button>}
          <Button variant="outlinedv4" ml={18 / 8} type="submit">Продолжить</Button>
        </RegisterButtonsContainer>
      </RegisterFormSubmit>
      case RegisterType.tarif:
        return <RegisterTarif />
      case RegisterType.teacher:
        return <RegisterTeachers />
      case RegisterType.time:
        return <Calendar />
      case RegisterType.thanks:
        return <Success select={select}/>
    }
  }

  return <RegisterRoot>
    {renderFunc()}
  </RegisterRoot>
})
