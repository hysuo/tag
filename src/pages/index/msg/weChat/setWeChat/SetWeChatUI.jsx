import React from 'react' 
import back from 'assets/img/msg/chat/back.png'
import go from 'assets/img/msg/chat/go.png'
import add from 'assets/img/msg/chat/add.png'

import { List, Switch } from 'antd-mobile';
import {SetWeChatContainer ,BorderContainer} from './SetWeChatStyled'
export default (props)=>{
    return(
        <SetWeChatContainer>
            {
                props.cloak&&<div onClick={()=>{props.hiddencloak()}} className='showcloak'></div>
            }
            {
                props.cloak&&<div className='showtoast'>
                    <div>
                        <p>此操作将会清空所有的聊天记录且无法找回，是否清空?</p>
                    </div>
                    <div>
                        <span onClick={()=>{props.clearcontent()
                             props.hiddencloak()}}>是</span>
                        <span onClick={()=>{props.hiddencloak()}}>否</span>
                    </div>
                </div>
            }
            <header>
                <img onClick={()=>{props.goBack()}} src={back} alt=""/>
                <p>聊天信息</p>
            </header>
            <main>
                <ul className="member">
                    {
                        props.list.map((value,index) => {
                            if(value.id ===1 && value.flag){
                                if(props.showName){
                                    return (
                                        <li key={index}>
                                            <img onClick={()=>{props.tohisdynamic()}} src={value.img} alt=""/>
                                            <p>{value.name}</p>
                                        </li>
                                    )
                                }else{
                                    return (
                                        <li key={index}>
                                            <img src={value.img} alt=""/>
                                        </li>
                                    )
                                }
                            }else if(value.id!==1){
                                if(props.showName){
                                    return (
                                        <li key={index}>
                                            <img onClick={()=>{props.tohisdynamic(value.id)}} src={value.img} alt=""/>
                                            <p>{value.name}</p>
                                        </li>
                                    )
                                }else{
                                    return (
                                        <li key={index}>
                                            <img src={value.img} alt=""/>
                                        </li>
                                    )
                                }
                            }
                        })
                    }
                    <li onClick={()=>{props.invite()}}>
                        <img src={add} alt=""/>
                        <p>添加</p>
                    </li>
                </ul>
                <ul className="set">
                    <li>
                        <p>标签建立时间</p>
                        <p>8/9/2019</p>
                    </li>
                    <li>
                        <p>标签创建者</p>
                        <p>柠檬酸本酸</p>
                    </li>
                    <li onClick={()=>{props.searchContent()}}>
                        <p>查找聊记录</p>
                        <img src={go} alt=""/>
                    </li>
                    <li className='switch'>
                        <BorderContainer>
                            <List.Item
                                extra={<Switch
                                checked={props.disturb}
                                onChange={() => {
                                    props.changedisturb(!props.disturb)
                                }}
                                />}
                            >消息免打扰</List.Item>
                        </BorderContainer>
                        <BorderContainer>
                            <List.Item
                                extra={<Switch
                                checked={props.collection}
                                onChange={() => {
                                    props.changecollection(!props.collection)
                                }}
                                />}
                            >保存到收藏</List.Item>
                        </BorderContainer>
                        <div onClick={()=>{props.goChangeName()}}>
                            <p>我在本群的昵称</p>
                            <p>
                                <span>{props.myName}</span>
                                <img src={go} alt=""/>
                            </p>
                        </div>
                    </li>
                    <div className="showName">
                        <List.Item
                            extra={<Switch
                            checked={props.showName}
                            onChange={() => {
                                props.changeshowName(!props.showName)
                            }}
                            />}
                        >显示成员昵称</List.Item>            
                    </div>
                    <li className="clear">
                        <p onClick={()=>{props.showcloak()}}><span>清空聊天记录</span></p>
                    </li>
                </ul>
                   
                
            </main>
        </SetWeChatContainer>
    )
}