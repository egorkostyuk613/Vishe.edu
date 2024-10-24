import {action, observable} from "mobx";
import {ILogin} from "./Login.types";
import {accountModel} from "../../Account";
import { NavigateFunction } from "react-router-dom";
import { USER_LOGIN_STORAGE_KEY } from "./constansts";
import {LoginFunc} from "../ui/api/api";

class LoginModel {
  @observable accessor login: boolean = false;
  @observable accessor navigate: NavigateFunction | null = null;
  @observable accessor isLoading: boolean = true;

  @action.bound setNavigate(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  @action.bound setLogin(){
    this.isLoading = true;
    const user = localStorage.getItem(USER_LOGIN_STORAGE_KEY);
    if(user){
      this.login = JSON.parse(user).login;
      accountModel.setAccountInfo({
        fullName: JSON.parse(user).name,
        role: JSON.parse(user).role
      })
    }
    this.isLoading = false;
}

 async LoginFunction({ email, password }: ILogin) {
    try{
      const data = await LoginFunc({
        email,
        password
      })

      console.log(data);

      if (this.navigate) {
        this.navigate('/account/schedule')
      }
    }catch(e){
      console.log(e)
    }


  }
}

export const loginModel = new LoginModel();

