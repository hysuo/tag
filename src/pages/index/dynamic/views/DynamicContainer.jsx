import React, { Component } from 'react'
import DynamicUI from './DynamicUI'

export default class DynamicContainer extends Component {
  state={
    flagM : false
  }
 render(){
   return (
     <DynamicUI cancel={this.cancel} flagM={this.state.flagM} isShowMore={this.isShowMore} goToDetail={this.goToDetail}></DynamicUI>
   )
 }
 cancel=()=>{
    this.props.history.go(-1)
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
