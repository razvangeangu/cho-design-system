import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
export declare const proxyInputs: (Cmp: any, inputs: string[]) => void;
export declare const proxyMethods: (Cmp: any, methods: string[]) => void;
export declare const proxyOutputs: (instance: any, el: any, events: string[]) => void;
export declare function ProxyCmp(opts: {
    inputs?: any;
    methods?: any;
}): (cls: any) => any;
import { Components } from 'cho-components';
export declare interface ChoButton extends Components.ChoButton {
}
export declare class ChoButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
