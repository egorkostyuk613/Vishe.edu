import {styled} from "shared/lib";
import {Box} from "@mui/system";


export const SettingsInputContainer = styled(Box)({})

export const SettingsInputMain = styled('input')({
  backgroundColor: 'white',
  maxWidth: 330,
  borderRadius: 10,
  paddingLeft: 18,
  height: 36,
  border: 'none',
  width: '100%',
  marginTop: 4,

  ['&:focus']: {
  outline: 'none',
}
})

export const HeadInputText = styled('p')({
  fontSize: 16,
  fontWeight: 400,
})
