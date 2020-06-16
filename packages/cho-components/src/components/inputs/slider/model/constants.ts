export const kSlider = {
  componentName: 'cho-slider',
  classes: {
    slider: 'slider',
    sliderContainer: 'slider__container',
    input: 'slider__input',
    inputContainer: 'slider__input-container',
    valueTooltip: 'slider__value-tooltip',
    labelContent: 'slider__label-content',
    label: 'slider__label',
    option: 'slider__option',
    datalist: 'slider__datalist',
  },
  ids: {
    slider: 'slider',
    tickmarks: 'tickmarks',
  },
  slots: {
    leading: 'leading',
    trailing: 'trailing',
  },
} as const;
