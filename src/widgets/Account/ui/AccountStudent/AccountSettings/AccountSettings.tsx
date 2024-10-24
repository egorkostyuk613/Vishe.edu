import {
  AccountSettingsContainer,
  AccountSettingsContainerRows, AccountSettingsContent,
  AccountSettingsHeadText,
  AccountSettingsRoot, AccountSettingsRow
} from "./AccountSettings.styled";
import {useState} from "react";
import {AccountSettingsTab} from "./AccountSettings.types";
import {Profile} from "./Profile";
import {Password} from "./Password/Password";
import {Email} from "./Email";
import {DeleteAccount} from './DeleteAccount'

export const AccountSettings = () => {
  const [tab, setTab] = useState<AccountSettingsTab>(AccountSettingsTab.profile)

  const renderFunc = () => {
    switch (tab){
      case AccountSettingsTab.profile:
        return <Profile />
      case AccountSettingsTab.email:
        return <Email />
      case AccountSettingsTab.password:
        return <Password />
      case AccountSettingsTab.delete:
        return <DeleteAccount />
    }
  }

  return <AccountSettingsRoot>
    <AccountSettingsHeadText>Настройки</AccountSettingsHeadText>
    <AccountSettingsContainer>
      <AccountSettingsContainerRows spacing={10 / 8}>
        <AccountSettingsRow
          $select={tab === AccountSettingsTab.profile}
          onClick={() => setTab(AccountSettingsTab.profile)}
        >Профиль</AccountSettingsRow>
        <AccountSettingsRow
          $select={tab === AccountSettingsTab.password}
          onClick={() => setTab(AccountSettingsTab.password)}
        >Пароль</AccountSettingsRow>
        <AccountSettingsRow
          $select={tab === AccountSettingsTab.email}
          onClick={() => setTab(AccountSettingsTab.email)}
        >Эл. Почта</AccountSettingsRow>
        <AccountSettingsRow
          $select={tab === AccountSettingsTab.delete}
          onClick={() => setTab(AccountSettingsTab.delete)}
        >Удалить аккаунт</AccountSettingsRow>
      </AccountSettingsContainerRows>
      <AccountSettingsContent>
        {renderFunc()}
      </AccountSettingsContent>
    </AccountSettingsContainer>
  </AccountSettingsRoot>
}
