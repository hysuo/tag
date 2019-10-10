import React, { Component } from 'react'
import HomeUI from './HomeUI'
import connect from './connect'
 
@connect
class HomeContainder extends Component {
 render(){
  let { isShowPublish } = this.props
   return (
     <HomeUI isShowPublish = {isShowPublish} publishDynamic = {this.publishDynamic} publishTag = {this.publishTag}></HomeUI>
   )
 }
 publishDynamic=()=>{
  this.props.history.push('/publishDynamic')
 }
 publishTag=()=>{
  this.props.history.push('/publishTag')
 }
}
export default HomeContainder