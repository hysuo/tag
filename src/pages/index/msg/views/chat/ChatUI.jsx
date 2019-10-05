import React from 'react'
import {ChatContainer} from './ChatStyled'

import back from 'assets/img/msg/chat/back.png'
import more from 'assets/img/msg/chat/more.png'
import zan from 'assets/img/msg/chat/zan.png'
import headImg from 'assets/img/msg/chat/headImg.PNG'

export default (props) => {
    console.log(props)
    return(
        <ChatContainer>
            <header>
                <img onClick={()=>{props.props.history.go(-1)}} src={back} alt=""/>
                <p>name</p>
                <img src={more} alt=""/>
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
                        props.list.map((value,index) => {
                            return (
                                <li key={index}>
                                    <span>{value}</span>
                                    <img src={headImg} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
            <footer>
                <input type="text" />
                <div onClick={() => {props.addMessage('1')}}><i className="yo-ico">&#xe6a2;</i></div>
            </footer>
        </ChatContainer>
    )
}