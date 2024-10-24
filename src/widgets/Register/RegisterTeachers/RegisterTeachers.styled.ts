import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const TeachersRoot = styled(Box)({
  marginTop: 65,
})

export const TeachersTitle = styled('p')(({theme}) => ({
  fontSize: "45px",
  lineHeight: "45px",
  color: theme.palette.dark.main,
  fontWeight: 600,
  textAlign: 'left',
}))
