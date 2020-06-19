// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumbs } from '../breadcrumbs';

describe('Breadcrumbs', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Breadcrumbs],
      template: () => <cho-breadcrumbs />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('separatorVar', () => {
    it('should render custom separator', async () => {
      const separator = '|';
      const page = await newSpecPage({
        components: [Breadcrumbs],
        template: () => (
          <cho-breadcrumbs separator={separator}>
            <cho-link>Test</cho-link>
            <cho-link>Test 2</cho-link>
          </cho-breadcrumbs>
        ),
      });

      expect(
        (page.root.shadowRoot.firstChild as HTMLElement).style.getPropertyValue(
          '--breadcrumbs-separator',
        ),
      ).toBe(`"${separator}"`);
    });
  });
});
