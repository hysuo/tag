import React from 'react'

import search from 'assets/img/home/search@2x.png'
import go from 'assets/img/msg/chat/go.png'

import {MsgSearchContainer,Border} from './msgSearchStyled'
import Item from '../component/message/item'
export default (props) => {
    return(
        <MsgSearchContainer>
            <header>
                <img src={search} alt=""/>
                <input type="text" onChange={()=>{props.change()}}/>
                <span onClick={()=>{props.cancel()}}>取消</span>
            </header>
            <main>
                <Border>
                        <div className="title">
                            <span>好友</span>
                            <div>
                                <span>查看更多</span>
                                <img src={go} alt=""/>
                            </div>
                        </div>
                </Border>
                {
                    props.msglist.map((value,index) => {
                        return (
                            <Item key={index} list={value}></Item>
                        )
                    })
                }
            </main>
        </MsgSearchContainer>
    )
}
