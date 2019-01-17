import React from 'react'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="#" label="Dashboard" icon="fa fa-dashboard" />
    <MenuTree label="Cadastro" icon="fa fa-pencil">
      <MenuItem path="#billingCycles" label="Ciclos de Pagamento" icon="fa fa-usd" />
    </MenuTree>
  </ul>
)