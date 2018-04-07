import React from 'react'
import { connect } from 'react-redux'

import Menu from './menu'

import {
  DisplayLog,
} from '../../components/common'

const App = ({
  children,
  logoff,
  user,
  company,
  log,
  clearLog,
}) => (
  <div>
    <Menu logoff={logoff} user={user} company={company} />
    <div className="container-fluid after-navbar">
      <DisplayLog log={log} clearLog={clearLog} />
      {children}
    </div>
  </div>
)

export default connect(
  (state) => ({
  }),
)(App)
