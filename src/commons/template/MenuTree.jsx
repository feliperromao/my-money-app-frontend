import React from 'react'

export default props => (
  <li className="treeview">
    <a href>
      <i className={ props.icon }></i> {props.label}
      <i className="fa fa-angleleft pullright"></i>
    </a>
    <ul className="treeview-menu">
      { props.children }
    </ul>
  </li>
)