// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { TPlacementHorizontal, TPlacementVertical } from '../../../types';
import { kBadge, TBadgeKind } from './model';

/**
 * @slot - The primary content of the badge.
 */
@Component({
  tag: 'cho-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge implements ComponentInterface {
  /**
   * The kind to use.
   *
   * @default 'simple'
   */
  @Prop() kind?: TBadgeKind = 'simple';

  /**
   * The horizontal position of the badge.
   *
   * @default 'end'
   */
  @Prop() horizontalPlacement?: TPlacementHorizontal = 'end';

  /**
   * The vertical position of the badge.
   *
   * @default 'top'
   */
  @Prop() verticalPlacement?: TPlacementVertical = 'top';

  /**
   * The content of the badge.
   *
   * @default undefined
   */
  @Prop() content?: number;

  /**
   * The maximum value of the content.
   *
   * @default 99
   */
  @Prop() max?: number = 99;

  /**
   * If `true`, the badge will be visible.
   *
   * @default true
   */
  @Prop() visible?: boolean = true;

  private formatContent() {
    return this.content > this.max ? `${this.max}+` : this.content;
  }

  render() {
    return (
      <div class={kBadge.classes.container} data-kind={this.kind}>
        <slot />
        <span
          class={kBadge.classes.content}
          data-vertical-placement={this.verticalPlacement}
          data-horizontal-placement={this.horizontalPlacement}
          data-kind={this.kind}
          data-padding={String(this.content > 9)}
        >
          {this.kind === 'simple' && this.formatContent()}
        </span>
      </div>
    );
  }
}
