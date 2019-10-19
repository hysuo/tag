import React, { Component } from 'react'
import OtherDynamicUI from './OtherDynamicUI'
import http from 'utils/http'
export default class OtherDynamicContainer extends Component {
  state={
    showcloak:false,
    showcloak2:false,
    data:{}
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
 componentDidMount(){
    http.get({url:'/tag/otherdynamic/'+this.props.match.params.id}).then((res)=>{
      this.setState({
        data:res
      })
    })
   
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
