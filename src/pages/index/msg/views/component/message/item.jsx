import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {BorderContainer} from './MessageStyled'

// import headImg from 'assets/img/msg/photo.png'
class Item extends Component {
    
 render(){
    //  let{img:headImg,name,content}=this.props.value
   return (
         <BorderContainer>
            <img src={this.props.list.img} alt="" onClick={this.toDynamic}/>
            <div onClick={this.toChat}>
                <p>{this.props.list.name} </p>
                <p>{this.props.list.content}</p>
            </div>
            <div>
                {this.props.list.time}
            </div>
        </BorderContainer>
   )
 }
 toChat=() => {
        // this.props.history.push({path:'/msg/chat',query:{id:this.props.list.id}})
        this.props.history.push({pathname:'/msg/chat/'+this.props.list.id})
 }
 toDynamic=()=>{
    this.props.history.push('/otherdynamic/'+this.props.list.id)
 }
}
export default withRouter(Item)
