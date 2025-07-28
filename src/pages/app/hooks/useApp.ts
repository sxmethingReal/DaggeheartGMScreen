import { useEffect, useState } from "react";
import type { MasonryCardData } from "../../../components/masonry/cards/masonry-card.interface";

export function useApp() {
  const [cards, setCards] = useState<MasonryCardData[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("masonry-cards-ficha-rpg");
    if (saved) setCards(JSON.parse(saved));
    else
      setCards([
        { id: "1", type: "default", props: {} },
        { id: "2", type: "hope", props: {} },
      ]);
  }, []);

  useEffect(() => {
    localStorage.setItem("masonry-cards-ficha-rpg", JSON.stringify(cards));
  }, [cards]);

  return {
    cards,
  };
}
