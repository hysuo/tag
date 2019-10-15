import React, { Component } from 'react'
import SelectTagShow from './SelectTagStyled'

class SelectTag extends Component {
    state={
        SelectedTag:false
    }
    render(){
        return (
            <SelectTagShow>
                <ul className={this.props.SelectTag?'active':''}>
                    <li onClick={this.ClickTag.bind(this)} ref='tag1'>热词霸主</li>
                    <li onClick={this.ClickTag.bind(this)} ref='tag2'>请你表扬</li>
                    <li onClick={this.ClickTag.bind(this)} ref='tag3'>朕的自嘲</li>
                    <li onClick={this.ClickTag.bind(this)} ref='tag4'>复古主义</li>
                </ul>
            </SelectTagShow>
        )
    }
    ClickTag=(event)=>{
        console.log(event.target.innerHTML)
        
    }
}

export default SelectTag