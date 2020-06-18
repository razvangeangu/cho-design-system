// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TabItemContent } from '../../tab-item-content/tab-item-content';
import { TabItem } from '../../tab-item/tab-item';
import { Tabs } from '../tabs';

describe('Tabs', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Tabs, TabItem, TabItemContent],
      template: () => (
        <cho-tabs>
          <cho-tab-item index={0} label="Item 0" />
          <cho-tab-item index={1} label="Item 1" />

          <cho-tab-item-content index={0} />
          <cho-tab-item-content index={1} />
        </cho-tabs>
      ),
    });

    expect(page.root).toBeTruthy();
  });

  describe('removeTabItemContent', () => {
    it('should remove tab item content', async () => {
      const page = await newSpecPage({
        components: [Tabs, TabItem, TabItemContent],
        template: () => (
          <cho-tabs>
            <cho-tab-item index={0} label="Item 0" />
            <cho-tab-item index={1} label="Item 1" />

            <cho-tab-item-content index={0} />
            <cho-tab-item-content index={1} />
          </cho-tabs>
        ),
      });

      page.root.querySelector('cho-tab-item-content').remove();
      await page.waitForChanges();

      expect(page.rootInstance.tabItemContentItems.size).toBe(1);
    });
  });

  describe('removeTabItem', () => {
    it('should remove tab item content', async () => {
      const page = await newSpecPage({
        components: [Tabs, TabItem, TabItemContent],
        template: () => (
          <cho-tabs>
            <cho-tab-item index={0} label="Item 0" />
            <cho-tab-item index={1} label="Item 1" />

            <cho-tab-item-content index={0} />
            <cho-tab-item-content index={1} />
          </cho-tabs>
        ),
      });

      page.root.querySelector('cho-tab-item').remove();
      await page.waitForChanges();

      expect(page.rootInstance.tabItemItems.size).toBe(1);
    });

    it('should remove tab item content and set current index', async () => {
      const page = await newSpecPage({
        components: [Tabs, TabItem, TabItemContent],
        template: () => (
          <cho-tabs currentIndex={1}>
            <cho-tab-item index={0} label="Item 0" />
            <cho-tab-item index={1} label="Item 1" />

            <cho-tab-item-content index={0} />
            <cho-tab-item-content index={1} />
          </cho-tabs>
        ),
      });

      page.root.querySelectorAll('cho-tab-item')[1].remove();
      await page.waitForChanges();

      expect(page.rootInstance.currentIndex).toBe(0);
      expect(page.rootInstance.tabItemItems.size).toBe(1);
    });

    it("should remove tab item content and don't set current index", async () => {
      const page = await newSpecPage({
        components: [Tabs, TabItem, TabItemContent],
        template: () => (
          <cho-tabs currentIndex={1}>
            <cho-tab-item index={0} label="Item 0" />
            <cho-tab-item index={1} label="Item 1" />

            <cho-tab-item-content index={0} />
            <cho-tab-item-content index={1} />
          </cho-tabs>
        ),
      });

      page.root.querySelector('cho-tab-item').remove();
      await page.waitForChanges();

      expect(page.rootInstance.currentIndex).toBe(1);
      expect(page.rootInstance.tabItemItems.size).toBe(1);
    });
  });

  describe('currentIndexWatcher', () => {
    it('should handle selection on current index change', async () => {
      const page = await newSpecPage({
        components: [Tabs, TabItem, TabItemContent],
        template: () => (
          <cho-tabs>
            <cho-tab-item index={0} label="Item 0" />
            <cho-tab-item index={1} label="Item 1" />

            <cho-tab-item-content index={0} />
            <cho-tab-item-content index={1} />
          </cho-tabs>
        ),
      });

      page.root.currentIndex = 1;
      await page.waitForChanges();

      expect(page.root.querySelectorAll('cho-tab-item')[1].selected).toBeTruthy();
    });
  });

  describe('tabItemSelectedListener', () => {
    it('should handle selection on custom event', async () => {
      const didCurrenttIndexChange = jest.fn();

      const page = await newSpecPage({
        components: [Tabs, TabItem, TabItemContent],
        template: () => (
          <cho-tabs onCurrentIndexChanged={didCurrenttIndexChange}>
            <cho-tab-item index={0} label="Item 0" />
            <cho-tab-item index={1} label="Item 1" />

            <cho-tab-item-content index={0} />
            <cho-tab-item-content index={1} />
          </cho-tabs>
        ),
      });

      page.root.dispatchEvent(new CustomEvent('tabItemSelected'));
      page.waitForChanges();

      expect(didCurrenttIndexChange).toHaveBeenCalled();
    });
  });
});
