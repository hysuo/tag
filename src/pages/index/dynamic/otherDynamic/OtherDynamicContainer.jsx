import React, { Component } from 'react'
import OtherDynamicUI from './OtherDynamicUI'
export default class OtherDynamicContainer extends Component {
  state={
    showcloak:false
  }
 render(){
   return (
     <OtherDynamicUI
      goback={this.goback}
      cloak={this.cloak}
      gobacklist={this.gobacklist}
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
gobacklist=()=>{
  this.props.history.push()
}
}
