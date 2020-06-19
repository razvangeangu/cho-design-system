/**
 *
 * AnchorHeader
 *
 */
import { ChoIcon, ChoLink } from '@cho/components-react';
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  headerType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: Array<string>;
}

const kAnchorHeader = {
  classNames: {
    link: 'anchor-header__link',
    linkIcon: 'anchor-header__link-icon',
  },
} as const;

export const AnchorHeader = memo((props: Props) => {
  const id = slugify(props.children.join(' '));

  return (
    <Link href={`#${id}`} id={id} className={kAnchorHeader.classNames.link}>
      <Heading as={props.headerType}>
        {props.children}
        <ChoIcon kind="link" className={kAnchorHeader.classNames.linkIcon} />
      </Heading>
    </Link>
  );
});

const Link = styled(ChoLink)`
  display: flex;

  .${kAnchorHeader.classNames.linkIcon} {
    margin-left: 0.5rem;

    visibility: hidden;
  }

  :hover {
    .${kAnchorHeader.classNames.linkIcon} {
      visibility: initial;
    }
  }
`;

const Heading = styled.h1`
  align-content: center;
  align-items: center;
  display: flex;
`;

// based on https://stackoverflow.com/a/18123682/1141611
// not complete, but probably good enough
function slugify(str) {
  return str
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase();
}
