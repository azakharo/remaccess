import {
  QUOTE_LIST_PROCESS,
} from '../actions/types'

export const quoteListData = (state = null, action) =>
{
  switch (action.type) {
    case QUOTE_LIST_PROCESS:
      return action.response
    default:
      return state
  }
}

export const selectQuoteListData = (state) => state.quoteListData
