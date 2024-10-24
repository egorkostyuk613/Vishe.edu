import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const PupilContainer = styled(Box)({
  width: "100%",
  height: 100,
  borderRadius: 7,
  background: 'white',
  padding: "12px 27px",
  display: 'flex',
  justifyContent: 'space-between',
})

export const NameContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
})

export const NameText = styled('p')({
  color: '#29455A',
  lineHeight: '26px',
  fontSize: 16,
  fontWeight: 600,
  marginLeft: 4,
  textDecoration: 'underline',
})

export const SpanRightStyled = styled(Box)({
  marginRight: 8,
})

export const StyledBox = styled(Box)({
  marginTop: "12px",
})
