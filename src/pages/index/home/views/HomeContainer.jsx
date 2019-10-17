import React, { Component } from 'react'
import HomeUI from './HomeUI'
import connect from './connect'
 
@connect
class HomeContainder extends Component {
  
 render(){
  let { isShowPublish } = this.props
  console.log(this.props)
   return (
     <HomeUI isShowPublish = {isShowPublish} publishDynamic = {this.publishDynamic} publishTag = {this.publishTag} weChat={this.weChat}
     cate={this.cate} account={this.account} tagList={this.props.tagList}></HomeUI>
   )
 }
 publishDynamic=()=>{
  this.props.history.push('/publishDynamic')
 }
 publishTag=()=>{
  this.props.history.push('/publishTag')
 }
 weChat=()=>{
  this.props.history.push('/tag/weChat')
 }
 cate=()=>{
  this.props.history.push('/cate')
 }
 account=()=>{
   this.props.history.push('./profile/account')
 }
 componentDidMount(){
  this.props.tagListData()
 }
}
export default HomeContainder