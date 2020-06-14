// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { TOverlayPlacement } from '../../../types/t-overlay-placement';
import { kTooltip } from './model';

/**
 * @slot - The primary content of the tooltip.
 */
@Component({
  tag: 'cho-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip implements ComponentInterface {
  /**
   * Tooltip title.
   */
  @Prop() titleContent?: string;

  /**
   * The fixed position of the badge on the screen.
   *
   * @default 'bottom'
   */
  @Prop() placement?: TOverlayPlacement = 'bottom';

  /**
   * If `true`, the tooltip will be visible.
   *
   * @default false
   */
  @Prop() visible?: boolean = false;

  render() {
    return (
      <div class={kTooltip.classes.container}>
        <slot />
        {this.visible && (
          <div role="tooltip" class={kTooltip.classes.title} data-placement={this.placement}>
            {this.titleContent}
          </div>
        )}
      </div>
    );
  }
}
