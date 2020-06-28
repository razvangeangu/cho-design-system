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
  IExpansionPanelItemConnectedDetail,
  IExpansionPanelItemVisibleChangedDetail,
  kExpansionPanelItem,
  TExpansionPanelItemHostContainer,
} from './model';

/**
 * @slot title - A component to display the title of the expansion panel.
 * @slot content - A component to display the content of the expansion panel.
 * @slot expand-icon - A component to display the expand icon of the expansion panel (defaults to an icon of kind 'arrow-down', 'arrow-up').
 */
@Component({
  tag: 'cho-expansion-panel-item',
  styleUrl: 'expansion-panel-item.scss',
  shadow: true,
})
export class ExpansionPanelItem implements ComponentInterface {
  @Element() host!: HTMLChoExpansionPanelItemElement;

  /**
   * If `true`, the content will be visible.
   *
   * @default false
   */
  @Prop() visible?: boolean = false;

  /**
   * If `true`, the expansion-panel-item will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * Callback fired when the visible is changed.
   */
  @Event() visibleChanged: EventEmitter<IExpansionPanelItemVisibleChangedDetail>;

  /**
   * Called every time the component is connected to the DOM.
   *
   * @internal
   */
  @Event() expansionPanelItemConnected: EventEmitter<IExpansionPanelItemConnectedDetail>;

  private hostContainer: HTMLElement & TExpansionPanelItemHostContainer;

  /**
   * Helper used to keep track internally of the menu items in containers.
   *
   * @internal
   * @param hostContainer The container that controls the menu-item.
   */
  @Method()
  async setHostContainer(hostContainer: HTMLElement & TExpansionPanelItemHostContainer) {
    this.hostContainer = hostContainer;
  }

  connectedCallback() {
    this.expansionPanelItemConnected.emit({ target: this.host });
  }

  disconnectedCallback() {
    if (this.hostContainer != null) {
      this.hostContainer.removeExpansionPanelItem(this.host);
    }
  }

  private didClick = () => {
    this.visible = !this.visible;
    this.visibleChanged.emit();
  };

  render() {
    return (
      <div class={kExpansionPanelItem.classes.container} data-disabled={String(!!this.disabled)}>
        <button
          class={kExpansionPanelItem.classes.titleContainer}
          type="button"
          onClick={this.didClick}
          disabled={this.disabled}
        >
          <div class={kExpansionPanelItem.classes.title}>
            <slot name={kExpansionPanelItem.slots.title} />
          </div>
          <div class={kExpansionPanelItem.classes.expandIconContainer}>
            <slot name={kExpansionPanelItem.slots.expandIcon}>
              <cho-icon
                kind={this.visible ? 'arrow-up' : 'arrow-down'}
                color={this.disabled ? 'var(--disabled)' : undefined}
              />
            </slot>
          </div>
        </button>
        {this.visible && (
          <div class={kExpansionPanelItem.classes.contentContainer}>
            <slot name={kExpansionPanelItem.slots.content} />
          </div>
        )}
      </div>
    );
  }
}
