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
const margin ="30px 16px 0 24px"
const other ="10px 16px 0 24px"
const getValidatePadding ='0 12px 0 20px'
const padding ="0 29px 0 20px"
 class Page extends React.Component{
  constructor(props){
    super(props)  
    this.state ={
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
  }  
  render() {
    return (
        <Pagestyle>
          <ul><li className={this.state.change0} onClick={this.handleLog}>登陆</li>|<li className={this.state.change1} onClick={this.handleReg}>注册</li></ul>
          <form>
          <Input iconbeforebg={shouji} iconlastbg={this.state.accountvalidateimg} placeholder="账号（手机号）" id='user' margin={margin} padding={padding} onChange={this.handleAcc}></Input>
          <Input iconbeforebg={validateimg} iconlastbg={this.state.accountvalidateimg} placeholder="验证码" getValidate="1" margin ={other} padding={getValidatePadding} onChange={this.handleValida} onClick={this.handleGetvalidate}></Input>
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
    if (e.target.id==="q") {
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
    handleRegister=()=>{
           console.log(this.state.account)  
             const users = {
                account:this.state.account,
                validatenum :this.state.validatenum,
                name:this.state.name,
                password:this.state.password,
                repassword:this.state.repassword

      //   axios.post('/api/users/register',newUser)

             }
             console.log(users)
  }
  }
  export default  withRouter(Page)

