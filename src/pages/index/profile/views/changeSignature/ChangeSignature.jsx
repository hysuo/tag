import React, { Component } from 'react'
import axios from 'axios'

import {
	ChangeusrContainer
} from '../changeUsr/styledusr.js'

import cancelImg from '../../../../../assets/img/profile/cancel.png'

import Head from '../components/Head'
import Input from '../components/Input'
import connect from '../connect'

@connect
class ChangeUsr extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: this.props.signature
		}
	}
	render() {
		return (
			<ChangeusrContainer>
				<Head title="更改签名" snt={this.state.value} handclick={this.handleClick}></Head>
				<Input placehodler="请输入新签名" img={cancelImg} getValue={this.getValue}></Input>
			</ChangeusrContainer>
		)
	}
	getValue = (value) => {
		let signature = value ? value : this.props.signature
		this.setState({
			value: signature
		})
	}
	handleClick = async (value) => {
		this.props.changesnt(value)
		let name = this.props.usrname

		let data = await axios.get('/data/?usrname=' + name)
		.then((res) => {
			return res.data[0].id
		})
		axios.patch((('/data/' + Number(data))),{
			signature: this.state.value
		}).then((res)=>{
			console.log(res)
		})
		this.props.history.go(-1)
	}
}

export default ChangeUsr