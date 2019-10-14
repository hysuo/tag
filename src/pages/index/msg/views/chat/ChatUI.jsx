import React from 'react'
import {ChatContainer} from './ChatStyled'

import back from 'assets/img/msg/chat/back.png'
import more from 'assets/img/msg/chat/more.png'
import zan from 'assets/img/msg/chat/zan.png'
import headImg from 'assets/img/msg/chat/headImg.PNG'

import Footer from './ChatFooter'
export default (props) => {
    return(
        <ChatContainer>
            <header>
                <img onClick={()=>{props.props.history.go(-1)}} src={back} alt=""/>
                <p>name</p>
                <img onClick={()=>{props.props.history.push('/msg/setchat')}} src={more} alt=""/>
            </header>
            <main>
                <div className="show">
                    <p>08-18  8:00 </p>
                    <div>
                        <p>最新动态</p>
                        <div>
                            <span>08-18 8:00</span>
                            <div className="zan">
                                <img src={zan} alt=""/>
                                <span>7</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <ul className="list">
                    {
                        props.data.map((item,index)=>{
                            return(
                                <div key={index} className="data">
                                    <li>
                                        <img src={item.img} alt=""/>
                                        <span>{item.content}</span>
                                    </li>
                                </div>
                            )
                        })
                    }
                    {
                        props.list.map((value,index) => {
                            return (
                                <div key={index} className='own'>
                                    <li>
                                    <span>{value}</span>
                                    <img src={headImg} alt=""/>
                                </li>
                                </div>
                                
                            )
                            // if(index%2){
                            //     return (
                            //         <li key={index} className='right'>
                            //             <span>{value}</span>
                            //             <img src={headImg} alt=""/>
                            //         </li>
                            //     )
                            // }else{
                            //     return (
                            //         <li key={index} className='left'>
                            //             <img src={headImg} alt=""/>
                            //             <span>{value}</span>
                            //         </li>
                            //     )
                            // }
                        })
                    }
                </ul>
            </main>
           <Footer addMessage={props.addMessage}></Footer>
        </ChatContainer>
    )
}