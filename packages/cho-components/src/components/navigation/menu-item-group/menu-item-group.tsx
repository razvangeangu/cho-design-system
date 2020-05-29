// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface } from '@stencil/core';
import { kMenuItemGroup } from './model';

/**
 * @slot label - The content for the label
 * @slot - The primary content of the menu-item-group.
 */
@Component({
  tag: 'cho-menu-item-group',
  styleUrl: 'menu-item-group.scss',
  shadow: true,
})
export class MenuItemGroup implements ComponentInterface {
  render() {
    return (
      <li class={kMenuItemGroup.classes.menuItemGroupLi}>
        <slot name={kMenuItemGroup.slots.label} />
        <ul class={kMenuItemGroup.classes.menuItemGroupUl}>
          <slot />
        </ul>
      </li>
    );
  }
}
