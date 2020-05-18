// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from '../checkbox';
import { kCheckbox } from '../model';

describe('Checkbox', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      template: () => <cho-checkbox />,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('CHO-CHECKBOX');
  });

  describe('renderInput', () => {
    it('labelPlacement start', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="start">Start</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classes.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement bottom', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="bottom">Bottom</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classes.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement top', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="top">Top</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classes.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement end', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="end">End</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classes.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });
  });

  describe('didInput', () => {
    it('should eemit checkedChanged', async () => {
      const didCheckChange = jest.fn();
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox onCheckedChanged={didCheckChange} />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('input'));
      await page.waitForChanges();

      expect(didCheckChange).toHaveBeenCalled();
    });
  });
});
