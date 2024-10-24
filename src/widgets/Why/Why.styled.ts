import {styled} from "shared/lib";
import {Box} from "@mui/system";
import {Link} from "react-router-dom";

export const WhyRoot = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
  gap: 32,
  gridTemplateAreas: `
    "left1 right"
    "left2 right"
  `,
});

export const WhyWrapper = styled(Box)({
  marginTop: 180,
})

export const WhyBlock = styled(Box)({
  padding: '46px',
  background: '#756EDE4D',
  borderRadius: 20,
  minHeight: 275,
});

export const WhyText = styled('p')(({theme}) => ({
  fontSize: "60px",
  lineHeight: "60px",
  color: theme.palette.dark.main,
  fontWeight: 600,
  marginBottom: 62,
}));

export const WhyMainText = styled('p')({
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: "30px",
  color: "black"
});

export const WhySecondText = styled('p')({
  fontSize: '22px',
  fontWeight: 400,
  lineHeight: "30px",
  color: "black",
  marginTop: '50%'
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

export const StyledLink = styled(Link)({
  textDecoration: 'none',
})

export const PillArrowImg = styled('img')({
  width: 24,
  height: 24,
});

export const StyledSpan = styled('span')({
  marginLeft: 'auto',
})
