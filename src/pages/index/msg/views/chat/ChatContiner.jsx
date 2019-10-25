import React, { Component } from 'react'
import ChatUI from './ChatUI'
import connect  from './connext';
// import io from 'socket.io-client'
@connect
class Chat extends Component {
 state={
  //  list:this.props.chat,
   data:[],
   id:1
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
    // this.socket = io('http://47.102.134.110:9999')
    // this.socket.on('msg_from_server', (data)=> {
    //   this.props.addchat(data)
    // })
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
  // this.socket = io('http://localhost:9999')
  // this.socket.on('msg_from_server', (data)=> {
  //   this.props.addchat(data)
  // })
   if(value){
    this.props.addchat({
      id:this.state.id,
      data:value
    })
    // this.socket.emit('msg_from_client',{
    //   id:this.state.id,
    //   data:value
    // })
   }
 }
 godynamic=()=>{
   this.props.history.push('/otherdynamic/1')
 }
}
export default Chat