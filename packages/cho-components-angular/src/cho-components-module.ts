import { NgModule } from '@angular/core';
import { defineCustomElements } from '@cho/components/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { ChoButton } from './directives/proxies';
import { RadioValueAccessor } from './directives/radio-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  ChoButton,

  // Value Accessors
  BooleanValueAccessor,
  RadioValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
