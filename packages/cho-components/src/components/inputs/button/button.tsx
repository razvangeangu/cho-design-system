// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, Prop, ComponentInterface } from '@stencil/core';
import { TButtonKind, kButton } from './model';

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
        class={kButton.classNames.button}
        type="button"
        data-cho-kind={this.kind}
        data-cho-color="primary"
      >
        <slot name="leading" />
        <slot />
        <slot name="trailing" />
      </button>
    );
  }
}