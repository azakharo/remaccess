import React from 'react'

import {
  DisplayTextarea,
} from './input'

import {
  DisplayButton,
} from './button'

import {
  DisplayNumericInput,
} from './numeric'

import {
  DisplayIconEdit,
  DisplayIconSave,
  DisplayIconUndo,
} from './icon'

export class DisplayTextareaInplace extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      editMode: false,
    }
  }

  restoreValue = () => {
    this.setState({
      value: this.props.value,
    })
  }

  saveValue = () => {
    this.props.onChange(this.state.value)
    this.closeEditor()
  }

  openEditor = () => {
    this.setState({
      editMode: true,
    })
  }

  closeEditor = () => {
    this.setState({
      editMode: false,
    })
  }

  updateValue = (value) => {
    this.setState({
      value,
    })
  }

  render() {
    return (
      <span>
        <DisplayTextarea
          disabled={this.props.isLoading || !this.state.editMode}
          className={this.props.className}
          onChange={this.updateValue}
          value={this.state.value} />
        <div className="mt-1 d-flex">
          {this.state.editMode &&
            <DisplayButton
              danger
              title="Отменить"
              onClick={this.closeEditor}
              label={<DisplayIconUndo  />}
              disabled={this.props.isLoading} />
          }
          {this.state.editMode &&
            <DisplayButton
              success
              title="Сохранить"
              onClick={this.saveValue}
              label={<DisplayIconSave label="Сохранить" />}
              disabled={this.props.isLoading} />
          }
          {!this.state.editMode && !this.props.disabled &&
            <DisplayButton
              primary
              title="Изменить"
              onClick={this.openEditor}
              label={<DisplayIconEdit label="Изменить" />} />
          }
        </div>
      </span>
    )
  }
}

export const DisplayNumericPreInput = ({
  active,
  value,
  origValue,
  updateValue,
  disabled,
  clear,
}) => (
  <div className="input-group input-group-sm">
    {active && !disabled && // value !== origValue
      <div className="input-group-prepend">
        <DisplayButton
          secondary
          title="Отменить"
          onClick={clear}
          label={<DisplayIconUndo />} />
      </div>
    }
    <DisplayNumericInput
      className="form-control"
      onChange={updateValue}
      disabled={disabled}
      value={active?value:origValue}
      size={3} />
  </div>
)
