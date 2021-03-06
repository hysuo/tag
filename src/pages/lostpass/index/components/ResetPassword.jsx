import React, { PureComponent } from 'react'
import{withRouter} from 'react-router-dom'
import {Register as Pagestyle} from '../../../login/index/StyledIndex.js' 
import Input from 'components/input/Input'
import rt from 'images/rig/dui.svg' 
import pas from 'images/pas/xiugaimima.svg'
import shouji from 'images/tel/ziyuan.svg'
import validateimg from 'images/tel/yanzhengma.svg'
import ResetButton from './ResetButton.jsx'
import wg from 'images/rig/cuo.svg'
const margin =".3rem .16rem 0 .24rem"
const other ="10px 16px 0 24px"
const padding ="0 29px 0 20px"
const getValidatePadding ='0 .1rem 0 .2rem'

class Page extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      handlet:"获取验证码",
      accountvalidateimg:'',
      numvalidate:'',
      namevalidate:'',
      passwordvalidate:'',
      repasswordvalidate:'',
      account:"",
      validatenum:"",
      name: "",
      password: "",
      repassword: "",tag:true
    }
    this.handleAcc=this.handleAcc.bind(this)
    this.handleValida=this.handleValida.bind(this)
    this.handleGetvalidate= this.handleGetvalidate.bind(this);
    this.handlePassword=this.handlePassword.bind(this)
    this.handleRepassword=this.handleRepassword.bind(this)
    this.handleResetPassword= this.handleResetPassword.bind(this)
    this.handlebuttont= this.handlebuttont.bind(this)
  }
  render() {
    return (
        <Pagestyle>
          <ul><li>找回密码</li></ul>
          <Input iconbeforebg={shouji} iconlastbg={this.state.accountvalidateimg} placeholder="账号（手机号）" margin={margin} padding={padding}  onChange={this.handleAcc}></Input>
          <Input iconbeforebg={validateimg} iconlastbg={rt} handle={this.state.handlet} placeholder="验证码" getValidate="1" margin ={other} padding={getValidatePadding} onChange={this.handleValida} onClick={this.state.tag===true?this.handleGetvalidate:void(0)} ></Input>
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
  }handleGetvalidate(e){
    if (e.target.id==="q") {
      // this.setState({handlet:!this.state.handlet})
      this.handlebuttont()
      
    }
  }
 handleResetPassword= (e)=>{
   const user={
    account:this.state.account,
    validatenum :this.state.validatenum,
    name:this.state.name,
    password:this.state.password,
    repassword:this.state.repassword
   }
   e.preventDefault();
   fetch('/alarpi/user?account='+`${user.account}`,{
                 method: "POST",
                //  body: users,
                body: JSON.stringify(user),
                 headers: {
                     'Content-type': 'application/json'
                 }
             }).then(
                 this.props.history.push("./login")
             )
             .catch(()=>{
                 //错误
             })
 } 
 handlebuttont(){
  // setTimeout(function(){
  //   code.css("opacity","0.8");
  // },1000)
  var time = 60;
  this.setState({tag:false})
  var set=setInterval(function(){
  --time

   this.setState({
     handlet:time +"秒后重新获取"
   })

  }.bind(this), 1000);
  setTimeout(function(){
  this.setState({handlet:"重新获取验证"})
  clearInterval(set);
  this.setState({tag:true})
  }.bind(this), 60000);
}
}
export default withRouter(Page)