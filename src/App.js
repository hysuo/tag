import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import 'styles/reset.css'
import {Index} from 'pages/index/index/'
import {IndexContainer} from "./pages/login/"
import { RegisterContainer } from "./pages/register"
import {ResetPasswordContainer } from "./pages/lostpass"
import {MainPageCategoryContainer} from "./pages/mainPageCategroy"

import {Chat}from 'msg/'
function App() {
  return (
    <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/login" component={IndexContainer}></Route>
        <Route path="/register" component={RegisterContainer}></Route>
        <Route path="/resetpassword" component={ResetPasswordContainer}></Route>
        

        <Route path="/chat" component={Chat}></Route>
        <Route path="/cate" component={MainPageCategoryContainer}></Route>
        <Redirect from="/" to="/cate" exact></Redirect>
    </Switch>
  );
}

export default App;
