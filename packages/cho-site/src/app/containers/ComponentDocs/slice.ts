import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ComponentDocsErrorType, ContainerState } from './types';

// The initial state of the ComponentDocs container
export const initialState: ContainerState = {
  name: '',
  docs: '',
  loading: true,
  error: null,
};

const componentDocsSlice = createSlice({
  name: 'componentDocs',
  initialState,
  reducers: {
    docsLoaded(state, action: PayloadAction<string>) {
      state.docs = action.payload;
      state.loading = false;
    },
    docsError(state, action: PayloadAction<ComponentDocsErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
    changeComponentName(state, action: PayloadAction<string>) {
      state.name = action.payload;
      state.error = null;
      state.loading = true;
    },
    loadComponentDocs(state) {
      state.error = null;
      state.loading = true;
    },
  },
});

export const { actions, reducer, name: sliceKey } = componentDocsSlice;
