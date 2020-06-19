# cho-switch

Switches toggle the state of a single setting on or off.

## Examples

### Checked

<cho-switch checked>
</cho-switch>

```html
<cho-switch checked>
</cho-switch>
```

### Label placement

<cho-switch label-placement="end">
  Label
</cho-switch>

```html
<cho-switch label-placement="end">
  Label
</cho-switch>
```


<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                             | Type                                    | Default |
| ---------------- | ----------------- | --------------------------------------- | --------------------------------------- | ------- |
| `checked`        | `checked`         | If `true`, the component is checked.    | `boolean`                               | `false` |
| `disabled`       | `disabled`        | If `true`, the switch will be disabled. | `boolean`                               | `false` |
| `labelPlacement` | `label-placement` | The position of the label               | `"bottom" \| "end" \| "start" \| "top"` | `'end'` |


## Events

| Event            | Description                               | Type                                     |
| ---------------- | ----------------------------------------- | ---------------------------------------- |
| `checkedChanged` | Callback fired when the state is changed. | `CustomEvent<ISwitchValueChangedDetail>` |


## Slots

| Slot | Description                        |
| ---- | ---------------------------------- |
|      | The primary content of the switch. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
