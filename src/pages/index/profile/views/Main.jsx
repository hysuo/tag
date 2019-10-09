import React, { Component } from 'react'

import {
    MainContainer
} from '../Styledprofile/Styledprofile.js'

import NextImg from '../../../../assets/img/profile/next.png'

const mainList = [
    {
        txt: '账号设置'
    },
    {
        txt: '更改个人信息'
    },
    {
        txt: '隐私设置'
    },
    {
        txt: '问题反馈'
    },
    {
        txt: '消息提醒'
    },
    
]
export default class Main extends Component {
    render() {
        return (
            <MainContainer>
                {
                    mainList.map((value,index) => {
                        return <div
                                key={value.txt}
                            >
                                <p>{value.txt}</p>
                                <span><img src={NextImg} alt=""/></span>
                            </div>
                    })
                }
            </MainContainer>
        )
    }
}