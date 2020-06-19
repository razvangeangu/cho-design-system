export const kDatePicker = {
  componentName: 'cho-date-picker' as const,
  classes: {
    container: 'date-picker__container',
    calendarContainer: 'date-picker__calendar-container',
    calendarHeader: 'date-picker__calendar-header',
    calendarHeaderDay: 'date-picker__calendar-header-day',
    calendarDaysContainer: 'date-picker__calendar-days-container',
    calendarDay: 'date-picker__calendar-day',
    trailingTextFieldIcon: 'date-picker__text-field-icon',
  } as const,
  // TODO: support i18n
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  // TODO: support i18n
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};
