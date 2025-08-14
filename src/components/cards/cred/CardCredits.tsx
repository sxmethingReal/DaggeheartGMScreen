import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from 'react-i18next'
import Translate from "../atoms/Translate.tsx"
import Card from "../atoms/Card.tsx";


function CardCredits() {
	const { t } = useTranslation();

	return (
		<Card cardType="Credits" title={t("cardAttributes.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>
		</Card>
	);
}

export default CardCredits;
