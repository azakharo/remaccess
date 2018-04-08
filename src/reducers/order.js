import {
  ORDER_LIST_REQUEST, ORDER_LIST_PROCESS
} from '../actions/types'

const defaultState = {
  pages: 1,
  records: 0,
  sales: [],
  loading: false
};

export const orderListData = (state = defaultState, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {...state, loading: true};
    case ORDER_LIST_PROCESS:
      return {...action.response, loading: false};
    default:
      return state
  }
};

export const selectOrderListData = (state) => state.orderListData;
