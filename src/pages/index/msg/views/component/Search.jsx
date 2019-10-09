import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {SearchContainer} from '../MsgStyled'
import search from 'assets/img/home/search@2x.png'
class Search extends Component {
 render(){
   return (
     <SearchContainer>
       <div>
        <img src={search} alt=""/>
        <span>搜索</span>
         <input type="text" onFocus={this.toSearch}></input>
       </div>
     </SearchContainer>
   )
 }
 toSearch=()=>{
   this.props.history.push('/msg/search')
 }
}
export default withRouter(Search)
