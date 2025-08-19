import styled from "styled-components";
import { AnimatePresence, motion } from "motion/react"

type CardProps = {
	title?: string;
	expand?: boolean;
	resize?: string;
	index?: string
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledCard = styled(motion.div)<{ $resize?: string }>`
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
	margin: 0.5rem auto;

	${props => props.$resize && `
		resize: ${props.$resize};
		overflow: hidden;
		min-width: 9rem;
		width: fit-content;
		max-width: 98vw;
		min-height: 2.2344rem;
	`}
`;

const StyledTitle = styled.h2`
	color: var(--color-accent-1);
	font-family: var(--font-title);
	padding: 0.3rem 0 0.3rem 0.6rem;
	margin: 0;
	border-bottom: 3px solid var(--color-accent-2);
`;

function Card({ title, expand, resize, children, ...props }: CardProps) {

	return (
		<StyledCard
			$resize={resize}
			initial={{ opacity: 0, scale: 0.4}}
			animate={{ opacity: 1, scale: 1}}
			exit={{ opacity: 0, scale: 0.4}}
			transition={{ duration: 0.3 }}
			{...props}
		>
			{title && <StyledTitle>{title}</StyledTitle>}
			<div style={{ padding: expand ? "0" : "0.6rem" }}>{children}</div>
		</StyledCard>
);
}

export default Card;
