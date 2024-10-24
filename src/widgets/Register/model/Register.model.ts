import {action, observable} from "mobx";
import {RegisterType} from "../Register.types";

class Register {
  @observable accessor registerPage: RegisterType = RegisterType.info;

  @action.bound setPage(){
    this.registerPage = this.registerPage + 1
  }
}

export const registerModel: Register = new Register();
