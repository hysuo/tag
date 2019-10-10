import styled from 'styled-components'

const SearchContent = styled.div`
    header{
        height:.44rem;
        display:flex;
        align-items:center;
        background:#fff;
        img{
            margin-left:.1rem;
            width:.16rem;
            height:.16rem;
        }
        p{
            margin-left:1.08rem;
            color:#191919;
            font-size:.18rem;
            font-weight:bold;
        }
    }
    .search{
        position: relative;
        input{
            margin:.12rem .3rem;
            border:0;
            width:3.16rem;
            height:.4rem;
            background:#E5E5E5;
            border-radius:.2rem;
            padding:.1rem .2rem;
            font-size:.14rem;
            color:#707070;
        }
        img{
            position:absolute;
            width:.2rem;
            height:.2rem;
            left:3.1rem;
            top:.22rem;
        }
        >div{
            display:flex;
            p{
                margin-left:.3rem;
                width:.62rem;
                height:.36rem;
                line-height:.36rem;
                text-align:center;
            }
            .active{
                background:#89C3EB;
                color:#fff;
                border-radius:.2rem;
            }
        }
    }
        
`
export{
    SearchContent
}