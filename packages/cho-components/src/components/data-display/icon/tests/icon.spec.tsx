// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../icon';

describe('Icon', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Icon],
      template: () => <cho-icon />,
    });

    expect(page.root).toBeTruthy();
  });
});
