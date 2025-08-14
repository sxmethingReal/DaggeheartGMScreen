import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from 'react-i18next'
import Translate from "../utils/Translate.tsx"
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardConditions() {
	const { t } = useTranslation();

	return (
		<Card cardType="CardConditions" title={t("cardConditions.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>

			<List>
				<Translate i18nKey="cardConditions.hidden"/>
				<Translate i18nKey="cardConditions.vulnerable"/>
				<Translate i18nKey="cardConditions.restricted"/>
			</List>
		</Card>
	);
}

export default CardConditions;
