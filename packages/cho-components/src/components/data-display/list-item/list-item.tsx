// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'cho-list-item',
  styleUrl: 'list-item.scss',
  shadow: true
})
export class ListItem implements ComponentInterface {
  render() {
    return (
      <div class="list-item__container">
        <slot />
      </div>
    );
  }
}
