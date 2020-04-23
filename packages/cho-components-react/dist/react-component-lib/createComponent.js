var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { attachEventProps, createForwardRef, dashToPascalCase, isCoveredByReact, } from './utils/index';
export const createReactComponent = (tagName) => {
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        constructor(props) {
            super(props);
            this.ref = React.createRef();
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            const node = this.ref.current;
            attachEventProps(node, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            const propsToPass = Object.keys(cProps).reduce((acc, name) => {
                const isEventProp = name.indexOf('on') === 0 && name[2] === name[2].toUpperCase();
                const isDataProp = name.indexOf('data-') === 0;
                const isAriaProp = name.indexOf('aria-') === 0;
                if (isEventProp) {
                    const eventName = name.substring(2).toLowerCase();
                    if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
                        acc[name] = cProps[name];
                    }
                }
                else if (isDataProp || isAriaProp) {
                    acc[name] = cProps[name];
                }
                return acc;
            }, {});
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: this.ref, style,
                className });
            return React.createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    return createForwardRef(ReactComponent, displayName);
};
//# sourceMappingURL=createComponent.js.map