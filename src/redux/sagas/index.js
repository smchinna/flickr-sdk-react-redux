import { all, fork } from 'redux-saga/effects';

import groupSagsa from './groupSagas';

export default function* rootSaga(getState) {
  yield all([
    fork(groupSagsa)
  ]);
}

