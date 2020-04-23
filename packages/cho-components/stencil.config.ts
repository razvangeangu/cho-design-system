import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'cho',
  plugins: [sass()],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'cho-components',
      directivesProxyFile: '../cho-components-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: 'cho-components',
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
    },
  ],
};
