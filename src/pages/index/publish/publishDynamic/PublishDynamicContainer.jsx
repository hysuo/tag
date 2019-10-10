import React, { Component } from 'react'
import PublishDynamicUI from './PublishDynamicUI'

class PublishDynamicContainer extends Component {
    state={
        flag:true,
        flagCue:false,
        flagTag:false
    }
    render(){
        return (
            <PublishDynamicUI cancel={this.cancel} flag={this.state.flag} isShow={this.isShow} isShowCue={this.isShowCue} flagCue={this.state.flagCue} isShowTag={this.isShowTag} flagTag={this.state.flagTag}></PublishDynamicUI>
        )
    }
    cancel=()=>{
        this.props.history.go(-1)
    }
    isShow=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    isShowCue=()=>{
        this.setState({
            flagCue:!this.state.flagCue
        })
        console.log(this.state.flagCue)
    }
    isShowTag=()=>{
        this.setState({
            flagTag:!this.state.flagTag
        })
        console.log('Tag' + this.state.flagTag)
    }
}

export default PublishDynamicContainer