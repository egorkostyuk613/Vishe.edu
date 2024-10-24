import {ForgotPassword, PasswordContainer, SettingsPurpleButton} from "./Password.styled";
import {Stack} from "@mui/system";
import {SettingsInput} from "../SettingsInput";

export const Password = () => {
  return <PasswordContainer>
    <Stack spacing={10 / 8}>
      <SettingsInput name="Текущий пароль" />
      <ForgotPassword>Забыли пароль?</ForgotPassword>
      <SettingsInput name="Новый пароль" />
      <SettingsInput name="Подтвердить пароль" />
      <SettingsPurpleButton>Сохранить изменения</SettingsPurpleButton>
    </Stack>
  </PasswordContainer>
}
