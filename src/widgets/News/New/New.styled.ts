import {styled} from "shared/lib";
import {Box} from "@mui/system";

interface BackgroundProp {
  $back: string;
}

export const NewContainer = styled(Box)<BackgroundProp>(({ $back }) => ({
  borderRadius: 25,
  background: `${$back}`,
  padding: 25,
  height: 265,
  position: "relative",
  cursor: "pointer",
}));

export const MainText = styled('p')({
  fontSize: 24,
  lineHeight: "27px",
  color: "white",
  fontWeight: 600,
})

export const ButtonImage = styled('img')({
  width: 34,
  position: "absolute",
  bottom: 32,
  right: 50,
})
