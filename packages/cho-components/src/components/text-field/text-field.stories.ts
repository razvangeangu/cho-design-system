/* istanbul ignore file */

import {
  attachArgs,
  attachSlots,
  eventsFromDocs,
  propsFromDocs,
  slotsFromDocs,
} from '../../utils/stories.util';

const componentName = 'cho-text-field' as const;
const props = propsFromDocs(componentName);
const slots = slotsFromDocs(componentName);
const events = eventsFromDocs(componentName);

export default {
  title: 'Inputs/Text Field',
  argTypes: {
    ...props,
    ...slots,
    ...events,
  },
};

const Template = (args: any) => {
  const component = document.createElement(componentName);
  attachArgs(args, events, component);
  attachSlots(args, slots, component);

  return component;
};

export const Default = Template.bind({});
