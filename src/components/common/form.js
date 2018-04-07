import React from 'react'

import {
  DisplayTextarea,
  DisplayTextInput,
  DisplayCheckbox,
  DisplaySelect,
} from './input'

import {
  DisplayTextareaInplace,
} from './inplace'

import {
  DisplayDateInput
} from './date'

import {
  DisplayNumericInput
} from './numeric'

import {
  DisplayButton,
} from './button'

export const DisplayFormGroup = ({children}) => (
  <div className="form-group">
    {children}
  </div>
)

export const DisplayFormDateInput = ({value, onChange, placeholder, label, children}) => (
  <div className="form-group">
    <div><label>{label}</label></div>
    <DisplayDateInput
      value={value}
      onChange={onChange}
      placeholder={placeholder} />
    {children}
  </div>
)

export const DisplayFormDateRangeInput = ({label, valueFrom, valueTo, onChangeFrom, onChangeTo, placeholderFrom, placeholderTo, labelFrom, labelTo}) => (
  <div className="form-group">
    <div><label>{label?label:`${labelFrom} – ${labelTo}`}</label></div>
    <DisplayDateInput
      value={valueFrom}
      onChange={onChangeFrom}
      placeholder={placeholderFrom} />
    –
    <DisplayDateInput
      value={valueTo}
      onChange={onChangeTo}
      placeholder={placeholderTo} />
  </div>
)

// export const DisplayFormRadioGroup = ({onChange, options, name, value, label, children, disabled}) => (
//   <div className="form-group">
//     {!!label &&
//       <label>{label}</label>
//     }
//     {options.map((option, idx)=>(
//       <DisplayRadio key={idx} label={option.label} disabled={disabled} onChange={onChange} name={name} value={option.value} checked={option.value === value} />
//     ))}
//     {children}
//   </div>
// )

let radioGroupId = 1

export class DisplayFormRadioGroup extends React.Component {

  componentWillMount() {
    this.inputGroupId = "radio_" + radioGroupId
    radioGroupId++
  }

  render() {
    return (
      <div className="form-group">
        {!!this.props.label &&
          <label>{this.props.label}</label>
        }
        {this.props.options.map((option, idx)=>(
          <div className="custom-control custom-radio" key={idx}>
            <input
              type="radio"
              id={this.inputGroupId + "_" + idx}
              name={this.props.name}
              value={option.value}
              checked={option.value === this.props.value}
              onChange={(event) => this.props.onChange(event.currentTarget.value)}
              disabled={this.props.disabled}
              className="custom-control-input" />
            <label className="custom-control-label" htmlFor={this.inputGroupId + "_" + idx}>
              {option.label}
            </label>
          </div>
        ))}
        {this.props.children}
      </div>
    )
  }
}

export const DisplayFormSelect = ({value, onChange, options, label, disabled}) => (
  <div className="form-group">
    <label>{label}</label>
    <DisplaySelect
      value={value}
      onChange={onChange}
      options={options}
      disabled={disabled}
      />
  </div>
)

export const DisplayForm = ({onSubmit, children}) => (
  <form onSubmit={(event) => {onSubmit();event.preventDefault()}}>
    <div className="form">
      {children}
    </div>
  </form>
)

export const DisplayFieldset = ({children}) => (
  <fieldset>
    {children}
  </fieldset>
)

export const DisplayFormCheckbox = ({
  onChange,
  checked,
  label,
  disabled
}) => (
    <div className="form-group">
      <DisplayCheckbox
        onChange={onChange}
        checked={checked}
        label={label}
        disabled={disabled} />
    </div>
)

export const DisplayFormTextInput = ({
  onChange,
  value,
  label,
  placeholder,
  required,
  disabled,
  children,
  onFocus,
  onBlur,
}) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <DisplayTextInput
      className="form-input form-control"
      value={value}
      type="text"
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      />
    {children}
  </div>
)

export const DisplayFormTextarea = ({
  onChange,
  onFocus,
  onBlur,
  label,
  value,
  rows,
  disabled,
  placeholder,
  children,
  inputRef,
}) => (
  <div className="form-group">
    {!!label && <label>{label}</label>}
    <DisplayTextarea
      className="form-control"
      rows={rows}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      placeholder={placeholder}
      inputRef={inputRef} />
    {children}
  </div>
)

export const DisplayFormTextareaInplace = ({
  onChange,
  onFocus,
  onBlur,
  label,
  value,
  rows,
  disabled,
  placeholder,
  children
}) => (
  <div className="form-group">
    <label>{label}</label>
    <DisplayTextareaInplace
      className="form-control"
      rows={rows}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      placeholder={placeholder} />
    {children}
  </div>
)

export const DisplayFormNumericInput = ({onChange, value, min, max, step, size, style, disabled, placeholder, label}) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <DisplayNumericInput
      className="form-input form-control"
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={step}
      size={size}
      style={style}
      disabled={disabled}
      placeholder={placeholder}
      />
  </div>
)

export const DisplayFormButtonLoading = ({
  label,
  isLoading,
  labelLoading,
  disabled,
  type,
  block,
  primary,
  onClick,
}) => (
  <div className="form-group">
    <DisplayButton
      label={label}
      isLoading={isLoading}
      labelLoading={labelLoading}
      disabled={isLoading || disabled}
      type={type}
      block={block}
      primary={primary}
      onClick={onClick}
      />
  </div>
)
