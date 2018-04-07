import {
  ORDER_LIST_PROCESS,
} from '../actions/types'

export const orderListData = (state = null, action) => {
  switch (action.type) {
    case ORDER_LIST_PROCESS:
      return action.response
    default:
      return state
  }
}

export const selectOrderListData = (state) => state.orderListData
