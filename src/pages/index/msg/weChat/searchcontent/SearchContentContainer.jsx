import React, { Component } from 'react'
import SearchContentUI from './SearchContentUI'
export default class SearchContentContainer extends Component {
 render(){
   return (
     <SearchContentUI pathname={this.props.location.pathname} handleClick={this.handleClick} path={this.props.match.path}></SearchContentUI>
   )
 }
 handleClick=(value)=>{
  this.props.history.push(this.props.match.path + value)
 }
}
