// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FunctionalComponent, h } from '@stencil/core';

export const ComponentPage: FunctionalComponent<{ componentName: string }> = props => {
  const title = <span>{props.componentName}</span>;
  return <div>{title}</div>;
};
