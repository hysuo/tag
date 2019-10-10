import React, { PureComponent } from 'react'
import {Register as Pagestyle} from '../../../login/index/StyledIndex.js' 
import Input from 'components/input/Input'
import rt from 'images/rig/dui.svg' 
import pas from 'images/pas/xiugaimima.svg'
import shouji from 'images/tel/ziyuan.svg'
import validateimg from 'images/tel/yanzhengma.svg'
import ResetButton from './ResetButton.jsx'
import wg from 'images/rig/cuo.svg'
const margin ="30px 16px 0 24px"
const other ="10px 16px 0 24px"
const padding ="0 29px 0 20px"
const getValidatePadding ='0 12px 0 20px'

export default class Page extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      accountvalidateimg:'',
      numvalidate:'',
      namevalidate:'',
      passwordvalidate:'',
      repasswordvalidate:'',
      account:"",
      validatenum:"",
      name: "",
      password: "",
      repassword: "",
    }
    this.handleAcc=this.handleAcc.bind(this)
    this.handleValida=this.handleValida.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleRepassword=this.handleRepassword.bind(this)
    this.handleResetPassword= this.handleResetPassword.bind(this)

  }
  render() {
    return (
        <Pagestyle>
          <ul><li>找回密码</li></ul>
          <Input iconbeforebg={shouji} iconlastbg={this.state.accountvalidateimg} placeholder="账号（手机号）" margin={margin} padding={padding}  onChange={this.handleAcc}></Input>
          <Input iconbeforebg={validateimg} iconlastbg={rt} placeholder="验证码" getValidate="1" margin ={other} padding={getValidatePadding} onChange={this.handleValida}></Input>
          <Input iconbeforebg={pas} iconlastbg={this.state.passwordvalidate} placeholder="设置密码" margin ={other} padding={padding} onChange={this.handlePassword}></Input>
          <Input iconbeforebg={pas} iconlastbg={this.state.repasswordvalidate} placeholder="再次 输入密码" margin ={other} padding={padding} onChange={this.handleRepassword}></Input>
          <ResetButton onClick={this.handleResetPassword}>登陆</ResetButton>
        </Pagestyle>
    )
  }
  handleAcc(e){
    let accounts = e.target.value;
    if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(accounts)))
    {this.setState({account :accounts,accountvalidateimg:rt})}
    else if(accounts.length===0){
      this.setState({accountvalidateimg:''})
    }else{
      this.setState({accountvalidateimg:wg})
    }
  }handleValida(e){
    let validatenum=e.target.value
    this.setState({
      validatenum:validatenum
    })
  }handlePassword(e){
    let password= e.target.value
  if((/^.*(?=.{6,})(?=.*\d)(?=.*[Aa-zZ]).*$/.test(password)))
    {this.setState({password:password,passwordvalidate:rt})}
    else if(password.length===0){
      this.setState({passwordvalidate:''})
    }else{
      this.setState({passwordvalidate:wg})
    }
  }
  handleRepassword(e){
    let repassword = e.target.value
    if((/^.*(?=.{6,})(?=.*\d)(?=.*[Aa-zZ]).*$/.test(repassword))&&repassword===this.state.password)
    {this.setState({repassword:repassword,repasswordvalidate:rt})}
    else if(repassword.length===0){
      this.setState({repasswordvalidate:""})
    }
    else{
      this.setState({repasswordvalidate:wg})
    }
  }
 handleResetPassword (){
   const user={
    account:this.state.account,
    validatenum :this.state.validatenum,
    name:this.state.name,
    password:this.state.password,
    repassword:this.state.repassword
   }
   console.log(user)
 } 
}
