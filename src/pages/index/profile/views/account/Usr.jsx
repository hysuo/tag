import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom'
import axios from 'axios'

import {
	Usr
} from './account.js'

import connect from '../connect'

@connect
class changeImg extends Component {
	state = {
		value: ''
	}
	render() {
		return (
			<Usr>
				<div className="usr" onClick={this.handleClick.bind(this)}>
					<div className="left">
						<img src={this.props.img} alt=""/>
					</div>
					<div className="right">
						<p>{this.props.name}</p>
						<p>{this.props.label}</p>
					</div>
				</div>
			</Usr>
		)
	}
	async handleClick(){
		let name = this.props.name
		let data = await axios.get('/data/?usrname=' + name)
		.then((res) => {
			return res.data[0].id
		})
		axios.patch((('/data/' + Number(data))),{
			usrname: name
		})
		this.props.changeusr(this.props.name)
		this.props.history.push('/index/profile')
	}
}

export default withRouter(changeImg)