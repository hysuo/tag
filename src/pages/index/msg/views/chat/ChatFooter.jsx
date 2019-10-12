import React, { Component } from 'react'

export default class ChatFooter extends Component {
 render(){
   return (
    <footer>
        <input id="input" type="text" ref='newitem'/>
        <div onClick={() => {
            this.props.addMessage(this.refs.newitem.value)
            this.refs.newitem.value=""
            }}><i className="yo-ico">&#xe6a2;</i></div>
    </footer>
   )
 }
}
