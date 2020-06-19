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

  // TODO: once in production revert to the following implementation
  // const requestURL = `https://raw.githubusercontent.com/razvangeangu/cho-design-system/develop/packages/cho-components/src/components/${componentName}/readme.md?token=ADS5RAWX54R7ZK5SMHXCMZK66UR5W`;
  // const docs: string = yield call(request, requestURL, undefined, 'text');

  const requestURL = `https://api.github.com/repos/razvangeangu/cho-design-system/contents/packages/cho-components/src/components/${componentName}/readme.md`;
  try {
    const docs: string = yield call(
      request,
      requestURL,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
          Accept: 'application/vnd.github.v3.raw',
        },
      },
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
