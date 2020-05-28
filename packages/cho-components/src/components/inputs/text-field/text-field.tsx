// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { TInputType } from '../../../types';
import { ITextFieldValueChangedDetail, kTextField } from './model';

/**
 * @slot leading - A component to display before the primary content.
 * @slot trailing - A component to display after the primary content.
 */
@Component({
  tag: 'cho-text-field',
  styleUrl: 'text-field.scss',
  shadow: true,
})
export class TextField implements ComponentInterface {
  /**
   * The granularity with which the input can step through values.
   *
   * @default 'any'
   */
  @Prop() step?: number | string = 'any';

  /**
   * The minimum allowed value of the input. Should not be equal to max.
   *
   * @default 0
   */
  @Prop() min?: number = 0;

  /**
   * The maximum allowed value of the input. Should not be equal to min.
   *
   * @default 100
   */
  @Prop() max?: number = 100;

  /**
   * Name attribute of the input element.
   *
   * @default undefined
   */
  @Prop() name?: string;

  /**
   * Number of rows to display when `multiline` option is set to true.
   *
   * @default 2
   */
  @Prop() rows?: number = 2;

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   *
   * @default false
   */
  @Prop() multiline?: boolean = false;

  /**
   * It prevents the user from changing the value of the field (not from interacting with the field).
   *
   * @default false
   */
  @Prop() readOnly?: boolean = false;

  /**
   * Specifies the type of <input> element to display.
   *
   * @default 'text'
   */
  @Prop() type?: TInputType = 'text';

  /**
   * The label content.
   *
   * @default undefined
   */
  @Prop() label?: string;

  /**
   * The short hint displayed in the input before the user enters a value.
   *
   * @default undefined
   */
  @Prop() placeholder?: string;

  /**
   * The helper text content.
   *
   * @default undefined
   */
  @Prop() helperText?: string;

  /**
   * If `true`, the text-field will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the label will be displayed in an error state.
   *
   * @default false
   */
  @Prop() error?: boolean = false;

  /**
   * The value of the input element, required for a controlled component.
   *
   * @default undefined
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * Callback fired when the value is changed.
   */
  @Event() valueChanged: EventEmitter<ITextFieldValueChangedDetail>;

  @State() private inputFocus: boolean = false;

  private didFocus = (event: Event) => {
    this.inputFocus = event.type === 'focus';
  };

  private didInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    this.valueChanged.emit({ value: this.value });
  };

  private renderInput() {
    const props: JSXBase.InputHTMLAttributes<HTMLInputElement> = {
      class: kTextField.classes.input,
      id: kTextField.ids.textField,
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled,
      readOnly: this.readOnly,
      name: this.name,
      onInput: this.didInput,
      onFocus: this.didFocus,
      onBlur: this.didFocus,
    };

    if (this.multiline) {
      return (
        <textarea
          {...(props as JSXBase.TextareaHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>)}
          rows={this.rows}
          data-type={this.type}
          data-error={String(this.error)}
        />
      );
    }

    return (
      <input
        type={this.type}
        min={this.min}
        max={this.max}
        step={this.step}
        data-error={String(this.error)}
        {...props}
      />
    );
  }

  render() {
    return (
      <label
        htmlFor={kTextField.ids.textField}
        class={kTextField.classes.label}
        data-disabled={String(this.disabled)}
        data-error={String(this.error)}
      >
        {this.label && (
          <div
            class={kTextField.classes.labelContent}
            data-disabled={String(this.disabled)}
            data-error={String(this.error)}
          >
            {this.label}
          </div>
        )}
        <div
          class={kTextField.classes.inputContainer}
          data-input-focus={String(this.inputFocus)}
          data-error={String(this.error)}
        >
          <slot name={kTextField.slots.leading} />
          {this.renderInput()}
          <slot name={kTextField.slots.trailing} />
        </div>
        {this.helperText && (
          <div
            class={kTextField.classes.helperText}
            data-disabled={String(this.disabled)}
            data-error={String(this.error)}
          >
            {this.helperText}
          </div>
        )}
      </label>
    );
  }
}
