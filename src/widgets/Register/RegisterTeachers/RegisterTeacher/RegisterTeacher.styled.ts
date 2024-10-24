import {styled} from "shared/lib";
import {Box} from "@mui/system";
import {Button} from "shared/ui";

export const TeacherRoot = styled(Box)({
  borderRadius: 32,
  padding: 40,
  background: '#FFFFFF',
  width: "100%",
  textAlign: "left",
  border: "4px solid #C0C5E4"
});

export const TeacherImageContainer = styled(Box)({
  width: 310,
  height: 300,
  borderRadius: 24,
  background: '#CFCFCF',
})

export const TeacherInfoContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
  gap: 44,
});

export const NameText = styled('p')({
  fontSize: 27,
  lineHeight: "32px",
})

export const TeachInfoHeadText = styled('p')({
  fontSize: 24,
  lineHeight: "29px",
})

export const AboutWrapeer = styled(Box)({
  display: 'flex',
  width: 340,
  justifyContent: 'space-between',
})

export const AboutText = styled('p')({
  fontSize: 16,
  lineHeight: "22px",
  fontWeight:400,
  color: '#262626',
})

export const StarImg = styled('img')({
  width: 20,
  height: 20,
  marginLeft: 8,
})

export const RatingText = styled('span')({
  fontSize: 22,
  lineHeight: "28px",
  fontWeight: 400,
})

export const TeacherButtonContainer = styled(Box)({
  display: "flex",
  marginTop: 40,
})

export const StyledRootButton = styled(Button)({
  padding: '15px 55px',
  marginLeft: 30,
})
