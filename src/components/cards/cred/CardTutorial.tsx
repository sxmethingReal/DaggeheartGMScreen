import { BtnClose, BtnDrag } from "../buttons/";
import Card from "../atoms/Card.tsx";

function CardTutorial() {

	return (
		<Card title="Atributos de Personagem">
			<BtnClose right="0.2rem"/>

			<BtnDrag right="1.4rem"/>
		</Card>
	);
}

export default CardTutorial;
