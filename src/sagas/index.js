import {
  fork,
  call,
} from 'redux-saga/effects'

import quoteSaga from './quote'
import orderSaga from './order'

function* pcall(fn, arg = null) // TODO: error handling
{
  try {
    yield call(fn, arg)
  } catch(error) {
    // yield put(appendSessionLogError(error.message || "Сервис временно недоступен"))
    console.error(error.message || "Сервис временно недоступен")
  }
}

export default function* rootSaga() {
  const sessionKey = ""
  yield fork(pcall, quoteSaga, sessionKey)
  yield fork(pcall, orderSaga, sessionKey)
}
