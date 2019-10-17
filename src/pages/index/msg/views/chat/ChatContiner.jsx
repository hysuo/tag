import React, { Component } from 'react'
import ChatUI from './ChatUI'
import connect  from './connext';
import io from 'socket.io-client'
@connect
class Chat extends Component {
 state={
  //  list:this.props.chat,
   data:[],
   id:Math.floor(Math.random()*10)
 }
 render(){
   return (
    <ChatUI
     props={this.props}
     addMessage={this.addMessage}  
     list={this.props.chat}
     godynamic={this.godynamic}
     {...this.state}
     ></ChatUI>
   )
 }
 componentDidMount(){
  //  this.props.
    this.socket = io('http://localhost:9999')
    this.socket.on('msg_from_server', (data)=> {
      this.props.addchat(data)
    })
    let list = this.props.list.filter((item,value)=>{
      if(item.id === this.props.match.params.id){
        return item
      }
    })
    this.setState({
      data:list
    })
 }
 addMessage=(value) => {
   if(value){
    this.socket.emit('msg_from_client',{
      id:this.state.id,
      data:value
    })
   }
 }
 godynamic=()=>{
   this.props.history.push('/otherdynamic')
 }
}
export default Chat