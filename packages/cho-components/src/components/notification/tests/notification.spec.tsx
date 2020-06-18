// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { kNotification } from '../model';
import { Notification } from '../notification';

describe('Notification', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Notification],
      template: () => <cho-notification />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('visible', () => {
    it('should be visible', async () => {
      const page = await newSpecPage({
        components: [Notification],
        template: () => <cho-notification />,
      });

      page.root.visible = true;
      await page.waitForChanges();

      expect(
        page.root.shadowRoot.querySelector(`[class=${kNotification.classes.notificationContainer}]`),
      ).toBeTruthy();
    });

    it('should not be visible', async () => {
      const page = await newSpecPage({
        components: [Notification],
        template: () => <cho-notification visible={false} />,
      });

      expect(page.root.shadowRoot.querySelector('*')).toBeNull();
    });
  });

  describe('leading', () => {
    it('should have leading icon', async () => {
      const page = await newSpecPage({
        components: [Notification],
        template: () => <cho-notification kind="error" visible />,
      });

      expect(page.root.shadowRoot.querySelectorAll('cho-icon')).toHaveLength(2);

      page.root.kind = 'warning';
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelectorAll('cho-icon')).toHaveLength(2);

      page.root.kind = 'information';
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelectorAll('cho-icon')).toHaveLength(2);

      page.root.kind = 'success';
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelectorAll('cho-icon')).toHaveLength(2);

      page.root.kind = 'invalid';
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelectorAll('cho-icon')).toHaveLength(2);
    });

    it('should not have leading icon', async () => {
      const page = await newSpecPage({
        components: [Notification],
        template: () => <cho-notification kind="default" visible />,
      });

      expect(page.root.shadowRoot.querySelectorAll('cho-icon')).toHaveLength(1);
    });
  });

  describe('close', () => {
    it('should close on click', async () => {
      const page = await newSpecPage({
        components: [Notification],
        template: () => <cho-notification visible />,
      });

      page.root.shadowRoot
        .querySelector(`[class=${kNotification.classes.trailing}]`)
        .dispatchEvent(new MouseEvent('click'));

      expect(page.root.visible).toBe(false);
    });
  });
});
