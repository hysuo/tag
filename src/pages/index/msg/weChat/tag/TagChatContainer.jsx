import React, { Component } from 'react'
import TagChatUI from './TagChatUI'
// import headImg from 'assets/img/msg/chat/headImg.PNG'
import connect from './connect'
// import http from 'utils/http'
@connect
 class TagChatContainer extends Component {
  // state={
  //   chatlist:[
  //     {
  //       id:0,
  //       img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3177821783,3832632740&fm=26&gp=0.jpg',
  //       content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'
  //     },
  //     {
  //       id:2,
  //       img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638429004,1717840478&fm=26&gp=0.jp',
  //       content:'说了你又不懂，懂了你又不做'
  //     },
  //     {
  //       id:1,
  //       img:headImg,
  //       content:'我来了'
  //     },
  //     {
  //       id:3,
  //       img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1131937362,2478239097&fm=26&gp=0.jpg',
  //       content:'错了你怎么不改'
  //     },
  //     {
  //       id:4,
  //       img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg',
  //       content:'你做了什么'
  //     },
      
  //   ]
  // }
  state={
    name:'',
    chatlist:[]
  }
 render(){
  // chatlist={this.props.list}
   return (
     <TagChatUI 
     chatlist={this.props.list}  
     name={this.props.localtion.state.name}  
     addMessage={this.addMessage} 
     goNext={this.goNext} 
     godynamic={this.godynamic} 
     goback={this.goback}></TagChatUI>
   )
 }
 addMessage=(value) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let nowDate = year + '/' + month + '/' + day; 
  if(value){
    // this.setState({
    //   chatlist:[
    //     ...this.state.chatlist,
    //    {
    //      id:1,
    //      img:headImg,
    //      content:value
    //    }
    //  ]
    // })
    this.props.addwechat(
        {
         id:1,
         img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1666966895,993299225&fm=26&gp=0.jpg',
         content:value,
         time:nowDate
       }
    )
  }
}
godynamic=(id)=>{
  this.props.history.push('/otherdynamic/'+id)
}
goNext=()=>{
  this.props.history.push('/tag/setwechat')
}
goback=()=>{
  this.props.history.push('/index/home')
}
componentDidMount(){
  this.props.requestWe(this.props.localtion.state.id)
  // http.get({url:'/api/wechat/001'})
  // .then((result) => {
  //   console.log(result)
  //   this.setState({
  //     name:result.name,
  //     chatlist:result.wechat
  //   })
  // })
}
}
export default TagChatContainer