// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../icon';

describe('Icon', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Icon],
      template: () => <cho-icon kind="info" />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('iconColorVar', () => {
    it('should get icon color css variable', async () => {
      const page = await newSpecPage({
        components: [Icon],
        template: () => <cho-icon kind="success" />,
      });

      expect(page.root.style.getPropertyValue('--icon-color')).toBeDefined();
    });
  });
});
