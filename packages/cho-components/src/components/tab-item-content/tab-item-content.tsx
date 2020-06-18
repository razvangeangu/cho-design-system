import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h,
  Method,
  Prop,
} from '@stencil/core';
import { ITabItemContentConnectedDetail, kTabItemContent, TTabItemContentHostContainer } from './model';

/**
 * @slot - The main content of the tab item content.
 */
@Component({
  tag: 'cho-tab-item-content',
  styleUrl: 'tab-item-content.scss',
  shadow: true,
})
export class TabItemContent implements ComponentInterface {
  @Element() host!: HTMLChoTabItemContentElement;

  /**
   * The position index of the tab content.
   *
   * @default undefined
   */
  @Prop() index!: number;

  /**
   * If `true`, the tab item content will be visible.
   *
   * @default false
   */
  @Prop() visible?: boolean = false;

  /**
   * Called every time the component is connected to the DOM.
   */
  @Event() tabItemContentConnected: EventEmitter<ITabItemContentConnectedDetail>;

  private hostContainer: TTabItemContentHostContainer;

  /**
   * Helper used to keep track internally of the menu items in containers.
   *
   * @internal
   * @param hostContainer The container that controls the menu-item.
   */
  @Method()
  async setHostContainer(hostContainer: TTabItemContentHostContainer) {
    this.hostContainer = hostContainer;
  }

  connectedCallback() {
    this.tabItemContentConnected.emit({ target: this.host });
  }

  disconnectedCallback() {
    if (this.hostContainer != null) {
      this.hostContainer.removeTabItemContent(this.host);
    }
  }

  render() {
    return (
      this.visible && (
        <div class={kTabItemContent.classes.container}>
          <slot />
        </div>
      )
    );
  }
}
