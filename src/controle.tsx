import useScreen from "./contexts/ScreenContext";

export default function CardControl() {
  const { vectors, cardAdd, cardRemove } = useScreen();

  // Supondo que só existe o vector manual "vector-1"
  const vectorId = vectors[0]?.id;

  return (
    <div>
      <button
        onClick={() => cardAdd(vectorId, 'Meu Card')}
        disabled={!vectorId}
      >
        Adicionar Card ao vector-1
      </button>
      <ul>
        {vectors[0]?.cards.map(card => (
          <li key={card.id}>
            {card.cardType} (id: {card.id})
            <button onClick={() => cardRemove(vectorId, card.id)}>
              Remover Card
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}