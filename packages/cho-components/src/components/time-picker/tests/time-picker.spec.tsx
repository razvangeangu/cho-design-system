// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TimePicker } from '../time-picker';

describe('TimePicker', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [TimePicker],
      template: () => <cho-time-picker />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('twelveHourFormat', () => {
    it('should have twelve hour format', async () => {
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => <cho-time-picker twelveHourFormat />,
      });

      expect(page.root.shadowRoot.querySelectorAll('li[data-hours]')).toHaveLength(12);
    });
  });

  describe('handleHoursSelection', () => {
    it('should handle hours selection', async () => {
      const didValueChanged = jest.fn();
      const didHoursChanged = jest.fn();
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => (
          <cho-time-picker onValueChanged={didValueChanged} onHoursChanged={didHoursChanged} />
        ),
      });

      const hoursElement = page.root.shadowRoot.querySelector('li[data-hours]') as HTMLLIElement;
      hoursElement.click();

      expect(didValueChanged).toHaveBeenCalled();
      expect(didHoursChanged).toHaveBeenCalled();
    });
  });

  describe('handleMinutesSelection', () => {
    it('should handle minutes selection', async () => {
      const didValueChanged = jest.fn();
      const didMinutesChanged = jest.fn();
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => (
          <cho-time-picker onValueChanged={didValueChanged} onMinutesChanged={didMinutesChanged} />
        ),
      });

      const hoursElement = page.root.shadowRoot.querySelector('li[data-minutes]') as HTMLLIElement;
      hoursElement.click();

      expect(didValueChanged).toHaveBeenCalled();
      expect(didMinutesChanged).toHaveBeenCalled();
    });
  });

  describe('didKeyPressHours', () => {
    it('should handle hours selection - Enter', async () => {
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => <cho-time-picker />,
      });

      page.rootInstance.handleHoursSelection = jest.fn();
      const keyPress = new KeyboardEvent('keypress', { key: 'Enter' });
      page.root.shadowRoot.querySelector('li[data-hours]').dispatchEvent(keyPress);

      expect(page.rootInstance.handleHoursSelection).toHaveBeenCalled();
    });

    it('should not handle hours selection - not Enter', async () => {
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => <cho-time-picker />,
      });

      page.rootInstance.handleHoursSelection = jest.fn();
      const keyPress = new KeyboardEvent('keypress', { key: 'Backspace' });
      page.root.shadowRoot.querySelector('li[data-hours]').dispatchEvent(keyPress);

      expect(page.rootInstance.handleHoursSelection).not.toHaveBeenCalled();
    });
  });

  describe('didKeyPressMinutes', () => {
    it('should handle minutes selection - Enter', async () => {
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => <cho-time-picker />,
      });

      page.rootInstance.handleMinutesSelection = jest.fn();
      const keyPress = new KeyboardEvent('keypress', { key: 'Enter' });
      page.root.shadowRoot.querySelector('li[data-minutes]').dispatchEvent(keyPress);

      expect(page.rootInstance.handleMinutesSelection).toHaveBeenCalled();
    });

    it('should not handle minutes selection - not Enter', async () => {
      const page = await newSpecPage({
        components: [TimePicker],
        template: () => <cho-time-picker />,
      });

      page.rootInstance.handleMinutesSelection = jest.fn();
      const keyPress = new KeyboardEvent('keypress', { key: 'Backspace' });
      page.root.shadowRoot.querySelector('li[data-minutes]').dispatchEvent(keyPress);

      expect(page.rootInstance.handleMinutesSelection).not.toHaveBeenCalled();
    });
  });
});
