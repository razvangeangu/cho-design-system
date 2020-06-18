// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Switch } from '../switch';
import { kSwitch } from '../model';

describe('Switch', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Switch],
      template: () => <cho-switch />,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('CHO-SWITCH');
  });

  describe('renderInput', () => {
    it('labelPlacement start', async () => {
      const page = await newSpecPage({
        components: [Switch],
        template: () => <cho-switch labelPlacement="start">Start</cho-switch>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kSwitch.classNames.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement bottom', async () => {
      const page = await newSpecPage({
        components: [Switch],
        template: () => <cho-switch labelPlacement="bottom">Bottom</cho-switch>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kSwitch.classNames.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement top', async () => {
      const page = await newSpecPage({
        components: [Switch],
        template: () => <cho-switch labelPlacement="top">Top</cho-switch>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kSwitch.classNames.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement end', async () => {
      const page = await newSpecPage({
        components: [Switch],
        template: () => <cho-switch labelPlacement="end">End</cho-switch>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kSwitch.classNames.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });
  });

  describe('didInput', () => {
    it('should emit checkedChanged', async () => {
      const didCheckChange = jest.fn();
      const page = await newSpecPage({
        components: [Switch],
        template: () => <cho-switch onCheckedChanged={didCheckChange} />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('input'));
      await page.waitForChanges();

      expect(didCheckChange).toHaveBeenCalled();
    });
  });
});
