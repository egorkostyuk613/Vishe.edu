import { useState } from 'react';
import { format, startOfWeek, addDays, addWeeks, subWeeks } from 'date-fns';
import { ru } from 'date-fns/locale';

// Создаем объект для сокращенных названий дней недели
const shortWeekDays: any = {
  0: 'вс', // Воскресенье
  1: 'пн', // Понедельник
  2: 'вт', // Вторник
  3: 'ср', // Среда
  4: 'чт', // Четверг
  5: 'пт', // Пятница
  6: 'сб', // Суббота
};

export const useWeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Функция для получения дней недели и времён
  const getWeekDaysWithTimes = () => {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });

    return Array.from({ length: 7 }).map((_, index) => {
      const day = addDays(weekStart, index);

      const dayNumber = format(day, 'd', { locale: ru });
      const weekDayIndex = day.getDay();
      const shortDay = shortWeekDays[weekDayIndex];

      return {
        dayNumber: dayNumber,
        shortDay: shortDay,
        day,
        times: generateTimes(day),
      };
    });
  };

  // Генерация массива с 24 объектами времени для каждого дня недели
  const generateTimes = (day: any) => {
    return Array.from({ length: 24 }).map((_, hour) => {
      const time = new Date(day);
      time.setHours(hour, 0, 0, 0);
      return time;
    });
  };

  // Функции для переключения недели
  const goToPreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const goToNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const getWeekRange = () => {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
    const weekEnd = addDays(weekStart, 6); // Конец недели - 6 дней после начала
    return {
      start: format(weekStart, 'd MMM', { locale: ru }),
      end: format(weekEnd, 'd MMM', { locale: ru }),
    };
  };

  return {
    weekDaysWithTimes: getWeekDaysWithTimes(),
    goToPreviousWeek,
    goToNextWeek,
    currentDate,
    weekRange: getWeekRange(),
  };
};
