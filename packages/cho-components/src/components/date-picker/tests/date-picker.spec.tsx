// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ITextFieldValueChangedDetail } from '../../text-field/model';
import { DatePicker } from '../date-picker';

describe('DatePicker', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      template: () => <cho-date-picker />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('shouldDisableDate', () => {
    it('should remove all cells tabIndex', async () => {
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker disabled />,
      });
      page.root.shadowRoot.querySelectorAll('td').forEach(tableCell => {
        expect(tableCell.tabIndex).toBe(-1);
      });
    });
  });

  describe('didClickTextField', () => {
    it('should hide native calendar', async () => {
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker />,
      });

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector('cho-text-field').dispatchEvent(click);

      expect(click.defaultPrevented).toBeTruthy();
    });
  });

  describe('didKeyPressDay', () => {
    it('should handle selection - Enter', async () => {
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker />,
      });
      page.rootInstance.handleDaySelection = jest.fn();

      const keyPress = new KeyboardEvent('keypress', { key: 'Enter' });
      page.root.shadowRoot.querySelector('td[data-timestamp]').dispatchEvent(keyPress);

      expect(page.rootInstance.handleDaySelection).toHaveBeenCalled();
    });

    it('should not handle selection - Other', async () => {
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker />,
      });
      page.rootInstance.handleDaySelection = jest.fn();

      const keyPress = new KeyboardEvent('keypress', { key: 'Backspace' });
      page.root.shadowRoot.querySelector('td[data-timestamp]').dispatchEvent(keyPress);

      expect(page.rootInstance.handleDaySelection).not.toHaveBeenCalled();
    });
  });

  describe('didClickDay', () => {
    it('should handle selection - click handler', async () => {
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker />,
      });
      page.rootInstance.handleDaySelection = jest.fn();

      const click = new MouseEvent('click');
      page.root.shadowRoot.querySelector('td[data-timestamp]').dispatchEvent(click);

      expect(page.rootInstance.handleDaySelection).toHaveBeenCalled();
    });
  });

  describe('handleDaySelection', () => {
    it('should handle selection - click', async () => {
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => (
          <cho-date-picker onValueChanged={didValueChanged} value={new Date(1997, 0, 14)} />
        ),
      });

      const click = new MouseEvent('click');
      const dayElement: HTMLTableCellElement = page.root.shadowRoot.querySelector('td[data-timestamp]');
      dayElement.dispatchEvent(click);
      await page.waitForChanges();

      expect(didValueChanged).toHaveBeenCalled();
    });

    it('should handle selection - click, disabled cell', async () => {
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker onValueChanged={didValueChanged} />,
      });

      const click = new MouseEvent('click');
      const dayElement: HTMLTableCellElement = page.root.shadowRoot.querySelector('td[data-timestamp]');
      dayElement.dataset.disabled = 'true';
      dayElement.dispatchEvent(click);
      await page.waitForChanges();

      expect(didValueChanged).not.toHaveBeenCalled();
    });
  });

  describe('didValueChanged', () => {
    it('should handle value change - valid date', async () => {
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker onValueChanged={didValueChanged} />,
      });

      const valueChanged = new CustomEvent<ITextFieldValueChangedDetail>('valueChanged', {
        detail: { value: '1997-01-14' },
      });
      page.root.shadowRoot.querySelector('cho-text-field').dispatchEvent(valueChanged);
      await page.waitForChanges();

      expect(didValueChanged).toHaveBeenCalled();
    });

    it('should handle value change - invalid date', async () => {
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker onValueChanged={didValueChanged} />,
      });

      const valueChanged = new CustomEvent<ITextFieldValueChangedDetail>('valueChanged', {
        detail: { value: '0001-01-14' },
      });
      page.root.shadowRoot.querySelector('cho-text-field').dispatchEvent(valueChanged);
      await page.waitForChanges();

      expect(didValueChanged).not.toHaveBeenCalled();
    });

    it('should handle value change - invalid date format', async () => {
      const didValueChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => <cho-date-picker onValueChanged={didValueChanged} />,
      });

      const valueChanged = new CustomEvent<ITextFieldValueChangedDetail>('valueChanged', {
        detail: { value: '19970114' },
      });
      page.root.shadowRoot.querySelector('cho-text-field').dispatchEvent(valueChanged);
      await page.waitForChanges();

      expect(didValueChanged).not.toHaveBeenCalled();
    });
  });

  describe('valueChangedEmitter', () => {
    it('should not emit events', async () => {
      const didValueChanged = jest.fn();
      const didYearChanged = jest.fn();
      const didMonthChanged = jest.fn();
      const didDayChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => (
          <cho-date-picker
            onValueChanged={didValueChanged}
            onYearChanged={didYearChanged}
            onMonthChanged={didMonthChanged}
            onDayChanged={didDayChanged}
          />
        ),
      });

      const date = new Date();
      page.rootInstance.valueChangedEmitter(date, date);

      expect(didValueChanged).toHaveBeenCalled();
      expect(didYearChanged).not.toHaveBeenCalled();
      expect(didMonthChanged).not.toHaveBeenCalled();
      expect(didDayChanged).not.toHaveBeenCalled();
    });

    it('should emit events', async () => {
      const didValueChanged = jest.fn();
      const didYearChanged = jest.fn();
      const didMonthChanged = jest.fn();
      const didDayChanged = jest.fn();
      const page = await newSpecPage({
        components: [DatePicker],
        template: () => (
          <cho-date-picker
            onValueChanged={didValueChanged}
            onYearChanged={didYearChanged}
            onMonthChanged={didMonthChanged}
            onDayChanged={didDayChanged}
          />
        ),
      });

      page.rootInstance.valueChangedEmitter(null, null);

      expect(didValueChanged).toHaveBeenCalled();
      expect(didYearChanged).toHaveBeenCalled();
      expect(didMonthChanged).toHaveBeenCalled();
      expect(didDayChanged).toHaveBeenCalled();
    });
  });
});
