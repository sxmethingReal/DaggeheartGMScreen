import Masonry from "react-masonry-css";
import "./style/MasonryBoard.css";
import type { MasonryCardData } from "../cards/masonry-card.interface";
import {
  MasonryBoardProperties,
  useMasonryBoard,
} from "./hooks/useMasonryBoard";
import { CDefault } from "../cards/CDefault";

export function MasonryBoard(properties: MasonryBoardProperties) {
  const hook = useMasonryBoard(properties);

  const renderCard = (card: MasonryCardData) => {
    switch (card.type) {
      case "default":
        return <CDefault key={card.id} {...card.props} />;
      // Adicione outros tipos de card aqui se necessário
      default:
        return null;
    }
  };

  return (
    <Masonry
      breakpointCols={hook.breakpointCols}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {properties.cards.map(renderCard)}
    </Masonry>
  );
}
