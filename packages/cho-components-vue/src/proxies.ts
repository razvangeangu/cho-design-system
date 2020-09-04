/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import { JSX } from '@cho/components';

import { applyPolyfills, defineCustomElements } from '@cho/components/dist/loader';

applyPolyfills().then(() => defineCustomElements());

export const ChoAppBar = /*@__PURE__*/ defineContainer<JSX.ChoAppBar>('cho-app-bar', [
  'position',
  'hidesOnScroll',
  'hamburgerClicked'
]);


export const ChoBackdrop = /*@__PURE__*/ defineContainer<JSX.ChoBackdrop>('cho-backdrop', [
  'visible'
]);


export const ChoBadge = /*@__PURE__*/ defineContainer<JSX.ChoBadge>('cho-badge', [
  'kind',
  'horizontalPlacement',
  'verticalPlacement',
  'content',
  'max',
  'visible'
]);


export const ChoBreadcrumbs = /*@__PURE__*/ defineContainer<JSX.ChoBreadcrumbs>('cho-breadcrumbs', [
  'separator'
]);


export const ChoButton = /*@__PURE__*/ defineContainer<JSX.ChoButton>('cho-button', [
  'kind',
  'disabled'
]);


export const ChoCheckbox = /*@__PURE__*/ defineContainer<JSX.ChoCheckbox>('cho-checkbox', [
  'checked',
  'indeterminate',
  'disabled',
  'labelPlacement',
  'error',
  'checkedChanged'
],
{
  "modelProp": "checked",
  "modelUpdateEvent": "checkedChanged"
});


export const ChoChip = /*@__PURE__*/ defineContainer<JSX.ChoChip>('cho-chip', [
  'kind',
  'clickable',
  'deleteIcon',
  'disabled',
  'delete'
]);


export const ChoDatePicker = /*@__PURE__*/ defineContainer<JSX.ChoDatePicker>('cho-date-picker', [
  'value',
  'minDate',
  'maxDate',
  'shouldDisableDate',
  'disabled',
  'visible',
  'valueChanged',
  'yearChanged',
  'monthChanged',
  'dayChanged'
],
{
  "modelProp": "value",
  "modelUpdateEvent": "valueChanged"
});


export const ChoDialog = /*@__PURE__*/ defineContainer<JSX.ChoDialog>('cho-dialog', [
  'visible',
  'dismissible'
]);


export const ChoDivider = /*@__PURE__*/ defineContainer<JSX.ChoDivider>('cho-divider');


export const ChoDrawer = /*@__PURE__*/ defineContainer<JSX.ChoDrawer>('cho-drawer', [
  'visible'
]);


export const ChoExpansionPanel = /*@__PURE__*/ defineContainer<JSX.ChoExpansionPanel>('cho-expansion-panel', [
  'accordion'
]);


export const ChoExpansionPanelItem = /*@__PURE__*/ defineContainer<JSX.ChoExpansionPanelItem>('cho-expansion-panel-item', [
  'visible',
  'disabled',
  'visibleChanged',
  'expansionPanelItemConnected'
]);


export const ChoIcon = /*@__PURE__*/ defineContainer<JSX.ChoIcon>('cho-icon', [
  'kind',
  'color'
]);


export const ChoLink = /*@__PURE__*/ defineContainer<JSX.ChoLink>('cho-link', [
  'href',
  'disabled',
  'target',
  'relation'
]);


export const ChoMenu = /*@__PURE__*/ defineContainer<JSX.ChoMenu>('cho-menu');


export const ChoMenuItem = /*@__PURE__*/ defineContainer<JSX.ChoMenuItem>('cho-menu-item', [
  'value',
  'selected',
  'disabled',
  'menuItemConnected'
]);


export const ChoMenuItemGroup = /*@__PURE__*/ defineContainer<JSX.ChoMenuItemGroup>('cho-menu-item-group');


export const ChoNotification = /*@__PURE__*/ defineContainer<JSX.ChoNotification>('cho-notification', [
  'kind',
  'placement',
  'visible'
]);


export const ChoProgress = /*@__PURE__*/ defineContainer<JSX.ChoProgress>('cho-progress', [
  'kind',
  'indeterminate',
  'value',
  'label'
]);


export const ChoRadio = /*@__PURE__*/ defineContainer<JSX.ChoRadio>('cho-radio', [
  'checked',
  'disabled',
  'labelPlacement',
  'error',
  'checkedChanged'
],
{
  "modelProp": "checked",
  "modelUpdateEvent": "checkedChanged"
});


export const ChoSelect = /*@__PURE__*/ defineContainer<JSX.ChoSelect>('cho-select', [
  'label',
  'disabled',
  'error',
  'value',
  'visible',
  'valueChanged'
],
{
  "modelProp": "value",
  "modelUpdateEvent": "valueChanged"
});


export const ChoSlider = /*@__PURE__*/ defineContainer<JSX.ChoSlider>('cho-slider', [
  'label',
  'step',
  'min',
  'max',
  'value',
  'track',
  'disabled',
  'tickmarks',
  'valueChanged'
],
{
  "modelProp": "value",
  "modelUpdateEvent": "valueChanged"
});


export const ChoSwitch = /*@__PURE__*/ defineContainer<JSX.ChoSwitch>('cho-switch', [
  'checked',
  'disabled',
  'labelPlacement',
  'checkedChanged'
],
{
  "modelProp": "checked",
  "modelUpdateEvent": "checkedChanged"
});


export const ChoTabItem = /*@__PURE__*/ defineContainer<JSX.ChoTabItem>('cho-tab-item', [
  'label',
  'index',
  'selected',
  'disabled',
  'tabItemSelected',
  'tabItemConnected'
]);


export const ChoTabItemContent = /*@__PURE__*/ defineContainer<JSX.ChoTabItemContent>('cho-tab-item-content', [
  'index',
  'visible',
  'tabItemContentConnected'
]);


export const ChoTabs = /*@__PURE__*/ defineContainer<JSX.ChoTabs>('cho-tabs', [
  'currentIndex',
  'currentIndexChanged'
]);


export const ChoTextField = /*@__PURE__*/ defineContainer<JSX.ChoTextField>('cho-text-field', [
  'step',
  'min',
  'max',
  'name',
  'rows',
  'multiline',
  'readOnly',
  'type',
  'label',
  'placeholder',
  'helperText',
  'disabled',
  'error',
  'value',
  'textAlign',
  'valueChanged'
],
{
  "modelProp": "value",
  "modelUpdateEvent": "valueChanged"
});


export const ChoTimePicker = /*@__PURE__*/ defineContainer<JSX.ChoTimePicker>('cho-time-picker', [
  'value',
  'disabled',
  'twelveHourFormat',
  'visible',
  'valueChanged',
  'hoursChanged',
  'minutesChanged'
],
{
  "modelProp": "value",
  "modelUpdateEvent": "valueChanged"
});


export const ChoTooltip = /*@__PURE__*/ defineContainer<JSX.ChoTooltip>('cho-tooltip', [
  'titleContent',
  'placement',
  'visible',
  'visibleOnHover'
]);

