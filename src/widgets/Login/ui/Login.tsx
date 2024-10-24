import {FormStyled, InputContainer, InputStyled, LoginRoot, LoginTitle, StyledLink} from "./Login.styled";
import {Stack} from "@mui/system";
import {Button} from "shared/ui";
import {useNavigate} from "react-router-dom";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {loginModel} from "../model";
import {useEffect} from "react";
import {observer} from "mobx-react";

export const Login = observer(() => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm()

  useEffect(() => {
    loginModel.setNavigate(navigate);
  }, [navigate]);


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    loginModel.LoginFunction({
      email: data.email,
      password: data.password,
    })
  }


  return <LoginRoot>
    <LoginTitle>Войти</LoginTitle>
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={25 / 8} mt={40 / 8}>
        <InputContainer slots={{
          input: InputStyled
        }} placeholder="Электронная почта" {...register('email')}/>
        <InputContainer slots={{
          input: InputStyled
        }} placeholder="Пароль" type="password" {...register('password')}/>
      </Stack>
      <StyledLink to="/register">
        <Button variant="text" mt={15 / 8}>Зарегистрироваться</Button>
      </StyledLink>
        <Button variant="outlinedv4" margin="auto" mt={40 / 8} type='submit'>Войти</Button>
    </FormStyled>
  </LoginRoot>
})
