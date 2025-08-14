import { CardProvider } from "../../contexts/CardProvider.tsx";
import styled from "styled-components";

type CardProps = {
	cardType: string;
	title?: string;
	expand?: boolean
	children: React.ReactNode;
};

const StyledCard = styled.div`
	transition: 
		background-color,
		color,
		border-color;
	transition-duration: 0.4s;
	transition-timing-function: cubic-bezier(1, 0, 0.6, 1);

	position: relative;
	display: block;
	width: 30rem;
	border: 3px solid var(--color-accent-2);
	border-radius: 15px;
	background-color: var(--color-card-bg);
	box-sizing: border-box;
	margin: 0;
	z-index: 1;
`;

const StyledTitle = styled.h2`
	color: var(--color-accent-1);
	font-family: var(--font-title);
	padding: 0.3rem 0 0.3rem 0.6rem;
	margin: 0;
	border-bottom: 3px solid var(--color-accent-2);
`;

function Card({ cardType, title, expand, children }: CardProps) {

	return (
		<CardProvider cardType={cardType}>
			<StyledCard>
				{title && <StyledTitle>{title}</StyledTitle>}
				<div style={{ padding: expand ? "0" : "0.6rem" }}>{children}</div>
			</StyledCard>
		</CardProvider>
	);
}

export default Card;
