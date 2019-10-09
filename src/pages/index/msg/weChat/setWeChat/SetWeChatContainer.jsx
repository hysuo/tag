import React, { Component } from 'react'
import SetWeChatUI from './SetWeChatUI'
import connect from './connect'
@connect
class SetWeChatContainer extends Component {
 state={
     disturb:false,
     collection:false,
     showName:false,
     flag:true
  }
 render(){
   return (
     <SetWeChatUI 
     list={this.props.list}
     goBack={this.goBack} 
     disturb={this.state.disturb}
     collection={this.state.collection}
     showName={this.state.showName}
     changedisturb={this.disturb} 
     changecollection={this.collection} 
     changeshowName={this.showName}
     flag = {this.state.flag}
     changeflag = {this.changeflag}
     ></SetWeChatUI>
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
 changeflag=() => {
    this.setState({
        flag:false
     })
 }
}
export default SetWeChatContainer