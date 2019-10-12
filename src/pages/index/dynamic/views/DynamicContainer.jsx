import React, { Component } from 'react'
import DynamicUI from './DynamicUI'

export default class DynamicContainer extends Component {
  state={
    flagM : false,
    title:'动态',
    marginLeft:'1.33rem'
  }
 render(){
   return (
     <DynamicUI flagM={this.state.flagM} isShowMore={this.isShowMore} goToDetail={this.goToDetail} title={this.state.title} marginLeft={this.state.marginLeft}></DynamicUI>
   )
 }
  isShowMore=()=>{
    this.setState({
      flagM:!this.state.flagM
    })
  }
  goToDetail=()=>{
    this.props.history.push('/dynamic/dynamicDetail')
  }
}
