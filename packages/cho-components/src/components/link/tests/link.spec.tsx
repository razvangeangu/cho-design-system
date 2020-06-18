// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Link } from '../link';

describe('Link', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Link],
      template: () => <cho-link />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('render', () => {
    it('should render link', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link href="#" />,
      });

      expect(page.root.shadowRoot.querySelector('a')).toBeDefined();
    });

    it('should render button', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link />,
      });

      expect(page.root.shadowRoot.querySelector('button')).toBeDefined();
    });
  });

  describe('didKeyPress', () => {
    it('should key press - enabled', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link />,
      });

      const event = new KeyboardEvent('keypress', { key: 'Enter' });
      page.root.shadowRoot.querySelector('button').dispatchEvent(event);
      await page.waitForChanges();

      expect(event.defaultPrevented).toBeFalsy();
    });

    it('should key press - disabled', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link disabled />,
      });

      const event = new KeyboardEvent('keypress', { key: 'Enter' });
      page.root.shadowRoot.querySelector('button').dispatchEvent(event);
      await page.waitForChanges();

      expect(event.defaultPrevented).toBeTruthy();
    });

    it('should key press - other key', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link />,
      });

      const event = new KeyboardEvent('keypress', { key: 'Backspace' });
      page.root.shadowRoot.querySelector('button').dispatchEvent(event);
      await page.waitForChanges();

      expect(event.defaultPrevented).toBeFalsy();
    });
  });

  describe('didClick', () => {
    it('should click - enabled', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link />,
      });

      const event = new KeyboardEvent('click');
      page.root.shadowRoot.querySelector('button').dispatchEvent(event);
      await page.waitForChanges();

      expect(event.defaultPrevented).toBeFalsy();
    });

    it('should click - disabled', async () => {
      const page = await newSpecPage({
        components: [Link],
        template: () => <cho-link disabled />,
      });

      const event = new KeyboardEvent('click');
      page.root.shadowRoot.querySelector('button').dispatchEvent(event);
      await page.waitForChanges();

      expect(event.defaultPrevented).toBeTruthy();
    });
  });
});
