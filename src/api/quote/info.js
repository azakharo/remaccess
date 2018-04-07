import {
  performRequest,
} from '../request'

import {
  RECORDS_PER_PAGE,
} from '../../config'

export const quoteList = ({
  sessionKey,
  pageNum,
  quotationId,
  onlyMy,
  thisSalesOrigin,
  quotationStatus,
}) => performRequest({
  method: "quotation_info",
  params: {
      user_hash: sessionKey,
      page_num: pageNum,
      records_per_page: RECORDS_PER_PAGE,
      quotation_id: quotationId,
      this_sales_origin: thisSalesOrigin,
      only_my: onlyMy,
      quotation_status: quotationStatus,
      order_quotation_id: "desc"
  }
})

export const quoteInfo = ({
  sessionKey,
  quotationId,
}) => performRequest({
  method: "quotation_info",
  params: {
    user_hash: sessionKey,
    quotation_id: quotationId,
  }
})
