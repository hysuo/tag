import styled from 'styled-components'

import border from 'assets/styles/border.js'

const SetChatcontainer = styled.div`
  header{
    display:flex;
    align-items:center;
    height:.44rem;
    background:#fff;
    >div{
      width:10%;
      text-align:center;
      img{
        width:.16rem;
        height:.16rem;
      }
    } 
    p{
      flex:1;
      font-size:.2rem;
      color:#191919;
      text-align:center;
    }
  }
  main{
    ul{
      li{
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:.45rem;
        margin:.1rem .2rem;
        padding:.1rem .2rem;
        background:#fff;
        color:#000000;
        font-size:.18rem;
        border-radius:.3rem;
        img{
          width:.16rem;
          height:.16rem;
        }
      }
      .switch{
        display:block;
        height: 1.1rem;
        padding:.1rem 0.05rem;
        /* >div:nth-child(1){
          padding-bottom:.1rem;
        }
        >div:nth-child(2){
          padding-top:.1rem;
        } */
      }
      .clear{
        >a:nth-child(1){
          width:100%;
         >p{
          display:flex;
          align-items:center;
          justify-content:space-between;
         }
        }
        >a:nth-child(1)::before{
          border:0;
        }
      }
    }
  }
`
const BorderContainer = border({
  width:' 0 0 1px 0',
  comp:styled.div``
})
export{
  SetChatcontainer,
  BorderContainer
}