/**
 *
 * ComponentDocs
 *
 */

import {
  ChoAppBar,
  ChoButton,
  ChoDrawer,
  ChoMenuItem,
  ChoMenuItemGroup,
  ChoProgress,
  setTheme,
} from '@cho/components-react';
import { AnchorHeader } from 'app/components/AnchorHeader/Loadable';
import * as H from 'history';
import { translations } from 'locales/i18n';
import Markdown from 'markdown-to-jsx';
import mermaid from 'mermaid';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, match } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { scrollToLocation } from 'utils/scroll-to-location';
import { sentenceCase } from 'utils/sentence-case';
import { Anchor } from './components/Anchor';
import { Code } from './components/Code';
import { kComponentDocs } from './constants';
import { componentDocsSaga } from './saga';
import { selectComponentName, selectDocs, selectLoading } from './selectors';
import { actions, reducer, sliceKey } from './slice';

interface Props {
  history: H.History;
  location: H.Location;
  match: match & { params: { compName: string } };
}

export function ComponentDocs(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: componentDocsSaga });

  const { t } = useTranslation();

  const loading = useSelector(selectLoading);
  const docs = useSelector(selectDocs);
  const componentName = useSelector(selectComponentName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.params.compName.length > 0) {
      if (!kComponentDocs.components.includes(props.match.params.compName))
        props.history.push('/not-found');

      mermaid.initialize({ startOnLoad: true, theme: 'default' });

      dispatch(actions.changeComponentName(props.match.params.compName));
      dispatch(actions.loadComponentDocs());
    }
  }, [dispatch, props.history, props.match.params.compName]);

  useEffect(() => {
    if (docs) {
      scrollToLocation(props.location.hash);
    }
  }, [docs, loading, props.location.hash]);

  const changeTheme = () => {
    setTheme();
  };

  const openCloseDrawer = () => {
    const drawer = document.querySelector('cho-drawer');
    if (drawer) {
      drawer.visible = !drawer.visible;
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {sentenceCase(componentName)} {t(translations.docs())}
        </title>
        <meta
          name="description"
          content={`${t(translations.documentationFor())} ${sentenceCase(
            componentName,
          )}`}
        />
      </Helmet>
      <ChoAppBar onHamburgerClicked={openCloseDrawer}>
        <span slot="title">{t(translations.appName())}</span>
        <ChoButton slot="trailing" onClick={changeTheme}>
          {t(translations.changeTheme())}
        </ChoButton>
      </ChoAppBar>
      <Main>
        <ChoDrawerStyled>
          <ChoMenuItemGroup>
            {kComponentDocs.components.map(name => (
              <StyledLink to={name} key={name}>
                <ChoStyledMenuItem selected={name === componentName}>
                  {sentenceCase(name)}
                </ChoStyledMenuItem>
              </StyledLink>
            ))}
          </ChoMenuItemGroup>
        </ChoDrawerStyled>
        {loading ? (
          <ProgressContainer>
            <ChoProgress />
          </ProgressContainer>
        ) : (
          <Docs>
            <Markdown children={docs} options={markdownOptions} />
          </Docs>
        )}
      </Main>
    </>
  );
}

const StyledLink = styled(Link)`
  color: var(--text-color);
  display: flex;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

const ChoStyledMenuItem = styled(ChoMenuItem)`
  width: 100%;
`;

const ChoDrawerStyled = styled(ChoDrawer)`
  height: calc(100vh - 59px);
`;

const Main = styled.main`
  display: flex;
  width: 100%;
`;

const ProgressContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Docs = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  overflow-y: auto;
  height: calc(100vh - 59px);
  width: 100%;
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

const markdownOptions = {
  overrides: {
    a: {
      component: Anchor,
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
