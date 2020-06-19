// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../menu-item';
import { TMenuItemHostContainer } from '../model';

describe('MenuItem', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      template: () => <cho-menu-item />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('tabIndex', () => {
    it('should be interactive', async () => {
      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item />,
      });

      expect(page.root.shadowRoot.querySelector('li').tabIndex).toBe(0);
    });

    it('should not be interactive', async () => {
      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item disabled />,
      });

      expect(page.root.shadowRoot.querySelector('li').tabIndex).toBe(-1);
    });
  });

  describe('setHostContainer', () => {
    it('should set host container', async () => {
      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item />,
      });
      const hostContainer: TMenuItemHostContainer = { removeMenuItem: jest.fn() } as any;

      await (page.root as HTMLChoMenuItemElement).setHostContainer(hostContainer);
      expect(page.rootInstance.hostContainer).toBe(hostContainer);
    });

    it('should remove from host container', async () => {
      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item />,
      });
      const hostContainer: TMenuItemHostContainer = { removeMenuItem: jest.fn() } as any;

      await (page.root as HTMLChoMenuItemElement).setHostContainer(hostContainer);
      page.root.remove();

      expect(hostContainer.removeMenuItem).toHaveBeenCalled();
    });

    it('should not remove from host container if null', async () => {
      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item />,
      });

      await (page.root as HTMLChoMenuItemElement).setHostContainer(null);
      page.root.remove();
    });
  });

  describe('didClick', () => {
    it('should click if not disabled', async () => {
      const didClick = jest.fn();

      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item onClick={didClick} />,
      });

      page.root.click();
      page.root.shadowRoot.querySelector('li').click();
      await page.waitForChanges();

      expect(didClick).toHaveBeenCalled();
    });

    it('should not click if disabled', async () => {
      const didClick = jest.fn();

      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item onClick={didClick} disabled />,
      });

      page.root.shadowRoot.querySelector('li').click();
      await page.waitForChanges();

      expect(didClick).not.toHaveBeenCalled();
    });
  });

  describe('didKeyPress', () => {
    it('should key press if not disabled', async () => {
      const didKeyPress = jest.fn();

      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item onKeyPress={didKeyPress} />,
      });

      page.root.dispatchEvent(new KeyboardEvent('keypress'));
      page.root.shadowRoot.querySelector('li').dispatchEvent(new KeyboardEvent('keypress'));
      await page.waitForChanges();

      expect(didKeyPress).toHaveBeenCalled();
    });

    it('should not key press if disabled', async () => {
      const didKeyPress = jest.fn();

      const page = await newSpecPage({
        components: [MenuItem],
        template: () => <cho-menu-item onKeyPress={didKeyPress} disabled />,
      });

      page.root.shadowRoot.querySelector('li').dispatchEvent(new KeyboardEvent('keypress'));
      await page.waitForChanges();

      expect(didKeyPress).not.toHaveBeenCalled();
    });
  });
});
