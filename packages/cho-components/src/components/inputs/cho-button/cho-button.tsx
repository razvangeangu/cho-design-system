// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, Prop, ComponentInterface } from '@stencil/core';
import { TChoButtonKind } from './model';

@Component({
  tag: 'cho-button',
  styleUrl: 'cho-button.scss',
  shadow: true
})
export class ChoButton implements ComponentInterface {
  @Prop() kind?: TChoButtonKind = 'primary';

  @Prop() disabled?: boolean;

  render() {
    return (
      <button disabled={this.disabled} class="button" type="button">
        <slot />
      </button>
    );
  }
}
