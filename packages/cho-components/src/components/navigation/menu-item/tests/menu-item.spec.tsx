// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../menu-item';

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
});
