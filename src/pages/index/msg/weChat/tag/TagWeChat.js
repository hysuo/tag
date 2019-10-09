import styled from 'styled-components'

const TagChat = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    header{
        height:.44rem;
        background:#fff;
        display:flex;
        align-items:center;
        padding:.1rem;
        img:nth-child(1){
            width:.16rem;
            height:.16rem
        }
        p{
            flex:1;
            text-align:center;
            font-size:.18rem;
            color:#191919;
            font-weight:bold;
        }
        img:nth-child(3){
            width:.2rem;
            height:.2rem
        }
    }
    main{
        flex:1;
        overflow-y:auto;
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
        }
        .right{
            display:flex;
            justify-content:flex-end;
        }
    }
    footer{
        height:.5rem;
        line-height:.5rem;
        position: relative;
        input{
            width:3.36rem;
            height:.4rem;
            background:#fff;
            border:0;
            border-radius:.2rem;
            margin:0 .2rem;
            padding:.05rem .4rem .05rem .1rem; 
        }
        img{
            width:.4rem;
            height:.4rem;
            position:absolute;
            left:3.18rem;
            top:.05rem;
        }
    }
`
export{
    TagChat
}