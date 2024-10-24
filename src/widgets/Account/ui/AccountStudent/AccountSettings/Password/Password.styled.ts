import {Box} from "@mui/system";
import {styled} from "shared/lib";

export const PasswordContainer = styled(Box)({});

export const ForgotPassword = styled(Box)({
  fontSize: 16,
  fontWeight: 600,
  textDecoration: 'underline',
  cursor: 'pointer'
})

export const SettingsPurpleButton = styled(Box)({
  borderRadius: 50,
  padding: "8px 31px",
  background: '#756EDE',
  color: '#FFFFFF',
  fontSize: 12,
  cursor: 'pointer',
  width: 'fit-content',
})
