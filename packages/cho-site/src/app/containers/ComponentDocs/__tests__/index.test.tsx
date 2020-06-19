import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { ComponentDocs } from '..';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <ComponentDocs
          location={{} as any}
          match={{} as any}
          history={{} as any}
        />
      </HelmetProvider>
    </Provider>,
  );

describe('<ComponentDocs />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
