import axios from "axios";


export const RegisterFunc = async (props: any) => {
  await axios.post('http://localhost:4000/api/user/', {
    "surname": props.surname,
    "name": props.name,
    "network": "@vova",
    "role": props.role,
    "email": props.email,
    "password": props.password,
    "termsAgreement": props.termsAgreement,
  }, {
    withCredentials: true
  }).then((data: any) => {
    console.log(data)
    return data
  })
}
