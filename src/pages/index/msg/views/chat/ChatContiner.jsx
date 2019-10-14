import React, { Component } from 'react'
import ChatUI from './ChatUI'
import connect  from './connext';
@connect
class Chat extends Component {
 state={
  //  list:this.props.chat,
   data:[]
 }
 render(){
  // 
   return (
    <ChatUI props={this.props} addMessage={this.addMessage}  list={this.props.chat} {...this.state}></ChatUI>
   )
 }
 componentDidMount(){
    let list = this.props.list.filter((item,value)=>{
      if(item.id === this.props.match.params.id){
        return item
      }
    })
    // console.log(list)
    this.setState({
      data:list
    })
 }
 addMessage=(value) => {
   if(value){
     this.props.addchat(value)
    //  this.setState({
    //    list:[
    //      ...this.state.list,
    //     value
    //   ]
    //  })
   }
 }
}
export default Chat