import { kDatePicker } from './constants';

interface IDatePickerDayDetails {
  date: number;
  day: number;
  month: number;
  timestamp: number;
  dayString: string;
}

const getNumberOfDays = (year: number, month: number) => 40 - new Date(year, month, 40).getDate();

const getDayDetails = (args: {
  index: number;
  firstDay: number;
  month: number;
  year: number;
  numberOfDays: number;
}): IDatePickerDayDetails => {
  const rawDate = args.index - args.firstDay;
  const day = args.index % 7;
  let prevMonth = args.month - 1;
  let prevYear = args.year;

  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear -= 1;
  }

  const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
  const date = (rawDate < 0 ? prevMonthNumberOfDays + rawDate : rawDate % args.numberOfDays) + 1;
  // eslint-disable-next-line no-nested-ternary
  const month = rawDate < 0 ? -1 : rawDate >= args.numberOfDays ? 1 : 0;
  const timestamp = new Date(args.year, args.month, date).getTime();

  return {
    date,
    day,
    month,
    timestamp,
    dayString: kDatePicker.days[day],
  };
};

export const getMonthDetails = (year: number, month: number): Array<Array<IDatePickerDayDetails>> => {
  const firstDay = new Date(year, month).getDay();
  const numberOfDays = getNumberOfDays(year, month);
  const monthArrays: Array<Array<IDatePickerDayDetails>> = [];
  let index = 0;
  let currentDay = null;

  Array.from(Array(6).keys()).forEach(() => {
    const monthArray: Array<IDatePickerDayDetails> = [];
    Array.from(Array(7).keys()).forEach(() => {
      currentDay = getDayDetails({
        index,
        numberOfDays,
        firstDay,
        year,
        month,
      });
      monthArray.push(currentDay);
      index += 1;
    });

    monthArrays.push(monthArray);
  });

  return monthArrays;
};

export const getDateStringFromTimestamp = (timestamp: number): string => {
  const dateObject = new Date(timestamp);
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();

  return `${dateObject.getFullYear()}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
};

export const getDateFromDateString = (dateValue: string) => {
  const dateData = dateValue.split('-').map(d => parseInt(d, 10));
  if (dateData.length < 3) return null;

  const year = dateData[0];
  const month = dateData[1];
  const date = dateData[2];
  return { year, month, date };
};

export const isSameDate = (firstTimestamp: number, secondTimestamp: number, month: number) =>
  // eslint-disable-next-line operator-linebreak
  month === 0 &&
  getDateStringFromTimestamp(firstTimestamp) === getDateStringFromTimestamp(secondTimestamp);
