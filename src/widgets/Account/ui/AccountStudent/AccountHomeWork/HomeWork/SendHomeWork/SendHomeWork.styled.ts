import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const SendHomeWorkContainer = styled(Box)({})

export const SendHomeWorkContent = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gap: 42,
})

export const SendHomeWorkLeft = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const SendDragItem = styled(Box)({
  border: '2px dashed #CED4DA',
  height: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const SendHomeWorkRight = styled(Box)({})

export const ButtonsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 12,
  marginTop: "auto"
})

export const SendText = styled(Box)({

})

export const SendTable = styled(Box)({})

export const SendSmallText = styled(Box)({
  fontSize: 12,
})

export const SendTableHead = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'minmax(150px, 300px) minmax(200px, 350px) minmax(100px, 240px) minmax(100px, 150px)',
  borderBottom: '1px solid #CED4DA',
  margin: '0px -25px 10px',
  padding: '0px 25px 10px'
})

export const SendTableRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'minmax(150px, 300px) minmax(200px, 350px) minmax(100px, 240px) minmax(100px, 150px)',
  marginTop: 10,
})

export const IconsContaienr = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '45px 45px 45px',
  marginBottom: 5,
  alignItems: 'center',
  ['svg']:{
    cursor: 'pointer',
  }
})

export const SendTableBody = styled(Box)({})

export const SendPurpleButton = styled(Box)({
  borderRadius: 50,
  padding: "12px 32px",
  background: '#756EDE',
  color: '#FFFFFF',
  fontSize: 12,
  cursor: 'pointer',
  textAlign: 'center'
})

export const SendBlackButton = styled(Box)({
  borderRadius: 50,
  padding: "12px 32px",
  background: '#000000',
  color: 'white',
  fontSize: 12,
  cursor: 'pointer',
  textAlign: 'center'
})

export const SendWhiteContainer = styled(Box)({
  height: 265,
  width: "100%",
  borderRadius: 8,
  backgroundColor: 'white',
  padding: 25,
})
