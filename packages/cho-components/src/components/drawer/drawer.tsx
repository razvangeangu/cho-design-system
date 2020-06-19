// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { kDrawer } from './model';

@Component({
  tag: 'cho-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer implements ComponentInterface {
  /**
   * If `true`, the drawer and it's children will be visible.
   *
   * @default true
   */
  @Prop() visible?: boolean = true;

  render() {
    return (
      this.visible && (
        <div class={kDrawer.classes.container}>
          <slot />
        </div>
      )
    );
  }
}
