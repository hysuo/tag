import React from 'react'
import {OtherDynamic} from './Styled'

import back from 'assets/img/msg/chat/back.png'
import more from 'assets/img/msg/chat/more.png'
import zan from 'assets/img/msg/chat/zan.png'
import commit from 'assets/img/msg/chat/commit.png'
import pic from 'assets/img/msg/pic.png'
import circle from 'assets/img/msg/circle.png'
import xian from 'assets/img/msg/xian.png'

export default (props)=>{
    return (
        <OtherDynamic>
            {
                props.showcloak&&<div onClick={()=>{props.cloak()}} className='showcloak'></div>
            }
            {
                props.showcloak&&<div className='blacklist'>
                    <p>举报</p>
                    <p onClick={()=>{props.cloak()}}>取消</p>
                </div>
            }
            <header>
                <div className="top">
                    <img src={back} onClick={()=>{props.goback()}} alt=""/>
                    <img src={more} onClick={()=>{props.cloak()}} alt=""/>
                </div>
                <div className="info">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>
                    <p>皮卡丘</p>
                    <p>爱旅行的吃货</p>
                </div>
                <div className="fans">
                    <div>
                        <span>465</span>
                        <p>关注</p>
                    </div>
                    <div>
                        <span>321</span>
                        <p>粉丝</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="dynamic">
                        <div className="xian">
                            <img src={circle} alt=""/>
                            <img src={xian} alt=""/>
                        </div>
                        <div className="all">
                            <p className="time">2019-10-8 10:00</p>
                            <p className='content'>想去旅行</p>
                            <img className="pic" src={pic} alt=""/>
                            <div className="more">
                                <div>
                                    <img src={zan} alt=""/>
                                    <span>10</span>
                                </div>
                                <div className="commit">
                                    <img src={commit} alt=""/>
                                    <span>66</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="dynamic">
                        <div className="all">
                            <p className="time">2019-10-8 10:00</p>
                            <p className='content'>想去旅行</p>
                            <img className="pic" src={pic} alt=""/>
                            <div className="more">
                                <div>
                                    <img src={zan} alt=""/>
                                    <span>10</span>
                                </div>
                                <div className="commit">
                                    <img src={commit} alt=""/>
                                    <span>66</span>
                                </div>
                            </div>
                        </div>
                        <div className="xian">
                            <img src={circle} alt=""/>
                            <img src={xian} alt=""/>
                        </div>
                </div>
                <div className="dynamic">
                        <div className="all">
                            <p className="time">2019-10-8 10:00</p>
                            <p className='content'>想去旅行</p>
                            <img className="pic" src={pic} alt=""/>
                            <div className="more">
                                <div>
                                    <img src={zan} alt=""/>
                                    <span>10</span>
                                </div>
                                <div className="commit">
                                    <img src={commit} alt=""/>
                                    <span>66</span>
                                </div>
                            </div>
                        </div>
                        <div className="xian">
                            <img src={circle} alt=""/>
                            <img src={xian} alt=""/>
                        </div>
                </div>
            </main>
        </OtherDynamic>
    )
}