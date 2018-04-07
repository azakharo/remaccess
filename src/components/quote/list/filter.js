import React from 'react'

import {
    DisplayForm,
    DisplayFormButtonLoading,
    DisplayFormCheckbox,
} from '../../../components/common'

export default ({
  onSubmit,
  onlyMy,
  onlyMyChange,
  exactSalesOrigin,
  exactSalesOriginChange,
}) => (
  <DisplayForm onSubmit={onSubmit}>
    <DisplayFormCheckbox
      checked={onlyMy}
      onChange={onlyMyChange}
      label="Только мои" />
    <DisplayFormCheckbox
      checked={exactSalesOrigin}
      onChange={exactSalesOriginChange}
      label="Только УРМ" />
    <DisplayFormButtonLoading label="Обновить" />
  </DisplayForm>
)
