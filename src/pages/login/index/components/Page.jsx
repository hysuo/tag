import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import {Page as Pagestyle} from '../StyledIndex.js' 
import Input from 'components/input/Input'
import forw from 'images/use/zhanghao.svg'
import rt from 'images/rig/dui.svg'
import wg from 'images/rig/cuo.svg'
import pas from 'images/pas/xiugaimima.svg'
import ey from 'images/ey/eyq.svg'
import eye from 'images/ey/eyw.svg'
import Tip from 'components/tip/Tip'
import LoginButton from './Button'
import Tipy from 'components/tip/Tipy'
const userPlaceholder = '昵称（用户名）'
const passPlaceholder = '密码'
const margin = '.3rem .16rem 0 .24rem'
const padding ="0 .29rem 0 .2rem"
class Page extends PureComponent {
  constructor(props){
   super(props)
   this.state={
    accountvalidateimg:'',
    type:false,
    passwordvalidate:'',
    change0:"active",
    change1:'',
    account:"",
    password: "",
   }
   this.handleReg=this.handleReg.bind(this)
   this.handleLog= this.handleLog.bind(this);
   this.handleAcc= this.handleAcc.bind(this)
   this.handlePassword = this.handlePassword.bind(this)
   this.handlePass = this.handlePass.bind(this)
   this.handleSave =this.handleSave.bind(this);
   this.handleResetPassword= this.handleResetPassword.bind(this)
   this.handleLogin= this.handleLogin.bind(this)

  }
  render() {
    return (
        <Pagestyle>
          <ul><li className={this.state.change0} onClick={this.handleLog} >登陆</li>|<li className={this.state.change1} onClick={this.handleReg}>注册</li></ul>
          <Input iconbeforebg={forw} iconlastbg={this.state.accountvalidateimg} placeholder={userPlaceholder} margin={margin} padding={padding} onChange={this.handleAcc}></Input>
          <Input iconbeforebg={pas} iconlastbg={this.state.type?ey:eye} placeholder={passPlaceholder} margin={margin} padding={padding} type={this.state.type?"password":"text"} onChange={this.handlePassword} onClick={this.handlePass}></Input>
          <nav>
            <Tip onClick={this.handleSave}></Tip>
            <Tipy onClick={this.handleResetPassword}></Tipy>
          </nav>
          <LoginButton onClick={this.handleLogin}>登陆</LoginButton>
        </Pagestyle>
    )
  }
  handleLog(){
    this.setState({change0:"active",change1:''})
    this.props.history.push('/login')
  }
  handleReg(){
    this.setState({change0:'',change1:"active"})
    this.props.history.push('/register')
  }
  handleAcc(e){
    let accounts = e.target.value;
    if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(accounts)))
    {this.setState({account :accounts,accountvalidateimg:rt})}
      else if(accounts.length===0){
        this.setState({accountvalidateimg:""})
      }
    else{
      this.setState({accountvalidateimg:wg})
    }
  }
  handlePassword(e){
    let password= e.target.value
  if((/^.*(?=.{6,})(?=.*\d)(?=.*[Aa-zZ]).*$/.test(password)))
    {this.setState({password:password,passwordvalidate:ey})}
    else if(password.length===0){
      this.setState({passwordvalidate: ""})
    }
    else{
      this.setState({passwordvalidate:eye})
    }
  }
  handlePass(e){
    console.log(e.target.parentNode)
    this.setState({type:!this.state.type})
  }
  handleSave(){

  }
  handleResetPassword(){
    this.props.history.push('/resetpassword')
  }
  handleLogin(e){
    let log={
      account:this.state.account,
      password:this.state.password,
    }
  console.log(log)
    e.preventDefault();
    fetch('www.baidu.com',{
        method: "POST",
        body: JSON.stringify(log),
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        (data)=>{
            console.log(data);
        }
    )
    .catch(()=>{
        //错误
    })
    this.props.history.push('/index')
}
  

}
export default withRouter(Page)