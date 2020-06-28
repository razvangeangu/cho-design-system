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
import {
  ITabItemConnectedDetail,
  ITabItemSelectedDetail,
  kTabItem,
  TTabItemHostContainer,
} from './model';

@Component({
  tag: 'cho-tab-item',
  styleUrl: 'tab-item.scss',
  shadow: true,
})
export class TabItem implements ComponentInterface {
  @Element() host!: HTMLChoTabItemElement;

  /**
   * The label content.
   *
   * @default undefined
   */
  @Prop() label!: string;

  /**
   * The position index of the tab.
   *
   * @default undefined
   */
  @Prop() index!: number;

  /**
   * If `true`, the tab item will display selected.
   *
   * @default false
   */
  @Prop() selected?: boolean = false;

  /**
   * If `true`, the button will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * Callback fired when the tab item is selected.
   */
  @Event() tabItemSelected: EventEmitter<ITabItemSelectedDetail>;

  /**
   * Called every time the component is connected to the DOM.
   *
   * @internal
   */
  @Event() tabItemConnected: EventEmitter<ITabItemConnectedDetail>;

  private hostContainer: HTMLElement & TTabItemHostContainer;

  /**
   * Helper used to keep track internally of the menu items in containers.
   *
   * @internal
   * @param hostContainer The container that controls the menu-item.
   */
  @Method()
  async setHostContainer(hostContainer: HTMLElement & TTabItemHostContainer) {
    this.hostContainer = hostContainer;
  }

  connectedCallback() {
    this.tabItemConnected.emit({ target: this.host });
  }

  disconnectedCallback() {
    if (this.hostContainer != null) {
      this.hostContainer.removeTabItem(this.host);
    }
  }

  private didClick = () => {
    this.tabItemSelected.emit();
  };

  render() {
    return (
      <cho-button
        class={kTabItem.classes.button}
        kind="text"
        onClick={this.didClick}
        disabled={this.disabled}
        data-selected={String(!!this.selected)}
      >
        <span
          class={kTabItem.classes.label}
          data-selected={String(!!this.selected)}
          data-disabled={String(!!this.disabled)}
        >
          {this.label}
        </span>
      </cho-button>
    );
  }
}
