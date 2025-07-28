import { useTranslation } from "react-i18next";
import type { MasonryCardData } from "../../cards/masonry-card.interface";

export class MasonryBoardProperties {
  cards!: MasonryCardData[];
}

export const useMasonryBoard = (properties: MasonryBoardProperties) => {
  console.log("MasonryBoard renderizou");
  const { t } = useTranslation();

  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return { t, breakpointCols };
};
