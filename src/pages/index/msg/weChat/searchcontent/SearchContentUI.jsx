import React from 'react'
import {
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'
import {SearchContent} from './Styled'
import back from 'assets/img/msg/chat/back.png'
import Search from './componts/search'


import All from './componts/All'
import Date from './componts/Date'
export default (props) => {
    let {handleClick,pathname,path,goBack,search,content} = props
    return(
        <SearchContent>
            <header>
                <img src={back} onClick={()=>{goBack()}} alt=""/>
                <p>查找聊天内容</p>
            </header>
            <div className="search">
               <Search search = {search}></Search>
               <div>
                    <p className={pathname === '/tag/searchcontent/all' ? 'active' : ''} onClick={() => handleClick('/all')}>全部</p>
                    <p className={pathname === '/tag/searchcontent/date' ? 'active' : ''} onClick={() => handleClick('/date')}>日期</p>
               </div>
            </div>
            <main>
                <Switch>
                    <Route path={`${path}/all`} content={content} component={All}></Route>
                    <Route path={`${path}/date`} component={Date}></Route>
                    <Redirect from={`${path}`} exact to={`${path}/all`}></Redirect>
                </Switch>
            </main>
        </SearchContent>
    )
}