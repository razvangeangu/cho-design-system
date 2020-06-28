// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Element, h, Listen, Method, Prop } from '@stencil/core';
import {
  IExpansionPanelItemConnectedDetail,
  IExpansionPanelItemVisibleChangedDetail,
  TExpansionPanelItemHostContainer,
} from '../expansion-panel-item/model';
import { kExpansionPanel } from './model';

/**
 * @slot - The primary content of the expansion-panel. (i.e. expansion-panel-item)
 */
@Component({
  tag: 'cho-expansion-panel',
  styleUrl: 'expansion-panel.scss',
  shadow: true,
})
export class ExpansionPanel implements ComponentInterface, TExpansionPanelItemHostContainer {
  @Element() host!: HTMLChoExpansionPanelElement;

  /**
   * If `true`, the expansion panel items will be closed when opening another one.
   *
   * @default false
   */
  @Prop() accordion?: boolean = false;

  private exansionPanelItems: Set<HTMLChoExpansionPanelItemElement> = new Set();

  /**
   * Helper used to keep track internally of the expansion panel items in expansion panel.
   *
   * @internal
   * @param expansionPanelItem The expansion panel item that has been disconnected and due to be removed.
   */
  @Method()
  async removeExpansionPanelItem(expansionPanelItem: HTMLChoExpansionPanelItemElement) {
    this.exansionPanelItems.delete(expansionPanelItem);
  }

  @Listen('expansionPanelItemConnected')
  expansionPanelItemConnectedListener(event: CustomEvent<IExpansionPanelItemConnectedDetail>) {
    this.exansionPanelItems.add(event.detail.target);
    event.detail.target.setHostContainer(this.host);
  }

  @Listen('visibleChanged')
  visibleChangedListener(event: CustomEvent<IExpansionPanelItemVisibleChangedDetail>) {
    if (this.accordion) {
      this.exansionPanelItems.forEach(expansionPanelItem => {
        if (expansionPanelItem !== event.target) {
          expansionPanelItem.visible = false;
        }
      });
    }
  }

  render() {
    return (
      <div class={kExpansionPanel.classes.container}>
        <slot />
      </div>
    );
  }
}
