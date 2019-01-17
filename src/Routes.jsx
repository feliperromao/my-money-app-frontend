import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from './dashboard/Dashboard'
import BillingCycles from './billingCycles/BillingCycles'

export default props => (
  <Router history={hashHistory}>
    <div>
      <Route path="/" component={ Dashboard } />
      <Route path="/billingCycles" component={ BillingCycles } />
      <Redirect from="*" to="/" />
    </div>
  </Router>
)