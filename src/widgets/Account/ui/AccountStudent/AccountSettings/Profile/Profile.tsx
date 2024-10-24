import {
  ProfileContainer,
  ProfileImage,
  ProfileLogoContainer,
  ProfileMainText, SaveButton,
  SettingsPurpleButton
} from "./Profile.styled";
import {Stack} from "@mui/system";
import {SettingsInput} from "../SettingsInput";
import { ReactComponent as ProfileLog } from './profileLogo.svg'
import axios from "axios";
import {useState} from "react";

export const Profile = () => {
  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')
  const [network, setNetwork] = useState('')



  const updateInfo = async () => {
    const user: any = {}

    console.log({
      name,
      surname,
      network
    })

    if(name !== ''){
      user.name = name
    }
    if(surname !== ''){
      user.surname = surname
    }
    if(network !== ''){
      user.network = network
    }

    console.log(user)

    try{
      const res = await axios.patch('http://localhost:4000/api/user/profile', user, {
        withCredentials: true
      })

      console.log(res)
    }catch(err){
      console.log(err)
    }


  }

  return <ProfileContainer>
    <ProfileMainText>
      <ProfileMainText>Фото профиля</ProfileMainText>
      <ProfileLogoContainer>
        <ProfileImage><ProfileLog /></ProfileImage>
        <SaveButton>Загрузить фото</SaveButton>
      </ProfileLogoContainer>
      <Stack spacing={10 / 8} mt={15 / 8}>
        <input name='Имя' onChange={(e: any) => setName(e.target.value)} value={name} />
        <input name='Фамилия' onChange={(e: any) => setSurName(e.target.value)} value={surname} />
        <input name='Телефон' onChange={(e: any) => setNetwork(e.target.value)} value={network} />
        <SettingsPurpleButton onClick={updateInfo}>Сохранить изменения</SettingsPurpleButton>
      </Stack>
    </ProfileMainText>
  </ProfileContainer>
}
