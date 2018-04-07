import React from 'react'

import { DisplayPopover } from './popover'

import {
  DisplayDate,
} from './date'

export const DisplayContract = ({contractId, contracts}) => {
  if (!contractId || !contracts) return false;
  const contract = contracts.find((contract) => (contract.contract_id === contractId)) || null;
  if (!contract) return <i>н/д</i>;
  return (
    <DisplayPopover title={contract.contract_num}>
      <dl>
        <dt>Рег. номер</dt><dd>{contract.contract_account}</dd>
        <dt>Начало</dt><dd><DisplayDate date={contract.contract_date_from} /></dd>
        <dt>Окончание</dt><dd><DisplayDate date={contract.contract_date_to} /></dd>
        <dt>Условия</dt><dd>{contract.paym_terms}</dd>
        <dt>Действует</dt><dd><input type="checkbox" checked={contract.active} disabled /></dd>
      </dl>
    </DisplayPopover>
  )
}
