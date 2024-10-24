import { format, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

const weekDayShort = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export const getDays = () => {
  const today = new Date();

  const yesterday = addDays(today, -1);
  const tomorrow = addDays(today, 1);
  const dayAfterTomorrow = addDays(today, 2);

  const formatDate = (date: Date) => {
    const day = format(date, 'd', { locale: ru }); // Получаем число
    const weekDay = weekDayShort[date.getDay()];   // Используем кастомные сокращения
    return `${day} ${weekDay}`;
  };

  return [
    formatDate(yesterday),
    formatDate(today),
    formatDate(tomorrow),
    formatDate(dayAfterTomorrow),
  ];
}
