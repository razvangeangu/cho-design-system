import { NgModule } from '@angular/core';
import { defineCustomElements } from '@cho/components/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { ChoButton } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  ChoButton,

  // Value Accessors
  BooleanValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
