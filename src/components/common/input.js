import React from 'react'

const inputValueBool = (value) => {
  if ((value === undefined) || (value === null)) return false
  return !!value
}

const inputValue = (value) => {
  if ((value === undefined) || (value === null)) return ""
  return value
}

export const DisplayLogical = ({value, label}) => (
  (typeof(value) !== "undefined") &&
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        checked={inputValueBool(value)}
        disabled />
      <label className="custom-control-label" htmlFor={this.inputId}>
        {label}
      </label>
    </div>
)

export const DisplayTextarea = ({
  onChange,
  onFocus,
  onBlur,
  className,
  rows,
  value,
  disabled,
  placeholder,
  inputRef,
}) => {
  const options = {
    className,
    onFocus,
    onBlur,
    rows,
    disabled,
    placeholder,
  }
  if (onChange) {
    options.value = inputValue(value)
    options.onChange = (event) => onChange(event.target.value)
  }
  if (inputRef) {
    options.ref = inputRef
  }
  return <textarea {...options} />
}

export const DisplayTextInput = ({
  onChange,
  onFocus,
  onBlur,
  className,
  value,
  placeholder,
  required,
  disabled,
}) => (
  <input
    type="text"
    className={className}
    value={inputValue(value)}
    onChange={(event) => {onChange(event.target.value)}}
    onFocus={onFocus}
    onBlur={onBlur}
    placeholder={placeholder}
    required={required}
    disabled={disabled}
    />
)

let checkboxId = 1

export class DisplayCheckbox extends React.Component {

  componentWillMount() {
    this.inputId = "checkbox_" + checkboxId
    checkboxId++
  }

  render() {
    return (
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={this.inputId}
          checked={inputValueBool(this.props.checked)}
          onChange={(event) => this.props.onChange(event.target.checked)}
          disabled={this.props.disabled} />
        <label className="custom-control-label" htmlFor={this.inputId}>
          {this.props.label}
        </label>
      </div>
    )
  }
}

export const DisplaySelect = ({value, onChange, options, disabled}) => (
  <select
    className="form-input form-control"
    value={value}
    onChange={(event) => {onChange(event.currentTarget.value)}}
    disabled={disabled}>
    {options.map((option, idx) => (<option key={idx} value={option.value}>{option.label}</option>))}
  </select>
)
