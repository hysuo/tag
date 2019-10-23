import React from 'react'
import {OtherDynamic} from './Styled'

import back from 'assets/img/msg/chat/back.png'
import more from 'assets/img/msg/chat/more.png'
import zan from 'assets/img/msg/chat/zan.png'
import commit from 'assets/img/msg/chat/commit.png'
import pic from 'assets/img/msg/pic.png'
import circle from 'assets/img/msg/circle.png'
import xian from 'assets/img/msg/xian.png'
import care from 'assets/img/msg/care.png'

export default (props)=>{
    return (
        <OtherDynamic>
            <div>
            {
                props.showcloak&&<div onClick={()=>{props.cloak()}} className='showcloak'></div>
            }
            {
                props.showcloak&&<div className='blacklist'>
                    <p onClick={()=>{props.gobacklist()}}>举报</p>
                    <p onClick={()=>{props.cloak()}}>取消</p>
                </div>
            }
            {
                props.showcloak2&&<div onClick={()=>{props.cloak2()}} className='showcloak2'></div>
            }
            {
                props.showcloak2&&<div className='showbigpic'>
                    <img src={props.data.img ? props.data.img : ''} alt=""/>
                    <p>保存至相册</p>
                </div>
            }
            <header>
                <div className="top">
                    <img src={back} onClick={()=>{props.goback()}} alt=""/>
                    <img src={more} onClick={()=>{props.cloak()}} alt=""/>
                </div>
                <div className="info">
                    <img onClick={()=>{props.cloak2()}} src={props.data.img ? props.data.img : ''} alt=""/>
                    <p>{props.data.name}</p>
                    <p>{props.data.signature}</p>
                </div>
                <div className="fans">
                    <div>
                        <span>{props.data.attention}</span>
                        <p>关注</p>
                    </div>
                    <div>
                        <span>{props.data.fans}</span>
                        <p>粉丝</p>
                    </div>
                </div>
            </header>
            <main>
                {
                    props.data.dy &&props.data.dy.map((item,index)=>{
                        return(
                            <div className="dynamic" onClick={()=>{props.godetail(item.id)}} key={index}>
                        <div className="xian">
                            <img src={circle} alt=""/>
                            <img src={xian} alt=""/>
                        </div>
                        <div className="all">
                            <p className="time">{item.creattime}</p>
                            <p className='content'>{item.text}</p>
                            <img className="pic" src={item.img} alt=""/>
                            <div className="more">
                                <div>
                                    <img src={zan} alt=""/>
                                    <span>{item.zan}</span>
                                </div>
                                <div className="commit">
                                    <img src={commit} alt=""/>
                                    <span>{item.praise}</span>
                                </div>
                            </div>
                        </div>
                </div>
                        )
                    })
                }
               
            </main>
            </div>
            <footer>
                <div>
                    <img src={care} alt=""/>
                    <p>关注</p>
                </div>
                <div>
                    <p>私聊</p>
                </div>
            </footer>
        </OtherDynamic>
    )
}