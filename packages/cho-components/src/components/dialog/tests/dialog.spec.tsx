// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Dialog } from '../dialog';

describe('Dialog', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Dialog],
      template: () => <cho-dialog />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('visible', () => {
    it('should be visible', async () => {
      const page = await newSpecPage({
        components: [Dialog],
        template: () => <cho-dialog visible />,
      });

      expect(page.root.shadowRoot.querySelector('cho-backdrop')).toBeDefined();
    });

    it('should be visible with footer', async () => {
      const page = await newSpecPage({
        components: [Dialog],
        template: () => (
          <cho-dialog visible>
            <div slot="footer" />
          </cho-dialog>
        ),
      });

      expect(page.root.shadowRoot.querySelector('slot[name="footer"]')).toBeDefined();
    });
  });

  describe('didClick', () => {
    it('should make visible false', async () => {
      const page = await newSpecPage({
        components: [Dialog],
        template: () => <cho-dialog visible />,
      });

      page.root.shadowRoot.querySelector('cho-backdrop').dispatchEvent(new MouseEvent('click'));
      await page.waitForChanges();

      expect(page.rootInstance.visible).toBeFalsy();
    });
  });

  describe('open', () => {
    it('should open dialog', async () => {
      const page = await newSpecPage({
        components: [Dialog],
        template: () => <cho-dialog visible={false} />,
      });

      await page.root.open();
      await page.waitForChanges();

      expect(page.root.visible).toBeTruthy();
    });
  });

  describe('close', () => {
    it('should close dialog', async () => {
      const page = await newSpecPage({
        components: [Dialog],
        template: () => <cho-dialog visible />,
      });

      await page.root.close();
      await page.waitForChanges();

      expect(page.root.visible).toBe(false);
    });
  });
});
