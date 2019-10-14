import React, { Component } from 'react'
import PublishDynamicUI from './PublishDynamicUI'

class PublishDynamicContainer extends Component {
    state={
        flag:true,
        flagCue:false,
        flagTag:false,
        flagAdd:false,
        deleteImg:false
    }
    render(){
        return (
            <PublishDynamicUI cancel={this.cancel} flag={this.state.flag} isShow={this.isShow} isShowCue={this.isShowCue} flagCue={this.state.flagCue} isShowTag={this.isShowTag} flagTag={this.state.flagTag} isShowAdd={this.isShowAdd} flagAdd={this.state.flagAdd} deleteImg={this.state.deleteImg} isDeleteImg={this.isDeleteImg}></PublishDynamicUI>
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
    }
    isShowTag=()=>{
        this.setState({
            flagTag:!this.state.flagTag
        })
    }
    isShowAdd=()=>{
        this.setState({
            flagAdd:!this.state.flagAdd
        })
    }
    isDeleteImg=()=>{
        this.setState({
            deleteImg:!this.state.deleteImg
        })
        console.log(this.state.deleteImg)
    }
}

export default PublishDynamicContainer