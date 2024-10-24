import {EmailContainer, SettingsPurpleButton} from "./Email.styled";
import {SettingsInput} from "../SettingsInput";
import {Stack} from "@mui/system";

export const Email = () => {
  return <EmailContainer>
    <Stack spacing={10 / 8}>
    <SettingsInput name="Эл. адрес" />
    <SettingsPurpleButton>Сохранить изменения</SettingsPurpleButton>
    </Stack>
  </EmailContainer>
}
