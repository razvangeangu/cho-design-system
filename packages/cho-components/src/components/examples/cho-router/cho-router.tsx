/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, FunctionalComponent } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';
import { IndexPage } from './pages';
import { components, namespace } from '../../../utils';

const ChoNavigator: FunctionalComponent = () => {
  return [
    <ul>
      <li>
        <stencil-route-link url="/" exact>
          Home
        </stencil-route-link>
      </li>
    </ul>,
    ...Object.keys(components).map(category => (
      <ul>
        {components[category].map((component: string) => (
          <li>
            <stencil-route-link url={`/${category}/${component.replace(`${namespace}-`, '')}`}>
              {component
                .replace(`${namespace}-`, '')
                .replace(/^\w/, c => c.toUpperCase())
                .replace(/-\w/g, c => c.replace('-', ' ').toUpperCase())}
            </stencil-route-link>
          </li>
        ))}
      </ul>
    ))
  ];
};
const NotFoundPage: (props: RouteRenderProps) => FunctionalComponent = () => <div>Not Found</div>;

@Component({
  tag: 'cho-router'
})
export class RouterDemoApp {
  render() {
    return (
      <stencil-router>
        <ChoNavigator />
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" exact routeRender={() => <IndexPage />} />
          {Object.keys(components).map(category =>
            components[category].map((component: string) => (
              <stencil-route
                url={`/${category}/${component.replace(`${namespace}-`, '')}`}
                routeRender={NotFoundPage}
              />
            ))
          )}
          <stencil-route routeRender={NotFoundPage} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
