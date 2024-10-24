import {action, computed, observable} from "mobx";

class AuthModel {
  @observable accessor user: any = null
  @observable accessor isLoading: boolean = false

  @computed get accountRole(){
    return this.user.role
  }

  @action.bound setUser (user: any) {
    this.isLoading = user?.isLoading
    this.user = user?.data
  }

}

export const authModel = new AuthModel();
