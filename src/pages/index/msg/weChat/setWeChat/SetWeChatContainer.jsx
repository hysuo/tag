import React, { Component } from 'react'
import SetWeChatUI from './SetWeChatUI'
export default class SetWeChatContainer extends Component {
 state={
     disturb:false,
     collection:false,
     showName:false
  }
 render(){
   return (
     <SetWeChatUI 
     goBack={this.goBack} 
     disturb={this.state.disturb}
     collection={this.state.collection}
     showName={this.state.showName}
     changedisturb={this.disturb} 
     changecollection={this.collection} 
     changeshowName={this.showName}></SetWeChatUI>
   )
 }
 goBack=()=>{
     this.props.history.go(-1)
 }
 disturb=()=>{
     this.setState({
         disturb:!this.state.disturb
     })
 }
 collection=()=>{
     this.setState({
        collection:!this.state.collection
     })
 }
 showName=()=>{
     this.setState({
        showName:!this.state.showName
     })
 }
}
