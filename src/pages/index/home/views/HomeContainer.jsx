import React, { Component } from 'react'
import HomeUI from './HomeUI'
import connect from './connect'
import http from 'utils/http'
 
@connect
class HomeContainder extends Component {
  state={
    tags:[],
    searchFlag: false,
    inputValue:'',
    searchTag:[]
  }
 render(){
  let { isShowPublish } = this.props
   return (
     <HomeUI {...this.state} isShowPublish = {isShowPublish} publishDynamic = {this.publishDynamic} publishTag = {this.publishTag} weChat={this.weChat}
     cate={this.cate} account={this.account} tagList={this.props.tagList}
     clickSearch={this.clickSearch} changInput={this.changInput}></HomeUI>
   )
 }
 changInput=(e)=>{
   this.setState({
    inputValue:e.target.value
   })
   let keytag=this.state.inputValue
   let arr =[]
   let obj = {}
   for(var value of (this.state.tags)){
     for (let i = 0; i < keytag.length; i++) {
         let re = new RegExp(keytag[i], 'g');
         if (re.test(value.name)){
         obj={id:value.id, name:value.name}
         arr.push(obj)
         }
         }
         this.setState({searchTag:arr})
   }
 }

 clickSearch=()=>{
   this.setState({
    searchFlag:!this.state.searchFlag
   })
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
  this.setState({
    tags:tags.data
  })
 }
}
export default HomeContainder