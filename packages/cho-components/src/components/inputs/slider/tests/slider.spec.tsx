// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Slider } from '../slider';

describe('Slider', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Slider],
      template: () => <cho-slider />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('tickmarks', () => {
    it('should have tickmarks', async () => {
      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider tickmarks={[{ label: '1', value: 1 }]} />,
      });

      expect(page.root.shadowRoot.querySelector('datalist')).toBeDefined();
    });
  });

  describe('showTooltip', () => {
    it('should show tooltip on focus', async () => {
      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('focus'));

      expect(page.root.shadowRoot.querySelector('output')).toBeDefined();
    });

    it('should show tooltip on focus - inverted', async () => {
      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider track="inverted" />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('focus'));

      expect(page.root.shadowRoot.querySelector('output')).toBeDefined();
    });

    it('should not show tooltip on blur', async () => {
      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('blur'));

      expect(page.root.shadowRoot.querySelector('output')).toBeNull();
    });
  });

  describe('didInput', () => {
    it('should change value on input', async () => {
      const didChange = jest.fn();

      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider onValueChanged={didChange} />,
      });

      expect(page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('input')));
      expect(didChange).toHaveBeenCalled();
    });

    it('should change value on input - inverted', async () => {
      const didChange = jest.fn();

      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider onValueChanged={didChange} track="inverted" />,
      });

      expect(page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('input')));
      expect(didChange).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('should be disabled', async () => {
      const page = await newSpecPage({
        components: [Slider],
        template: () => <cho-slider disabled />,
      });

      expect(page.root.shadowRoot.querySelector('input').disabled).toBe(true);
    });
  });
});
