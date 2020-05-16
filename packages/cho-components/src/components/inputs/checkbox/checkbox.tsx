// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';
import { kCheckbox, TCheckboxPlacement, ICheckboxValueChangedDetail } from './model';

/**
 * @slot - The primary content of the checkbox.
 */
@Component({
  tag: 'cho-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox implements ComponentInterface {
  /**
   * If `true`, the component is checked.
   *
   * @default false
   */
  @Prop({ mutable: true }) checked?: boolean = false;

  /**
   * If `true`, the component appears indeterminate.
   *
   * @default false
   */
  @Prop() indeterminate?: boolean = false;

  /**
   * If `true`, the checkbox will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * The position of the label
   *
   * @default 'end'
   */
  @Prop() labelPlacement?: TCheckboxPlacement = 'end';

  /**
   * Callback fired when the state is changed.
   */
  @Event() checkedChanged: EventEmitter<ICheckboxValueChangedDetail>;

  private didInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;

    this.checkedChanged.emit({ checked: this.checked });
  };

  private renderInput() {
    return [
      this.labelPlacement === 'start' || this.labelPlacement === 'bottom' ? <slot /> : null,
      <input
        class={kCheckbox.classNames.input}
        type="checkbox"
        id={kCheckbox.ids.checkbox}
        checked={this.checked}
        disabled={this.disabled}
        data-indeterminate={String(this.indeterminate)}
        onInput={this.didInput}
      />,
      <span
        class={kCheckbox.classNames.checkboxCustom}
        data-disabled={String(this.disabled)}
        data-checked={String(this.checked)}
        data-indeterminate={String(this.indeterminate)}
        data-label-placement={this.labelPlacement}
      />,
      this.labelPlacement === 'end' || this.labelPlacement === 'top' ? <slot /> : null,
    ];
  }

  render() {
    return (
      <label
        class={kCheckbox.classNames.label}
        htmlFor={kCheckbox.ids.checkbox}
        data-disabled={String(this.disabled)}
        data-label-placement={this.labelPlacement}
      >
        {this.renderInput()}
      </label>
    );
  }
}
