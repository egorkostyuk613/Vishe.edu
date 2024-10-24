import {AccountTeacherContainer, AccountTeacherRoot} from "./AccountTeacher.styled";
import {AccountContainer, AccountMenu, AccountMenuText} from "../Account.styled";
import { useState} from "react";
import {AccountTeacherEnum} from "./AccountTeacher.types";
import {tabs} from "./helpers";
import {AccountMain} from "./AccountMain";
import {AccountSchedule} from "./AccountSchedule";
import {AccountList} from "./AccountList";
import {AccountMaterial} from "./AccountMaterial";

export const AccountTeacher = () => {
  const [tab, setTab] = useState<AccountTeacherEnum>(AccountTeacherEnum.main)

  const handleTabChange = (selectTab: AccountTeacherEnum) => {
    setTab(selectTab)
  }

  const renderFunc = () => {
    switch(tab){
      case AccountTeacherEnum.main:
        return <AccountMain />
      case AccountTeacherEnum.schedule:
        return <AccountSchedule />
      case AccountTeacherEnum.list:
        return <AccountList />
      case AccountTeacherEnum.materials:
        return <AccountMaterial />
    }
  }

  return <AccountTeacherRoot>
    <AccountContainer>
      <AccountMenu>
        {tabs.map(tabs =>
          (<AccountMenuText
            $background={tabs.select === tab}
            onClick={() => handleTabChange(tabs.select)}
          >{tabs.name}</AccountMenuText>))}
      </AccountMenu>
      <AccountTeacherContainer>
        {renderFunc()}
      </AccountTeacherContainer>
    </AccountContainer>
  </AccountTeacherRoot>
}
