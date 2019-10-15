import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'

import {
	MainContainer
} from '../Styledprofile/Styledprofile.js'

import NextImg from '../../../../assets/img/profile/next.png'

const mainList = [
	{
    txt: '账号设置',
    id: '/profile/account'
	},
	{
    txt: '更改个人信息',
    id: '/profile/inform'
	},
	{
    txt: '隐私设置',
    id: '/profile/private'
	},
	{
    txt: '问题反馈',
    id: '/profile/problem'
	},
	{
    txt: '消息提醒',
    id: '/profile/news'
	},
	
]
class Main extends Component {
	render() {
		return (
			<MainContainer>
				{
					mainList.map((value,index) => {
						return <div
								key={value.txt}
                onClick={() => this.handleClick(value.id)}
							>
								<p>{value.txt}</p>
								<span><img src={NextImg} alt=""/></span>
							</div>
					})
				}
			</MainContainer>
		)
  }
  handleClick(id){
    this.props.history.push(id)
  }
}
export default withRouter(Main)