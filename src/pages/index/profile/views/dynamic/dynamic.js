import styled from 'styled-components'
import dynamicbg from '../../../../../assets/img/profile/dynamicbg.png'

const DynamicContainer = styled.div `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "PingFang SC";
  align-items: center;
  overflow-y: scroll;
  header {
    width: 100%;
    height: 2.24rem;
	  background: url(${dynamicbg}) no-repeat;
	  position: relative;
    .header {
      weight: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }


  }
`
const Head = styled.div `
  width: 100%;
  height: .64rem;
  div {
    width: 100%;
    height: .26rem;
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .3rem;
    .dymc {
      font-size: .18rem;
      color: #fff;
      margin-left: .1rem;
    }
    .confirm {
      opacity: 0;
    }
  }
`
const Main = styled.div `
  width: 100%;
  margin-top: .1rem;
  .usrinfo {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .usrname {
      font-size: .14rem;
      position: relative;
      top: -.1rem;
    }
    .signature {
      font-size: .12rem;
      position: relative;
      top: -.1rem;
    }
    .label {
      background: #CFE9FC;
      border-radius: .15rem;
      padding: .04rem .1rem;
      color: #707070;
      font-size: .12rem;
      position: absolute;
      
    }
    .label-1 {
      top: 2%;
      right: 60%;
    }
    .label-2 {
      top: 15%;
      left: 68%;
    }
    .label-3 {
      top: 40%;
      right: 65%;
    }
    .label-4 {
      top: 60%;
      left: 65%;
    }
  }
`
const BodyContainer = styled.div `
  margin-top: 8%;
  .dynamic_item {
    width: 3.53rem;
    height: 2.56rem;
    margin-top: .08rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: .14rem;
    color: #707070;
    border-radius: .2rem;
    box-shadow: 0 .04rem .06rem rgba(0,0,0,0.16);
    .date {
      .left {
        margin-left: .2rem;
      }
      .weather{
        margin-left: .05rem;
      }
    }
    .content {
      p{
        margin-left: .2rem;
        margin-bottom: .18rem;
      }
    }
  }
`
export {
	DynamicContainer,
  Head,
  Main,
  BodyContainer
}