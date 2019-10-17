import React, { Component } from 'react'
import PublishTagUI from './PublishTagUI'

class PublishTagContainer extends Component {
    state={
        SelectTag:false,
        SelectedTag:false,
        Tag:'',
        notifyShow:false,
        blurShow:false,
        inputValue:'',
        existed:false
    }
    render(){
        return (
            <PublishTagUI cancel={this.cancel} {...this.state} handleClick={this.handleClick} ClickTag={this.ClickTag} audit={this.audit} blur={this.blur} focus={this.focus} change={this.change}></PublishTagUI>
        )
    }
    cancel=()=>{
        this.props.history.go(-1)
    }
    handleClick=()=>{
        this.setState({
            SelectTag:!this.state.SelectTag
        })
    }
    ClickTag=(event)=>{
        this.setState({
            Tag:event.target.innerHTML,
            SelectTag:!this.state.SelectTag
        })
    }
    audit=()=>{
        this.setState({
            notifyShow:!this.state.notifyShow
        })
    }
    blur=()=>{
        if(this.state.inputValue){
            this.setState({
                blurShow:true
            })
            if(this.state.inputValue == '柠檬精'){
                this.setState({
                    existed:true
                })
            }else{
                this.setState({
                    existed:false
                })
            }
        }
        
    }
    focus=()=>{
        this.setState({
            blurShow:false
        })
    }
    change=(e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default PublishTagContainer