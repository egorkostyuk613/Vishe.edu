import {
  CalendarArrowBlock, CalendarArrowRightBlock, CalendarDay,
  CalendarDays,
  CalendarRoot,
  CalendarSelectWeeks, CalendarSwitcherBlock,
  CalendarSwitchWeek, CalendarText, CalendarTime, CalendarTimes, CalendarTimeText,
  CalendarUpContainer, DayText
} from "./Calendar.styled";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import {useWeeklyCalendar} from "./config";

export const Calendar = () => {
  const {weekDaysWithTimes, goToPreviousWeek, goToNextWeek, weekRange} = useWeeklyCalendar()
  console.log(weekDaysWithTimes)
  return <CalendarRoot>
    <CalendarUpContainer>
      <CalendarSelectWeeks>
        <CalendarSwitcherBlock>
          <CalendarSwitchWeek>
            <CalendarArrowBlock onClick={goToPreviousWeek}>
              {"<"}
            </CalendarArrowBlock>
            <CalendarArrowRightBlock onClick={goToNextWeek}>
              {">"}
            </CalendarArrowRightBlock>
          </CalendarSwitchWeek>
          <CalendarText>{weekRange.start + " - " + weekRange.end}</CalendarText>
        </CalendarSwitcherBlock>
      </CalendarSelectWeeks>
      <CalendarDays>
        {weekDaysWithTimes.map(value => {
          return <CalendarDay>
            <DayText>{value.shortDay}</DayText>
            <DayText>{value.dayNumber}</DayText>
          </CalendarDay>
        })}
      </CalendarDays>
      <CalendarTimes>
          {weekDaysWithTimes.map(value => {
            return <CalendarTime>
              {value.times.map(time=> <CalendarTimeText>{format(time, 'HH:mm')}</CalendarTimeText>)}
            </CalendarTime>
          })}
      </CalendarTimes>
    </CalendarUpContainer>
  </CalendarRoot>
}
