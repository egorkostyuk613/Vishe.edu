import {styled} from "shared/lib";
import {Box} from "@mui/system";
import {Link} from "react-router-dom";


export const SuccessContainer = styled(Box)({})

export const SuccessImg = styled('img')({
  width: 235,
  height: 235,
  marginBottom: 44,
})

export const SuccessSecondText = styled('p')({
  fontSize: '43px',
  lineHeight: '59px',
  fontWeight: 500,
  marginTop: 18,
})

export const StyledLink = styled(Link)({
  textDecoration: 'none',
})
