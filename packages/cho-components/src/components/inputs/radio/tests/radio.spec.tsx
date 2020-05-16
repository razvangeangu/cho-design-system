// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Radio } from '../radio';
import { kRadio } from '../model';

describe('Radio', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Radio],
      template: () => <cho-radio />,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('CHO-RADIO');
  });

  describe('renderInput', () => {
    it('labelPlacement start', async () => {
      const page = await newSpecPage({
        components: [Radio],
        template: () => <cho-radio labelPlacement="start">Start</cho-radio>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kRadio.classNames.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement bottom', async () => {
      const page = await newSpecPage({
        components: [Radio],
        template: () => <cho-radio labelPlacement="bottom">Bottom</cho-radio>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kRadio.classNames.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement top', async () => {
      const page = await newSpecPage({
        components: [Radio],
        template: () => <cho-radio labelPlacement="top">Top</cho-radio>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kRadio.classNames.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement end', async () => {
      const page = await newSpecPage({
        components: [Radio],
        template: () => <cho-radio labelPlacement="end">End</cho-radio>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kRadio.classNames.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });
  });
});
