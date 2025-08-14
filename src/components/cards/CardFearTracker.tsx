import { useState } from "react";
import { BtnClose, BtnDrag } from "../cardButtons/";
import Card from "../atoms/Card.tsx";
import { PlusButton, MinusButton } from "../deltaButtons";
import Skull from "../../assets/skull.png";
import styled from "styled-components";

const SkullRow = styled.span`
	display: inline-flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 3px;
	padding: 0 1rem;
	box-sizing: border-box;
`;

const SkullImg = styled.img<{ $active: boolean }>`
	width: 1.8rem;
	height: 1.8rem;
	user-select: none;
	opacity: ${props => (props.$active ? 1 : 0.3)};
	transition: opacity 0.2s;
`;

function CardFearTracker() {
	const [fearCount, setFearCount] = useState(0);
	const maxFear = 12;
	const minFear = 0;

	return (
		<Card cardType="CardFearTracker">
			<BtnClose right="0.2rem"/>
			<BtnDrag right="calc(100% - 1.4rem)"/>

			<SkullRow>
			<MinusButton state={fearCount} setState={setFearCount} min={minFear} max={maxFear}/>
				{[...Array(maxFear)].map((_, idx) => (
					<SkullImg
						key={idx}
						src={Skull}
						$active={idx < fearCount}
					/>
				))}
			<PlusButton state={fearCount} setState={setFearCount} min={minFear} max={maxFear}/>
			</SkullRow>
		</Card>
	);
}

export default CardFearTracker;
