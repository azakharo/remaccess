import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'

import {
  orderList,
} from '../api'

import {
  processOrderList,
} from '../actions/order'

import {
  ORDER_LIST_REQUEST,
} from '../actions/types'

function* requestOrderListAction(sessionKey, action) {
  const {
    pageNum,
    salesId,
    onlyMy,
    thisSalesOrigin,
    statusFilter
  } = action;
  const response = yield call(orderList, {
    sessionKey,
    pageNum,
    salesId,
    onlyMy,
    thisSalesOrigin,
    statusFilter,
  });
  const respImproved = {...response, currentPage: pageNum};
  yield put(processOrderList(respImproved));
}

export default function*(sessionKey) {
  yield takeLatest(ORDER_LIST_REQUEST, requestOrderListAction, sessionKey)
}
