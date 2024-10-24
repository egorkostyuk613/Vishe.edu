import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const TarifRoot = styled(Box)({
  borderRadius: 32,
  backgroundColor: "#C1C6E0BF",
  padding: "34px 78px",
  textAlign: "center",
});

export const TarifTitle = styled('p')({
  fontSize: 30,
  lineHeight: "36px",
  fontWeight: 600,
});

export const ListContainer = styled('ul')({
  marginTop: 20,
  textAlign: "left",
})

export const ListText = styled('li')({
  fontSize: 16,
  lineHeight: "35px",
})

export const VioletText = styled('p')({
  color: '#756EDE',
  fontSize: 27,
  lineHeight: "32px",
  marginBottom: 14,
  marginTop: 28,
})
