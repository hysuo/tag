import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import 'styles/reset.css'
import 'styles/clearchat.css'
import {Index} from 'pages/index/index/'
import {IndexContainer} from "./pages/login/"
import { RegisterContainer } from "./pages/register"
import {ResetPasswordContainer } from "./pages/lostpass"
import {MainPageCategoryContainer} from "./pages/mainPageCategroy"

import {Chat,SetChat,ChangeName,MsgSearch,TagWeChat,SetWeChat,SearchContent}from 'msg/'
// import ChangeImg from 'pages/index/profile/views/changeImg/changeImg.jsx'
import ChangeUsr from 'pages/index/profile/views/changeUsr/ChangeUsr.jsx'
import ChangeSignature from 'pages/index/profile/views/changeSignature/ChangeSignature.jsx'
import AddLabel from 'pages/index/profile/views/addLabel/AddLabel.jsx'
import Inform from 'pages/index/profile/views/inform/Inform.jsx'
import News from 'pages/index/profile/views/news/News.jsx'
import Account from 'pages/index/profile/views/account/Account.jsx'
import Private from 'pages/index/profile/views/private/Private.jsx'
import Strangerlimit from 'pages/index/profile/views/private/Strangerlimit.jsx'
import Problem from 'pages/index/profile/views/problem/Problem.jsx'
import Updatepwd from 'pages/index/profile/views/inform/updatepwd/Updatepwd.jsx'
import Updatenum from 'pages/index/profile/views/inform/updatenum/Updatenum.jsx'
import Dynamic from 'pages/index/profile/views/dynamic/Dynamic.jsx'
import Fan from 'pages/index/profile/views/fan/Fan.jsx'
import Follow from 'pages/index/profile/views/follow/Follow.jsx'
import PublishDynamicContainer from "./pages/index/publish/publishDynamic/PublishDynamicContainer"
import PublishTagContainer from "./pages/index/publish/publishTag/PublishTagContainer"
import DynamicDetailContainer from './pages/index/dynamic/views/dynamicDetail/DynamicDetailContainer'
import toInform from './pages/index/dynamic/inform/InformContainer'

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
        <Route path="/inform" component={toInform}></Route>
        <Route path="/msg/chat" component={Chat}></Route>
        <Route path="/msg/setchat" component={SetChat}></Route>
        <Route path="/msg/changename" component={ChangeName}></Route>
        <Route path="/msg/search" component={MsgSearch}></Route>
        <Route path="/tag/wechat" component={TagWeChat}></Route>
        <Route path="/tag/setwechat" component={SetWeChat}></Route>
        <Route path="/tag/searchcontent" component={SearchContent}></Route>
        {/* <Route path="/login" component={Login}></Route> */}
        {/* <Route path="/profile/changeImg" component={ChangeImg}></Route> */}
        <Route path="/profile/username" component={ChangeUsr}></Route>
        <Route path="/profile/signature" component={ChangeSignature}></Route>
        <Route path="/profile/addlabel" component={AddLabel}></Route>
        <Route path="/profile/inform" component={Inform}></Route>
        <Route path="/profile/news" component={News}></Route>
        <Route path="/profile/account" component={Account}></Route>
        <Route path="/profile/private" component={Private}></Route>
        <Route path="/profile/strangelimit" component={Strangerlimit}></Route>
        <Route path="/profile/problem" component={Problem}></Route>
        <Route path="/profile/updatepwd" component={Updatepwd}></Route>
        <Route path="/profile/updatenum" component={Updatenum}></Route>
        <Route path="/profile/dynamic" component={Dynamic}></Route>
        <Route path="/profile/fan" component={Fan}></Route>
        <Route path="/profile/follow" component={Follow}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/cate" component={MainPageCategoryContainer}></Route>
        <Redirect from="/" to="/index" exact></Redirect>
    </Switch>
  );
}

export default App;
