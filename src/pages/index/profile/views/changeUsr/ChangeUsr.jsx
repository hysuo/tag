import React, { Component } from 'react'
import axios from 'axios'
import cancelImg from '../../../../../assets/img/profile/cancel.png'
import backImg from '../../../../../assets/img/profile/back.png'

import {
	ChangeusrContainer,
	Input,
	Head,
	Span
} from './styledusr.js'

// import Head from '../components/Head'
// import Input from '../components/Input'
// import Span from '../components/Spanimg'

import connect from '../connect'

@connect
class ChangeUsr extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: this.props.usrname
		}
	}
	render() {
		return (
			<ChangeusrContainer>
				<Head>
          <div>
            <span onClick={() => this.backClick()}><img src={backImg} alt=""/></span>
            <p className="usr">更改昵称</p>
            <p className="confirm" onClick={this.handleClick}>确认</p>
          </div>	
        </Head>
				<Input>
					<div>
						<input type="text"
						className='input'
						ref='newname'
						placeholder="请输入新昵称" onBlur={this.getValue}/>
					</div>
					<Span>
						<img src={cancelImg} alt="" onClick={() => {
							this.refs.newname.value = ''
							this.getValue(this.refs.newname.value)
						}}/>
					</Span>
				</Input>
			</ChangeusrContainer>
		)
	}
	getValue = () => {
		let value = this.refs.newname.value ? this.refs.newname.value : this.props.usrname
		this.setState({
			value: value
		})
	}
	handleClick = async () => {
		this.props.changeusr(this.state.value)
		let name = this.props.usrname
		let data = await axios.get('/data/?usrname=' + name)
		.then((res) => {
			return res.data[0].id
		})
		axios.patch((('/data/' + Number(data))),{
			usrname: this.state.value
		}).then((res)=>{
			console.log(res)
		})
		this.props.history.push('/index/profile')
	}
	backClick(){
		this.props.history.go(-1)
	}
}
export default  ChangeUsr