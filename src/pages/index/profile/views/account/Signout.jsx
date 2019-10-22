import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom'

import {
	Signout
} from './account.js'


class changeImg extends Component {
	render() {
		return (
			<Signout>
        <p onClick={(e) => {
					if(this.props.title == '退出当前账号'){
						this.props.history.push('/register')
					}else{
						window.opener = null; 
						window.open('', '_self'); 
						window.location.href="about:blank";
						window.close() 
					}
				}}>{this.props.title}</p>
			</Signout>
		)
	}
}

export default withRouter(changeImg)