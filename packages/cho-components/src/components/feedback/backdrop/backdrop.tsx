// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { kBackdrop } from './model';

/**
 * @slot - The main content of the backdrop.
 */
@Component({
  tag: 'cho-backdrop',
  styleUrl: 'backdrop.scss',
  shadow: true,
})
export class Backdrop implements ComponentInterface {
  /**
   * If `true`, the backdrop and it's children will be visible.
   *
   * @default false
   */
  @Prop() visible?: boolean = false;

  render() {
    return (
      this.visible && (
        <div class={kBackdrop.classes.container}>
          <slot />
        </div>
      )
    );
  }
}
