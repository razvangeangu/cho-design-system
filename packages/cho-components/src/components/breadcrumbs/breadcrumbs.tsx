// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { kBreadcrumbs } from './model';

/**
 * @slot - The primary content of the breadcrumbs.
 */
@Component({
  tag: 'cho-breadcrumbs',
  styleUrl: 'breadcrumbs.scss',
  shadow: true,
})
export class Breadcrumbs implements ComponentInterface {
  /**
   * Custom separator string.
   *
   * @default '/'
   */
  @Prop() separator?: string = '/';

  private get separatorVar() {
    return { '--breadcrumbs-separator': `"${this.separator}"` };
  }

  render() {
    return (
      <div class={kBreadcrumbs.classes.container} style={{ ...this.separatorVar }}>
        <slot />
      </div>
    );
  }
}
