/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator =  function(cls: any){
    if (opts.inputs) {
      proxyInputs(cls, opts.inputs);
    }
    if (opts.methods) {
      proxyMethods(cls, opts.methods);
    }
    return cls;
  };
  return decorator;
}

import { Components } from '@cho/components'

export declare interface ChoBackdrop extends Components.ChoBackdrop {}
@ProxyCmp({inputs: ['visible']})
@Component({ selector: 'cho-backdrop', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['visible'] })
export class ChoBackdrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoBadge extends Components.ChoBadge {}
@ProxyCmp({inputs: ['content', 'horizontalPlacement', 'kind', 'max', 'verticalPlacement', 'visible']})
@Component({ selector: 'cho-badge', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['content', 'horizontalPlacement', 'kind', 'max', 'verticalPlacement', 'visible'] })
export class ChoBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoBreadcrumbs extends Components.ChoBreadcrumbs {}
@ProxyCmp({inputs: ['separator']})
@Component({ selector: 'cho-breadcrumbs', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['separator'] })
export class ChoBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoButton extends Components.ChoButton {}
@ProxyCmp({inputs: ['disabled', 'kind']})
@Component({ selector: 'cho-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'kind'] })
export class ChoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoCheckbox extends Components.ChoCheckbox {}
@ProxyCmp({inputs: ['checked', 'disabled', 'error', 'indeterminate', 'labelPlacement']})
@Component({ selector: 'cho-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'error', 'indeterminate', 'labelPlacement'] })
export class ChoCheckbox {
  checkedChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChanged']);
  }
}

export declare interface ChoChip extends Components.ChoChip {}
@ProxyCmp({inputs: ['clickable', 'deleteIcon', 'disabled', 'kind']})
@Component({ selector: 'cho-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clickable', 'deleteIcon', 'disabled', 'kind'] })
export class ChoChip {
  delete!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['delete']);
  }
}

export declare interface ChoDatePicker extends Components.ChoDatePicker {}
@ProxyCmp({inputs: ['disabled', 'maxDate', 'minDate', 'shouldDisableDate', 'value']})
@Component({ selector: 'cho-date-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'maxDate', 'minDate', 'shouldDisableDate', 'value'] })
export class ChoDatePicker {
  valueChanged!: EventEmitter<CustomEvent>;
  yearChanged!: EventEmitter<CustomEvent>;
  monthChanged!: EventEmitter<CustomEvent>;
  dayChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged', 'yearChanged', 'monthChanged', 'dayChanged']);
  }
}

export declare interface ChoDivider extends Components.ChoDivider {}

@Component({ selector: 'cho-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class ChoDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoLink extends Components.ChoLink {}
@ProxyCmp({inputs: ['disabled', 'href', 'relation', 'target']})
@Component({ selector: 'cho-link', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'href', 'relation', 'target'] })
export class ChoLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoMenu extends Components.ChoMenu {}

@Component({ selector: 'cho-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class ChoMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoMenuItem extends Components.ChoMenuItem {}
@ProxyCmp({inputs: ['disabled', 'selected', 'value']})
@Component({ selector: 'cho-menu-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'selected', 'value'] })
export class ChoMenuItem {
  menuItemConnected!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['menuItemConnected']);
  }
}

export declare interface ChoMenuItemGroup extends Components.ChoMenuItemGroup {}

@Component({ selector: 'cho-menu-item-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class ChoMenuItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface ChoRadio extends Components.ChoRadio {}
@ProxyCmp({inputs: ['checked', 'disabled', 'error', 'labelPlacement']})
@Component({ selector: 'cho-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'error', 'labelPlacement'] })
export class ChoRadio {
  checkedChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChanged']);
  }
}

export declare interface ChoSelect extends Components.ChoSelect {}
@ProxyCmp({inputs: ['disabled', 'error', 'label', 'value'], 'methods': ['reset']})
@Component({ selector: 'cho-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'error', 'label', 'value'] })
export class ChoSelect {
  valueChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}

export declare interface ChoSlider extends Components.ChoSlider {}
@ProxyCmp({inputs: ['disabled', 'label', 'max', 'min', 'step', 'tickmarks', 'track', 'value']})
@Component({ selector: 'cho-slider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'label', 'max', 'min', 'step', 'tickmarks', 'track', 'value'] })
export class ChoSlider {
  valueChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}

export declare interface ChoSwitch extends Components.ChoSwitch {}
@ProxyCmp({inputs: ['checked', 'disabled', 'labelPlacement']})
@Component({ selector: 'cho-switch', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'labelPlacement'] })
export class ChoSwitch {
  checkedChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChanged']);
  }
}

export declare interface ChoTextField extends Components.ChoTextField {}
@ProxyCmp({inputs: ['disabled', 'error', 'helperText', 'label', 'max', 'min', 'multiline', 'name', 'placeholder', 'readOnly', 'rows', 'step', 'type', 'value']})
@Component({ selector: 'cho-text-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'error', 'helperText', 'label', 'max', 'min', 'multiline', 'name', 'placeholder', 'readOnly', 'rows', 'step', 'type', 'value'] })
export class ChoTextField {
  valueChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}

export declare interface ChoTimePicker extends Components.ChoTimePicker {}
@ProxyCmp({inputs: ['disabled', 'twelveHourFormat', 'value']})
@Component({ selector: 'cho-time-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'twelveHourFormat', 'value'] })
export class ChoTimePicker {
  valueChanged!: EventEmitter<CustomEvent>;
  hoursChanged!: EventEmitter<CustomEvent>;
  minutesChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged', 'hoursChanged', 'minutesChanged']);
  }
}

export declare interface ChoTooltip extends Components.ChoTooltip {}
@ProxyCmp({inputs: ['placement', 'titleContent', 'visible']})
@Component({ selector: 'cho-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['placement', 'titleContent', 'visible'] })
export class ChoTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
