import {styled} from "../../../../../../shared/lib";
import {Box} from "@mui/system";

export const HomeWorkWrapper = styled(Box)({

})

export const SoloHomeWork = styled(Box)({
  padding: "21px 25px",
  borderRadius: 8,
  background: "#FFFFFF",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const HomeWorkText = styled('p')({
  fontSize: 16,
  fontWeight: 500,
})

export const PurpleButton = styled(Box)({
  borderRadius: 50,
  padding: "8px 31px",
  background: '#756EDE',
  color: '#FFFFFF',
  fontSize: 12,
  cursor: 'pointer',
  width: 'fit-content'
})

export const SilverButton = styled(Box)({
  borderRadius: 50,
  padding: "8px 31px",
  background: '#CED4DA',
  color: 'black',
  fontSize: 12,
  cursor: 'pointer',
  width: 'fit-content',
  marginLeft: 10,
})

export const BlackButton = styled(Box)({
  padding: '9px 25px',
  borderRadius: 8,
  background: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  fontSize: 12,
  color: "white",
  cursor: 'pointer',
  marginTop: '16px'
})

export const HomeWorkTable = styled(Box)({
  width: '100%',
  border: '2px solid #CED4DA',
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: 'white',
  [`&>*:nth-child(2n)`]: {
    backgroundColor: '#CED4DA4D'
  }
})

export const HomeWorkRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: "1fr 2.75fr",
  height: 75,
  backgroundColor: 'white',
})

export const HomeWorkContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 25,
})

export const HomeWorkContentLeft = styled(Box)({
  borderRight: '2px solid #CED4DA',
  fontSize: 16,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 25,
})
