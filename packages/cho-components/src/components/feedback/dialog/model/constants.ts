export const kDialog = {
  componentName: 'cho-dialog',
  classes: {
    container: 'dialog__container',
    content: 'dialog__content',
    title: 'dialog__title',
    footer: 'dialog__footer',
  },
  slots: {
    title: 'title',
    footer: 'footer',
  },
} as const;
