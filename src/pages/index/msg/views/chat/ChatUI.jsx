import React from 'react'
import {ChatContainer} from './ChatStyled'

import back from 'assets/img/msg/chat/back.png'
import more from 'assets/img/msg/chat/more.png'
import zan from 'assets/img/msg/chat/zan.png'
import headImg from 'assets/img/msg/chat/headImg.PNG'

import Footer from './ChatFooter'
export default (props) => {
    console.log(props.data)
    return(
        <ChatContainer>
            <header>
                <img onClick={()=>{props.props.history.go(-1)}} src={back} alt=""/>
                <p>{props.data.length !==0 && props.data[0].name}</p>
                <img onClick={()=>{props.props.history.push('/msg/setchat')}} src={more} alt=""/>
            </header>
            <main>
                <div className="show" onClick={()=>{props.godynamic()}}>
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
                        props.data.length!==0 && props.data.map((item,index)=>{
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
                         props.list.length!==0&&props.list.map((value,index) => {
                            if(value.id === props.id){
                                return (
                                    <div key={index} className='own'>
                                        <li>
                                        <span>{value.data}</span>
                                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1666966895,993299225&fm=26&gp=0.jpg" alt=""/>
                                    </li>
                                    </div>
                                    
                                )
                            }else{
                                return (
                                    <div key={index} className='data'>
                                        <li>
                                        <img src={props.data.length ===0 ?'':props.data[0].img} alt=""/>
                                        <span>{value.data}</span>
                                    </li>
                                    </div>
                                    
                                )
                            }
                            
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