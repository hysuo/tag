import styled from 'styled-components'

import border from 'assets/styles/border.js'

const SetChatcontainer = styled.div`
.showcloak{
        position:absolute;
        z-index: 100;
        width:100%;
        height:100%;
        background:#5D5C5C;
        opacity:.55;
    }
    .showtoast{
        position:absolute;
        z-index: 100;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:3.31rem;
        height:1.75rem;
        background:#fff;
        border-radius:.2rem;
        >div:nth-child(1){
            background:#89C3EB;
            width:2.97rem;
            height:1.07rem;
            border-radius:.2rem;
            margin-top:.2rem;
            margin-left:.17rem;
            padding:.3rem .13rem .27rem .14rem;
            p{
                font-size:.18rem;
                color:#fff;
            }
        }
        >div:nth-child(2){
            margin-top:.1rem;
            span:nth-child(1){
                color:#191919;
                font-size:.2rem;
                margin-left:.75rem;
            }
            span:nth-child(2){
                color:#FF6363;
                font-size:.2rem;
                margin-left:1.41rem;
            }
        }
    }
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