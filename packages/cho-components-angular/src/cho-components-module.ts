import { NgModule } from '@angular/core';
import { defineCustomElements } from '@cho/components/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { ChoButton, ChoCheckbox, ChoRadio, ChoSwitch, ChoTextField } from './directives/proxies';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  ChoButton,
  ChoCheckbox,
  ChoRadio,
  ChoSwitch,
  ChoTextField,

  // Value Accessors
  BooleanValueAccessor,
  RadioValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
