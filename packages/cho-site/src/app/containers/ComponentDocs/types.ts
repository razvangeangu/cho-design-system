/* --- STATE --- */
export interface ComponentDocsState {
  name: string;
  docs: string;
  loading: boolean;
  error?: ComponentDocsErrorType | null;
}

export enum ComponentDocsErrorType {
  COMPONENT_NAME_EMPTY = 1,
  DOCS_EMPTY = 2,
}

export type ContainerState = ComponentDocsState;
