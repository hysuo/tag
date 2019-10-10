import styled from 'styled-components'
import backImg from '../../../../assets/img/profile/backImg.png'
const ProfileContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "PingFang SC";
  align-items: center;
  header {
	  height: 2rem;
	  width: 100%;
	  background: url(${backImg}) no-repeat;
	  position: relative;

  }
`
const Head = styled.div `
	position: absolute;
	left: .12rem;
	top: .84rem;
	display: flex;
	.headRight{
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left:.02rem;
	
		.username {
			font-size: .18rem;
			color: #fff;
			margin-top: .12rem;
		}
		.signature {
			font-size: .10rem;
			color: #f7f7f7;
		}   
	}
`
const Headbottom = styled.div `
	background-color: #fff;
	width: 2.9rem;
	height: .6rem;
	position: absolute;
	top: 85%;
	left: .4rem;
	border-radius: .2rem;
	display: flex;
	align-items: center;
	ul {
		flex: 1;
		color: #89C3EB;
		li{
			text-align: center;
			font-size: .14rem;
		}
		li:last-child{
			font-size: .1rem;
		}
	}
		
`
const MainContainer = styled.div `
	width: 3.36rem;
	height: 2.4rem;
	background: #fff;
	border-radius: .2rem;
	margin-top: .5rem;
	display: flex;
	flex-direction: column;
	div {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f7f7f7;
		p{
			margin-left: .2rem;
		}
		span{
			margin-right:.2rem;
		}
	}
`
const FootContainer = styled.div `
	width: 3.36rem;
	height: 1.1rem;
	background: #fff;
	border-radius: .2rem;
	margin-top: .16rem;
	p{
		margin-top: .2rem;
		margin-left: .2rem;
	}
	ul{
		display: flex;
		li{
			flex: 1;
		}
	}
`


export {
	ProfileContainer,
	Head,
	Headbottom,
	MainContainer,
	FootContainer
}