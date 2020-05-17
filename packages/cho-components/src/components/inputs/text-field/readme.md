# cho-text-field



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                      | Type                                                                                    | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ----------- |
| `disabled`    | `disabled`    | If `true`, the text-field will be disabled.                                                      | `boolean`                                                                               | `false`     |
| `error`       | `error`       | If `true`, the label will be displayed in an error state.                                        | `boolean`                                                                               | `false`     |
| `helperText`  | `helper-text` | The helper text content.                                                                         | `string`                                                                                | `undefined` |
| `label`       | `label`       | The label content.                                                                               | `string`                                                                                | `undefined` |
| `multiline`   | `multiline`   | If `true`, a textarea element will be rendered instead of an input.                              | `boolean`                                                                               | `false`     |
| `name`        | `name`        | Name attribute of the input element.                                                             | `string`                                                                                | `undefined` |
| `placeholder` | `placeholder` | The short hint displayed in the input before the user enters a value.                            | `string`                                                                                | `undefined` |
| `readOnly`    | `read-only`   | It prevents the user from changing the value of the field (not from interacting with the field). | `boolean`                                                                               | `false`     |
| `rows`        | `rows`        | Number of rows to display when `multiline` option is set to true.                                | `number`                                                                                | `2`         |
| `type`        | `type`        | Specifies the type of <input> element to display.                                                | `"email" \| "hidden" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`       | `value`       | The value of the input element, required for a controlled component.                             | `string`                                                                                | `undefined` |


## Events

| Event          | Description                               | Type                                        |
| -------------- | ----------------------------------------- | ------------------------------------------- |
| `valueChanged` | Callback fired when the value is changed. | `CustomEvent<ITextFieldValueChangedDetail>` |


## Slots

| Slot         | Description                                        |
| ------------ | -------------------------------------------------- |
| `"leading"`  | A component to display before the primary content. |
| `"trailing"` | A component to display after the primary content.  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*