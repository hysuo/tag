import React, { Component } from 'react'
import MsgSearchUI from './MsgSearchUI'
export default class MsgSearchContainer extends Component {
  state={
    msglist:[]
  }
 render(){
   return (
     <MsgSearchUI cancel={this.cancel} msglist={this.state.msglist} change={this.change}></MsgSearchUI>
   )
 }
 cancel=()=>{
  this.props.history.go(-1)
 }
 change=()=>{
  this.setState({
    msglist:[{
      img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2854956166,1658664264&fm=26&gp=0.jpg',
      name:'皮卡',
      content:['最近可好']
    },
    {
      img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2854956166,1658664264&fm=26&gp=0.jpg',
      name:'皮卡',
      content:['最近可好']
    }
  ]
  })
 }
}
