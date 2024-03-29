// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../../menu-item/menu-item';
import { Select } from '../select';

describe('Select', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Select, MenuItem],
      template: () => (
        <cho-select>
          <cho-menu-item />
        </cho-select>
      ),
    });

    expect(page.root).toBeTruthy();
  });

  describe('reset', () => {
    it('should reset', async () => {
      const valueMock = 'value';
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => (
          <cho-select value={valueMock}>
            <cho-menu-item value={valueMock} />
          </cho-select>
        ),
      });

      expect(page.root.value).toBe(valueMock);
      await page.root.reset();

      expect(page.root.value).toBeNull();
    });
  });

  describe('removeMenuitem', () => {
    it('should delete menu item from list', async () => {
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => (
          <cho-select>
            <cho-menu-item />
          </cho-select>
        ),
      });

      const menuItem = page.root.querySelector('cho-menu-item');
      expect(page.rootInstance.menuItems).toContain(menuItem);

      menuItem.remove();
      await page.waitForChanges();

      expect(page.rootInstance.menuItems).not.toContain(menuItem);
    });

    it('should delete menu item from list and reset', async () => {
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => (
          <cho-select>
            <cho-menu-item selected />
          </cho-select>
        ),
      });

      const menuItem = page.root.querySelector('cho-menu-item');
      expect(page.rootInstance.menuItems).toContain(menuItem);

      menuItem.remove();
      await page.waitForChanges();

      expect(page.rootInstance.menuItems).not.toContain(menuItem);
      expect(page.root.value).toBeNull();
    });
  });

  describe('menuItemConnectedListener', () => {
    it('should add menu item to set', async () => {
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => (
          <cho-select>
            <cho-menu-item />
          </cho-select>
        ),
      });

      const menuItem = page.root.querySelector('cho-menu-item');

      expect(page.rootInstance.menuItems).toContain(menuItem);
    });
  });

  describe('valueChangedWatcher', () => {
    it('should select menu item on value change', async () => {
      const valueMock = 'Value';
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => (
          <cho-select>
            <cho-menu-item value={valueMock} />
          </cho-select>
        ),
      });

      page.root.value = valueMock;
      await page.waitForChanges();

      expect(page.root.querySelector('cho-menu-item').selected).toBe(true);
    });
  });

  describe('handleSelection', () => {
    it('should handle selection - click - none', async () => {
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => <cho-select onValueChanged={didValueChanged} visible />,
      });

      (page.root.shadowRoot.querySelector(
        'cho-menu-item[data-select-item-none]',
      ) as HTMLChoMenuItemElement).click();
      await page.waitForChanges();

      expect(page.root.value).toBe(null);
      expect(didValueChanged).toHaveBeenCalled();
    });

    it('should handle selection - click - value', async () => {
      const valueMock = 'Value';
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => <cho-select onValueChanged={didValueChanged} visible />,
      });

      const selectNoneElement = page.root.shadowRoot.querySelector(
        'cho-menu-item[data-select-item-none]',
      ) as HTMLChoMenuItemElement;
      selectNoneElement.removeAttribute('data-select-item-none');
      selectNoneElement.value = valueMock;
      selectNoneElement.click();
      await page.waitForChanges();

      expect(page.root.value).toBe(valueMock);
      expect(didValueChanged).toHaveBeenCalled();
    });

    it('should handle selection - keypress - Enter - incompatible element', async () => {
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => <cho-select visible />,
      });

      page.root.shadowRoot
        .querySelector('ul')
        .dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter' }));
      await page.waitForChanges();

      expect(page.root.value).toBe(null);
    });

    it('should handle selection - keypress - Enter - incompatible element - without tagName', async () => {
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => <cho-select />,
      });

      page.rootInstance.handleSelection({ target: {} });

      expect(page.root.value).toBe(null);
    });

    it('should not handle selection - keypress - Backspace', async () => {
      const page = await newSpecPage({
        components: [Select, MenuItem],
        template: () => <cho-select visible />,
      });

      page.root.shadowRoot
        .querySelector('ul')
        .dispatchEvent(new KeyboardEvent('keypress', { key: 'Backspace' }));
      await page.waitForChanges();

      expect(page.root.value).toBe(null);
    });
  });

  describe('didClickTextField', () => {
    it('should prevent default and change visible', async () => {
      const page = await newSpecPage({
        components: [Select],
        template: () => <cho-select visible />,
      });

      const clickEvent = new MouseEvent('click');
      page.root.shadowRoot.querySelector('cho-text-field').dispatchEvent(clickEvent);
      await page.waitForChanges();

      expect(page.root.visible).toBe(false);
    });

    it('should prevent default and not change visible', async () => {
      const page = await newSpecPage({
        components: [Select],
        template: () => <cho-select visible={false} disabled />,
      });

      const clickEvent = new MouseEvent('click');
      page.root.shadowRoot.querySelector('cho-text-field').dispatchEvent(clickEvent);
      await page.waitForChanges();

      expect(page.root.visible).toBe(false);
    });
  });

  describe('open', () => {
    it('should open dropdown', async () => {
      const page = await newSpecPage({
        components: [Select],
        template: () => <cho-select visible={false} />,
      });

      await page.root.open();
      await page.waitForChanges();

      expect(page.root.visible).toBeTruthy();
    });
  });

  describe('close', () => {
    it('should close dropdown', async () => {
      const page = await newSpecPage({
        components: [Select],
        template: () => <cho-select visible />,
      });

      await page.root.close();
      await page.waitForChanges();

      expect(page.root.visible).toBe(false);
    });
  });
});
