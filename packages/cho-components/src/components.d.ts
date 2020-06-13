/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TBadgeKind } from "./components/data-display/badge/model";
import { TInputType, TPlacement, TPlacementHorizontal, TPlacementVertical } from "./types";
import { TButtonKind } from "./components/inputs/button/model";
import { ICheckboxValueChangedDetail } from "./components/inputs/checkbox/model";
import { IChipDeleteEventDetail, TChipKind } from "./components/data-display/chip/model";
import { IDatePickerDayChangedDetail, IDatePickerMonthChangedDetail, IDatePickerValueChangedDetail, IDatePickerYearChangedDetail } from "./components/inputs/date-picker/model";
import { TLinkRelation, TLinkTarget } from "./components/navigation/link/model";
import { IMenuItemConnectedDetail, TMenuItemHostContainer } from "./components/navigation/menu-item/model";
import { IRadioValueChangedDetail } from "./components/inputs/radio/model";
import { ISelectValueChangedDetail } from "./components/inputs/select/model";
import { ISliderTickmark, ISliderValueChangedDetail } from "./components/inputs/slider/model";
import { ISwitchValueChangedDetail } from "./components/inputs/switch/model";
import { ITextFieldValueChangedDetail } from "./components/inputs/text-field/model";
import { ITimePickerHoursChangedDetail, ITimePickerMinutesChangedDetail, ITimePickerValueChangedDetail } from "./components/inputs/time-picker/model";
import { TOverlayPlacement } from "./types/t-overlay-placement";
export namespace Components {
    interface ChoBadge {
        /**
          * The content of the badge.
          * @default undefined
         */
        "content"?: number;
        /**
          * The horizontal position of the badge.
          * @default 'end'
         */
        "horizontalPlacement"?: TPlacementHorizontal;
        /**
          * The kind to use.
          * @default 'simple'
         */
        "kind"?: TBadgeKind;
        /**
          * The maximum value of the content.
          * @default 99
         */
        "max"?: number;
        /**
          * The vertical position of the badge.
          * @default 'top'
         */
        "verticalPlacement"?: TPlacementVertical;
        /**
          * If `true`, the badge will be visible.
          * @default true
         */
        "visible"?: boolean;
    }
    interface ChoBreadcrumbs {
        /**
          * Custom separator string.
          * @default '/'
         */
        "separator"?: string;
    }
    interface ChoButton {
        /**
          * If `true`, the button will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The kind to use.
          * @default 'contained'
         */
        "kind"?: TButtonKind;
    }
    interface ChoCheckbox {
        /**
          * If `true`, the component is checked.
          * @default false
         */
        "checked"?: boolean;
        /**
          * If `true`, the checkbox will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the component will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * If `true`, the component appears indeterminate.
          * @default false
         */
        "indeterminate"?: boolean;
        /**
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
    }
    interface ChoChip {
        /**
          * If `true`, the component will display clicking style.
          * @default false
         */
        "clickable"?: boolean;
        /**
          * If `true`, the component will show the delete icon in the trailing space.
          * @default false
         */
        "deleteIcon"?: boolean;
        /**
          * If `true`, the button will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The kind to use.
          * @default 'contained'
         */
        "kind"?: TChipKind;
    }
    interface ChoDatePicker {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Max selectable date
          * @default new Date('2097-01-14')
         */
        "maxDate"?: Date;
        /**
          * Min selectable date
          * @default new Date('1897-01-14')
         */
        "minDate"?: Date;
        /**
          * Callback used to disable specific dates.
          * @default () => false
         */
        "shouldDisableDate"?: (timestamp?: number) => boolean;
        /**
          * The value of the date-picker.
          * @default new Date()
         */
        "value"?: Date;
    }
    interface ChoDivider {
    }
    interface ChoLink {
        /**
          * If `true`, the button will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Specifies the link's destination.
          * @default undefined
         */
        "href"?: string;
        /**
          * Specifies the relationship between the current document and the linked document. Only used if the href attribute is present.
         */
        "relation"?: TLinkRelation;
        /**
          * Specifies where to open the linked document.
         */
        "target"?: TLinkTarget;
    }
    interface ChoMenu {
    }
    interface ChoMenuItem {
        /**
          * If `true`, the menu-item will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the menu-item will be selected.
          * @default false
         */
        "selected"?: boolean;
        /**
          * Helper used to keep track internally of the menu items in containers.
          * @param hostContainer The container that controls the menu-item.
         */
        "setHostContainer": (hostContainer: TMenuItemHostContainer) => Promise<void>;
        /**
          * The value of the menu-item.
          * @default undefined
         */
        "value"?: any;
    }
    interface ChoMenuItemGroup {
    }
    interface ChoRadio {
        /**
          * If `true`, the component is checked.
          * @default false
         */
        "checked"?: boolean;
        /**
          * If `true`, the radio will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the component will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
    }
    interface ChoSelect {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the label will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * The label content.
          * @default undefined
         */
        "label"?: string;
        /**
          * Helper used to keep track internally of the menu items in select.
          * @param menuItem The menu item that has been disconnected and due to be removed.
         */
        "removeMenuItem": (menuItem: HTMLChoMenuItemElement) => Promise<void>;
        /**
          * Reset the select to its initial state.
         */
        "reset": () => Promise<void>;
        /**
          * The value of the select.
          * @default null
         */
        "value"?: any;
    }
    interface ChoSlider {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The label content.
          * @default undefined
         */
        "label"?: string;
        /**
          * The maximum allowed value of the slider. Should not be equal to min.
          * @default 100
         */
        "max"?: number;
        /**
          * The minimum allowed value of the slider. Should not be equal to max.
          * @default 0
         */
        "min"?: number;
        /**
          * The granularity with which the slider can step through values.
          * @default 1
         */
        "step"?: number;
        /**
          * Tickmarks indicate predetermined values to which the user can move the slider. If an `Array`, it should contain objects with value and an optional label keys.
         */
        "tickmarks"?: Array<ISliderTickmark>;
        /**
          * The track presentation: - `normal` the track will render a bar representing the slider value. - `inverted` the track will render a bar representing the remaining slider value. - `false` the track will render without a bar.
         */
        "track"?: 'normal' | 'inverted' | 'false';
        /**
          * The value of the slider.
          * @default 0
         */
        "value"?: number;
    }
    interface ChoSwitch {
        /**
          * If `true`, the component is checked.
          * @default false
         */
        "checked"?: boolean;
        /**
          * If `true`, the switch will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
    }
    interface ChoTextField {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the label will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * The helper text content.
          * @default undefined
         */
        "helperText"?: string;
        /**
          * The label content.
          * @default undefined
         */
        "label"?: string;
        /**
          * The maximum allowed value of the input. Should not be equal to min.
          * @default 100
         */
        "max"?: number;
        /**
          * The minimum allowed value of the input. Should not be equal to max.
          * @default 0
         */
        "min"?: number;
        /**
          * If `true`, a textarea element will be rendered instead of an input.
          * @default false
         */
        "multiline"?: boolean;
        /**
          * Name attribute of the input element.
          * @default undefined
         */
        "name"?: string;
        /**
          * The short hint displayed in the input before the user enters a value.
          * @default undefined
         */
        "placeholder"?: string;
        /**
          * It prevents the user from changing the value of the field (not from interacting with the field).
          * @default false
         */
        "readOnly"?: boolean;
        /**
          * Number of rows to display when `multiline` option is set to true.
          * @default 2
         */
        "rows"?: number;
        /**
          * The granularity with which the input can step through values.
          * @default 'any'
         */
        "step"?: number | string;
        /**
          * Specifies the type of <input> element to display.
          * @default 'text'
         */
        "type"?: TInputType;
        /**
          * The value of the input element, required for a controlled component.
          * @default undefined
         */
        "value"?: string;
    }
    interface ChoTimePicker {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the value will be formatted with AM/PM.
          * @default false
         */
        "twelveHourFormat": boolean;
        /**
          * The value of the time-picker.
          * @default new Date()
         */
        "value"?: Date;
    }
    interface ChoTooltip {
        /**
          * The horizontal position of the badge.
          * @default 'end'
         */
        "placement"?: TOverlayPlacement;
        /**
          * Tooltip title.
         */
        "titleContent"?: string;
        /**
          * If `true`, the tooltip will be visible.
          * @default false
         */
        "visible"?: boolean;
    }
}
declare global {
    interface HTMLChoBadgeElement extends Components.ChoBadge, HTMLStencilElement {
    }
    var HTMLChoBadgeElement: {
        prototype: HTMLChoBadgeElement;
        new (): HTMLChoBadgeElement;
    };
    interface HTMLChoBreadcrumbsElement extends Components.ChoBreadcrumbs, HTMLStencilElement {
    }
    var HTMLChoBreadcrumbsElement: {
        prototype: HTMLChoBreadcrumbsElement;
        new (): HTMLChoBreadcrumbsElement;
    };
    interface HTMLChoButtonElement extends Components.ChoButton, HTMLStencilElement {
    }
    var HTMLChoButtonElement: {
        prototype: HTMLChoButtonElement;
        new (): HTMLChoButtonElement;
    };
    interface HTMLChoCheckboxElement extends Components.ChoCheckbox, HTMLStencilElement {
    }
    var HTMLChoCheckboxElement: {
        prototype: HTMLChoCheckboxElement;
        new (): HTMLChoCheckboxElement;
    };
    interface HTMLChoChipElement extends Components.ChoChip, HTMLStencilElement {
    }
    var HTMLChoChipElement: {
        prototype: HTMLChoChipElement;
        new (): HTMLChoChipElement;
    };
    interface HTMLChoDatePickerElement extends Components.ChoDatePicker, HTMLStencilElement {
    }
    var HTMLChoDatePickerElement: {
        prototype: HTMLChoDatePickerElement;
        new (): HTMLChoDatePickerElement;
    };
    interface HTMLChoDividerElement extends Components.ChoDivider, HTMLStencilElement {
    }
    var HTMLChoDividerElement: {
        prototype: HTMLChoDividerElement;
        new (): HTMLChoDividerElement;
    };
    interface HTMLChoLinkElement extends Components.ChoLink, HTMLStencilElement {
    }
    var HTMLChoLinkElement: {
        prototype: HTMLChoLinkElement;
        new (): HTMLChoLinkElement;
    };
    interface HTMLChoMenuElement extends Components.ChoMenu, HTMLStencilElement {
    }
    var HTMLChoMenuElement: {
        prototype: HTMLChoMenuElement;
        new (): HTMLChoMenuElement;
    };
    interface HTMLChoMenuItemElement extends Components.ChoMenuItem, HTMLStencilElement {
    }
    var HTMLChoMenuItemElement: {
        prototype: HTMLChoMenuItemElement;
        new (): HTMLChoMenuItemElement;
    };
    interface HTMLChoMenuItemGroupElement extends Components.ChoMenuItemGroup, HTMLStencilElement {
    }
    var HTMLChoMenuItemGroupElement: {
        prototype: HTMLChoMenuItemGroupElement;
        new (): HTMLChoMenuItemGroupElement;
    };
    interface HTMLChoRadioElement extends Components.ChoRadio, HTMLStencilElement {
    }
    var HTMLChoRadioElement: {
        prototype: HTMLChoRadioElement;
        new (): HTMLChoRadioElement;
    };
    interface HTMLChoSelectElement extends Components.ChoSelect, HTMLStencilElement {
    }
    var HTMLChoSelectElement: {
        prototype: HTMLChoSelectElement;
        new (): HTMLChoSelectElement;
    };
    interface HTMLChoSliderElement extends Components.ChoSlider, HTMLStencilElement {
    }
    var HTMLChoSliderElement: {
        prototype: HTMLChoSliderElement;
        new (): HTMLChoSliderElement;
    };
    interface HTMLChoSwitchElement extends Components.ChoSwitch, HTMLStencilElement {
    }
    var HTMLChoSwitchElement: {
        prototype: HTMLChoSwitchElement;
        new (): HTMLChoSwitchElement;
    };
    interface HTMLChoTextFieldElement extends Components.ChoTextField, HTMLStencilElement {
    }
    var HTMLChoTextFieldElement: {
        prototype: HTMLChoTextFieldElement;
        new (): HTMLChoTextFieldElement;
    };
    interface HTMLChoTimePickerElement extends Components.ChoTimePicker, HTMLStencilElement {
    }
    var HTMLChoTimePickerElement: {
        prototype: HTMLChoTimePickerElement;
        new (): HTMLChoTimePickerElement;
    };
    interface HTMLChoTooltipElement extends Components.ChoTooltip, HTMLStencilElement {
    }
    var HTMLChoTooltipElement: {
        prototype: HTMLChoTooltipElement;
        new (): HTMLChoTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "cho-badge": HTMLChoBadgeElement;
        "cho-breadcrumbs": HTMLChoBreadcrumbsElement;
        "cho-button": HTMLChoButtonElement;
        "cho-checkbox": HTMLChoCheckboxElement;
        "cho-chip": HTMLChoChipElement;
        "cho-date-picker": HTMLChoDatePickerElement;
        "cho-divider": HTMLChoDividerElement;
        "cho-link": HTMLChoLinkElement;
        "cho-menu": HTMLChoMenuElement;
        "cho-menu-item": HTMLChoMenuItemElement;
        "cho-menu-item-group": HTMLChoMenuItemGroupElement;
        "cho-radio": HTMLChoRadioElement;
        "cho-select": HTMLChoSelectElement;
        "cho-slider": HTMLChoSliderElement;
        "cho-switch": HTMLChoSwitchElement;
        "cho-text-field": HTMLChoTextFieldElement;
        "cho-time-picker": HTMLChoTimePickerElement;
        "cho-tooltip": HTMLChoTooltipElement;
    }
}
declare namespace LocalJSX {
    interface ChoBadge {
        /**
          * The content of the badge.
          * @default undefined
         */
        "content"?: number;
        /**
          * The horizontal position of the badge.
          * @default 'end'
         */
        "horizontalPlacement"?: TPlacementHorizontal;
        /**
          * The kind to use.
          * @default 'simple'
         */
        "kind"?: TBadgeKind;
        /**
          * The maximum value of the content.
          * @default 99
         */
        "max"?: number;
        /**
          * The vertical position of the badge.
          * @default 'top'
         */
        "verticalPlacement"?: TPlacementVertical;
        /**
          * If `true`, the badge will be visible.
          * @default true
         */
        "visible"?: boolean;
    }
    interface ChoBreadcrumbs {
        /**
          * Custom separator string.
          * @default '/'
         */
        "separator"?: string;
    }
    interface ChoButton {
        /**
          * If `true`, the button will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The kind to use.
          * @default 'contained'
         */
        "kind"?: TButtonKind;
    }
    interface ChoCheckbox {
        /**
          * If `true`, the component is checked.
          * @default false
         */
        "checked"?: boolean;
        /**
          * If `true`, the checkbox will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the component will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * If `true`, the component appears indeterminate.
          * @default false
         */
        "indeterminate"?: boolean;
        /**
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
        /**
          * Callback fired when the state is changed.
         */
        "onCheckedChanged"?: (event: CustomEvent<ICheckboxValueChangedDetail>) => void;
    }
    interface ChoChip {
        /**
          * If `true`, the component will display clicking style.
          * @default false
         */
        "clickable"?: boolean;
        /**
          * If `true`, the component will show the delete icon in the trailing space.
          * @default false
         */
        "deleteIcon"?: boolean;
        /**
          * If `true`, the button will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The kind to use.
          * @default 'contained'
         */
        "kind"?: TChipKind;
        /**
          * Callback fired when the delete icon is clicked.
         */
        "onDelete"?: (event: CustomEvent<IChipDeleteEventDetail>) => void;
    }
    interface ChoDatePicker {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Max selectable date
          * @default new Date('2097-01-14')
         */
        "maxDate"?: Date;
        /**
          * Min selectable date
          * @default new Date('1897-01-14')
         */
        "minDate"?: Date;
        /**
          * Callback fired when the day is changed.
         */
        "onDayChanged"?: (event: CustomEvent<IDatePickerDayChangedDetail>) => void;
        /**
          * Callback fired when the month is changed.
         */
        "onMonthChanged"?: (event: CustomEvent<IDatePickerMonthChangedDetail>) => void;
        /**
          * Callback fired when the value is changed.
         */
        "onValueChanged"?: (event: CustomEvent<IDatePickerValueChangedDetail>) => void;
        /**
          * Callback fired when the year is changed.
         */
        "onYearChanged"?: (event: CustomEvent<IDatePickerYearChangedDetail>) => void;
        /**
          * Callback used to disable specific dates.
          * @default () => false
         */
        "shouldDisableDate"?: (timestamp?: number) => boolean;
        /**
          * The value of the date-picker.
          * @default new Date()
         */
        "value"?: Date;
    }
    interface ChoDivider {
    }
    interface ChoLink {
        /**
          * If `true`, the button will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Specifies the link's destination.
          * @default undefined
         */
        "href"?: string;
        /**
          * Specifies the relationship between the current document and the linked document. Only used if the href attribute is present.
         */
        "relation"?: TLinkRelation;
        /**
          * Specifies where to open the linked document.
         */
        "target"?: TLinkTarget;
    }
    interface ChoMenu {
    }
    interface ChoMenuItem {
        /**
          * If `true`, the menu-item will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Called every time the component is connected to the DOM.
         */
        "onMenuItemConnected"?: (event: CustomEvent<IMenuItemConnectedDetail>) => void;
        /**
          * If `true`, the menu-item will be selected.
          * @default false
         */
        "selected"?: boolean;
        /**
          * The value of the menu-item.
          * @default undefined
         */
        "value"?: any;
    }
    interface ChoMenuItemGroup {
    }
    interface ChoRadio {
        /**
          * If `true`, the component is checked.
          * @default false
         */
        "checked"?: boolean;
        /**
          * If `true`, the radio will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the component will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
        /**
          * Callback fired when the state is changed.
         */
        "onCheckedChanged"?: (event: CustomEvent<IRadioValueChangedDetail>) => void;
    }
    interface ChoSelect {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the label will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * The label content.
          * @default undefined
         */
        "label"?: string;
        /**
          * Callback fired when the value is changed.
         */
        "onValueChanged"?: (event: CustomEvent<ISelectValueChangedDetail>) => void;
        /**
          * The value of the select.
          * @default null
         */
        "value"?: any;
    }
    interface ChoSlider {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The label content.
          * @default undefined
         */
        "label"?: string;
        /**
          * The maximum allowed value of the slider. Should not be equal to min.
          * @default 100
         */
        "max"?: number;
        /**
          * The minimum allowed value of the slider. Should not be equal to max.
          * @default 0
         */
        "min"?: number;
        /**
          * Callback fired when the value is changed.
         */
        "onValueChanged"?: (event: CustomEvent<ISliderValueChangedDetail>) => void;
        /**
          * The granularity with which the slider can step through values.
          * @default 1
         */
        "step"?: number;
        /**
          * Tickmarks indicate predetermined values to which the user can move the slider. If an `Array`, it should contain objects with value and an optional label keys.
         */
        "tickmarks"?: Array<ISliderTickmark>;
        /**
          * The track presentation: - `normal` the track will render a bar representing the slider value. - `inverted` the track will render a bar representing the remaining slider value. - `false` the track will render without a bar.
         */
        "track"?: 'normal' | 'inverted' | 'false';
        /**
          * The value of the slider.
          * @default 0
         */
        "value"?: number;
    }
    interface ChoSwitch {
        /**
          * If `true`, the component is checked.
          * @default false
         */
        "checked"?: boolean;
        /**
          * If `true`, the switch will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
        /**
          * Callback fired when the state is changed.
         */
        "onCheckedChanged"?: (event: CustomEvent<ISwitchValueChangedDetail>) => void;
    }
    interface ChoTextField {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * If `true`, the label will be displayed in an error state.
          * @default false
         */
        "error"?: boolean;
        /**
          * The helper text content.
          * @default undefined
         */
        "helperText"?: string;
        /**
          * The label content.
          * @default undefined
         */
        "label"?: string;
        /**
          * The maximum allowed value of the input. Should not be equal to min.
          * @default 100
         */
        "max"?: number;
        /**
          * The minimum allowed value of the input. Should not be equal to max.
          * @default 0
         */
        "min"?: number;
        /**
          * If `true`, a textarea element will be rendered instead of an input.
          * @default false
         */
        "multiline"?: boolean;
        /**
          * Name attribute of the input element.
          * @default undefined
         */
        "name"?: string;
        /**
          * Callback fired when the value is changed.
         */
        "onValueChanged"?: (event: CustomEvent<ITextFieldValueChangedDetail>) => void;
        /**
          * The short hint displayed in the input before the user enters a value.
          * @default undefined
         */
        "placeholder"?: string;
        /**
          * It prevents the user from changing the value of the field (not from interacting with the field).
          * @default false
         */
        "readOnly"?: boolean;
        /**
          * Number of rows to display when `multiline` option is set to true.
          * @default 2
         */
        "rows"?: number;
        /**
          * The granularity with which the input can step through values.
          * @default 'any'
         */
        "step"?: number | string;
        /**
          * Specifies the type of <input> element to display.
          * @default 'text'
         */
        "type"?: TInputType;
        /**
          * The value of the input element, required for a controlled component.
          * @default undefined
         */
        "value"?: string;
    }
    interface ChoTimePicker {
        /**
          * If `true`, the text-field will be disabled.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Callback fired when the hours value is changed.
         */
        "onHoursChanged"?: (event: CustomEvent<ITimePickerHoursChangedDetail>) => void;
        /**
          * Callback fired when the minutes value is changed.
         */
        "onMinutesChanged"?: (event: CustomEvent<ITimePickerMinutesChangedDetail>) => void;
        /**
          * Callback fired when the value is changed.
         */
        "onValueChanged"?: (event: CustomEvent<ITimePickerValueChangedDetail>) => void;
        /**
          * If `true`, the value will be formatted with AM/PM.
          * @default false
         */
        "twelveHourFormat"?: boolean;
        /**
          * The value of the time-picker.
          * @default new Date()
         */
        "value"?: Date;
    }
    interface ChoTooltip {
        /**
          * The horizontal position of the badge.
          * @default 'end'
         */
        "placement"?: TOverlayPlacement;
        /**
          * Tooltip title.
         */
        "titleContent"?: string;
        /**
          * If `true`, the tooltip will be visible.
          * @default false
         */
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "cho-badge": ChoBadge;
        "cho-breadcrumbs": ChoBreadcrumbs;
        "cho-button": ChoButton;
        "cho-checkbox": ChoCheckbox;
        "cho-chip": ChoChip;
        "cho-date-picker": ChoDatePicker;
        "cho-divider": ChoDivider;
        "cho-link": ChoLink;
        "cho-menu": ChoMenu;
        "cho-menu-item": ChoMenuItem;
        "cho-menu-item-group": ChoMenuItemGroup;
        "cho-radio": ChoRadio;
        "cho-select": ChoSelect;
        "cho-slider": ChoSlider;
        "cho-switch": ChoSwitch;
        "cho-text-field": ChoTextField;
        "cho-time-picker": ChoTimePicker;
        "cho-tooltip": ChoTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cho-badge": LocalJSX.ChoBadge & JSXBase.HTMLAttributes<HTMLChoBadgeElement>;
            "cho-breadcrumbs": LocalJSX.ChoBreadcrumbs & JSXBase.HTMLAttributes<HTMLChoBreadcrumbsElement>;
            "cho-button": LocalJSX.ChoButton & JSXBase.HTMLAttributes<HTMLChoButtonElement>;
            "cho-checkbox": LocalJSX.ChoCheckbox & JSXBase.HTMLAttributes<HTMLChoCheckboxElement>;
            "cho-chip": LocalJSX.ChoChip & JSXBase.HTMLAttributes<HTMLChoChipElement>;
            "cho-date-picker": LocalJSX.ChoDatePicker & JSXBase.HTMLAttributes<HTMLChoDatePickerElement>;
            "cho-divider": LocalJSX.ChoDivider & JSXBase.HTMLAttributes<HTMLChoDividerElement>;
            "cho-link": LocalJSX.ChoLink & JSXBase.HTMLAttributes<HTMLChoLinkElement>;
            "cho-menu": LocalJSX.ChoMenu & JSXBase.HTMLAttributes<HTMLChoMenuElement>;
            "cho-menu-item": LocalJSX.ChoMenuItem & JSXBase.HTMLAttributes<HTMLChoMenuItemElement>;
            "cho-menu-item-group": LocalJSX.ChoMenuItemGroup & JSXBase.HTMLAttributes<HTMLChoMenuItemGroupElement>;
            "cho-radio": LocalJSX.ChoRadio & JSXBase.HTMLAttributes<HTMLChoRadioElement>;
            "cho-select": LocalJSX.ChoSelect & JSXBase.HTMLAttributes<HTMLChoSelectElement>;
            "cho-slider": LocalJSX.ChoSlider & JSXBase.HTMLAttributes<HTMLChoSliderElement>;
            "cho-switch": LocalJSX.ChoSwitch & JSXBase.HTMLAttributes<HTMLChoSwitchElement>;
            "cho-text-field": LocalJSX.ChoTextField & JSXBase.HTMLAttributes<HTMLChoTextFieldElement>;
            "cho-time-picker": LocalJSX.ChoTimePicker & JSXBase.HTMLAttributes<HTMLChoTimePickerElement>;
            "cho-tooltip": LocalJSX.ChoTooltip & JSXBase.HTMLAttributes<HTMLChoTooltipElement>;
        }
    }
}
