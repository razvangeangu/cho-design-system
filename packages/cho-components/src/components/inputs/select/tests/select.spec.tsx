// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Select } from '../select';

describe('Select', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Select],
      template: () => <cho-select />,
    });

    expect(page.root).toBeTruthy();
  });
});
