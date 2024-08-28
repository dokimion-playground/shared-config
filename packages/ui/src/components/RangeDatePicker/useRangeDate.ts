import { useState } from 'react';
import dayjs from 'dayjs';

export const useDateRange = () => {
  const today = dayjs().toDate();
  const nextWeek = dayjs().add(7, 'day').toDate();

  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(nextWeek);

  const onChangeStart = (date: Date) => setStartDate(date);
  const onChangeEnd = (date: Date) => setEndDate(date);

  return {
    startDate,
    endDate,
    onChangeStart,
    onChangeEnd,
  };
};
