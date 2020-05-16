/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TButtonKind, } from "./components/inputs/button/model";
import { TPlacement, } from "./types";
import { ICheckboxValueChangedDetail, } from "./components/inputs/checkbox/model";
import { IRadioValueChangedDetail, } from "./components/inputs/radio/model";
import { ISwitchValueChangedDetail, } from "./components/inputs/switch/model";
export namespace Components {
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
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
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
}
declare global {
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
    interface HTMLChoRadioElement extends Components.ChoRadio, HTMLStencilElement {
    }
    var HTMLChoRadioElement: {
        prototype: HTMLChoRadioElement;
        new (): HTMLChoRadioElement;
    };
    interface HTMLChoSwitchElement extends Components.ChoSwitch, HTMLStencilElement {
    }
    var HTMLChoSwitchElement: {
        prototype: HTMLChoSwitchElement;
        new (): HTMLChoSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "cho-button": HTMLChoButtonElement;
        "cho-checkbox": HTMLChoCheckboxElement;
        "cho-radio": HTMLChoRadioElement;
        "cho-switch": HTMLChoSwitchElement;
    }
}
declare namespace LocalJSX {
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
          * The position of the label
          * @default 'end'
         */
        "labelPlacement"?: TPlacement;
        /**
          * Callback fired when the state is changed.
         */
        "onCheckedChanged"?: (event: CustomEvent<IRadioValueChangedDetail>) => void;
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
    interface IntrinsicElements {
        "cho-button": ChoButton;
        "cho-checkbox": ChoCheckbox;
        "cho-radio": ChoRadio;
        "cho-switch": ChoSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cho-button": LocalJSX.ChoButton & JSXBase.HTMLAttributes<HTMLChoButtonElement>;
            "cho-checkbox": LocalJSX.ChoCheckbox & JSXBase.HTMLAttributes<HTMLChoCheckboxElement>;
            "cho-radio": LocalJSX.ChoRadio & JSXBase.HTMLAttributes<HTMLChoRadioElement>;
            "cho-switch": LocalJSX.ChoSwitch & JSXBase.HTMLAttributes<HTMLChoSwitchElement>;
        }
    }
}
