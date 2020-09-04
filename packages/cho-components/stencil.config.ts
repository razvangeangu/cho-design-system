import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['cho-checkbox', 'cho-switch'],
    event: 'checkedChanged',
    targetAttr: 'checked',
  },
  {
    elements: ['cho-radio'],
    event: 'checkedChanged',
    targetAttr: 'checked',
  },
  {
    elements: ['cho-text-field', 'cho-date-picker', 'cho-time-picker'],
    event: 'valueChanged',
    targetAttr: 'value',
  },
  {
    elements: ['cho-slider'],
    event: 'valueChanged',
    targetAttr: 'value',
  },
  {
    elements: ['cho-select'],
    event: 'valueChanged',
    targetAttr: 'value',
  },
];

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cho-checkbox', 'cho-switch'],
    event: 'checkedChanged',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['cho-radio'],
    event: 'checkedChanged',
    targetAttr: 'checked',
    type: 'radio',
  },
  {
    elementSelectors: ['cho-text-field', 'cho-date-picker', 'cho-time-picker'],
    event: 'valueChanged',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['cho-slider'],
    event: 'valueChanged',
    targetAttr: 'value',
    type: 'number',
  },
  {
    elementSelectors: ['cho-select'],
    event: 'valueChanged',
    targetAttr: 'value',
    type: 'select',
  },
];

export const config: Config = {
  namespace: 'cho',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/style.scss'],
    }),
  ],
  globalStyle: 'src/global/style.scss',
  globalScript: 'src/main.ts',
  devServer: {
    reloadStrategy: 'pageReload',
    openBrowser: false,
  },
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@cho/components',
      directivesProxyFile: '../cho-components-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@cho/components',
      proxiesFile: '../cho-components-react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@cho/components',
      proxiesFile: '../cho-components-vue/src/proxies.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
      loaderDir: 'dist/loader',
      componentModels: vueComponentModels,
    }),
    {
      type: 'dist',
    },
    { type: 'docs-readme' },
    { type: 'docs-json', file: 'docs/cho-components.json' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'scripts', warn: true, dest: 'build/scripts' }],
    },
  ],
};
