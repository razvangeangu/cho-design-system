// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface, Prop } from '@stencil/core';
import { kMenuItem } from './model';

/**
 * @slot - The primary content of the menu-item.
 */
@Component({
  tag: 'cho-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true,
})
export class MenuItem implements ComponentInterface {
  /**
   * The value of the slider.
   *
   * @default undefined
   */
  @Prop() value?: any;

  /**
   * If `true`, the switch will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  render() {
    return (
      <li
        class={kMenuItem.classes.li}
        role="menuitem"
        tabIndex={this.disabled ? -1 : 0}
        data-disabled={String(this.disabled)}
      >
        <slot />
      </li>
    );
  }
}
