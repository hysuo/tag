import React, { Component } from 'react'
import InformUI from './InformUI'

export default class InformContainer extends Component {
    state={
        title:'请选择违规内容',
        marginLeft:'.89rem'
    }
    render(){
        return(
            <InformUI title={this.state.title} marginLeft={this.state.marginLeft}></InformUI>
        )
    }
}