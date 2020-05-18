// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

describe('Button', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Button],
      template: () => <cho-button>Primary</cho-button>,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('CHO-BUTTON');
  });

  describe('didClick', () => {
    it('should handle click', async () => {
      const didClick = jest.fn();

      const page = await newSpecPage({
        components: [Button],
        template: () => <cho-button onClick={didClick}>Primary</cho-button>,
      });

      page.root.click();
      page.root.shadowRoot.querySelector('button').click();
      await page.waitForChanges();

      expect(didClick).toHaveBeenCalled();
    });

    it('should not handle click - disabled', async () => {
      const didClick = jest.fn();

      const page = await newSpecPage({
        components: [Button],
        template: () => (
          <cho-button onClick={didClick} disabled>
            Primary
          </cho-button>
        ),
      });

      page.root.shadowRoot.querySelector('button').click();
      await page.waitForChanges();

      expect(page.root.disabled).toBe(true);
      expect(didClick).not.toHaveBeenCalled();
    });
  });
});
