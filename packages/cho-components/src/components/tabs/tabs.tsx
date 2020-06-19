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
  Watch,
} from '@stencil/core';
import { ITabItemContentConnectedDetail } from '../tab-item-content/model';
import { ITabItemConnectedDetail, ITabItemSelectedDetail } from '../tab-item/model';
import { ICurrentIndexChangedDetail, kTabs } from './model';

/**
 * @slot label - The label content of the tabs (i.e. tab-item)
 * @slot content - The content content of the tabs (i.e. tab-item-content)
 */
@Component({
  tag: 'cho-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs implements ComponentInterface {
  @Element() host!: HTMLChoTabsElement;

  /**
   * The position index of the tab content.
   *
   * @default 0
   */
  @Prop({ mutable: true }) currentIndex?: number = 0;

  /**
   * Callback fired when current index value is changed.
   */
  @Event() currentIndexChanged: EventEmitter<ICurrentIndexChangedDetail>;

  private tabItemContentItems: Set<HTMLChoTabItemContentElement> = new Set();

  private tabItemItems: Set<HTMLChoTabItemElement> = new Set();

  /**
   * Helper used to keep track internally of the tab item content items in tab item content.
   *
   * @internal
   * @param tabItemContent The tab item content item that has been disconnected and due to be removed.
   */
  @Method()
  async removeTabItemContent(tabItemContent: HTMLChoTabItemContentElement) {
    this.tabItemContentItems.delete(tabItemContent);
  }

  /**
   * Helper used to keep track internally of the tab item content items in tab item content.
   *
   * @internal
   * @param tabItem The tab item item that has been disconnected and due to be removed.
   */
  @Method()
  async removeTabItem(tabItem: HTMLChoTabItemElement) {
    this.tabItemItems.delete(tabItem);

    if (tabItem.index === this.currentIndex) {
      this.currentIndex = 0;
    }
  }

  @Listen('tabItemConnected')
  tabItemConnectedListener(event: CustomEvent<ITabItemConnectedDetail>) {
    this.tabItemItems.add(event.detail.target);
    event.detail.target.setHostContainer(this.host);

    this.handleItemSelection(this.currentIndex);
  }

  @Listen('tabItemContentConnected')
  tabItemContentConnectedListener(event: CustomEvent<ITabItemContentConnectedDetail>) {
    this.tabItemContentItems.add(event.detail.target);
    event.detail.target.setHostContainer(this.host);

    this.handleContentSelection(this.currentIndex);
  }

  @Listen('tabItemSelected')
  tabItemSelectedListener(event: CustomEvent<ITabItemSelectedDetail>) {
    const currentIndex = (event.target as HTMLChoTabItemElement).index;
    const oldIndex = this.currentIndex;

    this.handleSelection(currentIndex);

    this.currentIndex = currentIndex;
    this.currentIndexChanged.emit({ oldIndex, currentIndex });
  }

  @Watch('currentIndex')
  currentIndexWatcher() {
    this.handleSelection(this.currentIndex);
  }

  private handleContentSelection(currentIndex: number) {
    this.tabItemContentItems.forEach(tabItemContent => {
      if (tabItemContent.index !== currentIndex) {
        tabItemContent.visible = false;
      } else {
        tabItemContent.visible = true;
      }
    });
  }

  private handleItemSelection(currentIndex: number) {
    this.tabItemItems.forEach(tabItem => {
      if (tabItem.index === currentIndex) {
        tabItem.selected = true;
      } else {
        tabItem.selected = false;
      }
    });
  }

  private handleSelection(currentIndex: number) {
    this.handleContentSelection(currentIndex);
    this.handleItemSelection(currentIndex);
  }

  render() {
    return (
      <div class={kTabs.classes.container}>
        <div class={kTabs.classes.labelContainer}>
          <slot name={kTabs.slots.label} />
        </div>
        <slot name={kTabs.slots.content} />
      </div>
    );
  }
}
