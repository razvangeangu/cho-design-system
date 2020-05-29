// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Menu } from '../menu';

describe('Menu', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Menu],
      template: () => <cho-menu />,
    });

    expect(page.root).toBeTruthy();
  });
});
