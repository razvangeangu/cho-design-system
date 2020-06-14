// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Notification } from '../notification';

describe('Notification', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Notification],
      template: () => <cho-notification />,
    });

    expect(page.root).toBeTruthy();
  });
});
