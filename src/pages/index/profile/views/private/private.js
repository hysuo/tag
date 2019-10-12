import styled from 'styled-components'

const PrivateContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  background: #f7f7f7;
  align-items: center;
  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    .antList {
      width: 3.36rem;
      height: .4rem;
      background: #fff;
      margin-top: .1rem;
      border-radius: .2rem;
      padding: 0 .15rem;
      .am-list-item {
        min-height: .4rem;
        height: .4rem;
        .am-list-content {
          font-size: .14rem;
        }
      }
     
    }
   
  }
  .bot {
      width: 3.36rem;
      height: .4rem;
      border-radius: .2rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .1rem;
      p {
        margin-left: .3rem;
      }
      span {
        margin-right: .2rem;
      }
    }
`

export {
    PrivateContainer
}