import React from 'react'
import {
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'
import {SearchContent} from './Styled'
import back from 'assets/img/msg/chat/back.png'
import search from 'assets/img/home/search@2x.png'


import All from './componts/All'
import Date from './componts/Date'
export default (props) => {
    let {handleClick,pathname,path} = props
    return(
        <SearchContent>
            <header>
                <img src={back} alt=""/>
                <p>查找聊天内容</p>
            </header>
            <div className="search">
                <input type="text"/>
                <img src={search} alt=""/>    
               <div>
                    <p className={pathname === '/tag/searchcontent/all' ? 'active' : ''} onClick={() => handleClick('/all')}>全部</p>
                    <p className={pathname === '/tag/searchcontent/date' ? 'active' : ''} onClick={() => handleClick('/date')}>日期</p>
               </div>
            </div>
            <Switch>
                <Route path={`${path}/all`} component={All}></Route>
                <Route path={`${path}/date`} component={Date}></Route>
                <Redirect from={`${path}`} exact to={`${path}/all`}></Redirect>
            </Switch>
        </SearchContent>
    )
}