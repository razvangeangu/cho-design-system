# cho-tabs

Tabs make it easy to explore and switch between different views.

## Examples

```html
<cho-tabs>
  <cho-tab-item label="Item 1" index="0"></cho-tab-item>
  <cho-tab-item label="Item 2" index="1"></cho-tab-item>
  <cho-tab-item label="Item 3" index="2"></cho-tab-item>
  <cho-tab-item-content label="Item 1" index="0">
    Content 1
  </cho-tab-item-content>
  <cho-tab-item-content label="Item 2" index="1">
    Content 2
  </cho-tab-item-content>
  <cho-tab-item-content label="Item 3" index="2">
    Content 3
  </cho-tab-item-content>
</cho-tabs>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                            | Type     | Default |
| -------------- | --------------- | -------------------------------------- | -------- | ------- |
| `currentIndex` | `current-index` | The position index of the tab content. | `number` | `0`     |


## Events

| Event                 | Description                                         | Type                                      |
| --------------------- | --------------------------------------------------- | ----------------------------------------- |
| `currentIndexChanged` | Callback fired when current index value is changed. | `CustomEvent<ICurrentIndexChangedDetail>` |


## Slots

| Slot        | Description                                             |
| ----------- | ------------------------------------------------------- |
| `"content"` | The content content of the tabs (i.e. tab-item-content) |
| `"label"`   | The label content of the tabs (i.e. tab-item)           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
