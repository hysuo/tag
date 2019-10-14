import React, { Component } from 'react'
import {MessageContainer} from './MessageStyled'
import Item from './item'

 class Sixin extends Component {
  state={
    list:[
      {
        id:'002',
        name:'皮卡丘',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
      {
        id:'003',
        name:'皮卡丘2',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1607159738,3001324563&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
      {
        id:'004',
        name:'皮卡丘3',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3298005417,2605075504&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
      {
        id:'005',
        name:'小黄人',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3326291021,2271121192&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
    ]
  }
 render(){
   return (
     <MessageContainer>
       {
         this.state.list.map((item,index) => {
           return(
            <Item list={item} key={index}></Item>
           )
         })

       }
     </MessageContainer>
   )
 }
}
export default Sixin