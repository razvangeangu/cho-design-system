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

export declare interface ChoDivider extends Components.ChoDivider {}

@Component({ selector: 'cho-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class ChoDivider {
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
@ProxyCmp({inputs: ['disabled', 'value']})
@Component({ selector: 'cho-menu-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'value'] })
export class ChoMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
