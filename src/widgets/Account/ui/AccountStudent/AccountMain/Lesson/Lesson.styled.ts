import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const LessonContainer = styled(Box)({
  width: "100%",
  height: 160,
  borderRadius: 12,
  backgroundColor: "white",
  padding: "15px 26px",
  display: 'grid',
});

export const DateContainer = styled(Box)({
  color: '#313131',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "43px",
})

export const BootomContaier = styled(Box)({
  marginTop: "auto",
  display: 'flex',
  justifyContent: 'space-between',
})

export const ButtonsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: "1fr 1fr",
  gap: 50
})

export const SpanStyled = styled(Box)({
  marginLeft: 8,
})

export const SpanRightStyled = styled(Box)({
  marginRight: 8,
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
})
