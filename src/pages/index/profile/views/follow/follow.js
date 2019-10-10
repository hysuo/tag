import styled from 'styled-components'

const FllowContainer = styled.div `
	height: 100%;
  width: 100%;
  font-family: "PingFang SC";
  header {
    width: 100%;
    height: .64rem;
    background: #fff;
    div {
      width: 100%;
      height: .26rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: .4rem;
      .title {
        font-size: .18rem;
      }
      .confirm {
        opacity: 0;
      }
    } 
  }
`
const Input = styled.div `
  width: 100%;;
  height: .4rem;
  margin-top: .1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .search {
    width: 3.36rem;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: .24rem;
    background: #fff;
    div {
    width: 3.16rem;
    height: .26rem;
    background: #E5E5E5;
    margin-left: .1rem;
    border-radius: .12rem;
    display: flex;
    align-items: center; 
    span {
      margin-left: .08rem;
    }
    input {
      width: 2.66rem;
      height: 100%;
      margin-left: .08rem;
      border: none;
      background: #E5E5E5;
    }
    
  }
  }

`
const UsrList = styled.div `
  width: 100%;
  margin-top: .1rem;
  height: 100%;
  overflow-y: scroll;
  .usr_content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .usr_item {
      width: 3.36rem;
      height: .6rem;
      background: #fff;
      border-radius: .2rem;
      display: flex;
      align-items: center;
      margin-bottom: .1rem;
      .img {
        margin-left: .1rem;
      }
      .usr_right {
        height: .4rem;
        margin-left: .1rem;
        .usrname {
          font-size: .14rem;
          color: #191919;
        }
        .signature {
          display: inline-block;
          font-size: .2rem;
          color: #707070;
          transform: scale(.5);
          position: relative;
          left: -25%;
        }
      }
      .next {
        margin-left: 1rem;
      }
    }

  }
`

export {
  FllowContainer,
  Input,
  UsrList
}