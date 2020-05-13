/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';
import { IndexPage, ComponentPage, NotFoundPage } from './pages';
import { components, namespace } from '../../../utils';
import { Navigator } from './Navigator';

@Component({
  tag: 'cho-router',
  styleUrl: 'router.scss'
})
export class Router {
  render() {
    return (
      <stencil-router class="stencil-router">
        <Navigator class="navigator" />

        <stencil-route-switch scrollTopOffset={0} class="content">
          <stencil-route url="/" exact routeRender={() => <IndexPage />} />
          {Object.keys(components).map(category =>
            components[category].map((component: string) => (
              <stencil-route
                url={`/${category}/${component.replace(`${namespace}-`, '')}`}
                routeRender={() => <ComponentPage componentName={component} />}
              />
            ))
          )}
          <stencil-route routeRender={NotFoundPage} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
