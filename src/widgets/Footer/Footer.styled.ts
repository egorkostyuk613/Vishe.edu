import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const FooterRoot = styled(Box)({
  paddingDottom: 64,
  display: "flex",
  padding: "30px 0px",
  marginTop: 60
})

export const LeftContainer = styled(Box)({
  width: 340
});

export const BottomContainer = styled(Box)({
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "end",
  paddingLeft: 70,
});

export const MainText = styled('p')({
  color: '#00000099'
})

export const DarkText = styled('p')({
  color: '#000000',
  marginTop: 40
})

export const UnderlineText = styled('p')({
  textDecoration: 'underline',
  ['a']: {
    color: '#000000',
  }

})
