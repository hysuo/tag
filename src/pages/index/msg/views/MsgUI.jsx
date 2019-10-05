import React from 'react'
import {
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'

import {MsgContainer} from './MsgStyled'
import Search from './component/Search'
import MsgClassify from './component/Msgclassify'

import Sixin from './component/message/Sixin'
import Xitong from './component/message/Xitong'
import Tuisong from './component/message/Tuisong'
export default (props) => {
    let {path,handleClick,pathname} = props
    return(
        <MsgContainer>
            <div className='title'>消息</div>
            <Search></Search>
            <MsgClassify handleClick={handleClick} pathname={pathname}></MsgClassify>
            <Switch>
                <Route path={`${path}/sixin`} component={Sixin}></Route>
                <Route path={`${path}/xitong`} component={Xitong}></Route>
                <Route path={`${path}/tuisong`} component={Tuisong}></Route>
                <Redirect from={`${path}`} exact to={`${path}/sixin`}></Redirect>
            </Switch>
        </MsgContainer>
    )
}