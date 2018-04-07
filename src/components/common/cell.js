import React from 'react'

import {
  DisplayAmount,
  DisplayQty,
} from './numeric'

import {
  DisplayDate
} from './date'

// import {
//   DisplayQtyInplace,
// } from './inplace'

export const DisplayCellQty = ({
  value,
  hidezero,
  hideone,
}) => <td>
  <DisplayQty value={value} hidezero />
</td>

export const DisplayCellAmount = ({
  value,
  hidezero,
}) => <td>
  <DisplayAmount value={value} hidezero />
</td>

export const DisplayCellDate = ({
  date,
}) => <td>
  <DisplayDate date={date} />
</td>
