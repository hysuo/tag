import React from 'react'
import { withRouter } from 'react-router-dom'
import {Register as Pagestyle} from '../../../login/index/StyledIndex.js' 
import Input from 'components/input/Input'
import forw from 'images/use/zhanghao.svg'
import rt from 'images/rig/dui.svg'
import wg from 'images/rig/cuo.svg'
import pas from 'images/pas/xiugaimima.svg'
import shouji from 'images/tel/ziyuan.svg'
import validateimg from 'images/tel/yanzhengma.svg'
import RegisterButton from './RegisterButton'
const margin =".3rem .16rem 0 .24rem"
const other =".1rem .16rem 0 .24rem"
const getValidatePadding ='0 .1rem 0 .2rem'
const padding ="0 .29rem 0 .2rem"
 class Page extends React.Component{
  constructor(props){
    super(props)  
    this.state ={
    handlet:"获取验证码",
      change0:"",
      change1:'active',
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
    tag:true
  }    
  this.handleAcc=this.handleAcc.bind(this)
  this.handleValida=this.handleValida.bind(this)
  this.handleName=this.handleName.bind(this)
  this.handlePassword=this.handlePassword.bind(this)
  this.handleRepassword=this.handleRepassword.bind(this)
  this.handleRegister=this.handleRegister.bind(this);
  this.handleReg=this.handleReg.bind(this)
  this.handleGetvalidate= this.handleGetvalidate.bind(this);
  this.handleLog= this.handleLog.bind(this);
  this.handlebuttont= this.handlebuttont.bind(this)
  }  
  render() {
    return (
        <Pagestyle>
          <ul><li className={this.state.change0} onClick={this.handleLog}>登陆</li>|<li className={this.state.change1} onClick={this.handleReg}>注册</li></ul>
          <form>
          <Input iconbeforebg={shouji} iconlastbg={this.state.accountvalidateimg} placeholder="账号（手机号）" id='user' margin={margin} padding={padding} onChange={this.handleAcc}></Input>
          <Input iconbeforebg={validateimg} iconlastbg={this.state.accountvalidateimg} handle={this.state.handlet} placeholder="验证码" getValidate="1" margin ={other} padding={getValidatePadding} onChange={this.handleValida} onClick={this.state.tag===true?this.handleGetvalidate:void(0)}></Input>
          <Input iconbeforebg={forw} iconlastbg={this.state.namevalidate} placeholder="设置昵称" margin ={other} padding={padding} onChange={this.handleName}></Input>
          <Input iconbeforebg={pas} iconlastbg={this.state.passwordvalidate} placeholder="设置密码" margin ={other} padding={padding} onChange={this.handlePassword}></Input>
          <Input iconbeforebg={pas} iconlastbg={this.state.repasswordvalidate} placeholder="再次 输入密码" margin ={other} padding={padding} onChange={this.handleRepassword}></Input>
          <RegisterButton onClick={this.handleRegister}></RegisterButton>
          </form>
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
  handleValida(e){
    let validatenum=e.target.value
    console.log(e);
    this.setState({
      validatenum:validatenum
    })
  }
  handleGetvalidate(e){
    let mobile=this.state.account
    if (e.target.id==="q") {
      fetch('/alarapi/register/s-ndSms',{
        method: "POST",
        body: JSON.stringify(mobile),
        
    }).then(
    )
    .catch(()=>{
    })
      // this.setState({handlet:!this.state.handlet})
      this.handlebuttont()
      
    }
  }
  handleName(e){
    let name = e.target.value
    if((/^.\S{1,16}$/.test(name)))
    {this.setState({name:name,namevalidate:rt})}
    else if(name.lenght===0){
      this.setState({namevalidate:""})
    }
    else{
      this.setState({namevalidate:wg})
    }
  }

  handlePassword(e){
    let password= e.target.value
  if((/^.*(?=.{6,})(?=.*\d)(?=.*[Aa-zZ]).*$/.test(password)))
    {this.setState({password:password,passwordvalidate:rt})}
      else if(password.length===0){
        this.setState({
          passwordvalidate:""
        })
      }
    else{
      this.setState({passwordvalidate:wg})
    }
  }
  handleRepassword(e){
    let repassword = e.target.value
    if((/^.*(?=.{6,})(?=.*\d)(?=.*[Aa-zZ]).*$/.test(repassword))&&repassword===this.state.password)
    {this.setState({repassword:repassword,repasswordvalidate:rt})}
    else if(repassword.length===0){this.setState({repasswordvalidate: ''})}
    else{
      this.setState({repasswordvalidate:wg})
    }
  }
    handleRegister=(e)=>{
           console.log(this.state.account)  
             const users = {
                account:this.state.account,
                name:this.state.name,
                password:this.state.password,
 
             }
             e.preventDefault();
             fetch('/alarpi/user',{
                 method: "POST",
                 body: JSON.stringify(users),
                 headers: {
                     'Content-type': 'application/json'
                 }
             }).then(
                 this.props.history.push("./login")
             )
             .catch(()=>{
             })
  }
  handlebuttont(){
    // let mobile=this.state.account
    // e.preventDefault();
    //          fetch('http://xx.com/api/register/sendSms',{
    //              method: "POST",
    //              body: mobile,
    //             //  headers: {
    //             //      'Content-type': 'application/json'
    //             //  }
    //          }).then(
    //             (res)=>(res.json())
    //          ).then((res)=>{
    //            console.log(res.message)
    //          })
    //          .catch(()=>{
    //          })
    this.setState({tag:false})
    var time = 60;
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
  export default  withRouter(Page)

