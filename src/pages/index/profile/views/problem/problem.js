import styled from 'styled-components'

const ProblemContainer = styled.div `
	width: 100%;
	height: 100%;
	display: flex;
	background: #f7f7f7;
	align-items: center;
	flex-direction: column;
	.main {
		margin-top: .24rem;
		textarea {
			border: none;
			border-radius: .2rem;
			padding-top: .2rem;
			padding-left: .2rem;
		}
		.add {
			width: .94rem;
			height: .94rem;
			position: relative;
			top: -1.04rem;
			left: .1rem;
		}
		
	}
	.submit {
			width: 1.6rem;
			height: .5rem;
			margin-top: 1.7rem;
			background: #89C3EB;
			border-radius: .2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			p {
				font-size: .18rem;
				color: #fff;
				font-weight: 600;
			}
		}
`

export {
		ProblemContainer
}