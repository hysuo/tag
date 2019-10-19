import React, { Component } from 'react'
import {
		Headbottom
} from '../Styledprofile/Styledprofile.js'

import {
  withRouter
} from 'react-router-dom'

import connect from './connect.js'
import axios from 'axios'

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
@connect
class Head extends Component {
	 constructor(props){
		 super(props)
		 this.state = {
			 usrItem: []
		 }
	 }
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
	async componentDidMount(){
		let result = await axios.get('/data')
    
    let usrList = result.data
    for(var i = 0, usr; i < usrList.length; i++){
      if(usrList[i].usrname === this.props.usrname){
        usr = usrList[i]
      }
    }
    this.setState({
      usrItem: usr
		})
		tabList[0].num = this.state.usrItem.follow
		tabList[1].num = this.state.usrItem.fan
		tabList[2].num = this.state.usrItem.dynamic.dynum
	}
  handleClick(path) {
    this.props.history.push(path)
  }
}

export default withRouter(Head)