import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

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
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    { type: 'experimental-dist-module', dir: 'dist/module' },
    { type: 'docs-readme' },
    { type: 'docs-json', file: 'docs/cho-components.json' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'scripts', warn: true, dest: 'build/scripts' }],
    },
  ],
};
