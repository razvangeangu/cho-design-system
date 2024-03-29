import { NgModule } from '@angular/core';
import { applyPolyfills, defineCustomElements } from '@cho/components/dist/loader';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import {
  ChoAppBar,
  ChoBackdrop,
  ChoBadge,
  ChoBreadcrumbs,
  ChoButton,
  ChoCheckbox,
  ChoChip,
  ChoDatePicker,
  ChoDialog,
  ChoDivider,
  ChoDrawer,
  ChoExpansionPanel,
  ChoExpansionPanelItem,
  ChoIcon,
  ChoLink,
  ChoMenu,
  ChoMenuItem,
  ChoMenuItemGroup,
  ChoNotification,
  ChoProgress,
  ChoRadio,
  ChoSelect,
  ChoSlider,
  ChoSwitch,
  ChoTabItem,
  ChoTabItemContent,
  ChoTabs,
  ChoTextField,
  ChoTimePicker,
  ChoTooltip,
} from './directives/proxies';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';
import { ValueAccessor } from './directives/value-accessor';

applyPolyfills().then(() => defineCustomElements());

const DECLARATIONS = [
  // proxies
  ChoAppBar,
  ChoBackdrop,
  ChoBadge,
  ChoBreadcrumbs,
  ChoButton,
  ChoCheckbox,
  ChoChip,
  ChoDatePicker,
  ChoDialog,
  ChoDivider,
  ChoDrawer,
  ChoExpansionPanel,
  ChoExpansionPanelItem,
  ChoIcon,
  ChoLink,
  ChoMenu,
  ChoMenuItem,
  ChoMenuItemGroup,
  ChoNotification,
  ChoProgress,
  ChoRadio,
  ChoSelect,
  ChoSlider,
  ChoSwitch,
  ChoTabItem,
  ChoTabItemContent,
  ChoTabs,
  ChoTextField,
  ChoTimePicker,
  ChoTooltip,

  // Value Accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
  ValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ChoComponentsModule {}
