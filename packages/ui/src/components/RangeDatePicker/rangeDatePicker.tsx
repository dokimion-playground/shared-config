import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface RangeDatePickerProps {
  startDate: Date;
  endDate?: Date;
  onChangeStart: (date: Date) => void;
  onChangeEnd?: (date: Date) => void;
}

export const RangeDatePicker = ({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
}: RangeDatePickerProps) => {
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => onChangeStart(date as Date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => onChangeEnd && onChangeEnd(date as Date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};
