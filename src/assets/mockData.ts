import type { Deck } from "../contexts/BoardContext";

export const mockDecks: Deck[] = [
	{
		deckId: "deck-1",
		cards: [
			{
				cardId: "card-1",
				cardType: "text",
				deckId: "deck-1",
				text: "teste",
			},
			{
				cardId: "card-2",
				cardType: "image",
				deckId: "deck-1",
				imageUrl: "https://elgin.vtexassets.com/arquivos/ids/155566/7897013534218_0.jpg?v=638658035211200000",
			},
			{
				cardId: "card-26",
				cardType: "image",
				deckId: "deck-1",
			},
			{
				cardId: "card-29",
				cardType: "image",
				deckId: "deck-1",
			},
			{
				cardId: "card-299",
				cardType: "enemy",
				deckId: "deck-1",
			},
			{
				cardId: "card-3",
				cardType: "fearTracker",
				deckId: "deck-1",
			}
		]
	},
	{
		deckId: "deck-2",
		cards: [
			{
				cardId: "card-4",
				cardType: "text",
				deckId: "deck-2",
			},
			{
				cardId: "card-5",
				cardType: "fearTracker",
				deckId: "deck-2",
			}
		]
	}
];