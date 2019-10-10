import React, { Component } from 'react'

import {
	Usr
} from './account.js'


export default class changeImg extends Component {
	render() {
		return (
			<Usr>
				<div className="left">
					<img src={this.props.img} alt=""/>
				</div>
				<div className="right">
					<p>{this.props.name}</p>
					<p>{this.props.label}</p>
				</div>
			</Usr>
		)
	}
}