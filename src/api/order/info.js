import {
  performRequest,
} from '../request'

import {
  RECORDS_PER_PAGE,
} from '../../config'

export const orderListActive = ({
  sessionKey,
}) => performRequest({
  method: "sales_info",
  params: {
//      page_num
//      records_per_page: RECORDS_PER_PAGE,
//      sales_id
//      only_my
//      this_sales_origin
    user_hash: sessionKey,
    status_filter: "backorder",
    only_available: true,
    order_sales_id: "desc", // order_sales_date
    skip_pagination: true,
  }
})

export const orderList = ({
  sessionKey,
  pageNum,
  salesId,
  onlyMy,
  thisSalesOrigin,
  statusFilter,
}) => performRequest({
  method: "sales_info",
  params: {
    user_hash: sessionKey,
    page_num: pageNum,
    records_per_page: RECORDS_PER_PAGE,
    sales_id: salesId,
    only_my: onlyMy,
    this_sales_origin: thisSalesOrigin,
    status_filter: statusFilter,
    order_sales_id: "desc", // order_sales_date
  }
})

export const orderInfo = ({
  sessionKey,
  salesId,
}) => performRequest({
  method: "sales_info",
  params: {
    user_hash: sessionKey,
    sales_id: salesId,
    calc_constraints: true,
  }
})
