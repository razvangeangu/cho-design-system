export const kExpansionPanelItem = {
  componentName: 'cho-expansion-panel-item',
  classes: {
    container: 'expansion-panel-item__container',
    title: 'expansion-panel-item__title',
    titleContainer: 'expansion-panel-item__title-container',
    contentContainer: 'expansion-panel-item__content-container',
    expandIconContainer: 'expansion-panel-item__expand-icon-container',
  },
  slots: {
    title: 'title',
    expandIcon: 'expand-icon',
    content: 'content',
  },
} as const;
