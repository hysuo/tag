import React, { Component } from 'react'
import PublishDynamicUI from './PublishDynamicUI'
import axios from 'axios'

class PublishDynamicContainer extends Component {
    state={
        flag:true,
        flagCue:false,
        flagTag:false,
        flagAdd:false,
        deleteImg:false,
        SelectTag : '',
        addTags:true,
        addDynamic:{},
        inputValue:""
    }
    render(){
        return (
            <PublishDynamicUI {...this.state} cancel={this.cancel} isShow={this.isShow} isShowCue={this.isShowCue}  isShowTag={this.isShowTag}  isShowAdd={this.isShowAdd}  isDeleteImg={this.isDeleteImg} clickTag={this.clickTag} addToTextarea={this.addToTextarea} changeValue={this.changeValue} handleInput={this.handleInput} submit={this.submit}></PublishDynamicUI>
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
    handleInput=(e)=>{
        console.log(this.state.inputValue)
        this.setState({inputValue:e.target.value})
    }
    submit= async ()=>{
        console.log(this.state.inputValue)
        let aDynamic = {
            "headImg":"http://img0.imgtn.bdimg.com/it/u=1073436194,380383960&fm=26&gp=0.jpg",
            "userID":"10",
            "userName":"羊驼",
            "createTime":"1分钟前",
            "tag" : this.state.SelectTag,
            "text":this.state.inputValue,
            "img":"http://img3.imgtn.bdimg.com/it/u=2702933053,3904923690&fm=26&gp=0.jpg",
            "zan":0,
            "comment":[]
          }
       await axios
        .post('/api/dynamicList', aDynamic)
        .then(res=>{
        console.log('添加成功',res.data)
        this.props.history.push('/index/dynamic')
        })
    }
}

export default PublishDynamicContainer