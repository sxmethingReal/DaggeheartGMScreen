import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from 'react-i18next'
import Translate from "../utils/Translate.tsx"
import Card from "../atoms/Card.tsx";

function CardEnemy() {
	const { t } = useTranslation();

	return (
		<Card cardType="CardEnemy" title={t("cardEnemy.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>
		</Card>
	);
}

export default CardEnemy;
