import React, { Component } from 'react'
import PublishDynamicUI from './PublishDynamicUI'
import axios from 'axios'
import defaultImg from 'assets/img/publish/dy/TAGTAG.png'

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
        inputValue:"",
        imgPush:defaultImg,
        users:'',
        userList:[],
        aUser:'',
        someUsers:[
            'aaaa',
            'abababa',
            'aaaa',
            'adadad',
            'cccc',
            'dddd',
            'qwqwqw',
            'iiiii',
            'popop'
        ]
    }
    render(){
        return (
            <PublishDynamicUI {...this.state} cancel={this.cancel} isShow={this.isShow} isShowCue={this.isShowCue}  isShowTag={this.isShowTag}  isShowAdd={this.isShowAdd}  isDeleteImg={this.isDeleteImg} clickTag={this.clickTag} addToTextarea={this.addToTextarea} changeValue={this.changeValue} handleInput={this.handleInput} submit={this.submit} upload={this.upload} selectUser={this.selectUser} getUser={this.getUser}></PublishDynamicUI>
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
            deleteImg:!this.state.deleteImg,
            imgPush:''
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
    getUser=(value)=>{
        this.setState({
            aUser:value,
            users:value
        })
    }
    selectUser=(e)=>{
        this.setState({
            users:e.target.value
        })
        let keytag=this.state.users
        let arr =[]
        for(var value of (this.state.someUsers)){
            for (let i = 0; i < keytag.length; i++) {
                let re = new RegExp(keytag[i], 'g');
                if (re.test(value)){
                arr.push(value)
                }
                }
                this.setState({userList:arr})
        }
        console.log(this.state.userList)
    }
    upload = (c) => {
        let $c = document.querySelector(c)
        let file = $c.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          this.setState({
            imgPush: e.target.result
          })
        }
          // const or = getImageTag(file, 'Orientation')
          // // reader.readAsDataURL(file)
          // reader.onloadend = function () {
          //   // this.result就是转化后的结果
          //     const result = this.result;
          //     // 将base64添加到图片标签上
          //     const img = new Image();
          //     img.src = result;
          //     img.onload = function () {
          //       // 这里添加旋转图片的代码
          //       const data = this.getRotateImg(img, or);
          //       // 如果上传接口不支持base64，则这里需要将base64转为文档流
          //       const f = dataURLtoFile(data);
          //       // 调用接口，上传图片
          //     }
          // }
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
            "img":this.state.imgPush,
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