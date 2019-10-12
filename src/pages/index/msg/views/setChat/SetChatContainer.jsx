import React, { Component } from 'react'

import SetChatUI from './SetChatUI'
export default class setChatContainer extends Component {
  state = {
    checked: false,
    checked1: false,
  }
 render(){
   return (
     <SetChatUI props={this.props} checked={this.state.checked} checked1={this.state.checked1} change={this.change} change1={this.change1}></SetChatUI>
   )
 }
 change=(value) => {
  this.setState({
    checked:value
  })
 }
 change1=(value) => {
  this.setState({
    checked1:value
  })
 }
}
