import React, { Component } from 'react'
import cancelImg from '../../../../../assets/img/profile/cancel.png'
import {
	ChangeusrContainer
} from './styledusr.js'

import Head from '../components/Head'
import Input from '../components/Input'

export default class ChangeUsr extends Component {
	render() {
		return (
			<ChangeusrContainer>
				<Head title="更改昵称"></Head>
				<Input placehodler="请输入新昵称" img={cancelImg}></Input>
			</ChangeusrContainer>
		)
	}
}