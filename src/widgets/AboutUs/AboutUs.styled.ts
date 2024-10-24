import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const AboutUsRoot = styled(Box)({
  marginTop: 65,
  padding: "0px 80px"
})

export const AboutTitle = styled('p')(({theme}) => ({
  fontSize: "45px",
  lineHeight: "45px",
  color: theme.palette.dark.main,
  fontWeight: 600,
}))

export const AboutMainText = styled('p')(({theme}) => ({
  fontSize: 22,
  lineHeight: "30px",
  fontWeight: 400,
  color: theme.palette.dark.main,
}))
