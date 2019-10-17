import React, { Component } from 'react'
import SetWeChatUI from './SetWeChatUI'
import connect from './connect'
@connect
class SetWeChatContainer extends Component {
 state={
     disturb:false,
     collection:false,
     showName:true,
     flag:true,
     myName:this.props.selfInfo.wechatname,
     cloak:false
  }
 render(){
   return (
     <SetWeChatUI 
     list={this.props.list}
     goBack={this.goBack} 
     changedisturb={this.disturb} 
     changecollection={this.collection} 
     changeshowName={this.showName}
     changeflag = {this.changeflag}
     goChangeName = {this.goChangeName}
     searchContent = {this.searchContent}
     {...this.state}
     showcloak = {this.showcloak}
     hiddencloak = {this.hiddencloak}
     clearcontent = {this.clearcontent}
     tohisdynamic = {this.tohisdynamic}
     invite = {this.invite}
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
 goChangeName=()=>{
     this.props.history.push('/msg/changename')
 }
 searchContent=()=>{
    this.props.history.push('/tag/searchcontent')
 }
 tohisdynamic=()=>{
    this.props.history.push('/otherdynamic')
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
 clearcontent=()=>{
     this.props.clearcontent()
 }
 invite=()=>{
     this.props.history.push('/profile/fan')
 }
}
export default SetWeChatContainer