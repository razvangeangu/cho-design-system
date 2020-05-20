import { NgModule } from '@angular/core';
import { defineCustomElements } from '@cho/components/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import {
  ChoButton,
  ChoCheckbox,
  ChoDivider,
  ChoMenu,
  ChoMenuItem,
  ChoMenuItemGroup,
  ChoRadio,
  ChoSlider,
  ChoSwitch,
  ChoTextField,
} from './directives/proxies';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  ChoButton,
  ChoCheckbox,
  ChoDivider,
  ChoMenu,
  ChoMenuItem,
  ChoMenuItemGroup,
  ChoRadio,
  ChoSlider,
  ChoSwitch,
  ChoTextField,

  // Value Accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ChoComponentsModule {}
