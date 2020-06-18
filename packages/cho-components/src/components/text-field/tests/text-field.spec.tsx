// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TextField } from '../text-field';

describe('TextField', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [TextField],
      template: () => <cho-text-field />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('helperText', () => {
    it('should have helper text', async () => {
      const page = await newSpecPage({
        components: [TextField],
        template: () => <cho-text-field helperText="Hello World!" />,
      });

      expect(page.root.shadowRoot.innerHTML).toContain('Hello World');
    });
  });

  describe('label', () => {
    it('should have label text', async () => {
      const page = await newSpecPage({
        components: [TextField],
        template: () => <cho-text-field label="Hello World!" />,
      });

      expect(page.root.shadowRoot.innerHTML).toContain('Hello World');
    });
  });

  describe('multiline', () => {
    it('should have textarea', async () => {
      const page = await newSpecPage({
        components: [TextField],
        template: () => <cho-text-field multiline />,
      });

      expect(page.root.shadowRoot.querySelector('textarea')).toBeTruthy();
    });
  });

  describe('didFocus', () => {
    it('should detect input focus', async () => {
      const page = await newSpecPage({
        components: [TextField],
        template: () => <cho-text-field />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('focus'));

      expect(page.rootInstance.inputFocus).toBeTruthy();
    });

    it('should detect input blur', async () => {
      const page = await newSpecPage({
        components: [TextField],
        template: () => <cho-text-field />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('blur'));

      expect(page.rootInstance.inputFocus).toBeFalsy();
    });
  });

  describe('didInput', () => {
    it('should fire input', async () => {
      const didChange = jest.fn();

      const page = await newSpecPage({
        components: [TextField],
        template: () => <cho-text-field onValueChanged={didChange} />,
      });

      page.root.shadowRoot.querySelector('input').dispatchEvent(new Event('input'));

      expect(didChange).toHaveBeenCalled();
    });
  });
});
