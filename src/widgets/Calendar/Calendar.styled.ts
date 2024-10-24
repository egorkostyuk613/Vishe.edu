import {styled} from "../../shared/lib";
import {Box} from "@mui/system";

export const CalendarRoot = styled(Box)({
  marginTop: 100,
  textAlign: "center",
})

export const CalendarUpContainer = styled(Box)({})

export const CalendarSelectWeeks = styled(Box)({})

export const CalendarSwitchWeek = styled(Box)({
  background: '#C0C5E4',
  width: 148,
  height: 56,
  borderRadius: 4,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
})

export const CalendarArrowBlock = styled(Box)({
  fontSize: 35,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
})

export const CalendarSwitcherBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center'
})

export const CalendarText = styled('p')({
  fontSize: 24,
  fontWeight: 500,
  textAlign: 'left',
  marginLeft: 30,
})

export const CalendarArrowRightBlock = styled(Box)({
  fontSize: 35,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  background: '#FFFFFF',
  border: '4px solid #C0C5E4',
  borderRadius: "4px 10px 10px 4px",
  cursor: 'pointer',
})

export const CalendarDays = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gap: 8,
  width: "100%",
  marginTop: 20,
})

export const CalendarDay = styled(Box)({
  maxWidth: 170,
  borderTop: '5px solid #756EDE',
  width: "100%",
  paddingTop: 30,
})

export const DayText = styled('p')({
  fontWeight: 600,
  fontSize: 24,
  display: 'block',
})

export const CalendarTimes = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gap: 8,
  width: "100%",
})

export const CalendarTime = styled(Box)({
  maxWidth: 170,
})

export const CalendarTimeText = styled(Box)({
  fontWeight: 600,
  fontSize: 18,
  display: 'block',
  textDecoration: 'underline',
  marginTop: 20,
  cursor: 'pointer',
})
