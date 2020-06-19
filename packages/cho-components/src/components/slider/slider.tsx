// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { scaleBetween } from '../../utils';
import { ISliderTickmark, ISliderValueChangedDetail, kSlider } from './model';

/**
 * @slot leading - A component to display before the primary content.
 * @slot trailing - A component to display after the primary content.
 */
@Component({
  tag: 'cho-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider implements ComponentInterface {
  /**
   * The label content.
   *
   * @default undefined
   */
  @Prop() label?: string;

  /**
   * The granularity with which the slider can step through values.
   *
   * @default 1
   */
  @Prop() step?: number = 1;

  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   *
   * @default 0
   */
  @Prop() min?: number = 0;

  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   *
   * @default 100
   */
  @Prop() max?: number = 100;

  /**
   * The value of the slider.
   *
   * @default 0
   */
  @Prop({ mutable: true }) value?: number = 0;

  /**
   * The track presentation:
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   */
  @Prop() track?: 'normal' | 'inverted' | 'false' = 'normal';

  /**
   * If `true`, the text-field will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * Tickmarks indicate predetermined values to which the user can move the slider.
   * If an `Array`, it should contain objects with value and an optional label keys.
   */
  @Prop() tickmarks?: Array<ISliderTickmark>;

  /**
   * Callback fired when the value is changed.
   */
  @Event() valueChanged: EventEmitter<ISliderValueChangedDetail>;

  @State() showTooltip: boolean = false;

  private scaledValue = (value = this.value) => {
    const scaled = scaleBetween(value, this.min, this.max, 0, 100).value;
    return scaled;
  };

  private positionedLeft = (value: number, offset: number = 9) =>
    `calc(${value}% + (${offset - value * 0.15}px))`;

  private get tooltipStyle() {
    const value = this.track === 'inverted' ? 100 - this.scaledValue() : this.scaledValue();
    const left = this.positionedLeft(value);

    return {
      left,
    };
  }

  private get inputStyle() {
    const value = this.scaledValue();
    const gradientDirection = this.track === 'inverted' ? 'left' : 'right';
    const filledcolor = `var(--${this.disabled ? 'disabled' : 'primary'})`;
    const unFilledColor = `var(--surface__background-color${this.disabled ? '--disabled' : ''})`;
    const background = `linear-gradient( to ${gradientDirection}, ${filledcolor} 0%, ${filledcolor} ${value}%, ${unFilledColor} ${value}%, ${unFilledColor} 100% )`; /* eslint-disable-line max-len */

    return {
      background: this.track === 'false' ? undefined : background,
    };
  }

  private didTapIn = () => {
    this.showTooltip = true;
  };

  private didTapOut = () => {
    this.showTooltip = false;
  };

  private didInput = (event: Event) => {
    const input = event.target as HTMLInputElement;

    if (this.track === 'inverted') {
      this.value = this.max - parseInt(input.value, 10);
    } else {
      this.value = parseInt(input.value, 10);
    }

    this.valueChanged.emit({ value: this.value });
  };

  render() {
    return (
      <div class={kSlider.classes.slider}>
        {this.label && (
          <div class={kSlider.classes.labelContent} data-disabled={String(!!this.disabled)}>
            {this.label}
          </div>
        )}
        <div class={kSlider.classes.sliderContainer}>
          <slot name={kSlider.slots.leading} />
          <div class={kSlider.classes.inputContainer}>
            <input
              id={kSlider.ids.slider}
              class={kSlider.classes.input}
              style={this.inputStyle}
              type="range"
              min={this.min}
              max={this.max}
              step={this.step}
              value={this.track === 'inverted' ? this.max - this.value : this.value}
              onInput={this.didInput}
              onMouseDown={this.didTapIn}
              onMouseOver={this.didTapIn}
              onMouseLeave={this.didTapOut}
              onFocus={this.didTapIn}
              onBlur={this.didTapOut}
              onTouchStart={this.didTapIn}
              onTouchEnd={this.didTapOut}
              disabled={this.disabled}
              list={this.tickmarks != null ? kSlider.ids.tickmarks : ''}
            />
            {this.tickmarks && (
              <datalist id={kSlider.ids.tickmarks} class={kSlider.classes.datalist}>
                {this.tickmarks.map(tickmark => (
                  <option
                    class={kSlider.classes.option}
                    label={tickmark.label}
                    value={tickmark.value}
                    style={{ left: this.positionedLeft(tickmark.value, 0) }}
                    data-disabled={String(!!this.disabled)}
                  />
                ))}
              </datalist>
            )}
            {this.showTooltip && (
              <output class={kSlider.classes.valueTooltip} style={this.tooltipStyle}>
                {this.scaledValue()}
              </output>
            )}
          </div>
          <slot name={kSlider.slots.trailing} />
        </div>
      </div>
    );
  }
}
