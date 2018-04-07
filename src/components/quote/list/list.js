import React from 'react'

import { Link } from 'react-router-dom'

import {
    DisplayTable,
    DisplayCellDate,
} from '../../../components/common'

const Line = ({quote}) => {
  return(
    <tr>
      <td>{quote.sales_origin}</td>
      <td><Link to={`/quotes/${quote.quotation_id}`}>{quote.quotation_id}</Link></td>
      <DisplayCellDate date={quote.quotation_date}  />
      <DisplayCellDate date={quote.prognosis_date}  />
      <td>{quote.quotation_status}</td>
    </tr>
  )
}

export default ({quotes}) => {
  if (!quotes) return false;
  if (!quotes.quotations.length)
  {
    return (<p>Запросов по указаным критериям не найдено, уточните запрос</p>);
  }
  return(
  <div>
    <DisplayTable>
      <thead>
        <tr>
          <th>Источник</th>
          <th>Номер запроса</th>
          <th>Дата создания</th>
          <th>Прогнозируемая дата</th>
          <th>Статус списка</th>
        </tr>
      </thead>
      <tbody>
        {quotes.quotations.map((quote, idx) => (<Line key={idx} quote={quote} />))}
      </tbody>
    </DisplayTable>
  </div>)
}
