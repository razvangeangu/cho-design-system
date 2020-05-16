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

  describe('didInput', () => {
    it('should change checked', async () => {
      const spyObject = {
        checkedDidChange: (root: HTMLChoCheckboxElement) => {
          expect(root.checked).toBe(true);
        },
      };
      const checkedDidChangeSpy = jest.spyOn(spyObject, 'checkedDidChange');
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => (
          <cho-checkbox
            // eslint-disable-next-line react/jsx-no-bind
            onCheckedChanged={() => spyObject.checkedDidChange(page.root as HTMLChoCheckboxElement)}
          />
        ),
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('input'));

      expect(checkedDidChangeSpy).toHaveBeenCalled();
    });
  });

  describe('renderInput', () => {
    it('labelPlacement start', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="start">Start</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classNames.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement start', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="bottom">Bottom</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classNames.label}"]`)
          .firstChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement end', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="end">End</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classNames.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });

    it('labelPlacement end', async () => {
      const page = await newSpecPage({
        components: [Checkbox],
        template: () => <cho-checkbox labelPlacement="end">End</cho-checkbox>,
      });

      expect(
        (page.root.shadowRoot.querySelector(`[class="${kCheckbox.classNames.label}"]`)
          .lastChild as HTMLElement).tagName,
      ).toBe('SLOT');
    });
  });
});
