import {styled} from "shared/lib";
import {Box} from "@mui/system";


export const ProfileContainer = styled(Box)({});

export const ProfileMainText = styled('p')({
  fontSize: '14px',
  fontWeight: 400,
})

export const ProfileLogoContainer = styled(Box)({
  display: 'flex'
})

export const SaveButton = styled(Box)({
  border: '2px solid #756EDE',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: "8px 32px",
  height: 34,
  marginLeft: 80,
  marginTop: 15,
})

export const ProfileImage = styled(Box)({
  background: '#F2F2F2',
  borderRadius: 4,
  width: 145,
  height: 145,
  marginTop: 15,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const SettingsPurpleButton = styled(Box)({
  borderRadius: 50,
  padding: "8px 31px",
  background: '#756EDE',
  color: '#FFFFFF',
  fontSize: 12,
  cursor: 'pointer',
  width: 'fit-content',
  marginLeft: 'auto'
})
