import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'

const DisplayIcon = ({label, icon, spin}) => <span><FontAwesomeIcon icon={icon} spin={spin} />&nbsp;{label}</span>

export const DisplayIconPhone = ({label}) => <DisplayIcon icon="phone" label={label} />
export const DisplayIconEmail = ({label}) => <DisplayIcon icon="envelope" label={label} />
export const DisplayIconUser = ({label}) => <DisplayIcon icon="user" label={label} />
export const DisplayIconExit = ({label}) => <DisplayIcon icon="sign-out-alt" label={label} />
export const DisplayIconInfo = ({label}) => <DisplayIcon icon="info-circle" label={label} />

export const DisplayIconSave = ({label}) => <DisplayIcon icon="save" label={label} />
export const DisplayIconUndo = ({label}) => <DisplayIcon icon="undo" label={label} />
export const DisplayIconEdit = ({label}) => <DisplayIcon icon="edit" label={label} />
export const DisplayIconCheck = ({label}) => <DisplayIcon icon="check" label={label} />

export const DisplayIconSort = ({dir, label}) => <DisplayIcon icon={dir>0?"sort-up":(dir<0?"sort-down":"sort")} label={label} />

export const DisplayIconSpinner = ({label}) => <DisplayIcon icon="spinner" spin label={label} />

export const DisplayIconFastBackward = ({label}) => <DisplayIcon icon="fast-backward" label={label} />
export const DisplayIconStepBackward = ({label}) => <DisplayIcon icon="step-backward" label={label} />
export const DisplayIconStepForward = ({label}) => <DisplayIcon icon="step-forward" label={label} />
export const DisplayIconFastForward = ({label}) => <DisplayIcon icon="fast-forward" label={label} />
