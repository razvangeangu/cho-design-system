// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface } from '@stencil/core';
import { kMenu } from './model';

/**
 * @slot - The primary content of the menu.
 */
@Component({
  tag: 'cho-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class Menu implements ComponentInterface {
  render() {
    return (
      <ul class={kMenu.classes.menuUl}>
        <slot />
      </ul>
    );
  }
}
