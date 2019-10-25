import React, { Component } from 'react'
import axios from 'axios'
import {
	withRouter
} from 'react-router-dom'

import {
	AccountContainer
} from './account.js'

import Noconfirm from '../components/Noconfirm'
import Usr from './Usr'
import Add from './Add'
import Signout from './Signout'
import connect from '../connect.js'


const UsrList = [
	{
		id: 1,
		name: 'KUOLUO',
		img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2895225652,47819068&fm=26&gp=0.jpg',
		label: '我阔落要加冰啊'
	},
	{
		id: 2,
		name: '小高',
		img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1796807250,1667409405&fm=26&gp=0.jpg',
		label: '嘻嘻嘻'
	}
]

@connect
class Account extends Component {
	constructor(props){
		super(props)
		this.state = {
      usrList: []
    }
	}
	render() {
		return (
			<AccountContainer>
				<Noconfirm title="账号管理"></Noconfirm>
				<div className="main">
				{
					this.state.usrList.length && this.state.usrList.map((value,index) => {
						return	<Usr
							key={value.id}
							name={value.usrname}
							img={value.headimg}
							label={value.signature}>
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
	async componentDidMount(){
    let result = await axios.get('/data')
    
    let usrList = result.data
    
    this.setState({
      usrList: usrList
    })
	
		for(let i = 0; i<UsrList.length; i++){
			UsrList[i].name = this.state.usrList[i].usrname
			UsrList[i].img = this.state.usrList[i].headimg
			UsrList[i].label = this.state.usrList[i].signature
		}
  }  
}
export default withRouter(Account)