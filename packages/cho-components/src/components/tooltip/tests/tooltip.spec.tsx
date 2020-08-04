// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from '../tooltip';

describe('Tooltip', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      template: () => <cho-tooltip />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('visible', () => {
    it('should be visible', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible />,
      });

      expect(page.root.shadowRoot.querySelector('div[role="tooltip"]')).not.toBeNull();
    });

    it('should not be visible', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible={false} />,
      });

      expect(page.root.shadowRoot.querySelector('div[role="tooltip"]')).toBeNull();
    });
  });

  describe('open', () => {
    it('should open tooltip', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible={false} />,
      });

      await page.root.open();
      await page.waitForChanges();

      expect(page.root.visible).toBeTruthy();
    });
  });

  describe('close', () => {
    it('should close tooltip', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible />,
      });

      await page.root.close();
      await page.waitForChanges();

      expect(page.root.visible).toBe(false);
    });
  });

  describe('didTapIn', () => {
    it('should be visible on hover', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible={false} visibleOnHover />,
      });

      page.root.shadowRoot.firstChild.dispatchEvent(new MouseEvent('mouseover'));

      expect(page.root.visible).toBe(true);
    });

    it('should not be visible on hover - visibleOnHover', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible={false} visibleOnHover={false} />,
      });

      page.root.shadowRoot.firstChild.dispatchEvent(new MouseEvent('mouseover'));

      expect(page.root.visible).toBe(false);
    });
  });

  describe('didTapOut', () => {
    it('should not be visible on out', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible={false} visibleOnHover />,
      });

      page.root.shadowRoot.firstChild.dispatchEvent(new MouseEvent('mouseout'));

      expect(page.root.visible).toBe(false);
    });

    it('should not be visible on out - visibleOnHover', async () => {
      const page = await newSpecPage({
        components: [Tooltip],
        template: () => <cho-tooltip visible visibleOnHover={false} />,
      });

      page.root.shadowRoot.firstChild.dispatchEvent(new MouseEvent('mouseout'));

      expect(page.root.visible).toBe(true);
    });
  });
});
