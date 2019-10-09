import React, { Component } from 'react'
import MsgUI from './MsgUI'
export default class Msgcontainer extends Component {
 render(){
   return (
    <MsgUI path={this.props.match.path} handleClick={this.handleClick} pathname = {this.props.location.pathname}></MsgUI>
   )
 }
 handleClick=(value) => {
  this.props.history.push(this.props.match.path + value)
 }
}
