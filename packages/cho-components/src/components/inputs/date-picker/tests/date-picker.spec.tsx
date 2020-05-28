// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DatePicker } from '../date-picker';

describe('DatePicker', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      template: () => <cho-date-picker />,
    });

    expect(page.root).toBeTruthy();
  });
});
