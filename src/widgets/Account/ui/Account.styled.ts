import {styled} from "../../../shared/lib";
import {Box} from "@mui/system";
import {Input} from "@mui/base";


export const AccountWrapper = styled(Box)({});

export const AccountContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  marginTop: 35,
  gap: 75,
})

export const AccountMenu = styled(Box)({
  ['a']:{
    textDecoration: "none",
  }
})

interface backProp {
  $background: boolean;
}

export const AccountMenuText = styled(Box)<backProp>(({$background}) => ({
  fontSize: 18,
  lineHeight: "43px",
  color: "black",
  background: $background ? '#FFFFFFB2' : 'transparent',
  cursor: 'pointer',
  paddingLeft: 4,
  borderRadius: 8,
}))

export const InputAccountContainer = styled(Input)({});

export const AccountHeadText = styled('p')({
  color: '#000000',
  fontSize: 24,
  fontWeight: 500,
  lineHeight: "43px",
})
