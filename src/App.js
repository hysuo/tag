import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import 'styles/reset.css'
import {Index} from 'pages/index/index/'
function App() {
  return (
    <Switch>
        <Route path="/index" component={Index}></Route>
        {/* <Route path="/login" component={Login}></Route> */}
        <Redirect from="/" to="/index" exact></Redirect>
    </Switch>
  );
}

export default App;
