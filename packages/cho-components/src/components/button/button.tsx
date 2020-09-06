// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { kButton, TButtonKind } from './model';

/**
 * @slot leading - A component to display before the primary content.
 * @slot - The primary content of the button.
 * @slot trailing - A component to display after the primary content.
 */
@Component({
  tag: 'cho-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button implements ComponentInterface {
  /**
   * The kind to use.
   *
   * @default 'contained'
   */
  @Prop() kind?: TButtonKind = 'contained';

  /**
   * If `true`, the button will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  private didClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    return (
      <button
        onClick={this.didClick}
        disabled={this.disabled}
        class={kButton.classes.button}
        type="button"
        data-kind={this.kind}
        data-color="primary"
      >
        <slot name={kButton.slots.leading} />
        <slot />
        <slot name={kButton.slots.trailing} />
      </button>
    );
  }
}
