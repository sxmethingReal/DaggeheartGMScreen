import { BtnClose, BtnDrag } from "../cardButtons/";
import Card from "../atoms/Card.tsx";
import styled from "styled-components";

const StyledText = styled.textarea`
	width: 100%;
	min-height: 1.77rem;
	height: 1.77rem;
	resize: vertical;
	background: inherit;
	color: inherit;
	border: none;
	outline: none;
	font-size: 1rem;
	padding: 0.3rem;
	margin: 0;
	box-sizing: border-box;
	border-radius: 10px;
`;

function CardText() {

	return (
		<Card cardType="CardText" expand={true}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>

			<StyledText placeholder="..."></StyledText>
		</Card>
	);
}

export default CardText;
