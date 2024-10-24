import {styled} from "shared/lib";
import {Box} from "@mui/system";


export const CourseContainer = styled(Box)({
  height: 170,
  width: "100%",
  borderRadius: 8,
  padding: "10px 80px 10px 10px",
  backgroundColor: "white",
  display: 'grid',
  gridTemplateColumns: "240px 1fr",
  gap: 60,
})

export const ImageContainer = styled('img')({
  background: 'black',
  width: "100%",
  height: '100%',
  borderRadius: 8,
})

export const HeadText = styled('p')({
  fontSize: 18,
  fontWeight: 500,
})

export const MainText = styled('p')({
  fontSize: 14,
  fontWeight: 400,
})

export const CoursePurpleButton = styled(Box)({
  borderRadius: 50,
  padding: "8px 31px",
  background: '#756EDE',
  color: '#FFFFFF',
  fontSize: 12,
  cursor: 'pointer',
  width: 'fit-content',
  marginLeft: 'auto'
})
