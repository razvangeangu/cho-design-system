import mermaid from 'mermaid';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai as prismTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const StyledCode = styled.code`
  width: 100%;
  max-width: 100%;
  overflow: auto;
  padding: 0.25rem;
  background-color: ${props =>
    props.style?.backgroundColor || 'var(--surface__background-color)'};
  box-sizing: border-box;
  margin-bottom: 0.25rem;
`;

export const Code = props => {
  const { children, className } = props;
  const formattedChildren = (children || '').replace(/\\\|/g, '|');

  let id: string | undefined = undefined;
  if ((className || '').includes('mermaid')) {
    id = 'theGraph' + Math.random();

    mermaid.render('theGraph', formattedChildren, svgCode => {
      const timeout = setTimeout(() => {
        const styledCode = document.getElementById(id!);
        if (styledCode) {
          styledCode.innerHTML = svgCode;
        }

        clearTimeout(timeout);
      }, 0);
    });

    return (
      <StyledCode id={id} style={{ backgroundColor: 'transparent' }}>
        {formattedChildren}
      </StyledCode>
    );
  }

  if ((className || '').includes('lang-')) {
    return (
      <SyntaxHighlighter
        language={className.replace('lang-', '')}
        style={prismTheme}
      >
        {formattedChildren}
      </SyntaxHighlighter>
    );
  }

  return <StyledCode id={id}>{formattedChildren}</StyledCode>;
};
