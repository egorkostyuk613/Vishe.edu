import {styled} from "shared/lib";
import {Modal} from "@mui/base";
import {Box} from "@mui/system";

export const DialogRoot = styled(Modal)({
  position: 'fixed',
  inset: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#d9d9d963',
})

export const Content = styled(Box)({
  backgroundColor: '#65707E',
  color: 'white',
  outline: 'none',

  maxHeight: 'calc(100% - 128px)',
  maxWidth: '950px',

  padding: "68px 72px",
  borderRadius: 25,

  display: 'flex',
  flexDirection: 'column',
})
