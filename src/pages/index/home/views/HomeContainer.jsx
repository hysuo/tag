import React, { Component } from 'react'
import HomeUI from './HomeUI'
import connect from './connect'
 
@connect
class HomeContainder extends Component {
 render(){
  let { isShowPublish } = this.props
   return (
     <HomeUI isShowPublish = {isShowPublish} publishDynamic = {this.publishDynamic} publishTag = {this.publishTag} weChat={this.weChat}
     cate={this.cate}></HomeUI>
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
}
export default HomeContainder