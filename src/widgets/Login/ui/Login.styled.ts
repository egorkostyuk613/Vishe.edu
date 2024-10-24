import {styled} from "shared/lib";
import {Box} from "@mui/system";
import {Input} from "@mui/base";
import {Link} from "react-router-dom";

export const LoginRoot = styled(Box)({
  textAlign: 'center',
  margin: "245px 0px"
})

export const LoginTitle = styled('p')({
  fontSize: 45,
  fontWeight: 600,
  lineHeight: "62px"
});

export const InputContainer = styled(Input)({

});

export const InputStyled = styled('input')({
  border: "1px solid #F2F2F2",
  borderRadius: 10,
  padding: '8px 18px',
  backgroundColor: "#F2F2F2",
  maxWidth: 700,
  width: '100%'
})

export const StyledLink = styled(Link)({
  textDecoration: 'none',
})

export const FormStyled = styled('form')({})
