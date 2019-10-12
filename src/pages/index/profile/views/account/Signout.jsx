import React, { Component } from 'react'

import {
	Signout
} from './account.js'


export default class changeImg extends Component {
	render() {
		return (
			<Signout>
        <p>{this.props.title}</p>
			</Signout>
		)
	}
}