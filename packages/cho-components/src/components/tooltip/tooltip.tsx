// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { IOverlayController } from '../../types';
import { TOverlayPlacement } from '../../types/t-overlay-placement';
import { kTooltip } from './model';

/**
 * @slot - The primary content of the tooltip.
 */
@Component({
  tag: 'cho-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip implements ComponentInterface, IOverlayController {
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

  /**
   * If `true`, the tooltip will show on mouse hover and disappear on mouse out.
   *
   * @default false
   */
  @Prop() visibleOnHover?: boolean = false;

  /**
   * Open the dropdown.
   */
  @Method()
  async open() {
    this.visible = true;
  }

  /**
   * Close the dropdown.
   */
  @Method()
  async close() {
    this.visible = false;
  }

  private didTapIn = () => {
    if (!this.visibleOnHover) return;

    this.visible = true;
  };

  private didTapOut = () => {
    if (!this.visibleOnHover) return;

    this.visible = false;
  };

  render() {
    return (
      <div
        class={kTooltip.classes.container}
        onFocus={this.didTapIn}
        onMouseOver={this.didTapIn}
        onBlur={this.didTapOut}
        onMouseOut={this.didTapOut}
      >
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
