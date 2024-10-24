import { AccountWrapper } from "./Account.styled";
import { observer } from 'mobx-react';
import {AccountTeacher} from "./AccountTeacher";
import {AccountStudent} from "./AccountStudent";
import {authModel} from "entities/auth/model/Auth.model";

export const Account = observer(() => {

  if (authModel.isLoading) {
    return <div>Загрузка...</div>;
  }

  return <AccountWrapper>
    {authModel.accountRole === 2 ? <AccountStudent /> : <AccountTeacher />}
  </AccountWrapper>
})
