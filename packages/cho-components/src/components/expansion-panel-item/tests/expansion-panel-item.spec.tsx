// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ExpansionPanelItem } from '../expansion-panel-item';

describe('ExpansionPanelItem', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelItem],
      template: () => <cho-expansion-panel-item />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('render', () => {
    it('should render disabled', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanelItem],
        template: () => <cho-expansion-panel-item disabled />,
      });

      expect(page.root.shadowRoot.querySelector('cho-icon').getAttribute('color')).toBe(
        'var(--disabled)',
      );
    });
  });

  describe('disconnectedCallback', () => {
    it('should remove expansion panel item from host container', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanelItem],
        template: () => <cho-expansion-panel-item />,
      });

      await (page.root as HTMLChoExpansionPanelItemElement).setHostContainer({
        removeExpansionPanelItem: jest.fn(),
      } as any);
      page.root.remove();
      await page.waitForChanges();

      expect(page.rootInstance.hostContainer.removeExpansionPanelItem).toHaveBeenCalled();
    });

    it('should not remove expansion panel item from null host container', async () => {
      const page = await newSpecPage({
        components: [ExpansionPanelItem],
        template: () => <cho-expansion-panel-item />,
      });

      await (page.root as HTMLChoExpansionPanelItemElement).setHostContainer(null);
      page.root.remove();
      await page.waitForChanges();

      expect(page.rootInstance.hostContainer).toBeNull();
    });
  });
});
