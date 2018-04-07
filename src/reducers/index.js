import {
  combineReducers
} from 'redux'


import {
  quoteListData,
} from './quote'

import {
  orderListData,
} from './order'

const rootReducer = combineReducers({
  quoteListData,
  orderListData,
})

export default rootReducer
