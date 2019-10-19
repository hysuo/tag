import React, { Component } from 'react'
import DynamicDetailUI from './DynamicDetailUI'
import http from 'utils/http'

export default class DynamicDetailContainer extends Component {
  state={
    title:'动态详情',
    marginLeft:'1.16rem',
    dynamic:[]
  }
 render(){
   console.log(this.props.location.state.id)
   return (
        <DynamicDetailUI {...this.state}></DynamicDetailUI>
   )
 }
 async componentDidMount(){
  let dynamicList = await http.get({
    url: '/api/dynamicList'
  })
  console.log(dynamicList)
  let id = this.props.location.state.id
  let result = dynamicList.data.filter(function(value){
    return value.id == id
  })
  console.log(result)
  this.setState({
    dynamic:result
  })
 }
}