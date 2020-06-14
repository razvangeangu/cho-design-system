// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';
import { TOverlayPlacement } from '../../../types/t-overlay-placement';
import { kNotification, TNotificationKind } from './model';

/**
 * @slot - The main content of the notification.
 */
@Component({
  tag: 'cho-notification',
  styleUrl: 'notification.scss',
  shadow: true,
})
export class Notification implements ComponentInterface {
  /**
   * The kind to use.
   *
   * @default 'default'
   */
  @Prop() kind?: TNotificationKind = 'default';

  /**
   * The fixed position of the badge on the screen.
   *
   * @default 'bottom'
   */
  @Prop() placement?: TOverlayPlacement = 'bottom';

  /**
   * If `true`, the notification will be visible.
   *
   * @default false
   */
  @Prop() visible?: boolean = false;

  private didClose() {
    this.visible = false;
  }

  private didClickClose = () => {
    this.didClose();
  };

  private didKeyPressClose = () => {
    this.didClose();
  };

  private get leadingIcon(): JSX.IntrinsicElements['cho-icon']['kind'] {
    switch (this.kind) {
      case 'error':
        return 'error-outline';
      case 'warning':
        return 'warning';
      case 'information':
        return 'info';
      case 'success':
        return 'success';

      default:
        return 'error-outline';
    }
  }

  render() {
    return (
      this.visible && (
        <div
          class={kNotification.classes.notificationContainer}
          data-kind={this.kind}
          data-placement={this.placement}
        >
          <div class={kNotification.classes.leadingContainer}>
            {this.kind !== 'default' && (
              <cho-icon
                class={kNotification.classes.leading}
                kind={this.leadingIcon}
                color="var(--button__text-color)"
              />
            )}
            <slot />
          </div>
          <button
            class={kNotification.classes.trailing}
            type="button"
            onClick={this.didClickClose}
            onKeyPress={this.didKeyPressClose}
          >
            <cho-icon
              class={kNotification.classes.leading}
              kind="close"
              color="var(--button__text-color)"
            />
          </button>
        </div>
      )
    );
  }
}
