import {
  QUOTE_LIST_REQUEST, QUOTE_LIST_PROCESS
} from '../actions/types'

const defaultState = {
  pages: 1,
  records: 0,
  quotations: [],
  loading: false,
  currentPage: 1
};

export const quoteListData = (state = defaultState, action) =>
{
  switch (action.type) {
    case QUOTE_LIST_REQUEST:
      return {...state, loading: true};
    case QUOTE_LIST_PROCESS:
      return {...action.response, loading: false};
    default:
      return state
  }
};

export const selectQuoteListData = (state) => state.quoteListData;
