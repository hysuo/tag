import React, { Component } from 'react'
import {
		Headbottom
} from '../Styledprofile/Styledprofile.js'

import {
  withRouter
} from 'react-router-dom'

const tabList = [
		{
				num: '213',
				key: 'Follow',
        txt: '关注',
        path: '/profile/follow'
		},
		{
				num: '254',
				key: 'Fans',
        txt: '粉丝',
        path: '/profile/fan'
		},
		{
				num: '365',
				key: 'Dynamic',
        txt: '动态',
        path: '/profile/dynamic'
		},
]
class Head extends Component {
	 
	render() {
		return (
			<Headbottom>
				{
					tabList.map((value,index) => {
						return <ul
							  key={value.key}
							>
							  <li onClick={() => this.handleClick(value.path)}>{value.num}</li>
							  <li onClick={() => this.handleClick(value.path)}>{value.txt}</li>
								</ul>
							})
					}
			</Headbottom>
		)
  }
  handleClick(path) {
    this.props.history.push(path)
  }
}

export default withRouter(Head)