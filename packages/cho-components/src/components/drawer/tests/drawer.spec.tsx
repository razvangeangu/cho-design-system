// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Drawer } from '../drawer';

describe('Drawer', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Drawer],
      template: () => <cho-drawer />,
    });

    expect(page.root).toBeTruthy();
  });
});
