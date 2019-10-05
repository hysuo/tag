import React, { Component } from 'react'
import {SearchContainer} from '../MsgStyled'
import search from 'assets/img/home/search@2x.png'
export default class Search extends Component {
 render(){
   return (
     <SearchContainer>
       <div>
        <img src={search} alt=""/>
        <span>搜索</span>
         <input type="text"></input>
       </div>
     </SearchContainer>
   )
 }
}
