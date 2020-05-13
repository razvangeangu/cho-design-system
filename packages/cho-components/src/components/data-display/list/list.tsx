// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'cho-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List implements ComponentInterface {
  render() {
    return (
      <div class="list__container">
        <slot />
      </div>
    );
  }
}
