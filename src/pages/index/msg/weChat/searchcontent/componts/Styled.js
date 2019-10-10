import styled from 'styled-components'

const AllContainer =styled.div`
    li{
            list-style:none;
            margin-top:.2rem;
            margin-left:.1rem;
            margin-right:.1rem;
            display:flex;
            align-items:flex-start;
            img{
                width:.4rem;
                height:.4rem;
                border-radius:50%;
            }
            span{
                display:inline-block;
                overflow-wrap: break-word;
                margin-left:.05rem;
                margin-right:.05rem;
                max-width:3rem;
                background:#fff;    
                border-radius:.12rem;
                padding:.05rem .1rem;
                font-size:.18rem;
                color:#191919;
            }
            .active{
                background:#89C3EB;
            }
        }
`
const DateContainer = styled.ul`
    li{
            list-style:none;
            margin-top:.2rem;
            margin-left:.1rem;
            margin-right:.1rem;
            display:flex;
            align-items:flex-start;
            img{
                width:.4rem;
                height:.4rem;
                border-radius:50%;
            }
            span{
                display:inline-block;
                overflow-wrap: break-word;
                margin-left:.05rem;
                margin-right:.05rem;
                max-width:3rem;
                background:#fff;    
                border-radius:.12rem;
                padding:.05rem .1rem;
                font-size:.18rem;
                color:#191919;
            }
            .active{
                background:#89C3EB;
            }
        }
    .toast{
            margin:.2rem;
            font-size:.2rem;
            color:#191919;
        }
`
export{
    AllContainer,
    DateContainer
}