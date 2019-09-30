import React from 'react'
import {
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'

import {IndexContainer} from './IndexStyled'
import home from 'assets/img/home/home@2x.png'
import msg from 'assets/img/home/discuss@2x.png'
import publish from 'assets/img/home/add@3x.png'
import dynamic from 'assets/img/home/quanzi-2@2x.png'
import profile from 'assets/img/home/user@2x.png'


import {Home} from 'pages/index/home/'
import {Msg} from 'pages/index/msg/'
import {Publish} from 'pages/index/publish/'
import {Dynamic} from 'pages/index/dynamic/'
import {Profile} from 'pages/index/profile/'
export default (props) => {
    let {path,handleClick,pathname} = props
    return(
        <IndexContainer>
            <main>
                <Switch>
                    <Route path={`${path}/home`} component={Home}></Route>
                    <Route path={`${path}/msg`} component={Msg}></Route>
                    <Route path={`${path}/publish`} component={Publish}></Route>
                    <Route path={`${path}/dynamic`} component={Dynamic}></Route>
                    <Route path={`${path}/profile`} component={Profile}></Route>
                    <Redirect from={`${path}`} exact to={`${path}/home`}></Redirect>
                </Switch>
            </main>
            <footer>
                <div className={pathname === '/index/home' ? 'active' : ''} onClick={() => handleClick('/home')}>
                    <img src={home} alt=""/>
                    <p>首页</p>
                </div>
                <div className={pathname === '/index/msg' ? 'active' : ''} onClick={() => handleClick('/msg')}>
                    <img src={msg} alt=""/>
                    <p>消息</p>
                </div>
                <div onClick={() => handleClick('/publish')}>
                    <img src={publish} alt=""/>
                </div>
                <div className={pathname === '/index/dynamic' ? 'active' : ''} onClick={() => handleClick('/dynamic')}>
                    <img src={dynamic} alt=""/>
                    <p>动态</p>    
                </div>  
                <div className={pathname === '/index/profile' ? 'active' : ''} onClick={() => handleClick('/profile')}>
                    <img src={profile} alt=""/>
                    <p>我的</p>
                </div>  
            </footer>
        </IndexContainer>
        
    )
}