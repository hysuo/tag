import React, { Component } from 'react'
import ChatUI from './ChatUI'
export default class Chat extends Component {
 state={
   list:[]
 }
 render(){
   return (
    <ChatUI props={this.props} addMessage={this.addMessage} list={this.state.list}></ChatUI>
   )
 }
 addMessage=(value) => {
   if(value){
     this.setState({
       list:[
         ...this.state.list,
        value
      ]
     })
   }
 }
}
