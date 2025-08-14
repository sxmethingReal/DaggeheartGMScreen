import { CardContext, type CardContextType } from "./CardContext";
import { v4 as uuid } from 'uuid';

type CardProviderProps<Extras = {}> = {
	cardType: string;
	vectorId: string;
	children: React.ReactNode;
} & Extras;

export function CardProvider<Extras = {}>({ cardType, vectorId, children, ...extras }: CardProviderProps<Extras>) {
	const card: CardContextType<Extras> = {
		id: "crd-" + uuid(),
		cardType,
		vectorId,
		...extras as Extras,
	};

	return (
		<CardContext.Provider value={card}>
			{children}
		</CardContext.Provider>
	);
}
