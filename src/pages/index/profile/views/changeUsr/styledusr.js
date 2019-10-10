import styled from 'styled-components'

const ChangeusrContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Head = styled.div `
  width: 100%;
  height: .64rem;
  background: #fff;
  div {
    width: 100%;
    height: .26rem;
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .3rem;
    .usr {
      font-size: .18rem;
    }
    .confirm {
      font-size: .12rem;
      color: #61ABFF;
    }
  }
`
const Input = styled.div `
  width: 3.36rem;
  height: .4rem;
  border-radius: .24rem;
  background: #fff;
  margin-top: .1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 2.86rem;
    height: .26rem;
    background: #E5E5E5;
    margin-left: .1rem;
    border-radius: .12rem;
    input {
      width: 2.66rem;
      height: 100%;
      margin-left: .08rem;
      border: none;
      background: #E5E5E5;
    }
    
  }
`
const Span = styled.span `
  margin-right: .1rem;
`

export {
  ChangeusrContainer,
  Head,
  Input,
  Span
}