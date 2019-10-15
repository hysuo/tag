import React, { Component } from 'react'
import PublishDynamicUI from './PublishDynamicUI'

class PublishDynamicContainer extends Component {
    state={
        flag:true,
        flagCue:false,
        flagTag:false,
        flagAdd:false,
        deleteImg:false,
        SelectTag : '',
        addTags:true
    }
    render(){
        return (
            <PublishDynamicUI {...this.state} cancel={this.cancel} isShow={this.isShow} isShowCue={this.isShowCue}  isShowTag={this.isShowTag}  isShowAdd={this.isShowAdd}  isDeleteImg={this.isDeleteImg} clickTag={this.clickTag} addToTextarea={this.addToTextarea} changeValue={this.changeValue}></PublishDynamicUI>
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
            flagTag:!this.state.flagTag,
            addTags:!this.state.addTags
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
    }
    clickTag=(event)=>{
        event.persist()
        this.setState({
            SelectTag:event.target.innerHTML
        })
    }
    addToTextarea=()=>{
        this.setState({
            addTags:!this.state.addTags
        })
    }
    changeValue=(event)=>{
        this.setState({SelectTag: event.target.value});
    }
}

export default PublishDynamicContainer