/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@cho/components';

import { AppBar as IAppBar } from '@cho/components/dist/types/components/app-bar/app-bar';
export declare interface ChoAppBar extends Components.ChoAppBar {}
@ProxyCmp({
  inputs: ['hidesOnScroll', 'position']
})
@Component({
  selector: 'cho-app-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hidesOnScroll', 'position'],
  outputs: ['hamburgerClicked']
})
export class ChoAppBar {
  /** Callback fired when clicking the hamburger button. */
  hamburgerClicked!: IAppBar['hamburgerClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['hamburgerClicked']);
  }
}


export declare interface ChoBackdrop extends Components.ChoBackdrop {}
@ProxyCmp({
  inputs: ['visible']
})
@Component({
  selector: 'cho-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['visible']
})
export class ChoBackdrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoBadge extends Components.ChoBadge {}
@ProxyCmp({
  inputs: ['content', 'horizontalPlacement', 'kind', 'max', 'verticalPlacement', 'visible']
})
@Component({
  selector: 'cho-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['content', 'horizontalPlacement', 'kind', 'max', 'verticalPlacement', 'visible']
})
export class ChoBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoBreadcrumbs extends Components.ChoBreadcrumbs {}
@ProxyCmp({
  inputs: ['separator']
})
@Component({
  selector: 'cho-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['separator']
})
export class ChoBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoButton extends Components.ChoButton {}
@ProxyCmp({
  inputs: ['disabled', 'kind']
})
@Component({
  selector: 'cho-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'kind']
})
export class ChoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Checkbox as ICheckbox } from '@cho/components/dist/types/components/checkbox/checkbox';
export declare interface ChoCheckbox extends Components.ChoCheckbox {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'labelPlacement']
})
@Component({
  selector: 'cho-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'labelPlacement'],
  outputs: ['checkedChanged']
})
export class ChoCheckbox {
  /** Callback fired when the state is changed. */
  checkedChanged!: ICheckbox['checkedChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChanged']);
  }
}

import { Chip as IChip } from '@cho/components/dist/types/components/chip/chip';
export declare interface ChoChip extends Components.ChoChip {}
@ProxyCmp({
  inputs: ['clickable', 'deleteIcon', 'disabled', 'kind']
})
@Component({
  selector: 'cho-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'deleteIcon', 'disabled', 'kind'],
  outputs: ['delete']
})
export class ChoChip {
  /** Callback fired when the delete icon is clicked. */
  delete!: IChip['delete'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['delete']);
  }
}

import { DatePicker as IDatePicker } from '@cho/components/dist/types/components/date-picker/date-picker';
export declare interface ChoDatePicker extends Components.ChoDatePicker {}
@ProxyCmp({
  inputs: ['disabled', 'maxDate', 'minDate', 'shouldDisableDate', 'value', 'visible'],
  methods: ['open', 'close']
})
@Component({
  selector: 'cho-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'maxDate', 'minDate', 'shouldDisableDate', 'value', 'visible'],
  outputs: ['valueChanged', 'yearChanged', 'monthChanged', 'dayChanged']
})
export class ChoDatePicker {
  /** Callback fired when the value is changed. */
  valueChanged!: IDatePicker['valueChanged'];
  /** Callback fired when the year is changed. */
  yearChanged!: IDatePicker['yearChanged'];
  /** Callback fired when the month is changed. */
  monthChanged!: IDatePicker['monthChanged'];
  /** Callback fired when the day is changed. */
  dayChanged!: IDatePicker['dayChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged', 'yearChanged', 'monthChanged', 'dayChanged']);
  }
}


export declare interface ChoDialog extends Components.ChoDialog {}
@ProxyCmp({
  inputs: ['dismissible', 'visible'],
  methods: ['open', 'close']
})
@Component({
  selector: 'cho-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dismissible', 'visible']
})
export class ChoDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoDivider extends Components.ChoDivider {}

@Component({
  selector: 'cho-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ChoDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoDrawer extends Components.ChoDrawer {}
@ProxyCmp({
  inputs: ['visible']
})
@Component({
  selector: 'cho-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['visible']
})
export class ChoDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoExpansionPanel extends Components.ChoExpansionPanel {}
@ProxyCmp({
  inputs: ['accordion']
})
@Component({
  selector: 'cho-expansion-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accordion']
})
export class ChoExpansionPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { ExpansionPanelItem as IExpansionPanelItem } from '@cho/components/dist/types/components/expansion-panel-item/expansion-panel-item';
export declare interface ChoExpansionPanelItem extends Components.ChoExpansionPanelItem {}
@ProxyCmp({
  inputs: ['disabled', 'visible']
})
@Component({
  selector: 'cho-expansion-panel-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'visible'],
  outputs: ['visibleChanged']
})
export class ChoExpansionPanelItem {
  /** Callback fired when the visible is changed. */
  visibleChanged!: IExpansionPanelItem['visibleChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['visibleChanged']);
  }
}


export declare interface ChoIcon extends Components.ChoIcon {}
@ProxyCmp({
  inputs: ['color', 'kind']
})
@Component({
  selector: 'cho-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'kind']
})
export class ChoIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoLink extends Components.ChoLink {}
@ProxyCmp({
  inputs: ['disabled', 'href', 'relation', 'target']
})
@Component({
  selector: 'cho-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'href', 'relation', 'target']
})
export class ChoLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoMenu extends Components.ChoMenu {}

@Component({
  selector: 'cho-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ChoMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoMenuItem extends Components.ChoMenuItem {}
@ProxyCmp({
  inputs: ['disabled', 'selected', 'value']
})
@Component({
  selector: 'cho-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'selected', 'value']
})
export class ChoMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoMenuItemGroup extends Components.ChoMenuItemGroup {}

@Component({
  selector: 'cho-menu-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ChoMenuItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoNotification extends Components.ChoNotification {}
@ProxyCmp({
  inputs: ['kind', 'placement', 'visible']
})
@Component({
  selector: 'cho-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['kind', 'placement', 'visible']
})
export class ChoNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ChoProgress extends Components.ChoProgress {}
@ProxyCmp({
  inputs: ['indeterminate', 'kind', 'label', 'value']
})
@Component({
  selector: 'cho-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['indeterminate', 'kind', 'label', 'value']
})
export class ChoProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Radio as IRadio } from '@cho/components/dist/types/components/radio/radio';
export declare interface ChoRadio extends Components.ChoRadio {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'labelPlacement']
})
@Component({
  selector: 'cho-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'error', 'labelPlacement'],
  outputs: ['checkedChanged']
})
export class ChoRadio {
  /** Callback fired when the state is changed. */
  checkedChanged!: IRadio['checkedChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChanged']);
  }
}

