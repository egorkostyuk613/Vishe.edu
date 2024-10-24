import {useQuery} from "react-query";
import {GET_USER_INFO} from "./checkAuth.config";
import axios from "axios";
import {authModel} from "./Auth.model";

const getUserInfo = async () => {
  try{
    return await axios.get('http://localhost:4000/api/user/profile', {
      withCredentials: true
    })
  }catch(error){
    if (error.response && error.response.status === 401) {
      return null;
    } else {
      throw error; // или return null, если хотите продолжить без выброса ошибки
    }
  }

}

export const useCheckAuth = () => {
  const { isLoading } = useQuery({
    queryKey: GET_USER_INFO,
    queryFn: () => getUserInfo(),
    onSuccess: (userData) => {
      if (userData) {
        authModel.setUser(userData);
      } else {
        console.log('User not found');
      }
    },
    onError: (error) => {
      console.log('An error occurred', error);
    },
    retry: false
  })

  return {
    isLoading,
  }
}
