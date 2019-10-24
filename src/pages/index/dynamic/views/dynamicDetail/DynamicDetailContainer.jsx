import React, { Component } from 'react'
import DynamicDetailUI from './DynamicDetailUI'
import http from 'utils/http'

export default class DynamicDetailContainer extends Component {
  state={
    title:'动态详情',
    marginLeft:'1.16rem',
    dynamic:[],
    commentInput:'',
    commentList:[]
  }
 render(){
   return (
        <DynamicDetailUI {...this.state} handleInput={this.handleInput} handleClick={this.handleClick}></DynamicDetailUI>
   )
 }
 async componentDidMount(){
  let dynamicList = await http.get({
    url: '/api/dynamicList'
  })
  let id = this.props.location.state.id
  let result = dynamicList.filter(function(value){
    return value.id == id
  })
  this.setState({
    dynamic:result
  })
 }
 handleInput=(e)=>{
   this.setState({
    commentInput:e.target.value
   })
 }
 handleClick=()=>{
  let list = this.state.commentList
  list.push(this.state.commentInput)
  this.setState({
    commentList:list
  })
  this.setState({
    commentInput:''
  })
 }
}