import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IMenuItemConnectedDetail, kMenuItem } from '../menu-item/model';
import { kTextField } from '../text-field/model';
import { ISelectValueChangedDetail, kSelect } from './model';

/**
 * @slot - The primary content of the select. (i.e. menu-item-group, menu-item or divider)
 */
@Component({
  tag: 'cho-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select implements ComponentInterface {
  @Element() host!: HTMLChoSelectElement;

  /**
   * The label content.
   *
   * @default undefined
   */
  @Prop() label?: string;

  /**
   * If `true`, the text-field will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the label will be displayed in an error state.
   *
   * @default false
   */
  @Prop() error?: boolean = false;

  /**
   * The value of the select.
   *
   * @default null
   */
  @Prop({ mutable: true }) value?: any = null;

  /**
   * If `true`, the dropdown will be visible.
   *
   * @default false
   */
  @Prop({ mutable: true }) visible?: boolean = false;

  /**
   * Callback fired when the value is changed.
   */
  @Event() valueChanged: EventEmitter<ISelectValueChangedDetail>;

  @State() inputValue: string = '';

  private menuItems: Set<HTMLChoMenuItemElement> = new Set();

  /**
   * Reset the select to its initial state.
   */
  @Method()
  async reset() {
    this.value = null;
    this.inputValue = '';
  }

  /**
   * Helper used to keep track internally of the menu items in select.
   *
   * @internal
   * @param menuItem The menu item that has been disconnected and due to be removed.
   */
  @Method()
  async removeMenuItem(menuItem: HTMLChoMenuItemElement) {
    this.menuItems.delete(menuItem);

    if (menuItem.selected) {
      await this.reset();
    }
  }

  @Listen('menuItemConnected')
  menuItemConnectedListener(event: CustomEvent<IMenuItemConnectedDetail>) {
    this.menuItems.add(event.detail.target);
    event.detail.target.setHostContainer(this.host);
  }

  @Watch('value')
  valueChangedWatcher() {
    this.menuItems.forEach(menuItem => {
      menuItem.selected = menuItem.value === this.value;
    });
  }

  private handleSelection = (event: Event) => {
    if ('tagName' in event.target) {
      if ((event.target as any).tagName.toLowerCase() !== kMenuItem.componentName) {
        return;
      }
    } else {
      return;
    }

    const menuItem = event.target as HTMLChoMenuItemElement;
    menuItem.selected = true;

    if (menuItem.dataset.selectItemNone == null) {
      this.inputValue = menuItem.innerText;
    } else {
      this.inputValue = '';
    }

    this.value = menuItem.value;
    this.valueChanged.emit({ value: this.value });
  };

  private didClick = (event: MouseEvent) => {
    this.handleSelection(event);
  };

  private didKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleSelection(event);
    }
  };

  private didClickTextField = () => {
    if (!this.disabled) {
      this.visible = !this.visible;
    }
  };

  render() {
    return (
      <div class={kSelect.classes.container}>
        <cho-text-field
          label={this.label}
          error={this.error}
          disabled={this.disabled}
          placeholder={kSelect.localization.select}
          value={this.inputValue}
          onClick={this.didClickTextField}
          readOnly
        >
          <cho-icon
            kind="arrow-down"
            slot={kTextField.slots.trailing}
            class={kSelect.classes.trailingIcon}
          />
        </cho-text-field>
        {this.visible && (
          <ul
            class={kSelect.classes.selectUl}
            role="presentation"
            onClick={this.didClick}
            onKeyPress={this.didKeyPress}
          >
            <cho-menu-item data-select-item-none value={null} selected={this.value == null}>
              {kSelect.localization.none}
            </cho-menu-item>
            <cho-divider />
            <slot />
          </ul>
        )}
      </div>
    );
  }
}
