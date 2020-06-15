// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TTabItemContentHostContainer } from '../model';
import { TabItemContent } from '../tab-item-content';

describe('TabItemContent', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [TabItemContent],
      template: () => <cho-tab-item-content index={0} />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('disconnectedCallback', () => {
    it('should remove from host container', async () => {
      const page = await newSpecPage({
        components: [TabItemContent],
        template: () => <cho-tab-item-content index={0} />,
      });
      const hostContainer: TTabItemContentHostContainer = { removeTabItemContent: jest.fn() } as any;

      await (page.root as HTMLChoTabItemContentElement).setHostContainer(hostContainer);
      page.root.remove();

      expect(hostContainer.removeTabItemContent).toHaveBeenCalled();
    });

    it('should not remove from host container if null', async () => {
      const page = await newSpecPage({
        components: [TabItemContent],
        template: () => <cho-tab-item-content index={0} />,
      });

      await (page.root as HTMLChoTabItemContentElement).setHostContainer(null);
      page.root.remove();
    });
  });
});
