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

  render() {
    return (
      <button
        type="button"
        class={kChip.classes.container}
        disabled={this.disabled}
        onClick={this.didClick}
        data-clickable={String(!!this.clickable)}
        data-kind={this.kind}
      >
        <slot name={kChip.slots.leading} />
        <div class={kChip.classes.content}>
          <slot />
        </div>
        <slot name={kChip.slots.trailing} />
        {this.deleteIcon && (
          <button
            class={kChip.classes.deleteIcon}
            type="button"
            disabled={this.disabled}
            onClick={this.didClickDelete}
          >
            <cho-icon kind="cancel" color={this.disabled ? 'var(--disabled)' : undefined} />
          </button>
        )}
      </button>
    );
  }
}
