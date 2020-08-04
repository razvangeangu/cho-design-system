// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Element, h, Host, Method, Prop } from '@stencil/core';
import { IOverlayController } from '../../types';
import { kDialog } from './model';

/**
 * @slot title - The title of the dialog.
 * @slot - The main content of the dialog.
 * @slot footer - The footer of the dialog.
 */
@Component({
  tag: 'cho-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class Dialog implements ComponentInterface, IOverlayController {
  @Element() host!: HTMLChoDialogElement;

  /**
   * If `true`, the dialog will be visible.
   *
   * @default false
   */
  @Prop() visible?: boolean = false;

  /**
   * If `true`, the dialog will close when clicking on the backdrop.
   *
   * @default true
   */
  @Prop() dismissible?: boolean = true;

  /**
   * Open the dialog.
   */
  @Method()
  async open() {
    this.visible = true;
  }

  /**
   * Close the dialog.
   */
  @Method()
  async close() {
    this.visible = false;
  }

  private didClick = () => {
    this.visible = false;
  };

  render() {
    return (
      this.visible && (
        <Host style={{ display: 'flex' }}>
          <cho-backdrop visible={this.visible} onClick={this.dismissible && this.didClick} />
          <div class={kDialog.classes.container}>
            <div class={kDialog.classes.title}>
              <div>
                <slot name={kDialog.slots.title} />
              </div>
              <cho-button kind="text" onClick={this.didClick}>
                <cho-icon kind="close" />
              </cho-button>
            </div>
            <div class={kDialog.classes.content}>
              <slot />
            </div>
            {this.host.querySelector(`[slot="${kDialog.slots.footer}"]`) && (
              <div class={kDialog.classes.footer}>
                <slot name={kDialog.slots.footer} />
              </div>
            )}
          </div>
        </Host>
      )
    );
  }
}
