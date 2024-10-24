import {styled} from "shared/lib";
import {Box} from "@mui/system";
import {Link} from "react-router-dom";

export const HeaderRoot = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const HeaderMainImage = styled('img')({
  width: 230,
  height: 70,
  cursor: 'pointer',
});

export const HeaderCenterText = styled(Box)({
  display: 'flex',
  gap: 16,
  marginRight: 70,
});

interface SelectProp {
  $select: boolean;
}

export const HeaderLinks = styled(Link)<SelectProp>(({theme, $select}) => ({
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 400,
  background: $select ? '#FFFFFF80' :'transparent',
  padding: '6px 12px',
  borderRadius: 8,
  color: theme.palette.dark.main
}))

export const StyledLink = styled(Link)({
  textDecoration: 'none',
})
