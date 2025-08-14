import styled from "styled-components";

export type CardButtonProps = {
	color: string;
	right: string;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ $color: string; $right: string }>`
	padding: 0;
	position: absolute;
	top: 0.2rem;
	right: ${({ $right }) => $right};
	background: none;
	border: none;
	color: var(--color-accent-1);
	font-size: 1.2rem;
	display: inline-flex;
	cursor: pointer;
	transition: color 0.3s ease;

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 2.5px solid ${({ $color }) => $color};
		outline-offset: 1px;
	}

	&:hover {
		color: ${({ $color }) => $color};
	}
	@media print {
		display: none;
	}
`;

function CardButton({ color, right, children, ...rest }: CardButtonProps) {

	return (
		<StyledButton $color={color} $right={right} {...rest}>
			{children}
		</StyledButton>
	);
}

export default CardButton;
