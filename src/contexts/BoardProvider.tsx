import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BoardContext, type Deck } from './BoardContext';
import { type CardContextType } from './CardContext';
import { mockDecks } from '../assets/mockData';

export function BoardProvider({ children }: { children: React.ReactNode }) {
	const [ decks, setDecks ] = useState<Deck[]>(mockDecks);

	const setCardCursor = (active: boolean) => {
		if (active) {
			document.body.classList.add('card-cursor');
		} else {
			document.body.classList.remove('card-cursor');
		}
	};

	function cardAdd(cardType: string) {
		setCardCursor(true);

		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			const deckElement = target.closest('[data-deck]');

			if (!deckElement) {
				return;
			}

			document.removeEventListener('click', handleClick);
			setCardCursor(false);

			const deckId = deckElement.getAttribute('data-deck')!;

			const newCard = cardCreate(cardType, deckId);

			const position = getDeckPosition(event);

			cardPlace(newCard, position);
		};

		document.addEventListener('click', handleClick);
	}

	function getDeckPosition(event: MouseEvent): number {
		const target = event.target as HTMLElement;
		const deckElement = target.closest('[data-deck]')!;
		const cards = Array.from(deckElement.children) as HTMLElement[];

		if (cards.length === 0) {
			return 0;
		}

		let closestCard: HTMLElement | null = null;
		let minDistance = Infinity;

		// Determines relative position within Deck
		cards.forEach(card => {
			const rect = card.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			const dx = event.clientX - centerX;
			const dy = event.clientY - centerY;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < minDistance) {
				minDistance = distance;
				closestCard = card;
			}
		});

		const cardIndex = cards.indexOf(closestCard!);
		const rect = closestCard!.getBoundingClientRect();

		if (event.clientY < rect.top + rect.height / 2) {
			return cardIndex;
		} else {
			return cardIndex + 1;
		}
	}

	function cardCreate<Extras = {}>(
		cardType: string, 
		deckId: string, 
		extras?: Extras
	): Omit<CardContextType<Extras>, 'updateExtras'> {
		const cardId = 'crd-' + uuid();

		return {
			cardId,
			cardType,
			deckId,
			...extras,
		} as Omit<CardContextType<Extras>, 'updateExtras'>;
	}

	function cardPlace(card: ReturnType<typeof cardCreate>, position: number): void {
		setDecks(prevDecks => 
			prevDecks.map(deck => {
			if (deck.deckId === card.deckId) {
				const newCards = [...deck.cards];
				newCards.splice(position, 0, card);
				return { ...deck, cards: newCards };
			}
				return deck;
			})
		);
	}

	function cardRemove(deckId: string, cardId: string) {
		setDecks(prev => prev.map(deck =>
			deck.deckId === deckId
				? {
					...deck,
					cards: deck.cards.filter(card => card.cardId !== cardId)
				}
				: deck
		));
	}

	function cardMove(card: CardContextType) {
		setCardCursor(true);

		const handleClick = (event: MouseEvent) => {

			const target = event.target as HTMLElement;
			const deckElement = target.closest('[data-deck]');

			if (!deckElement) {
				return;
			}

			document.removeEventListener('click', handleClick);
			setCardCursor(false);

			cardRemove(card.deckId, card.cardId)

			const newDeckId = deckElement.getAttribute('data-deck')!;
			card.deckId = newDeckId;

			const position = getDeckPosition(event);

			cardPlace(card, position);
		};

		document.addEventListener('click', handleClick);
	}

	function updateCardExtras(
		card: CardContextType, 
		key: string, 
		value: any
	) {
		setDecks(prevDecks => 
			prevDecks.map(deck => {
				if (deck.deckId === card.deckId) {
					return {
						...deck,
						cards: deck.cards.map(c => 
							c.cardId === card.cardId ? { ...c, [key]: value } : c
						)
					};
				}
				return deck;
			})
		);
	};

	const value = { decks, cardAdd, cardRemove, cardMove, updateCardExtras }

	return (
		<BoardContext.Provider value={value}>
			{children}
		</BoardContext.Provider>
	);
}
