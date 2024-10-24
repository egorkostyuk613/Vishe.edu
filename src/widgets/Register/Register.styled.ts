import {styled} from "shared/lib";
import {Box} from "@mui/system";
import { Input} from "@mui/base";

export const RegisterRoot = styled(Box)({
  textAlign: 'center',
})

export const RegisterFormSubmit = styled('form')({})

export const RegisterWrapper = styled(Box)({
  width: 700,
  margin: "0 auto"
})

export const StyledSpan = styled('span')({
  color: '#9DB4C0'
})

export const RegisterForm = styled(Box)({});

export const RegisterText = styled('p')({
  fontSize: '18px',
  lineHeight: '25px',
  color: '#000000',
  fontWeight: 600,
  marginTop: 38,
})

export const RegisterSelectContainer = styled(Box)({
  width: "100%",
  height: 55,
  background: '#F2F2F2',
  borderRadius: 50,
  marginTop: 20,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  overflow: 'hidden',
})

interface SelectProp {
  $select?: boolean;
}

export const RegisterSelect = styled(Box)<SelectProp>(({$select}) => ({
  backgroundColor: $select ? '#8A2BE2' : 'transparent',
  color: $select ? '#FFFFFF' : '#000000',
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}))

export const RegisterButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: 'end',
  marginTop: 60,
})

export const RegisterImg = styled('img')({
  width: 40,
  marginLeft: 25,
})

export const RegisterTitle = styled('p')({
  fontSize: 45,
  fontWeight: 600,
  lineHeight: "62px"
});

export const InputContainer = styled(Input)({});

export const GridWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 32
})

export const InputStyled = styled('input')({
  border: "1px solid #F2F2F2",
  borderRadius: 10,
  padding: '8px 18px',
  backgroundColor: "#F2F2F2",
  width: '100%'
})
