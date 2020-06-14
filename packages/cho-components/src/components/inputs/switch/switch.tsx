// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import { TPlacement } from '../../../types';
import { ISwitchValueChangedDetail, kSwitch } from './model';

/**
 * @slot - The primary content of the switch.
 */
@Component({
  tag: 'cho-switch',
  styleUrl: 'switch.scss',
  shadow: true,
})
export class Switch implements ComponentInterface {
  /**
   * If `true`, the component is checked.
   *
   * @default false
   */
  @Prop({ mutable: true }) checked?: boolean = false;

  /**
   * If `true`, the switch will be disabled.
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
  @Event() checkedChanged: EventEmitter<ISwitchValueChangedDetail>;

  private didInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;

    this.checkedChanged.emit({ checked: this.checked });
  };

  private renderInput() {
    return [
      this.labelPlacement === 'start' || this.labelPlacement === 'bottom' ? <slot /> : null,
      <input
        class={kSwitch.classNames.input}
        type="checkbox"
        id={kSwitch.ids.switch}
        checked={this.checked}
        disabled={this.disabled}
        onInput={this.didInput}
      />,
      <span
        class={kSwitch.classNames.switchCustom}
        data-disabled={String(!!this.disabled)}
        data-checked={String(!!this.checked)}
        data-label-placement={this.labelPlacement}
      />,
      this.labelPlacement === 'end' || this.labelPlacement === 'top' ? <slot /> : null,
    ];
  }

  render() {
    return (
      <label
        class={kSwitch.classNames.label}
        htmlFor={kSwitch.ids.switch}
        data-disabled={String(!!this.disabled)}
        data-label-placement={this.labelPlacement}
      >
        {this.renderInput()}
      </label>
    );
  }
}
