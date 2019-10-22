import styled from 'styled-components'

const FllowContainer = styled.div `
	height: 100%;
  width: 100%;
  font-family: "PingFang SC";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    width: 100%;
    height: 1rem;
    background: #fff;
    div {
      width: 100%;
      height: .26rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: .4rem;
      span {
        margin-left: .1rem;
      }
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
  width: 3.36rem;
  height: .4rem;
  margin-top: .1rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
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
  /* display: flex;
  flex: 1;
  flex-direction: column; */
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
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        margin-left: .1rem;
        img {
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          display: block;
        }
      }
      .usr_right {
        flex: 1;
        height: .4rem;
        margin-left: .1rem;
        .usrname {
          font-size: .14rem;
          color: #191919;
        }
        .signature {
          width: 100%;
          display: inline-block;
          font-size: .2rem;
          color: #707070;
          transform: scale(.5);
          position: relative;
          left: -25%;
        }
      }
      .next {
        margin-right: .2rem;
      }
    }

  }
`

export {
  FllowContainer,
  Input,
  UsrList
}