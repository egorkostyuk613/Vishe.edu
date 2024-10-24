import {styled} from "../../../../../../shared/lib";
import {Box} from "@mui/system";

export const HwContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  width: 645,
  borderRadius: 8,
  background: '#FFFFFF',
  padding: "19px 24px",

  ['a']:{
    textDecoration: "none",
  }
});

export const HwTitleName = styled('p')({
  fontSize: 16,
  fontWeight: 500,
})

export const HwPill = styled(Box)({
  background: '#CED4DA',
  width: 'fit-content',
  padding: "5px 10px",
  marginTop: 12,
  borderRadius: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
})

export const AccountButton = styled(Box)({
  padding: '9px 25px',
  borderRadius: 8,
  background: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  fontSize: 12,
  color: "white",
  cursor: 'pointer'
})

export const AccountPageCount = styled('p')({
  color: '#7D7D7D',
  fontSize: 10,
  fontWeight: 400,
})

export const AccountHwCount = styled('p')({
  fontSize: 10,
  fontWeight: 400,
  marginLeft: 7,
})
