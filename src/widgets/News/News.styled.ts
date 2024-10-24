import {styled} from "shared/lib";
import {Box} from "@mui/system";


export const NewsContainer = styled(Box)({
  marginTop: 100,
});

export const NewsWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,
  marginTop: 65,
});

export const NewsTitle = styled('p')(({theme}) => ({
  fontSize: "45px",
  lineHeight: "45px",
  color: theme.palette.dark.main,
  fontWeight: 600,
}))
