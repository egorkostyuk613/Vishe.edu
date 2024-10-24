import {DeleteContainer, DeleteText, SettingsPurpleButton} from "./DeleteAccount.styled";
import {SettingsInput} from "../SettingsInput";
import {Stack} from "@mui/system";

export const DeleteAccount = () => {
  return <DeleteContainer>
    <Stack spacing={10 / 8}>
      <DeleteText>Удаление аккаунта является необратимым, и вся связанная с ним информация также будет удалена. Если вы уверены, что хотите продолжить, введите свой адрес электронной почты ниже.</DeleteText>
      <SettingsInput name="Текущий пароль" />
      <SettingsPurpleButton>Сохранить изменения</SettingsPurpleButton>
    </Stack>
  </DeleteContainer>
}
