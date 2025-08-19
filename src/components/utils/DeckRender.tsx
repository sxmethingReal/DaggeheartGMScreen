import type { Deck } from "../../contexts/BoardContext";
import { CardProvider } from "../../contexts/CardProvider";
import CardComponents from "../cards";
import styled from "styled-components";
import { AnimatePresence } from "motion/react";

const Deck = styled.div`
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	box-sizing: border-box;
	container-type: inline-size;
	z-index: calc(999 - 9*var(--deck-index));

	> * {
		flex: 0 0 auto;
	}
`

function DeckRender({ deck, index }: { deck: Deck; index: number }) {
	return (
		<Deck
			data-deck={deck.deckId}
			style={{ '--deck-index': index } as React.CSSProperties}
		>
			<AnimatePresence>
				{deck.cards.map((card) => {
					const CardComponent = CardComponents[card.cardType];
					const { cardId, cardType, deckId, ...extras } = card;

					return (
						<CardProvider
							key={card.cardId}
							cardId={card.cardId}
							cardType={card.cardType}
							deckId={card.deckId}
							{...extras}
						>
							<CardComponent/>
						</CardProvider>
					);
				})}
			</AnimatePresence>
		</Deck>
	);
}

export default DeckRender;
