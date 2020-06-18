// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component, ComponentInterface } from '@stencil/core';
import { kDivider } from './model';

@Component({
  tag: 'cho-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class Divider implements ComponentInterface {
  render() {
    return <li class={kDivider.classes.dividerLi} />;
  }
}
