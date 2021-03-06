import styled from 'styled-components'
import border from 'assets/styles/border.js'

const MessageContainer = styled.ul`
    flex:1;
    background:#fff;
    overflow-y:auto;
    border-top-left-radius:.3rem;
    border-top-right-radius:.3rem;
    position: relative;
    .blank{
    }
    .none{
        position:absolute;
        top:3.7rem;
        left:1.26rem
    }
`
const BorderContainer = border({
    width: '0 0 1px 0',
    comp:styled.li`
        height:.6rem;
        padding:0.05rem 0;
        margin:0 .2rem;
        display:flex;
        align-items:center;
        img{
            width:.44rem;
            height:.44rem;
            border-radius:50%;
            margin-right:.1rem;
        }
        >div:nth-child(2){
            width:60%;
            p:nth-child(1){
                font-size:.18rem;
                color:#191919;
            }
            p:nth-child(2){
                font-size:.14rem;
                color:#A7A7A7;
            }
        }
        div:nth-child(3){
            font-size:.14rem;
            color:#A7A7A7;
        }
    `
})

export{
    MessageContainer,
    BorderContainer
}