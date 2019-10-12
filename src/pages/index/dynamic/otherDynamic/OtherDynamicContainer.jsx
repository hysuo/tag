import React, { Component } from 'react'
import OtherDynamicUI from './OtherDynamicUI'
export default class OtherDynamicContainer extends Component {
  state={
    showcloak:false,
    showcloak2:false
  }
 render(){
   return (
     <OtherDynamicUI
      goback={this.goback}
      cloak={this.cloak}
      cloak2={this.cloak2}
      gobacklist={this.gobacklist}
      godetail={this.godetail}
      {...this.state}
      ></OtherDynamicUI>
   )
 }
 goback=()=>{
   this.props.history.go(-1)
 }
 cloak=()=>{
   this.setState({
     showcloak:!this.state.showcloak
   })
 }
 cloak2=()=>{
   this.setState({
     showcloak2:!this.state.showcloak2
   })
  }
gobacklist=()=>{
  this.props.history.push('/inform')
}
godetail=()=>{
  this.props.history.push('/dynamic/dynamicDetail')
}
}
