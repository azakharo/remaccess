import React from 'react'

import { DEFAULT_AMOUNT_PRECISION } from '../../config'

const DisplayNumeric = ({
  value,
  hidezero,
  hideone,
  isAmount,
  plus,
}) => {
  if (hideone && value === 1) return false
  if (hidezero && !value) return false
  const displayValue = isAmount?
    value?Number(value).toFixed(DEFAULT_AMOUNT_PRECISION):"0"
    :value
  return <span className="numeric">{displayValue}{plus && '+'}</span>
}

export const DisplayAmount = ({
  value,
  hidezero,
}) => <DisplayNumeric
  isAmount
  value={value}
  hidezero={hidezero} />

export const DisplayQty = DisplayNumeric

const inputValue = (value) => {
  if ((value === undefined) || (value === null) || (value === "")) return ""
  return Number(value)
}

const validateNumericValue = (value, min, max, step) => (
  (value === "") ||
  (!isNaN(value) && ((min === undefined) || (value >= min)) && ((max === undefined) || (value <= max)) && ((step === undefined) || !(value % step)))
)

export class DisplayNumericInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: inputValue(props.value),
    }
  }

  restoreValue = () => {
    this.setState({
      value: inputValue(this.props.value),
    })
  }

  checkUpdate = () => {
    if (validateNumericValue(this.state.value, this.props.min, this.props.max, this.props.step))
    {
      this.props.onChange(this.state.value, this.props.onChangeParam)
    }
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    }, this.checkUpdate)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value)
    {
      this.setState({
        value: inputValue(nextProps.value),
      })
    }
  }


  //
  render() {
    const props = {
      type: "text",
      onChange: this.onChange,
      onBlur: this.restoreValue,
      disabled: this.props.disabled,
      className: `${this.props.className}`,
      value: this.state.value,
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      size: this.props.size,
      placeholder: this.props.placeholder,
    }
    if (this.props.onClick) props.onClick = this.props.onClick
    if (this.props.onFocus) props.onClick = this.props.onFocus
    return (
      <input {...props} />
    )
  }

}
