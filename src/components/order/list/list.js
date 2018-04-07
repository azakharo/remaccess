import React from 'react'

import { Link } from 'react-router-dom'

import {
  DisplayTable,
  DisplayCellAmount,
  DisplayCellDate,
  DisplayDeliveryOption,
  DisplayCheckbox,
  DisplayLogical,
} from '../../../components/common'

const Item = ({
  order,
  contracts,
  deliveryData,
  toggleOrder,
}) => (
    <tr>
      <td>
        <DisplayCheckbox
          checked={order.checked}
          onChange={() => toggleOrder(order.sales_id)} />
      </td>
      <td>{order.sales_origin}</td>
      <td><Link to={`/orders/${order.sales_id}`}>{order.sales_id}</Link></td>
      <DisplayCellAmount value={order.amount} hidezero  />
      <DisplayCellDate date={order.sales_date}  />
      <td>{order.sales_status}</td>
      <td><DisplayLogical value={order.picked_lines || order.prepayment} /></td>
      <DisplayCellDate date={order.shipping_date}  />
      <td><DisplayDeliveryOption deliveryData={deliveryData} deliveryOptionId={order.delivery_type_id} /></td>
      <td>{order.document_number}</td>
      <DisplayCellDate date={order.date_deadline}  />
      <DisplayCellAmount value={order.sales_amount} hidezero  />
      <td><DisplayLogical value={order.paym_full} /></td>
    </tr>
)

export default ({
  orders,
  contracts,
  deliveryData,
  toggleOrder,
}) => {
  if (!orders) return false
  if (!orders.sales.length)
  {
    return (<p>Заказов, по указаным критериям не найдено, уточните запрос</p>)
  }
  return(
    <DisplayTable>
      <thead>
        <tr>
          <th>
          </th>
          <th>&nbsp;</th>
          <th>Номер заказа</th>
          <th>Сумма по заказу</th>
          <th>Дата создания</th>
          <th>Статус</th>
          <th>Заявка  на склад</th>
          <th>Дата отгрузки</th>
          <th>Способ поставки</th>
          <th>Счет на оплату</th>
          <th>Действует до</th>
          <th>Сумма по счету</th>
          <th>Оплачен</th>
        </tr>
      </thead>
      <tbody>
      {orders.sales.map((order, idx) => (
        <Item
          key={idx}
          order={order}
          contracts={contracts}
          deliveryData={deliveryData}
          toggleOrder={toggleOrder} />
      ))}
      </tbody>
    </DisplayTable>)
}
