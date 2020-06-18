/**
 *
 * ComponentDocs
 *
 */

import { ChoAppBar, ChoLink, ChoProgress } from '@cho/components-react';
import { AnchorHeader } from 'app/components/AnchorHeader/Loadable';
import * as H from 'history';
import Markdown from 'markdown-to-jsx';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { scrollToLocation } from 'utils/scroll-to-location';
import { componentDocsSaga } from './saga';
import { selectComponentName, selectDocs, selectLoading } from './selectors';
import { actions, reducer, sliceKey } from './slice';

interface Props {
  location: H.Location;
  match: match & { params: { compName: string } };
}

export function ComponentDocs(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: componentDocsSaga });

  const loading = useSelector(selectLoading);
  const docs = useSelector(selectDocs);
  const componentName = useSelector(selectComponentName);
  const dispatch = useDispatch();

  useEffect(() => {
    // When initial state username is not null, submit the form to load docs
    if (props.match.params.compName.length > 0) {
      dispatch(actions.changeComponentName(props.match.params.compName));
      dispatch(actions.loadComponentDocs());
    }
  }, [dispatch, props.match.params.compName]);

  useEffect(() => {
    if (docs) {
      scrollToLocation(props.location.hash);
    }
  }, [docs, loading, props.location.hash]);

  return (
    <>
      <Helmet>
        <title>{componentName} Docs</title>
        <meta
          name="description"
          content={`Documentation for ${componentName}`}
        />
      </Helmet>
      <ChoAppBar position="sticky">
        <span slot="title">Chocolate Design System</span>
      </ChoAppBar>
      {loading ? (
        <Progress>
          <ChoProgress />
        </Progress>
      ) : (
        <Docs>
          <Markdown children={docs} options={markdownOptions} />
        </Docs>
      )}
    </>
  );
}

const Progress = styled.div`
  display: flex;
  justify-content: center;
  padding-top: calc(20% + 3.625rem);
`;

const Docs = styled.div`
  padding-bottom: 1.25rem;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3.625rem;
`;

const DocsTable = styled.table`
  text-align: left;
  width: 100%;

  th,
  td {
    border-bottom: var(--border-width) solid var(--surface__border-color);
    padding: 0.375rem;
  }
`;

const Code = props => {
  const StyledCode = styled.code`
    width: 100%;
    max-width: 100%;
    overflow: auto;
    padding: 0.25rem;
    background-color: var(--surface__background-color);
    box-sizing: border-box;
    margin-bottom: 0.25rem;
  `;
  return <StyledCode>{(props.children || '').replace('\\|', '|')}</StyledCode>;
};

const markdownOptions = {
  overrides: {
    a: {
      component: ChoLink,
    },
    code: {
      component: Code,
    },
    table: {
      component: DocsTable,
    },
    h1: {
      component: AnchorHeader,
      props: {
        headerType: 'h1',
      },
    },
    h2: {
      component: AnchorHeader,
      props: {
        headerType: 'h2',
      },
    },
    h3: {
      component: AnchorHeader,
      props: {
        headerType: 'h3',
      },
    },
    h4: {
      component: AnchorHeader,
      props: {
        headerType: 'h4',
      },
    },
    h5: {
      component: AnchorHeader,
      props: {
        headerType: 'h5',
      },
    },
    h6: {
      component: AnchorHeader,
      props: {
        headerType: 'h6',
      },
    },
  },
};
