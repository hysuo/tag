import React, { Component } from 'react'

import {
	AccountContainer
} from './account.js'

import Noconfirm from '../components/Noconfirm'
import Usr from './Usr'
import Add from './Add'
import Signout from './Signout'
import headImg from '../../../../../assets/img/profile/headImg.png'

const UsrList = [
	{
		name: 'KUOLUO',
		img: headImg,
		label: '我阔落要加冰啊'
	},
	{
		name: 'WANGXU',
		img: headImg,
		label: '我还是个孩子'
	}
]

export default class Account extends Component {
	render() {
		return (
			<AccountContainer>
				<Noconfirm title="账号管理"></Noconfirm>
				<div className="main">
				{
					UsrList.map((value,index) => {
						return	<Usr
							key={value.name}
							name={value.name}
							img={value.img}
							label={value.label}>
						</Usr>
					})
				}
				</div>
				<Add></Add>
				<Signout title='退出当前账号'></Signout>
				<Signout title='退出TAGTAG'></Signout>
			</AccountContainer>
		)
	}
}