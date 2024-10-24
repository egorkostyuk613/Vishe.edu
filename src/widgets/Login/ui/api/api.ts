import axios from "axios";
import {authModel} from "entities/auth/model/Auth.model";


export const LoginFunc = async (props: any) => {
  try {
    const res = await axios.post('http://localhost:4000/api/user/auth', {
      "email": props.email,
      "password": props.password
    }, {
      withCredentials: true
    })

    authModel.setUser(res)

    return res.data

  } catch (error) {
    console.error('Ошибка при логине:', error);
    throw error;
  }
};
