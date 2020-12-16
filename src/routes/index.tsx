import React from 'react'
import { Route, BrowserRouter, Switch,  } from 'react-router-dom'
import SignIn from '../components/SignIn'
import Dashboard from '../components/Dashboard'

const Routes:React.FC =  () => {

 return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
  )


}
export default Routes
