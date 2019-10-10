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
          <input type="text" placeholder={this.props.placehodler} />
        </div>
        <Span img={this.props.img}></Span>
	    </Input>
		)
	}
}