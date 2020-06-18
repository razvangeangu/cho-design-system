// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Badge } from '../badge';

describe('Badge', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Badge],
      template: () => <cho-badge />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('formatContent', () => {
    it('should format content if over max', async () => {
      const max = 50;
      const page = await newSpecPage({
        components: [Badge],
        template: () => <cho-badge max={max} content={100} />,
      });

      expect(page.root.shadowRoot.querySelector('span').innerText).toBe(`${max}+`);
    });
  });
});
