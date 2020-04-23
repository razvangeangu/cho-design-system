import React from 'react';
export const dashToPascalCase = (str) => str
    .toLowerCase()
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
export const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};
export * from './attachEventProps';
//# sourceMappingURL=index.js.map