import { ChoLink } from '@cho/components-react';
import React from 'react';

export const Anchor = props => {
  let { href } = props;

  if (href && href.includes('../')) {
    href = href.replace('../', '');
  }

  return <ChoLink href={href}>{props.children}</ChoLink>;
};
