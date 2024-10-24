import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const SlideRoot = styled(Box)({
  border: "3px solid white",
  borderRadius: 40,
  backgroundColor: 'rgba(255,255,255,0.1)',
  height: 645,
  width: "100%",
  padding: "85px 100px",
  marginTop: '45px',
});

export const SlideText = styled('p')(({theme}) => ({
  fontSize: "65px",
  lineHeight: "65px",
  color: theme.palette.dark.main,
  fontWeight: 600,
}))

export const SlideMaintext = styled('p')({
  fontSize: "18px",
  lineHeight: "24px",
  marginTop: 35,
})
