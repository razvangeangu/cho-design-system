import mermaid from 'mermaid';
import React from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`
  width: 100%;
  max-width: 100%;
  overflow: auto;
  padding: 0.25rem;
  background-color: var(--surface__background-color);
  box-sizing: border-box;
  margin-bottom: 0.25rem;
`;

export const Code = ({ children }) => {
  let id: string | undefined = undefined;
  if (children.includes('graph TD;')) {
    id = 'theGraph' + Math.random();

    mermaid.render('theGraph', children, svgCode => {
      const timeout = setTimeout(() => {
        const styledCode = document.getElementById(id!);
        if (styledCode) {
          styledCode.innerHTML = svgCode;
        }

        clearTimeout(timeout);
      }, 0);
    });
  }

  return (
    <StyledCode id={id}>{(children || '').replace(/\\\|/g, '|')}</StyledCode>
  );
};
