import React, { Component } from 'react'

import SetChatUI from './SetChatUI'
export default class setChatContainer extends Component {
  state = {
    checked: false,
    checked1: false,
    cloak:false
  }
 render(){
   return (
     <SetChatUI props={this.props}
      {...this.state}
       change={this.change}
        change1={this.change1}
        showcloak = {this.showcloak}
        hiddencloak = {this.hiddencloak}
        // clearcontent = {this.clearcontent}
      ></SetChatUI>
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
 showcloak=()=>{
  this.setState({
      cloak:!this.state.cloak
   })
}
hiddencloak=()=>{
  this.setState({
      cloak:!this.state.cloak
   })
}
// clearcontent=()=>{
//    this.props.clearcontent()
// }
}
