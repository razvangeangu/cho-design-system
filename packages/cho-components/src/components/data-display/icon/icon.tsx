// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { icons } from './assets/icons';
import { TIconKind } from './model';

@Component({
  tag: 'cho-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon implements ComponentInterface {
  /**
   * The kind to use.
   *
   * @default undefined
   */
  @Prop() kind: TIconKind;

  /**
   * The color to use.
   *
   * @default 'var(--text-color)''
   */
  @Prop() color?: string = 'var(--text-color)';

  private get iconColorVar() {
    return { '--icon-color': `${this.color}` };
  }

  render() {
    return <Host style={{ ...this.iconColorVar }}>{icons[this.kind]}</Host>;
  }
}
