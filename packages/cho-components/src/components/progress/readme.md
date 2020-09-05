# cho-progress

Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

## Examples

### Circular

```html
<cho-progress></cho-progress>

<cho-progress value="50" indeterminate="false" label></cho-progress>
```

### Linear

```html
<cho-progress kind="linear"></cho-progress>

<cho-progress kind="linear" value="50" indeterminate="false" label></cho-progress>
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                           | Type                     | Default      |
| --------------- | --------------- | ----------------------------------------------------------------------------------------------------- | ------------------------ | ------------ |
| `indeterminate` | `indeterminate` | If `true`, the component appears indeterminate.                                                       | `boolean`                | `true`       |
| `kind`          | `kind`          | The kind to use.                                                                                      | `"circular" \| "linear"` | `'circular'` |
| `label`         | `label`         | If `true`, the label will be visible.                                                                 | `boolean`                | `false`      |
| `value`         | `value`         | The value of the progress indicator for the determinate and static variants. Value between 0 and 100. | `number`                 | `0`          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
