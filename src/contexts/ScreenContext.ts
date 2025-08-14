import { createContext, useContext  } from 'react';
import { type CardContextType } from './CardContext';

export type CardVector = {
	id: string;
	cards: CardContextType[];
};

type ScreenContextType = {
	vectors: CardVector[];
	//VectorNew: () => void;
	//VectorRemove: (vectorId: string) => void;
	//cardAdd: (vectorId: string, cardType: string) => void;
	cardRemove: (vectorId: string, cardId: string) => void;
	//moveCard: (vectorId: string, cardId: string, novaLinha: number, novaColuna: number) => void;
};

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export default function useScreen() {
	const context = useContext(ScreenContext);
	if (!context) {
		throw new Error('useScreen has to be used within <ScreenProvider>');
	}

	return context;
}
