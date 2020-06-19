// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MenuItemGroup } from '../menu-item-group';

describe('MenuItemGroup', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [MenuItemGroup],
      template: () => <cho-menu-item-group />,
    });

    expect(page.root).toBeTruthy();
  });
});
