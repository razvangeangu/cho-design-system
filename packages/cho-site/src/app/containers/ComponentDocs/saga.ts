import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectComponentName } from './selectors';
import { actions } from './slice';
import { ComponentDocsErrorType } from './types';

/**
 * Git repos readme markdown request/response handler
 */
export function* getComponentDocs() {
  const componentName: string = yield select(selectComponentName);
  if (componentName.length === 0) {
    yield put(actions.docsError(ComponentDocsErrorType.COMPONENT_NAME_EMPTY));
    return;
  }

  try {
    const docs = yield call(
      request,
      (yield import(
        `@cho/components/src/components/${componentName}/readme.md`
      )).default,
      undefined,
      'text',
    );
    if (docs?.length > 0) {
      yield put(actions.docsLoaded(docs));
    } else {
      yield put(actions.docsError(ComponentDocsErrorType.DOCS_EMPTY));
    }
  } catch (err) {
    yield put(actions.docsError(ComponentDocsErrorType.DOCS_EMPTY));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* componentDocsSaga() {
  // Watches for loadComponentDocs actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadComponentDocs.type, getComponentDocs);
}
