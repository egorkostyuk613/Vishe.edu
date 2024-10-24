import {styled} from "shared/lib";
import {Box, Stack} from "@mui/system";

export const AccountMainRoot = styled(Box)({

})

export const AccountMainWrraper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "330px 1fr",
  gap: 78,
})

export const AccountMainInputs = styled(Box)({
})

export const AccountTableMain = styled(Box)({

})

export const AccountTable = styled(Box)({
  display: 'grid',
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  width: "100%",
  height: 320,
  borderRadius: 8,
  background: 'white',
  marginTop: 25,
})

export const AccountTableColumn = styled(Box)({
  borderRight: "1px solid #D2D2D2CC",
  padding: 12,
  overflow: 'hidden',
})

interface SelectDayProp {
  $select: boolean;
}

export const AccountDayText = styled('p')<SelectDayProp>(({ $select }) => ({
  color: $select ? 'white' : '#7D7D7D',
  fontSize: 16,
  lineHeight: "20px",
  fontWeight: 400,
  background: $select ? '#756EDE' : 'transparent',
  borderRadius: 7,
  padding: 3,
  width: 'fit-content',
}))

export const AccountTableRow = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const AccountTime = styled(Box)({
  color: 'white',
  padding: '4px 14px',
  backgroundColor: '#756EDE',
  borderRadius: 25,
  width: 'fit-content',
});

export const AccountTableText = styled('p')({
  fontSize: 10,
  fontWeight: 500,
  lineHeight: "26px",
  marginLeft: 9,
})

export const AccountTableStackStyled = styled(Stack)({
  overflowY: 'auto',
  paddingBottom: 10,
  height: "91%"
})


export const InputStyled = styled('input')({
  border: "1px solid #FFFFFF",
  borderRadius: 10,
  padding: '8px 18px',
  backgroundColor: "#FFFFFF",
  maxWidth: 700,
  width: '100%',

  ['&:focus']: {
    outline: 'none',
  }
})

export const LessonsWrapper = styled(Box)({
  marginTop: 70,
})
