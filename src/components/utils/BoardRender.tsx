import DeckRender from "./DeckRender";
import styled from "styled-components";
import useBoard from '../../contexts/BoardContext';

 const Board = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));
	width: 100%;
	gap: 0;
	height: 100vh;
	box-sizing: border-box;
 `

function BoardRender() {
	const { decks, cardAdd } = useBoard();

  function hi(){
    cardAdd('difficulty')
  }// deleta essa e o botão

	return (
		<Board>
		<button onClick={hi}/>
			{decks.map((deck, index) => (
				<DeckRender
					key={deck.deckId}
					deck={deck}
					index={index}
				/>
			))}
		</Board>
	);
}

export default BoardRender;
