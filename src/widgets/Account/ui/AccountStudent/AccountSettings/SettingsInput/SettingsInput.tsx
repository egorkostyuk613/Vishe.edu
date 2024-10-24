import {HeadInputText, SettingsInputContainer, SettingsInputMain} from "./SettingsInput.styled";

export const SettingsInput = ({name}: {name: string}) => {
  return <SettingsInputContainer>
    <HeadInputText>{name}</HeadInputText>
    <SettingsInputMain placeholder={name}/>
  </SettingsInputContainer>
}
