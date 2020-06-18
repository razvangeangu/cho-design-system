// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Host, Listen, Prop, State } from '@stencil/core';
import { kAppBar, TAppBarPosition } from './model';

/**
 * @slot leading - A component to display before the primary content.
 * @slot title - The title content of the app bar.
 * @slot trailing - A component to display after the primary content.
 */
@Component({
  tag: 'cho-app-bar',
  styleUrl: 'app-bar.scss',
  shadow: true,
})
export class AppBar implements ComponentInterface {
  /**
   * The position of the app bar.
   *
   * @default 'static'
   */
  @Prop() position?: TAppBarPosition = 'static';

  /**
   * If `true`, hides on scroll down to leave more space for reading
   *
   * @default 'false'
   */
  @Prop() hidesOnScroll?: boolean = false;

  @State() visible: boolean = true;

  private lastScrollTop: number = 0;

  @Listen('scroll', { target: 'window' })
  windowScrollListener() {
    if (!this.hidesOnScroll) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      this.visible = true;
    } else {
      this.visible = false;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  private get hostStyle() {
    return {
      position: this.position === 'static' ? 'initial' : 'fixed',
      visibility: this.visible ? 'initial' : 'hidden',
    };
  }

  render() {
    return (
      <Host style={{ ...this.hostStyle }}>
        <div class={kAppBar.classes.container}>
          <div class={kAppBar.classes.leading}>
            <slot name={kAppBar.slots.leading}>
              <cho-button>
                <cho-icon kind="hamburger" color="var(--button__text-color)" />
              </cho-button>
            </slot>
          </div>
          <div class={kAppBar.classes.title}>
            <slot name={kAppBar.slots.titile} />
          </div>
          <div class={kAppBar.classes.trailing}>
            <slot name={kAppBar.slots.trailing} />
          </div>
        </div>
      </Host>
    );
  }
}
