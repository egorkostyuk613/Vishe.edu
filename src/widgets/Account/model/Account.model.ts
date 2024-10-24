import {action, computed, observable} from "mobx";
import {AccountTypes} from "./Account.types";

class AccountModel {
  @observable accessor account: AccountTypes | null = null;

  @computed get isTeacher() {
    return this.account?.role === 'teacher'
  }

  @action.bound public setAccountInfo (account: AccountTypes) {
    this.account = account;
  }
}

export const accountModel = new AccountModel();
