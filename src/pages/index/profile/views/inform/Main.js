import styled from 'styled-components'

const Main = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 3.36rem;
    height: .4rem;
    border-radius: .2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .1rem;
    p {
      margin-left: .2rem;
    }
    span {
      margin-right: .2rem;
    }
  }
`
export {
  Main
}