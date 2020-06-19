// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Divider } from '../divider';

describe('Divider', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Divider],
      template: () => <cho-divider />,
    });

    expect(page.root).toBeTruthy();
  });
});
