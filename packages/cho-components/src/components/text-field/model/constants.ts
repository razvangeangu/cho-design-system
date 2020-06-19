export const kTextField = {
  componentName: 'cho-text-field',
  classes: {
    input: 'text-field__input',
    inputContainer: 'text-field__input-container',
    label: 'text-field__label',
    labelContent: 'text-field__label-content',
    helperText: 'text-field__helper-text',
  },
  ids: {
    textField: 'text-field',
  },
  slots: {
    leading: 'leading',
    trailing: 'trailing',
  },
} as const;
