import {styled} from "../../../shared/lib";
import {Box} from "@mui/system";


export const RegisterTarifWrapper = styled(Box)({
  marginTop: 100,
})

export const TarriffRoot = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 32,
  marginTop: 65,
})

export const TarriffTitle = styled('p')(({theme}) => ({
  fontSize: "45px",
  lineHeight: "45px",
  color: theme.palette.dark.main,
  fontWeight: 600,
  textAlign: 'left'
}))
