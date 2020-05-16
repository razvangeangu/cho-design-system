// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';
import { kRadio, IRadioValueChangedDetail } from './model';
import { TPlacement } from '../../../types';

/**
 * @slot - The primary content of the radio.
 */
@Component({
  tag: 'cho-radio',
  styleUrl: 'radio.scss',
  shadow: true,
})
export class Radio implements ComponentInterface {
  /**
   * If `true`, the component is checked.
   *
   * @default false
   */
  @Prop({ mutable: true }) checked?: boolean = false;

  /**
   * If `true`, the radio will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * The position of the label
   *
   * @default 'end'
   */
  @Prop() labelPlacement?: TPlacement = 'end';

  /**
   * Callback fired when the state is changed.
   */
  @Event() checkedChanged: EventEmitter<IRadioValueChangedDetail>;

  private didInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;

    this.checkedChanged.emit({ checked: this.checked });
  };

  private renderInput() {
    return [
      this.labelPlacement === 'start' || this.labelPlacement === 'bottom' ? <slot /> : null,
      <input
        class={kRadio.classNames.input}
        type="checkbox"
        id={kRadio.ids.radio}
        checked={this.checked}
        disabled={this.disabled}
        onInput={this.didInput}
      />,
      <span
        class={kRadio.classNames.radioCustom}
        data-disabled={String(this.disabled)}
        data-checked={String(this.checked)}
        data-label-placement={this.labelPlacement}
      />,
      this.labelPlacement === 'end' || this.labelPlacement === 'top' ? <slot /> : null,
    ];
  }

  render() {
    return (
      <label
        class={kRadio.classNames.label}
        htmlFor={kRadio.ids.radio}
        data-disabled={String(this.disabled)}
        data-label-placement={this.labelPlacement}
      >
        {this.renderInput()}
      </label>
    );
  }
}
