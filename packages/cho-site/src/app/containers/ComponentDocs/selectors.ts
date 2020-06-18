import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.componentDocs || initialState;

export const selectComponentName = createSelector(
  [selectDomain],
  componentDocsState => componentDocsState.name,
);

export const selectDocs = createSelector(
  [selectDomain],
  componentDocsState => componentDocsState.docs,
);

export const selectLoading = createSelector(
  [selectDomain],
  componentDocsState => componentDocsState.loading,
);
