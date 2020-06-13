// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { kLink, TLinkRelation, TLinkTarget } from './model';

/**
 * @slot - The primary content of the link.
 */
@Component({
  tag: 'cho-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link implements ComponentInterface {
  /**
   * Specifies the link's destination.
   *
   * @default undefined
   */
  @Prop() href?: string;

  /**
   * If `true`, the button will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * Specifies where to open the linked document.
   */
  @Prop() target?: TLinkTarget;

  /**
   * Specifies the relationship between the current document and the linked document.
   * Only used if the href attribute is present.
   */
  @Prop() relation?: TLinkRelation; // TODO: add error if href is defined and relation is not

  private didClick = (event: MouseEvent | KeyboardEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private didKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.didClick(event);
    }
  };

  render() {
    return this.href != null ? (
      <a
        class={kLink.classes.container}
        href={this.href}
        target={this.target}
        rel={this.relation}
        onClick={this.didClick}
        data-disabled={String(this.disabled)}
      >
        <slot />
      </a>
    ) : (
      <button
        class={kLink.classes.containerButton}
        type="button"
        onClick={this.didClick}
        onKeyPress={this.didKeyPress}
        disabled={this.disabled}
      >
        <slot />
      </button>
    );
  }
}
