import styled from 'styled-components'
import morebg from '../../../../../assets/img/profile/morebg.png'

const AccountContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  background: #f7f7f7;
  align-items: center;
  overflow-y: scroll;
  flex-direction: column;
  .main {
    margin-top: .14rem;
  }
`

const Usr = styled.div `
  .usr {
    width: 3.36rem;
    height: .6rem;
    display: flex;
    margin-bottom: .1rem;
    .left {
      width: .6rem;
      height: .6rem;
      margin-right: .1rem;
      img {
        display: block;
        border-radius: 50%;
        width: .6rem;
        height: .6rem;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:first-child {
        font-size: .14rem;
        color: #191919;
        font-weight: 500;
      }
      p:last-child {
        font-size: .2rem;
        color: #707070;
        transform: scale(.5);
        position: relative;
        left: -25%;
        top: -10%;
      }
    }
  }
`
const Add = styled.div `
  width: 3.16rem;
  height: .58rem;
  display: flex;
  .addImg {
    width: .58rem;
    height: .58rem;
    background: url(${morebg});
    position: relative;
    img {
     display: inline-block;
     position: absolute;
     left: .21rem;
     top: .18rem;
    }
  }
  .addtxt {
    display: flex;
    align-items: center;
    margin-left: .1rem;
    p {
      font-size: .2rem;
      font-weight: 500;
      color: #89C3EB;
    }
  }
`
const Signout = styled.div `
  width: 3.36rem;
  height: .4rem;
  display: flex;
  background: #fff;
  margin-top: .14rem;
  border-radius: .2rem;
  align-items: center;
  p {
    margin-left: .2rem;
    
  }
`

export {
  AccountContainer,
	Usr,
	Add,
	Signout
}