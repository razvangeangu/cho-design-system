# cho-notification

Notifications provide brief messages about app processes.

## Examples

```html
<cho-notification>I am a notification</cho-notification>
```


<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                    | Type                                                                                                  | Default     |
| ----------- | ----------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| `kind`      | `kind`      | The kind to use.                               | `"default" \| "error" \| "information" \| "success" \| "warning"`                                     | `'default'` |
| `placement` | `placement` | The fixed position of the badge on the screen. | `"bottom" \| "bottom-end" \| "bottom-start" \| "end" \| "start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`  |
| `visible`   | `visible`   | If `true`, the notification will be visible.   | `boolean`                                                                                             | `false`     |


## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | The main content of the notification. |


## Dependencies

### Depends on

- [cho-icon](../icon)

### Graph
```mermaid
graph TD;
  cho-notification --> cho-icon
  style cho-notification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
