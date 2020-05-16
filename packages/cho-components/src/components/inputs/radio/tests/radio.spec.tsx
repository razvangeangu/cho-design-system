// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Radio } from '../radio';

describe('Radio', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Radio],
      template: () => <cho-radio />,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('CHO-RADIO');
  });
});
