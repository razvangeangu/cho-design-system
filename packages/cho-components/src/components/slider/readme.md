# cho-slider



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute  | Description                                                                                                                                                                                                                    | Type                                | Default     |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------- |
| `disabled`  | `disabled` | If `true`, the text-field will be disabled.                                                                                                                                                                                    | `boolean`                           | `false`     |
| `label`     | `label`    | The label content.                                                                                                                                                                                                             | `string`                            | `undefined` |
| `max`       | `max`      | The maximum allowed value of the slider. Should not be equal to min.                                                                                                                                                           | `number`                            | `100`       |
| `min`       | `min`      | The minimum allowed value of the slider. Should not be equal to max.                                                                                                                                                           | `number`                            | `0`         |
| `step`      | `step`     | The granularity with which the slider can step through values.                                                                                                                                                                 | `number`                            | `1`         |
| `tickmarks` | --         | Tickmarks indicate predetermined values to which the user can move the slider. If an `Array`, it should contain objects with value and an optional label keys.                                                                 | `ISliderTickmark[]`                 | `undefined` |
| `track`     | `track`    | The track presentation: - `normal` the track will render a bar representing the slider value. - `inverted` the track will render a bar representing the remaining slider value. - `false` the track will render without a bar. | `"false" \| "inverted" \| "normal"` | `'normal'`  |
| `value`     | `value`    | The value of the slider.                                                                                                                                                                                                       | `number`                            | `0`         |


## Events

| Event          | Description                               | Type                                     |
| -------------- | ----------------------------------------- | ---------------------------------------- |
| `valueChanged` | Callback fired when the value is changed. | `CustomEvent<ISliderValueChangedDetail>` |


## Slots

| Slot         | Description                                        |
| ------------ | -------------------------------------------------- |
| `"leading"`  | A component to display before the primary content. |
| `"trailing"` | A component to display after the primary content.  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
