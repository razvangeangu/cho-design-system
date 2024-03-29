# cho-date-picker

Date picker provides a simple way to select a single value from a pre-determined set.

## Examples

```html
<cho-date-picker></cho-date-picker>
```


<!-- Auto Generated Below -->


## Properties

| Property            | Attribute  | Description                                 | Type                              | Default                  |
| ------------------- | ---------- | ------------------------------------------- | --------------------------------- | ------------------------ |
| `disabled`          | `disabled` | If `true`, the text-field will be disabled. | `boolean`                         | `false`                  |
| `maxDate`           | --         | Max selectable date                         | `Date`                            | `new Date('2097-01-14')` |
| `minDate`           | --         | Min selectable date                         | `Date`                            | `new Date('1897-01-14')` |
| `shouldDisableDate` | --         | Callback used to disable specific dates.    | `(timestamp?: number) => boolean` | `() => false`            |
| `value`             | --         | The value of the date-picker.               | `Date`                            | `new Date()`             |
| `visible`           | `visible`  | If `true`, the calendar will be visible.    | `boolean`                         | `false`                  |


## Events

| Event          | Description                               | Type                                         |
| -------------- | ----------------------------------------- | -------------------------------------------- |
| `dayChanged`   | Callback fired when the day is changed.   | `CustomEvent<IDatePickerDayChangedDetail>`   |
| `monthChanged` | Callback fired when the month is changed. | `CustomEvent<IDatePickerMonthChangedDetail>` |
| `valueChanged` | Callback fired when the value is changed. | `CustomEvent<IDatePickerValueChangedDetail>` |
| `yearChanged`  | Callback fired when the year is changed.  | `CustomEvent<IDatePickerYearChangedDetail>`  |


## Methods

### `close() => Promise<void>`

Close the dropdown.

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Open the dropdown.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [cho-text-field](../text-field)
- [cho-icon](../icon)

### Graph
```mermaid
graph TD;
  cho-date-picker --> cho-text-field
  cho-date-picker --> cho-icon
  style cho-date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
