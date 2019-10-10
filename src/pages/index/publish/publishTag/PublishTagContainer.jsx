import React, { Component } from 'react'
import PublishTagUI from './PublishTagUI'

class PublishTagContainer extends Component {
    render(){
        return (
            <PublishTagUI cancel={this.cancel}></PublishTagUI>
        )
    }
    cancel=()=>{
        this.props.history.go(-1)
    }
}

export default PublishTagContainer