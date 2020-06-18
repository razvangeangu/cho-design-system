# cho-select



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                               | Type      | Default     |
| ---------- | ---------- | --------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | If `true`, the text-field will be disabled.               | `boolean` | `false`     |
| `error`    | `error`    | If `true`, the label will be displayed in an error state. | `boolean` | `false`     |
| `label`    | `label`    | The label content.                                        | `string`  | `undefined` |
| `value`    | `value`    | The value of the select.                                  | `any`     | `null`      |


## Events

| Event          | Description                               | Type                                     |
| -------------- | ----------------------------------------- | ---------------------------------------- |
| `valueChanged` | Callback fired when the value is changed. | `CustomEvent<ISelectValueChangedDetail>` |


## Methods

### `reset() => Promise<void>`

Reset the select to its initial state.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                                     |
| ---- | ------------------------------------------------------------------------------- |
|      | The primary content of the select. (i.e. menu-item-group, menu-item or divider) |


## Dependencies

### Depends on

- [cho-text-field](../text-field)
- [cho-icon](../icon)
- [cho-menu-item](../menu-item)
- [cho-divider](../divider)

### Graph
```mermaid
graph TD;
  cho-select --> cho-text-field
  cho-select --> cho-icon
  cho-select --> cho-menu-item
  cho-select --> cho-divider
  style cho-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
