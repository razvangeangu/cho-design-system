// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Backdrop } from '../backdrop';

describe('Backdrop', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Backdrop],
      template: () => <cho-backdrop />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('visible', () => {
    it('should render container and children', async () => {
      const page = await newSpecPage({
        components: [Backdrop],
        template: () => (
          <cho-backdrop visible>
            <span>Test</span>
          </cho-backdrop>
        ),
      });

      expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
    });

    it('should not render container and children', async () => {
      const page = await newSpecPage({
        components: [Backdrop],
        template: () => (
          <cho-backdrop visible={false}>
            <span>Test</span>
          </cho-backdrop>
        ),
      });

      expect(page.root.shadowRoot.querySelector('slot')).toBeFalsy();
    });
  });
});
