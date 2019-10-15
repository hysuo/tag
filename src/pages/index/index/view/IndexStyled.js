import styled from 'styled-components'

const IndexContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    .wrap {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .5;
    position: absolute;
    z-index:2;
    
	}
  .content {
    width: 2.6rem;
    height: 2.9rem;
    background: #89C3EB;
    border-radius: .3rem;
    position: absolute;
    z-index: 999;
    top: 21%;
    left: 16%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.headimg {
			position: absolute;
			top: -17%;
		}
		.photograph{
			width: 1.56rem;
			height: .4rem;
			background: #fff;
			border-radius: .24rem;
			display: flex;
			align-items: center;
			img {
				margin-left: .2rem;
			}
			p {
				margin-left: .2rem;
			}
		}
		.gallery{
			width: 1.56rem;
			height: .4rem;
			background: #fff;
			border-radius: .24rem;
			margin-top: .2rem;
			display: flex;
			align-items: center;
			img {
				margin-left: .2rem;
			}
			p {
				margin-left: .2rem;
			}
		}
		.cancel{
			width: 1.56rem;
			height: .4rem;
			background: #fff;
			border-radius: .24rem;
			margin-top: .2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
  }
	.sexcontent {
		height: 3.38rem;
	}
	.nocontent {
		display: none;
	}
    main{
        flex:1;
        overflow-y:auto;
        .activeM{
            position: absolute;
            top:0;
            left:0;
            z-index:2;
            width:100%;
            height:100%;
            background:rgba(93,92,92,1);
            opacity:0.55;
        }
        .publishD{
            position: absolute;
            left:.99rem;
            top:5.37rem;
            z-index: 999;
            opacity:1;
            display:none;
            p{
                font-size:.2rem;
                color:#fff;
                position: absolute;
                top: .56rem;
                left: .1rem;
                font-weight: bold;
                transform: scale(.5);
                width: 1rem;
                margin-left: -.2rem;
            }
        }
        .publishT{
            position: absolute;
            left:2.09rem;
            top:5.37rem;
            z-index: 999;
            opacity:1;
            display:none;
            p{
                font-size:.2rem;
                color:#fff;
                position: absolute;
                top: .56rem;
                left: .1rem;
                font-weight: bold;
                transform: scale(.5);
                width: 1rem;
                margin-left: -.2rem;
            }
        }
        .activeTD{
            display:block;
        }
    }
    footer{
        height:.5rem;
        background:#FFFFFF;
        display:flex;
        box-shadow: #707070 10px 10px 10px 5px ;
        div{
            width:20%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:#707070;
            p{
                font-size:.12rem;
                overflow:hidden;
                transform:scale(0.8)
            }
            &.active{
                img{
                    background:#89C3EB;
                    border-radius:25%
                }
                color:#89C3EB;
                }
            &.activeP{
                z-index:999;
            }
        }
    }
`
export{
	IndexContainer
}