import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../assets/logo_c.png'

export default ({logoff, user, company}) => (
  <nav className="header navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#134D6F"}}>
    <Link to="/" className="navbar-brand">
      <img src={logo} width="30" height="30" className="d-inline-block mr-3" alt="УРМ Тест" />
      УРМ Тест
    </Link>
    <button className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#menuContent"
      aria-controls="menuContent"
      aria-expanded="false"
      aria-label="Меню">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="menuContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/orders">Список заказов</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/quotes">Список запросов</Link>
          </li>
        </ul>
    </div>
  </nav>
)
