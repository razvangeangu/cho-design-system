/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, FunctionalComponent } from '@stencil/core';
import { RouteRenderProps } from '@stencil/router';
import { IndexPage } from './pages';
import { readFileSync } from 'fs';
console.log(readFileSync);

const ChoNavigator: FunctionalComponent = () => {
  return (
    <ul>
      <li>
        <stencil-route-link url="/" exact>
          Exact Base Link
        </stencil-route-link>
      </li>
      <li>
        <stencil-route-link url="/button" exact>
          Button
        </stencil-route-link>
      </li>
    </ul>
  );
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
          <stencil-route routeRender={NotFoundPage} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
