import styled from 'styled-components'

const PhotoShow = styled.div`
    >div:first-child{
        width:100%;
        height:100%;
        position: absolute;
        background:rgba(93,92,92,1);
        opacity:0.55;
        z-index:555;
        display:none;
        &.active{
            display:block;
        }
    }
    >div:nth-child(2){
        width:2.6rem;
        height:2.9rem;
        background:rgba(137,195,235,1);
        box-shadow:0 .03rem .06rem rgba(112,112,112,0.16);
        opacity:1;
        border-radius:.3rem;
        position: absolute;
        top:1.89rem;
        left:.58rem;
        z-index:999;
        padding:.7rem .52rem;
        display:none;
        &.active{
            display:block;
        }
        >div{
            width:1.56rem;
            height:.4rem;
            background:rgba(255,255,255,1);
            box-shadow:0 .03rem .06rem rgba(112,112,112,0.42);
            border-radius:.23rem;
            display:flex;
            margin-bottom:.2rem;
            align-items:center;
            font-size:.14rem;
            color:rgba(25,25,25,1);
            img{
                width:.24rem;
                height:.2rem;
                margin: 0 .2rem;
            }
        }
        >div:last-child{
            p{
                margin-left:.64rem;
            }
            
        }
    }
    
`
export{
    PhotoShow
}