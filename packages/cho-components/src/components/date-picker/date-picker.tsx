import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h,
  Method,
  Prop,
} from '@stencil/core';
import { IOverlayController } from '../../types';
import { ITextFieldValueChangedDetail, kTextField } from '../text-field/model';
import {
  getDateFromDateString,
  getDateStringFromTimestamp,
  getMonthDetails,
  IDatePickerDayChangedDetail,
  IDatePickerMonthChangedDetail,
  IDatePickerValueChangedDetail,
  IDatePickerYearChangedDetail,
  isSameDate,
  kDatePicker,
} from './model';

@Component({
  tag: 'cho-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker implements ComponentInterface, IOverlayController {
  /**
   * The value of the date-picker.
   *
   * @default new Date()
   */
  @Prop({ mutable: true }) value?: Date = new Date();

  /**
   * Min selectable date
   *
   * @default new Date('1897-01-14')
   */
  @Prop() minDate?: Date = new Date('1897-01-14');

  /**
   * Max selectable date
   *
   * @default new Date('2097-01-14')
   */
  @Prop() maxDate?: Date = new Date('2097-01-14');

  /**
   * Callback used to disable specific dates.
   *
   * @default () => false
   */
  @Prop() shouldDisableDate?: (timestamp?: number) => boolean = () => false;

  /**
   * If `true`, the text-field will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the calendar will be visible.
   *
   * @default false
   */
  @Prop({ mutable: true }) visible?: boolean = false;

  /**
   * Callback fired when the value is changed.
   */
  @Event() valueChanged: EventEmitter<IDatePickerValueChangedDetail>;

  /**
   * Callback fired when the year is changed.
   */
  @Event() yearChanged: EventEmitter<IDatePickerYearChangedDetail>;

  /**
   * Callback fired when the month is changed.
   */
  @Event() monthChanged: EventEmitter<IDatePickerMonthChangedDetail>;

  /**
   * Callback fired when the day is changed.
   */
  @Event() dayChanged: EventEmitter<IDatePickerDayChangedDetail>;

  /**
   * Open the dropdown.
   */
  @Method()
  async open() {
    this.visible = true;
  }

  /**
   * Close the dropdown.
   */
  @Method()
  async close() {
    this.visible = false;
  }

  private valueChangedEmitter = (newValue: Date, oldValue: Date) => {
    this.valueChanged.emit({ value: this.value });

    if (newValue != null && oldValue != null) {
      if (newValue.getFullYear() !== oldValue.getFullYear()) {
        this.yearChanged.emit();
      }

      if (newValue.getMonth() !== oldValue.getMonth()) {
        this.monthChanged.emit();
      }

      if (newValue.getDay() !== oldValue.getDay()) {
        this.dayChanged.emit();
      }
    } else {
      this.yearChanged.emit();
      this.monthChanged.emit();
      this.dayChanged.emit();
    }
  };

  private didValueChanged = (event: CustomEvent<ITextFieldValueChangedDetail>) => {
    // Stop the text-field valueChanged event from propagating since date-picker has its own
    event.stopPropagation();

    const { value } = event.detail;
    const dateData = getDateFromDateString(value);

    if (dateData !== null && dateData.year > 999) {
      const oldValue = this.value;
      this.value = new Date(dateData.year, dateData.month - 1, dateData.date);
      this.valueChangedEmitter(this.value, oldValue);
    }
  };

  private handleDaySelection = (event: Event) => {
    const element = event.target as HTMLElement;
    if (element.dataset.disabled === 'true') {
      return;
    }

    const rawDate = new Date(getDateStringFromTimestamp(parseInt(element.dataset.timestamp, 10)));
    const date = new Date(rawDate.setMonth(this.value.getMonth() + parseInt(element.dataset.month, 10)));

    const oldValue = this.value;
    this.value = date;
    this.valueChangedEmitter(this.value, oldValue);
  };

  private didClickDay = (event: MouseEvent) => {
    this.handleDaySelection(event);
  };

  private didKeyPressDay = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleDaySelection(event);
    }
  };

  private didClickTextField = (event: MouseEvent) => {
    // Hide the native calendar
    event.preventDefault();

    if (!this.disabled) {
      this.visible = !this.visible;
    }
  };

  render() {
    return (
      <div class={kDatePicker.classes.container}>
        <cho-text-field
          type="date"
          disabled={this.disabled}
          value={getDateStringFromTimestamp(this.value.getTime())}
          onValueChanged={this.didValueChanged}
          onClick={this.didClickTextField}
          min={this.minDate.getTime()}
          max={this.maxDate.getTime()}
        >
          <cho-icon
            class={kDatePicker.classes.trailingTextFieldIcon}
            slot={kTextField.slots.trailing}
            kind="calendar"
            color={this.disabled ? 'var(--disabled)' : undefined}
          />
        </cho-text-field>
        {this.visible && (
          <div class={kDatePicker.classes.calendarContainer}>
            <table class={kDatePicker.classes.calendarDaysContainer}>
              <thead>
                <tr>
                  {kDatePicker.days.map(d => (
                    <th
                      key={d}
                      class={kDatePicker.classes.calendarHeaderDay}
                      data-disabled={String(!!this.disabled)}
                    >
                      {d.slice(0, 3)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getMonthDetails(this.value.getFullYear(), this.value.getMonth()).map(week => (
                  <tr>
                    {week.map(day => {
                      const shouldDisableDate = this.shouldDisableDate(day.timestamp) || this.disabled;
                      const selected = isSameDate(this.value.getTime(), day.timestamp, day.month);

                      return (
                        <td
                          tabIndex={shouldDisableDate ? -1 : 0}
                          role="gridcell"
                          key={day.date}
                          class={kDatePicker.classes.calendarDay}
                          onClick={this.didClickDay}
                          onKeyPress={this.didKeyPressDay}
                          data-month={String(day.month)}
                          data-timestamp={String(day.timestamp)}
                          data-selected={String(!!selected)}
                          data-disabled={String(!!shouldDisableDate)}
                        >
                          {day.date}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
