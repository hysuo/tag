import React, { Component } from 'react'
import DynamicDetailUI from './DynamicDetailUI'

export default class DynamicDetailContainer extends Component {
  state={
    title:'动态详情',
    marginLeft:'1.16rem'
  }
 render(){
   return (
        <DynamicDetailUI title={this.state.title} marginLeft={this.state.marginLeft}></DynamicDetailUI>
   )
 }
}