# cho-tooltip

Tooltips display informative text when users hover over, focus on, or tap an element.

### Examples

```html
<cho-tooltip title-content="Tooltip" visible>
  <cho-icon kind="info"></cho-icon>
</cho-tooltip>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                    | Type                                                                                                  | Default     |
| -------------- | --------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| `placement`    | `placement`     | The fixed position of the badge on the screen. | `"bottom" \| "bottom-end" \| "bottom-start" \| "end" \| "start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`  |
| `titleContent` | `title-content` | Tooltip title.                                 | `string`                                                                                              | `undefined` |
| `visible`      | `visible`       | If `true`, the tooltip will be visible.        | `boolean`                                                                                             | `false`     |


## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | The primary content of the tooltip. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
