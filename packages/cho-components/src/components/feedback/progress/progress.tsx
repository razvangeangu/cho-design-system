// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { kProgress, TProgressKind } from './model';

@Component({
  tag: 'cho-progress',
  styleUrl: 'progress.scss',
  shadow: true,
})
export class Progress implements ComponentInterface {
  /**
   * The kind to use.
   *
   * @default 'circular'
   */
  @Prop() kind?: TProgressKind = 'circular';

  /**
   * If `true`, the component appears indeterminate.
   *
   * @default true
   */
  @Prop() indeterminate?: boolean = true;

  /**
   * The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
   *
   * @default 0
   */
  @Prop() value?: number = 0;

  /**
   * If `true`, the label will be visible.
   *
   * @default false
   */
  @Prop() label?: boolean = false;

  private renderCircular = () => {
    const max = 126.92;

    return (
      <div class={kProgress.classes.circularContainer} role="progressbar">
        <svg
          class={kProgress.classes.circularSvg}
          viewBox="22 22 44 44"
          data-indeterminate={String(this.indeterminate)}
        >
          <circle
            cx={44}
            cy={44}
            r={20.2}
            style={{
              'stroke-dasharray': `${max}`,
              'stroke-dashoffset': `${max - (max * this.value) / 100}`,
            }}
            data-indeterminate={String(this.indeterminate)}
          />
        </svg>
        {this.label && <div class={kProgress.classes.circularPercentage}>{this.value}</div>}
      </div>
    );
  };

  private renderLinear = () => {
    return (
      <Host style={{ display: 'initial' }}>
        <div class={kProgress.classes.linearContainer}>
          <div class={kProgress.classes.linear} role="progressbar">
            <div data-indeterminate={String(this.indeterminate)} style={{ width: `${this.value}%` }} />
          </div>
          {this.label && <div class={kProgress.classes.linearPercentage}>{this.value}</div>}
        </div>
      </Host>
    );
  };

  render() {
    switch (this.kind) {
      case 'circular':
        return this.renderCircular();
      case 'linear':
        return this.renderLinear();

      default:
        return this.renderCircular();
    }
  }
}
