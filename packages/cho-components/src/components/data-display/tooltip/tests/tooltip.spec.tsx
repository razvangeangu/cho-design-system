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
});
