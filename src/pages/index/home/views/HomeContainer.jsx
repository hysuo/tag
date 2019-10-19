import React, { Component } from 'react'
import HomeUI from './HomeUI'
import connect from './connect'
import http from 'utils/http'
 
@connect
class HomeContainder extends Component {
  state={
    tags:[]
  }
 render(){
  let { isShowPublish } = this.props
  console.log(this.props)
   return (
     <HomeUI {...this.state} isShowPublish = {isShowPublish} publishDynamic = {this.publishDynamic} publishTag = {this.publishTag} weChat={this.weChat}
     cate={this.cate} account={this.account} tagList={this.props.tagList}></HomeUI>
   )
 }
 publishDynamic=()=>{
  this.props.history.push('/publishDynamic')
 }
 publishTag=()=>{
  this.props.history.push('/publishTag')
 }
 weChat=(id, name)=>{
  this.props.history.push('/tag/weChat', {id, name})
 }
 cate=(id)=>{
  this.props.history.push('/cate', {id})
 }
 account=()=>{
   this.props.history.push('./profile/account')
 }
 async componentDidMount(){
  this.props.tagListData()
  let tags = await http.get({
    url: '/api/tags'
  })
  console.log(tags.data)
  this.setState({
    tags:tags.data
  })
 }
}
export default HomeContainder