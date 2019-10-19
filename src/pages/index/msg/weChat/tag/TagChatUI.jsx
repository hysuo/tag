import React from 'react'
import {TagChat} from './TagWeChat'
import Footer from './TagChatFooter'

import back from 'assets/img/msg/chat/back.png'
import more from 'assets/img/msg/chat/more.png'
export default (props)=>{
    return (
       <TagChat>
           <header>
               <img src={back} onClick={()=>{props.goback()}} alt=""/>
               <p>{props.name}</p>
               <img onClick={()=>{props.goNext()}} src={more} alt=""/>
           </header>
           <main>
                {/* <li>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638429004,1717840478&fm=26&gp=0.jpg" alt=""/>
                    <span>说了你又不懂，懂了你又不做</span>
                </li> */}
                {
                   props.chatlist.map((value,index) => {
                        if(value.content){
                            if(value.id === 1){
                                return(
                                    <div  key={index} className='right'>
                                        <li>
                                        <span>{value.content}</span>
                                        <img src={value.img} alt=""/>
                                    </li>
                                    </div>
                                )
                            }else{
                                return(
                                    <li key={index}>
                                        <img src={value.img} onClick={()=>{props.godynamic(value.id)}} alt=""/>
                                        <span>{value.content}</span>
                                    </li>
                                )
                            }
                        }
                    })
                }
           </main>
           <Footer addMessage={props.addMessage}></Footer>
       </TagChat>
    )
}