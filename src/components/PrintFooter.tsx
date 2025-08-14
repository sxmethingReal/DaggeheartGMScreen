import styled from "styled-components";

const StyledFooter = styled.footer`
	display: none;
	width: calc(100vw - 4rem);
	height: 1.5rem;
	position: fixed;
	background-color: var(--color-accent-2);
	color: var(--color-accent-1);
	justify-content: space-between;
	padding: 0 2rem;
	bottom: 0;
	z-index: 100;

	@media print {
		display: flex;
	}
`;

function PrintFooter() {

	return (
		<StyledFooter>
			<strong>Daggerheart GM Screen</strong> <strong>by Jutier</strong>
		</StyledFooter>
	);
}

export default PrintFooter;
