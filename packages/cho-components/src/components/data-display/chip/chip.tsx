// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import { IChipDeleteEventDetail, kChip, TChipKind } from './model';

/**
 * @slot leading - A component to display before the primary content.
 * @slot - The primary content of the chip.
 * @slot trailing - A component to display after the primary content.
 */
@Component({
  tag: 'cho-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class Chip implements ComponentInterface {
  /**
   * The kind to use.
   *
   * @default 'contained'
   */
  @Prop() kind?: TChipKind = 'contained';

  /**
   * If `true`, the component will display clicking style.
   *
   * @default false
   */
  @Prop() clickable?: boolean = false;

  /**
   * If `true`, the component will show the delete icon in the trailing space.
   *
   * @default false
   */
  @Prop() deleteIcon?: boolean = false;

  /**
   * If `true`, the button will be disabled.
   *
   * @default false
   */
  @Prop() disabled?: boolean = false;

  /**
   * Callback fired when the delete icon is clicked.
   */
  @Event() delete: EventEmitter<IChipDeleteEventDetail>;

  private didClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private didDelete = (event: Event) => {
    if (this.disabled) return;

    event.preventDefault();
    event.stopPropagation();

    this.delete.emit();
  };

  private didClickDelete = (event: MouseEvent) => {
    this.didDelete(event);
  };

  private didKeyPressDelete = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.didDelete(event);
    }
  };

  render() {
    return (
      <button
        type="button"
        class={kChip.classes.container}
        disabled={this.disabled}
        onClick={this.didClick}
        data-clickable={String(this.clickable)}
        data-kind={this.kind}
      >
        <slot name={kChip.slots.leading} />
        <div class={kChip.classes.content}>
          <slot />
        </div>
        <slot name={kChip.slots.trailing} />
        {this.deleteIcon && (
          // TODO: replace with real icon
          <svg
            role="button"
            class={kChip.classes.deleteIcon}
            onClick={this.didClickDelete}
            onKeyPress={this.didKeyPressDelete}
            tabindex={this.disabled ? -1 : 0}
            data-disabled={String(this.disabled)}
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            {/* eslint-disable-next-line max-len */}
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
          </svg>
        )}
      </button>
    );
  }
}
