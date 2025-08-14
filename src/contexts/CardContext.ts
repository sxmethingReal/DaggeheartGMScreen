import { createContext, useContext  } from 'react';

export type CardContextType<Extras = {}> = {
	id: string;
	cardType: string;
	vectorId: string;
} & Extras;

export const CardContext = createContext<CardContextType | undefined>(undefined);

export default function useCard() {
	const context = useContext(CardContext);
	if (!context) {
		throw new Error('useCard has to be used within <CardProvider>');
	}

	return context;
}
