import styled from 'styled-components'

const Noconfirm = styled.div `
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
    .title {
      font-size: .18rem;
    }
    .confirm {
      opacity: 0;
    }
  }
`
export {
  Noconfirm
}