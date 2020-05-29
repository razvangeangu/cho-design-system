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
import { IMenuItemConnectedDetail, kMenuItem, TMenuItemHostContainer } from './model';

/**
 * @slot - The primary content of the menu-item.
 */
@Component({
  tag: 'cho-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true,
})
export class MenuItem implements ComponentInterface {
  @Element() host!: HTMLChoMenuItemElement;

  /**
   * The value of the menu-item.
   *
   * @default undefined
   */
  @Prop() value?: any;

  /**
   * If `true`, the menu-item will be selected.
   *
   * @default false
   */
  @Prop() selected?: boolean = false;

  /**
   * If `true`, the menu-item will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * Called every time the component is connected to the DOM.
   */
  @Event() menuItemConnected: EventEmitter<IMenuItemConnectedDetail>;

  private hostContainer: TMenuItemHostContainer;

  /**
   * Helper used to keep track internally of the menu items in containers.
   *
   * @internal
   * @param hostContainer The container that controls the menu-item.
   */
  @Method()
  async setHostContainer(hostContainer: TMenuItemHostContainer) {
    this.hostContainer = hostContainer;
  }

  connectedCallback() {
    this.menuItemConnected.emit({ target: this.host });
  }

  disconnectedCallback() {
    if (this.hostContainer != null) {
      this.hostContainer.removeMenuItem(this.host);
    }
  }

  private didClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private didKeyPress = (event: KeyboardEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    return (
      <li
        class={`${kMenuItem.classes.li} ${this.selected ? kMenuItem.classes.liSelected : ''}`}
        role="menuitem"
        tabIndex={this.disabled ? -1 : 0}
        data-disabled={String(this.disabled)}
        onClick={this.didClick}
        onKeyPress={this.didKeyPress}
      >
        <slot />
      </li>
    );
  }
}
