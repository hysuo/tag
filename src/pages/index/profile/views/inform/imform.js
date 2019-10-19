import styled from 'styled-components'

const InformContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  header {
    width: 100%;
    height: .72rem;
    background: #fff;
    div {
      width: 100%;
      height: .26rem;
      padding: 0 .1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .3rem;
      .title {
        font-size: .18rem;
      }
      .confirm {
        opacity: 0;
      }
    }
  }
`


export {
  InformContainer
}