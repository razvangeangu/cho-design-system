/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a stencil web-component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type is it?',
      choices: ['data-display', 'feedback', 'inputs', 'navigation', 'surfaces'],
    },
  ],
  actions: data => {
    // Generate component.tsx, component.spec.tsx and component.scss
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{type}}/{{name}}/{{name}}.tsx',
        templateFile: './component/templates/simple/component.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{type}}/{{name}}/{{name}}.scss',
        templateFile: './component/templates/simple/component.scss.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{type}}/{{name}}/tests/{{name}}.spec.tsx',
        templateFile: './component/templates/simple/tests/component.spec.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{type}}/{{name}}/model/constants.ts',
        templateFile: './component/templates/simple/model/constants.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{type}}/{{name}}/model/index.ts',
        templateFile: './component/templates/simple/model/index.ts.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/components/',
    });

    return actions;
  },
};
