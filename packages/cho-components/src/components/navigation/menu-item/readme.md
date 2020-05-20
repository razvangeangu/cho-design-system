# cho-menu-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                | Type      | Default     |
| ---------- | ---------- | ------------------------------------------ | --------- | ----------- |
| `disabled` | `disabled` | If `true`, the menu-item will be disabled. | `boolean` | `false`     |
| `selected` | `selected` | If `true`, the menu-item will be selected. | `boolean` | `false`     |
| `value`    | `value`    | The value of the menu-item.                | `any`     | `undefined` |


## Events

| Event               | Description                                              | Type                                    |
| ------------------- | -------------------------------------------------------- | --------------------------------------- |
| `menuItemConnected` | Called every time the component is connected to the DOM. | `CustomEvent<IMenuItemConnectedDetail>` |


## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | The primary content of the menu-item. |


## Dependencies

### Used by

 - [cho-select](../../inputs/select)

### Graph
```mermaid
graph TD;
  cho-select --> cho-menu-item
  style cho-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
