import { h, FunctionalComponent } from '@stencil/core';
import { components, namespace } from '../../../utils';

export const Navigator: FunctionalComponent<{ class?: string }> = props => {
  return (
    <div class={props.class}>
      <cho-list class="router__list">
        <stencil-route-link url="/" exact custom="cho-list-item">
          Home
        </stencil-route-link>
      </cho-list>
      {...Object.keys(components).map(category => (
        <cho-list class="router__list">
          {components[category].map((component: string) => (
            <stencil-route-link url={`/${category}/${component.replace(`${namespace}-`, '')}`} custom="cho-list-item">
              {component
                .replace(`${namespace}-`, '')
                .replace(/^\w/, c => c.toUpperCase())
                .replace(/-\w/g, c => c.replace('-', ' ').toUpperCase())}
            </stencil-route-link>
          ))}
        </cho-list>
      ))}
    </div>
  );
};
