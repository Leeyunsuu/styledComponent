import React from "react";
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
	display: flex;
`;

const animation = keyframes`
0%{
  transform:rotate(0deg);
  border-radius:0px;
}
 50% {
  border-radius:100px;
}
100%{
transform:rotate(360deg);
  border-radius:0px;
}`;

const Eimoji = styled.span`
	font-size: 30px;
`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	background-color: tomato;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${animation} 1s linear infinite;
	${Eimoji} {
		&:hover {
			font-size: 48px;
		}
	}
`;

function App() {
	return (
		<Wrapper>
			<Box>
				<Eimoji>🥰</Eimoji>
			</Box>
			<Eimoji>Hello</Eimoji>
		</Wrapper>
	);
}

export default App;
