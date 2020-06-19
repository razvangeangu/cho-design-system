# cho-checkbox

Checkboxes allow the user to select one or more items from a set.

## Examples

<style>
  cho-checkbox {
    margin-right: 0.5rem;
  }
</style>

### Checked

<cho-checkbox checked>
  Checked
</cho-checkbox>

```html
<cho-checkbox checked>
  Checked
</cho-checkbox>
```

### Error

<cho-checkbox error>
  Error
</cho-checkbox>

```html
<cho-checkbox error>
  Error
</cho-checkbox>
```

### Indeterminate

<cho-checkbox indeterminate checked>
  Indeterminate
</cho-checkbox>

```html
<cho-checkbox indeterminate checked>
  Indeterminate
</cho-checkbox>
```

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                   | Type                                    | Default |
| ---------------- | ----------------- | ------------------------------------------------------------- | --------------------------------------- | ------- |
| `checked`        | `checked`         | If `true`, the component is checked.                          | `boolean`                               | `false` |
| `disabled`       | `disabled`        | If `true`, the checkbox will be disabled.                     | `boolean`                               | `false` |
| `error`          | `error`           | If `true`, the component will be displayed in an error state. | `boolean`                               | `false` |
| `indeterminate`  | `indeterminate`   | If `true`, the component appears indeterminate.               | `boolean`                               | `false` |
| `labelPlacement` | `label-placement` | The position of the label                                     | `"bottom" \| "end" \| "start" \| "top"` | `'end'` |


## Events

| Event            | Description                               | Type                                       |
| ---------------- | ----------------------------------------- | ------------------------------------------ |
| `checkedChanged` | Callback fired when the state is changed. | `CustomEvent<ICheckboxValueChangedDetail>` |


## Slots

| Slot | Description                          |
| ---- | ------------------------------------ |
|      | The primary content of the checkbox. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
