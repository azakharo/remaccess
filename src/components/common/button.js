import React from 'react'

import {
  DisplayIconSpinner,
} from '../../components/common'

export const DisplayButton = ({
  label,
  disabled,
  inline,
  title,
  onClick,
  isLoading,
  labelLoading,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
}) => {
  const classStyle = primary?"btn-primary":
    secondary?"btn-secondary":
    success?"btn-success":
    danger?"btn-danger":
    warning?"btn-warning":
    info?"btn-info":
    light?"btn-light":
    dark?"btn-dark":
    inline?"btn-link":
    "btn-secondary"
  return (
    <button
      className={`btn ${classStyle}`}
      disabled={disabled}
      onClick={onClick}
      title={title}>
      {isLoading?<DisplayIconSpinner label={labelLoading} />:label}
    </button>
  )
}
