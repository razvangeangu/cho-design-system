// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { Chip } from '../chip';
import { kChip } from '../model';

describe('Chip', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Chip],
      template: () => <cho-chip />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('didClick', () => {
    it('should handle click - enabled', async () => {
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip clickable />,
      });

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector('button').dispatchEvent(click);
      await page.waitForChanges();

      expect(click.defaultPrevented).toBeFalsy();
    });

    it('should handle click - disabled', async () => {
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip clickable disabled />,
      });

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector('button').dispatchEvent(click);
      await page.waitForChanges();

      expect(click.defaultPrevented).toBeTruthy();
    });
  });

  describe('didDelete', () => {
    it('should handle delete click - enabled', async () => {
      const didDelete = jest.fn();
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip deleteIcon onDelete={didDelete} />,
      });

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector(`[class='${kChip.classes.deleteIcon}']`).dispatchEvent(click);
      await page.waitForChanges();

      expect(click.defaultPrevented).toBeTruthy();
      expect(didDelete).toHaveBeenCalled();
    });

    it('should handle delete click - disabled', async () => {
      const didDelete = jest.fn();
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip deleteIcon onDelete={didDelete} disabled />,
      });

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector(`[class='${kChip.classes.deleteIcon}']`).dispatchEvent(click);
      await page.waitForChanges();

      expect(click.defaultPrevented).toBeFalsy();
      expect(didDelete).not.toHaveBeenCalled();
    });
  });

  describe('didClickDelete', () => {
    it('should call didDelete on click', async () => {
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip deleteIcon />,
      });
      page.rootInstance.didDelete = jest.fn();

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector(`[class='${kChip.classes.deleteIcon}']`).dispatchEvent(click);
      await page.waitForChanges();

      expect(page.rootInstance.didDelete).toHaveBeenCalled();
    });
  });

  describe('didKeyPressDelete', () => {
    it('should call didDelete on Enter', async () => {
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip deleteIcon />,
      });
      page.rootInstance.didDelete = jest.fn();

      const click = new KeyboardEvent('keypress', { key: 'Enter' });
      page.root.shadowRoot.querySelector(`[class='${kChip.classes.deleteIcon}']`).dispatchEvent(click);
      await page.waitForChanges();

      expect(page.rootInstance.didDelete).toHaveBeenCalled();
    });

    it('should call didDelete on other keys', async () => {
      const page = await newSpecPage({
        components: [Chip],
        template: () => <cho-chip deleteIcon />,
      });
      page.rootInstance.didDelete = jest.fn();

      const click = new KeyboardEvent('keypress', { key: 'Backspace' });
      page.root.shadowRoot.querySelector(`[class='${kChip.classes.deleteIcon}']`).dispatchEvent(click);
      await page.waitForChanges();

      expect(page.rootInstance.didDelete).not.toHaveBeenCalled();
    });
  });
});
