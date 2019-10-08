import React from 'react'
import back from 'assets/img/msg/chat/back.png'
import go from 'assets/img/msg/chat/go.png'

import { List, Switch } from 'antd-mobile';
import { Modal, Button} from 'antd-mobile';

import {SetChatcontainer,BorderContainer} from './setChatStyled'

export default (props)=>{
  const alert = Modal.alert;
  
  return(
    <SetChatcontainer>
      <header>
        <div>
          <img src={back} alt="" onClick={()=>{props.props.history.go(-1)}}/>
        </div>
        <p>聊天设置</p>
      </header>
      <main>
        <ul>
          <li  onClick={() => {props.props.history.push('/msg/changename')}}>
            <p>修改备注</p>
            <img src={go} alt=""/>
          </li>
          <li className='switch'>
            <BorderContainer>
            <List.Item
                extra={<Switch
                  checked={props.checked}
                  onChange={() => {
                    props.change(!props.checked)
                  }}
                />}
              >消息免打扰</List.Item>
            </BorderContainer>
            <div>
              <List.Item
                extra={<Switch
                  checked={props.checked1}
                  onChange={() => {
                    props.change1(!props.checked1)
                  }}
                />}
              >置顶聊天</List.Item>
            </div>
          </li>
          <li>
            <p>设置当前聊天背景</p>
            <img src={go} alt=""/>
          </li>
          <li className="clear">
            <Button
              onClick={() =>
                alert('', '此操作将会清空所有的聊天记录且无法找回，是否清空?', [
                  { text: '是'},
                  { text: '否'},
                ])
              }
            >
              <p><span>清空聊天记录</span> <img src={go} alt=""/></p>
              
            </Button>
          </li>
          
          <li>
            <p>查找聊天记录</p>
            <img src={go} alt=""/>
          </li>
        </ul>
      </main>
    </SetChatcontainer>
  )
}