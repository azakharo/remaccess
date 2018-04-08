import {
  QUOTE_LIST_REQUEST,
} from '../actions/types'

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'

import {
  processQuoteList,
} from '../actions/quote'

import {
  quoteList,
} from '../api'

function* requestQuoteListAction(sessionKey, action) {
  const {
    pageNum,
    quotationId,
    onlyMy,
    thisSalesOrigin,
    quotationStatus,
  } = action;
  const response = yield call(quoteList, {
    sessionKey,
    pageNum,
    quotationId,
    onlyMy,
    thisSalesOrigin,
    quotationStatus,
  });
  const respImproved = {...response, currentPage: pageNum};
  yield put(processQuoteList(respImproved))
}

export default function*(sessionKey) {
  yield takeLatest(QUOTE_LIST_REQUEST, requestQuoteListAction, sessionKey)
}
