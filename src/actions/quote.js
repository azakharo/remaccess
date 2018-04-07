import {
  QUOTE_LIST_REQUEST,
  QUOTE_LIST_PROCESS,
} from './types'

export const requestQuoteList = ({
  pageNum,
  quotationId,
  onlyMy,
  thisSalesOrigin,
  quotationStatus,
}) => ({
  type: QUOTE_LIST_REQUEST,
  pageNum,
  quotationId,
  onlyMy,
  thisSalesOrigin,
  quotationStatus,
})

export const processQuoteList = (response) => ({
    type: QUOTE_LIST_PROCESS,
    response,
})

