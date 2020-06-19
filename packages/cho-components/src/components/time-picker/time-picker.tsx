// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import {
  ITimePickerHoursChangedDetail,
  ITimePickerMinutesChangedDetail,
  ITimePickerValueChangedDetail,
  kTimePicker,
} from './model';

@Component({
  tag: 'cho-time-picker',
  styleUrl: 'time-picker.scss',
  shadow: true,
})
export class TimePicker implements ComponentInterface {
  /**
   * The value of the time-picker.
   *
   * @default new Date()
   */
  @Prop() value?: Date = new Date();

  /**
   * If `true`, the text-field will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the value will be formatted with AM/PM.
   *
   * @default false
   */
  @Prop() twelveHourFormat: boolean = false;

  /**
   * If `true`, the time will be visible.
   *
   * @default false
   */
  @Prop({ mutable: true }) visible?: boolean = false;

  /**
   * Callback fired when the value is changed.
   */
  @Event() valueChanged: EventEmitter<ITimePickerValueChangedDetail>;

  /**
   * Callback fired when the hours value is changed.
   */
  @Event() hoursChanged: EventEmitter<ITimePickerHoursChangedDetail>;

  /**
   * Callback fired when the minutes value is changed.
   */
  @Event() minutesChanged: EventEmitter<ITimePickerMinutesChangedDetail>;

  private toTimeFormat = (time: Date) => {
    return time.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: this.twelveHourFormat,
    });
  };

  private handleHoursSelection = (event: Event) => {
    const liElement = event.target as HTMLLIElement;
    this.value.setHours(parseInt(liElement.dataset.hours, 10));
    this.value = new Date(this.value.getTime());

    this.valueChanged.emit({ value: this.value });
    this.hoursChanged.emit({ value: this.value });
  };

  private handleMinutesSelection = (event: Event) => {
    const liElement = event.target as HTMLLIElement;
    this.value.setMinutes(parseInt(liElement.dataset.minutes, 10));
    this.value = new Date(this.value.getTime());

    this.valueChanged.emit({ value: this.value });
    this.minutesChanged.emit({ value: this.value });
  };

  private didClickHours = (event: MouseEvent) => {
    this.handleHoursSelection(event);
  };

  private didClickMinutes = (event: MouseEvent) => {
    this.handleMinutesSelection(event);
  };

  private didKeyPressHours = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleHoursSelection(event);
    }
  };

  private didKeyPressMinutes = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleMinutesSelection(event);
    }
  };

  private didClickTextField = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.disabled) {
      this.visible = !this.visible;
    }
  };

  render() {
    return (
      <div class={kTimePicker.classes.container}>
        <cho-text-field
          disabled={this.disabled}
          value={this.toTimeFormat(this.value)}
          onClick={this.didClickTextField}
        />
        {this.visible && (
          <div class={kTimePicker.classes.timeContainer}>
            <ul class={kTimePicker.classes.timeUl}>
              {Array.from(Array(this.twelveHourFormat ? 12 : 24).keys()).map(hours => (
                <li
                  class={kTimePicker.classes.timeLi}
                  role="menuitem"
                  onClick={this.didClickHours}
                  onKeyPress={this.didKeyPressHours}
                  data-selected={String(this.value.getHours() === hours)}
                  data-hours={String(hours)}
                  data-disabled={String(!!this.disabled)}
                >
                  {`${hours < 10 ? '0' : ''}${hours}`}
                </li>
              ))}
            </ul>
            <ul class={kTimePicker.classes.timeUl}>
              {Array.from(Array(60).keys()).map(minutes => (
                <li
                  class={kTimePicker.classes.timeLi}
                  role="menuitem"
                  onClick={this.didClickMinutes}
                  onKeyPress={this.didKeyPressMinutes}
                  data-selected={String(this.value.getMinutes() === minutes)}
                  data-minutes={String(minutes)}
                  data-disabled={String(!!this.disabled)}
                >
                  {`${minutes < 10 ? '0' : ''}${minutes}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
