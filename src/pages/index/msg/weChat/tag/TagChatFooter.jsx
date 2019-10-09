import React, { Component } from 'react'
import send from 'assets/img/msg/chat/send.png'

export default class TagChatFooter extends Component {
 render(){
   return (
    <footer>
        <input type="text" placeholder="快加入群聊吧" ref='newitem'/>
        <img  src={send} alt="" onClick={() => {
            this.props.addMessage(this.refs.newitem.value)
            this.refs.newitem.value=""
            }}/>
    </footer>
   )
 }
}
