import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_PROCESS,
} from './types'

export const requestOrderList = ({
  pageNum,
  salesId,
  onlyMy,
  thisSalesOrigin,
  statusFilter,
}) => ({
  type: ORDER_LIST_REQUEST,
  pageNum,
  salesId,
  onlyMy,
  thisSalesOrigin,
  statusFilter,
})

export const processOrderList = (response) => ({
    type: ORDER_LIST_PROCESS,
    response,
})

