import React, { PureComponent } from 'react'
import {
		Input
} from '../changeUsr/styledusr.js'
import Span from './Spanimg'
export default class Head extends PureComponent{
	render() {
		return (
		  <Input>
        <div>
					<input type="text"
					 ref='newname'
					 placeholder={this.props.placehodler}
					 onBlur={this.getValue} 
					/>
        </div>
        <Span img={this.props.img} handleclick={() => {
					this.refs.newname.value = ""
					this.getValue(this.refs.newname.value)
				}}></Span>
	    </Input>
		)
	}
	getValue = () => {
		this.props.getValue(this.refs.newname.value)
	}
}