# cho-icon



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description       | Type                                                                                                       | Default               |
| ------------------- | --------- | ----------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- |
| `color`             | `color`   | The color to use. | `string`                                                                                                   | `'var(--text-color)'` |
| `kind` _(required)_ | `kind`    | The kind to use.  | `"arrow-down" \| "calendar" \| "cancel" \| "close" \| "error-outline" \| "info" \| "success" \| "warning"` | `undefined`           |


## Dependencies

### Used by

 - [cho-chip](../chip)
 - [cho-date-picker](../../inputs/date-picker)
 - [cho-notification](../../feedback/notification)
 - [cho-select](../../inputs/select)

### Graph
```mermaid
graph TD;
  cho-chip --> cho-icon
  cho-date-picker --> cho-icon
  cho-notification --> cho-icon
  cho-select --> cho-icon
  style cho-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
