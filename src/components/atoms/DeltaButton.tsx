import styled from "styled-components";

export type DeltaButtonProps = {
	icon: React.ReactNode;
	color: string;
	delta: number;
	state: number;
	setState: (value: number) => void;
	min?: number;
	max?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ $color: string }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	color: var(--color-text);
	border: 2px solid ${({ $color }) => $color};
	width: 1.2rem;
	height: 1.2rem;
	aspect-ratio: 1;
	border-radius: 50%;
	background: none;
	cursor: pointer;
	margin: 0 4px;
	padding: 0;

	&:hover {
		color: ${({ $color }) => $color};
	}
`;

function DeltaButton({ color, icon, delta, state, setState, min = -Infinity, max = Infinity, onClick, ...rest }: DeltaButtonProps) {
	function handleClick() {
		state += delta;
		if (state < min) state = min;
		if (state > max) state = max;
		setState(state)
	}
	
	return (
		<StyledButton $color={color} onClick={handleClick} {...rest}>
			{icon}
		</StyledButton>
	);
}

export default DeltaButton;
