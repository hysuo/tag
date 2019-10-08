import React from 'react' 
import back from 'assets/img/msg/chat/back.png'
import go from 'assets/img/msg/chat/go.png'
import add from 'assets/img/msg/chat/add.png'

import { List, Switch } from 'antd-mobile';
import { Modal, Button} from 'antd-mobile';
import {SetWeChatContainer ,BorderContainer} from './SetWeChatStyled'
export default (props)=>{
    const alert = Modal.alert;
    return(
        <SetWeChatContainer>
            <header>
                <img onClick={()=>{props.goBack()}} src={back} alt=""/>
                <p>聊天信息</p>
            </header>
            <main>
                <ul className="member">
                    <li>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>   
                        <p>name</p>
                    </li>
                    <li>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>   
                        <p>name</p>
                    </li>
                    <li>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>   
                        <p>name</p>
                    </li>
                    <li>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>   
                        <p>name</p>
                    </li>
                    <li>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>   
                        <p>name</p>
                    </li>
                    <li>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg" alt=""/>   
                        <p>name</p>
                    </li>
                    <li>
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
                    <li>
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
                        <div>
                            <p>我在本群的昵称</p>
                            <p>
                                <span>name</span>
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
                        <Button 
                        onClick={() =>
                            alert('', '此操作将会清空所有的聊天记录且无法找回，是否清空?', [
                            { text: '是'},
                            { text: '否'},
                            ])
                        }
                        >
                        <p><span>清空聊天记录</span></p>
                        
                        </Button>
                    </li>
                </ul>
                   
                
            </main>
        </SetWeChatContainer>
    )
}