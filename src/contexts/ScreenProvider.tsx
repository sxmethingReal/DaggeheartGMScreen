import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ScreenContext, type CardVector } from './ScreenContext';
import { type CardContextType } from './CardContext';

export function ScreenProvider({ children }: { children: React.ReactNode }) {

	const [vectors, setVectors] = useState<CardVector[] | undefined>(undefined);

	// must define functions
	const value = { vectors} // + methods

	return (
		<ScreenContext.Provider value={value}>
			{children}
		</ScreenContext.Provider>
	);
}
