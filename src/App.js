import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import 'styles/reset.css'
import 'styles/clearchat.css'
import {Index} from 'pages/index/index/'
import {IndexContainer} from "./pages/login/"
import { BrowserRouter as Router } from 'react-router-dom'
import { RegisterContainer } from "./pages/register"
import {ResetPasswordContainer } from "./pages/lostpass"
import PublishDynamicContainer from "./pages/index/publish/publishDynamic/PublishDynamicContainer"
import PublishTagContainer from "./pages/index/publish/publishTag/PublishTagContainer"
import DynamicDetailContainer from './pages/index/dynamic/views/dynamicDetail/DynamicDetailContainer'

import {Chat,SetChat,ChangeName,MsgSearch,TagWeChat,SetWeChat}from 'msg/'
function App() {
  return (
    <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/login" component={IndexContainer}></Route>
        <Route path="/register" component={RegisterContainer}></Route>
        <Route path="/resetpassword" component={ResetPasswordContainer}></Route>
        <Route path="/publishDynamic" component={PublishDynamicContainer}></Route>
        <Route path="/publishTag" component={PublishTagContainer}></Route>
        <Route path="/dynamic/dynamicDetail" component={DynamicDetailContainer}></Route>

        <Route path="/msg/chat" component={Chat}></Route>
        <Route path="/msg/setchat" component={SetChat}></Route>
        <Route path="/msg/changename" component={ChangeName}></Route>
        <Route path="/msg/search" component={MsgSearch}></Route>
        <Route path="/tag/wechat" component={TagWeChat}></Route>
        <Route path="/tag/setwechat" component={SetWeChat}></Route>
        <Redirect from="/" to="/index" exact></Redirect>
    </Switch>
  );
}

export default App;
