// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ExpansionPanelItem } from '../../expansion-panel-item/expansion-panel-item';
import { kExpansionPanelItem } from '../../expansion-panel-item/model';
import { ExpansionPanel } from '../expansion-panel';

describe('ExpansionPanel', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanel],
      template: () => <cho-expansion-panel />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('expansionPanelItemConnected', () => {
    it('should set host container', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanel, ExpansionPanelItem],
        template: () => <cho-expansion-panel />,
      });

      const expansionPanelItemConnectedListenerSpy = spyOn(
        page.rootInstance,
        'expansionPanelItemConnectedListener',
      );
      page.root.appendChild(document.createElement('cho-expansion-panel-item'));
      await page.waitForChanges();

      expect(expansionPanelItemConnectedListenerSpy).toHaveBeenCalled();
    });
  });

  describe('removeExpansionPanelItem', () => {
    it('should expansion panel item', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanel, ExpansionPanelItem],
        template: () => (
          <cho-expansion-panel>
            <cho-expansion-panel-item />
          </cho-expansion-panel>
        ),
      });

      page.root.firstChild.remove();
      await page.waitForChanges();

      expect(page.rootInstance.exansionPanelItems.size).toBe(0);
    });
  });

  describe('visibleChangedListener', () => {
    it('should act as an accordion', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanel, ExpansionPanelItem],
        template: () => (
          <cho-expansion-panel accordion>
            <cho-expansion-panel-item>
              <div slot="title">Expansion Panel 1</div>
            </cho-expansion-panel-item>
            <cho-expansion-panel-item visible />
          </cho-expansion-panel>
        ),
      });

      (page.root.firstChild as HTMLChoExpansionPanelItemElement).shadowRoot
        .querySelector(`[class=${kExpansionPanelItem.classes.titleContainer}]`)
        .dispatchEvent(new MouseEvent('click'));
      await page.waitForChanges();

      expect((page.root.children[0] as HTMLChoExpansionPanelItemElement).visible).toBe(true);
      expect((page.root.children[1] as HTMLChoExpansionPanelItemElement).visible).toBe(false);
    });

    it('should not act as an accordion', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanel, ExpansionPanelItem],
        template: () => (
          <cho-expansion-panel accordion={false}>
            <cho-expansion-panel-item>
              <div slot="title">Expansion Panel 1</div>
            </cho-expansion-panel-item>
            <cho-expansion-panel-item visible />
          </cho-expansion-panel>
        ),
      });

      (page.root.firstChild as HTMLChoExpansionPanelItemElement).shadowRoot
        .querySelector(`[class=${kExpansionPanelItem.classes.titleContainer}]`)
        .dispatchEvent(new MouseEvent('click'));
      await page.waitForChanges();

      expect((page.root.children[0] as HTMLChoExpansionPanelItemElement).visible).toBe(true);
      expect((page.root.children[1] as HTMLChoExpansionPanelItemElement).visible).toBe(true);
    });
  });
});
