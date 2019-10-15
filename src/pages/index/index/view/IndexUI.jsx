import React from 'react'
import {
	Route,
	Redirect,
	Switch
  } from 'react-router-dom'

import {IndexContainer} from './IndexStyled'
import home from 'assets/img/home/home@2x.png'
import msg from 'assets/img/home/discuss@2x.png'
import publish from 'assets/img/home/add@3x.png'
import dynamic from 'assets/img/home/quanzi-2@2x.png'
import profile from 'assets/img/home/user@2x.png'
import close from 'assets/img/home/组 47.png'
import headimgbig from 'img/profile/headimgbig.png'
import photograph from 'img/profile/photograph.png'
import gallery from 'img/profile/gallery.png'
import boy from 'img/profile/boy.png'
import girl from 'img/profile/girl.png'
import secrecy from 'img/profile/secrecy.png'

import {Home} from 'pages/index/home/'
import {Msg} from 'pages/index/msg/'
import {Dynamic} from 'pages/index/dynamic/'
import {Profile} from 'pages/index/profile/'

export default (props) => {
	let {path,handleClick,pathname, isShowPublish, changePublishState,isUpdateheadimg,isUpadatesex,changeHeadImg,changeSex,updateSex,sex} = props
	return(
		<IndexContainer>
			<div className={isUpdateheadimg ? 'wrap' : ''} onClick={() => {changeHeadImg(sex)}}></div>
      <div className={isUpdateheadimg ? 'content' : 'nocontent'}>
				<div className="headimg">
					<img src={headimgbig} alt=""/>
				</div>
				<div className="photograph">
					<img src={photograph} alt=""/>
					<p>拍照</p>
				</div>
				<div className="gallery">
					<img src={gallery} alt=""/>
					<p>图库</p>
				</div>
				<div className="cancel" onClick={() => {changeHeadImg(sex)}}>
					<p>取消</p>
				</div>
			</div>
			<div className={isUpadatesex ? 'wrap' : ''} onClick={() => {changeSex(sex)}}></div>
      <div className={isUpadatesex ? 'content sexcontent' : 'nocontent'}>
				<div className="headimg">
					<img src={headimgbig} alt=""/>
				</div>
				<div className="photograph" onClick={() => {
						updateSex('boy')
						changeSex('boy')
					 	// console.log(isUpdateheadimg,isUpadatesex)
					 }}>
					<img src={boy} alt=""/>
					<p>男</p>
				</div>
				<div className="gallery" onClick={() => {
					updateSex('girl')
					changeSex('girl')
					}}>
					<img src={girl} alt=""/>
					<p>女</p>
				</div>
				<div className="gallery" onClick={() => {
					updateSex('secrecy')
					changeSex('secrecy')
					}}>
					<img src={secrecy} alt=""/>
					<p>保密</p>
				</div>
				<div className="cancel" onClick={() => {changeSex(sex)}}>
					<p>取消</p>
				</div>
			</div>
			<main>
				
				<div className = {!isShowPublish ? 'activeM':''}></div>
				
				<Switch>
					<Route path={`${path}/home`} component={Home}></Route>
					<Route path={`${path}/msg`} component={Msg}></Route>
					<Route path={`${path}/dynamic`} component={Dynamic}></Route>
					<Route path={`${path}/profile`} component={Profile}></Route>
					<Redirect from={`${path}`} exact to={`${path}/home`}></Redirect>
				</Switch>
			</main>
			<footer>
				<div className={pathname === '/index/home' ? 'active' : ''} onClick={() => handleClick('/home')}>
					<img src={home} alt=""/>
					<p>首页</p>
				</div>
				<div className={(pathname === '/index/msg/sixin'||pathname ==='/index/msg/xitong'||pathname ==='/index/msg/tuisong') ? 'active' : ''} onClick={() => handleClick('/msg')}>
					<img src={msg} alt=""/>
					<p>消息</p>
				</div>
				<div onClick={() => {changePublishState(sex)}} className = {!isShowPublish ? 'activeP':''}>
					<img src={isShowPublish ? publish : close} alt=""/>
				</div>
				<div className={pathname === '/index/dynamic' ? 'active' : ''} onClick={() => handleClick('/dynamic')}>
					<img src={dynamic} alt=""/>
					<p>动态</p>    
				</div>  
				<div className={pathname === '/index/profile' ? 'active' : ''} onClick={() => handleClick('/profile')}>
					<img src={profile} alt=""/>
					<p>我的</p>
				</div>  
			</footer>
			
		</IndexContainer>
		
	)
}