import { Select as ISelect } from '@cho/components/dist/types/components/select/select';
export declare interface ChoSelect extends Components.ChoSelect {}
@ProxyCmp({
  inputs: ['disabled', 'error', 'label', 'value', 'visible'],
  methods: ['open', 'close', 'reset']
})
@Component({
  selector: 'cho-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'label', 'value', 'visible'],
  outputs: ['valueChanged']
})
export class ChoSelect {
  /** Callback fired when the value is changed. */
  valueChanged!: ISelect['valueChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}

import { Slider as ISlider } from '@cho/components/dist/types/components/slider/slider';
export declare interface ChoSlider extends Components.ChoSlider {}
@ProxyCmp({
  inputs: ['disabled', 'label', 'max', 'min', 'step', 'tickmarks', 'track', 'value']
})
@Component({
  selector: 'cho-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'max', 'min', 'step', 'tickmarks', 'track', 'value'],
  outputs: ['valueChanged']
})
export class ChoSlider {
  /** Callback fired when the value is changed. */
  valueChanged!: ISlider['valueChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}

import { Switch as ISwitch } from '@cho/components/dist/types/components/switch/switch';
export declare interface ChoSwitch extends Components.ChoSwitch {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'labelPlacement']
})
@Component({
  selector: 'cho-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'labelPlacement'],
  outputs: ['checkedChanged']
})
export class ChoSwitch {
  /** Callback fired when the state is changed. */
  checkedChanged!: ISwitch['checkedChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChanged']);
  }
}

import { TabItem as ITabItem } from '@cho/components/dist/types/components/tab-item/tab-item';
export declare interface ChoTabItem extends Components.ChoTabItem {}
@ProxyCmp({
  inputs: ['disabled', 'index', 'label', 'selected']
})
@Component({
  selector: 'cho-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'index', 'label', 'selected'],
  outputs: ['tabItemSelected']
})
export class ChoTabItem {
  /** Callback fired when the tab item is selected. */
  tabItemSelected!: ITabItem['tabItemSelected'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabItemSelected']);
  }
}


export declare interface ChoTabItemContent extends Components.ChoTabItemContent {}
@ProxyCmp({
  inputs: ['index', 'visible']
})
@Component({
  selector: 'cho-tab-item-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['index', 'visible']
})
export class ChoTabItemContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Tabs as ITabs } from '@cho/components/dist/types/components/tabs/tabs';
export declare interface ChoTabs extends Components.ChoTabs {}
@ProxyCmp({
  inputs: ['currentIndex']
})
@Component({
  selector: 'cho-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currentIndex'],
  outputs: ['currentIndexChanged']
})
export class ChoTabs {
  /** Callback fired when current index value is changed. */
  currentIndexChanged!: ITabs['currentIndexChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['currentIndexChanged']);
  }
}

import { TextField as ITextField } from '@cho/components/dist/types/components/text-field/text-field';
export declare interface ChoTextField extends Components.ChoTextField {}
@ProxyCmp({
  inputs: ['disabled', 'error', 'helperText', 'label', 'max', 'min', 'multiline', 'name', 'placeholder', 'readOnly', 'rows', 'step', 'textAlign', 'type', 'value']
})
@Component({
  selector: 'cho-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'helperText', 'label', 'max', 'min', 'multiline', 'name', 'placeholder', 'readOnly', 'rows', 'step', 'textAlign', 'type', 'value'],
  outputs: ['valueChanged']
})
export class ChoTextField {
  /** Callback fired when the value is changed. */
  valueChanged!: ITextField['valueChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}

import { TimePicker as ITimePicker } from '@cho/components/dist/types/components/time-picker/time-picker';
export declare interface ChoTimePicker extends Components.ChoTimePicker {}
@ProxyCmp({
  inputs: ['disabled', 'twelveHourFormat', 'value', 'visible'],
  methods: ['open', 'close']
})
@Component({
  selector: 'cho-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'twelveHourFormat', 'value', 'visible'],
  outputs: ['valueChanged', 'hoursChanged', 'minutesChanged']
})
export class ChoTimePicker {
  /** Callback fired when the value is changed. */
  valueChanged!: ITimePicker['valueChanged'];
  /** Callback fired when the hours value is changed. */
  hoursChanged!: ITimePicker['hoursChanged'];
  /** Callback fired when the minutes value is changed. */
  minutesChanged!: ITimePicker['minutesChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged', 'hoursChanged', 'minutesChanged']);
  }
}


export declare interface ChoTooltip extends Components.ChoTooltip {}
@ProxyCmp({
  inputs: ['placement', 'titleContent', 'visible', 'visibleOnHover'],
  methods: ['open', 'close']
})
@Component({
  selector: 'cho-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['placement', 'titleContent', 'visible', 'visibleOnHover']
})
export class ChoTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
