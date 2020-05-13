// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, Prop, ComponentInterface } from '@stencil/core';
import { TButtonKind } from './model';
import { kButton } from './model/constants';

@Component({
  tag: 'cho-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button implements ComponentInterface {
  @Prop() kind?: TButtonKind = 'primary';

  @Prop() disabled?: boolean;

  render() {
    return (
      <button disabled={this.disabled} class={kButton.classNames.button} type="button">
        <slot />
      </button>
    );
  }
}
