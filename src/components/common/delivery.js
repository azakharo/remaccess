import React from 'react'

import { DisplayPopover } from './popover'

export const DisplayDeliveryOptionInfo = ({deliveryOptionId, deliveryData}) => {
  if (!deliveryOptionId || !deliveryData) return false;
  const delivery = deliveryData.customer_delivery_types.find((customer_delivery_type) =>
    (customer_delivery_type.customer_delivery_type_id === deliveryOptionId)) || null;
  if (!delivery) return <i>н/д</i>;
  delivery.address = deliveryData.addresses.find((address) => (address.address_id === delivery.address.address_id)) || delivery.address;
  return (
    <dl>
      <dt>Описание</dt><dd>{delivery.delivery_type_name}</dd>
      {!!delivery.address.city && <dt>Адрес</dt>}
      {!!delivery.address.city && <dd>{delivery.address.city} {delivery.address.street}</dd>}
      {!!delivery.address.contact && <dt>Контактное лицо</dt>}
      {!!delivery.address.contact && <dd>{delivery.address.contact}</dd>}
      {!!delivery.calendar_name && <dt>График отгрузки</dt>}
      {!!delivery.calendar_name && <dd>{delivery.calendar_name}</dd>}
    </dl>
  )
}

export const DisplayDeliveryOption = ({deliveryOptionId, deliveryData}) => {
  if (!deliveryOptionId || !deliveryData) return false;
  const delivery = deliveryData.customer_delivery_types.find((customer_delivery_type) =>
    (customer_delivery_type.customer_delivery_type_id === deliveryOptionId)) || null;
  if (!delivery) return <i>н/д</i>;
  delivery.address = deliveryData.addresses.find(address => address.address_id === delivery.address.address_id) || delivery.address;
  return (
    <DisplayPopover title={delivery.delivery_display_name}>
      <DisplayDeliveryOptionInfo deliveryOptionId={deliveryOptionId} deliveryData={deliveryData} />
    </DisplayPopover>
  )
}
