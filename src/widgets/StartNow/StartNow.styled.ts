import {styled} from "shared/lib";
import {Box} from "@mui/system";


export const StartNowContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 300,
  marginBottom: 280
});

export const CenterContainer = styled(Box)({

});

export const MainTitleText = styled('p')({
  fontSize: 85,
  lineHeight: "85px",
  textAlign: 'center',
  color: '#FFFFFF'
});

export const ButtonPill = styled(Box)({
  background: '#8A2BE2',
  padding: '3px',
  width: 268,
  borderRadius: 15,
  marginTop: 60,
  display: 'flex',
  alignItems: 'center',
  color: "white",
  justifyContent: 'center',
  cursor: 'pointer',
  margin: "75px auto 0px",
});

export const PillSquere = styled(Box)({
  backgroundColor: '#93a8b363',
  padding: '17px',
  borderRadius: '15px',
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledSpan = styled('span')({
  marginLeft: 'auto',
})

export const PillPlusImg = styled('img')({
  width: 24,
  height: 24,
});
