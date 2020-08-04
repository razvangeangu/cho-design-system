// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TTabItemHostContainer } from '../model';
import { TabItem } from '../tab-item';

describe('TabItem', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [TabItem],
      template: () => <cho-tab-item label="Tab Item 1" index={0} />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('disconnectedCallback', () => {
    it('should remove from host container', async () => {
      const page = await newSpecPage({
        components: [TabItem],
        template: () => <cho-tab-item label="Tab Item 1" index={0} />,
      });
      const hostContainer: HTMLElement & TTabItemHostContainer = { removeTabItem: jest.fn() } as any;

      await (page.root as HTMLChoTabItemElement).setHostContainer(hostContainer);
      page.root.remove();

      expect(hostContainer.removeTabItem).toHaveBeenCalled();
    });

    it('should not remove from host container if null', async () => {
      const page = await newSpecPage({
        components: [TabItem],
        template: () => <cho-tab-item label="Tab Item 1" index={0} />,
      });

      await (page.root as HTMLChoTabItemElement).setHostContainer(null);
      page.root.remove();
    });
  });

  describe('didClick', () => {
    const didTabItemSelected = jest.fn();

    it('should emit selection event', async () => {
      const page = await newSpecPage({
        components: [TabItem],
        template: () => (
          <cho-tab-item onTabItemSelected={didTabItemSelected} label="Tab Item 1" index={0} />
        ),
      });

      page.root.shadowRoot.querySelector('cho-button').click();

      expect(didTabItemSelected).toHaveBeenCalled();
    });
  });
});
