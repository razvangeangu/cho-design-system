// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { kProgress } from '../model';
import { Progress } from '../progress';

describe('Progress', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Progress],
      template: () => <cho-progress />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('renderCircular', () => {
    it('should render circular - without label', async () => {
      const page = await newSpecPage({
        components: [Progress],
        template: () => <cho-progress kind="circular" />,
      });

      expect(page.root.shadowRoot.querySelector('circle')).not.toBeNull();
    });

    it('should render circular - with label', async () => {
      const page = await newSpecPage({
        components: [Progress],
        template: () => <cho-progress kind="circular" label value={50} />,
      });

      expect(
        page.root.shadowRoot.querySelector(`[class=${kProgress.classes.circularPercentage}]`).innerHTML,
      ).toBe('50');
    });
  });

  describe('renderLinear', () => {
    it('should render linear - without label', async () => {
      const page = await newSpecPage({
        components: [Progress],
        template: () => <cho-progress kind="linear" />,
      });

      expect(page.root.style.display).toBe('initial');
      expect(
        page.root.shadowRoot.querySelector(`[class=${kProgress.classes.linearContainer}]`),
      ).not.toBeNull();
    });

    it('should render linear - with label', async () => {
      const page = await newSpecPage({
        components: [Progress],
        template: () => <cho-progress kind="linear" label value={50} />,
      });

      expect(
        page.root.shadowRoot.querySelector(`[class=${kProgress.classes.linearPercentage}]`).innerHTML,
      ).toBe('50');
    });
  });

  describe('render', () => {
    it('should default', async () => {
      const page = await newSpecPage({
        components: [Progress],
        template: () => <cho-progress kind="linear" />,
      });

      const renderCircularSpy = spyOn(page.rootInstance, 'renderCircular');
      page.root.kind = 'invalid';
      await page.waitForChanges();

      expect(renderCircularSpy).toHaveBeenCalled();
    });
  });
});
