import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const DialogNewContent = styled(Box)({})

export const DialogNewContentText = styled('p')({
  fontSize: '24px',
  lineHeight: '27px',
})

export const DialogNewMainText = styled('p')({
  fontSize: '20px',
  lineHeight: '27px',
  fontWeight: 400,
})

export const DialogButtons = styled('div')({
  display: "flex",
  justifyContent: "end",
  marginTop: 78,
})
