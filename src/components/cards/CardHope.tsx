import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from 'react-i18next'
import Translate from "../utils/Translate.tsx"
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardHope() {
	const { t } = useTranslation();

	return (
		<Card cardType="CardHope" title={t("cardHope.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>
			
			<p><Translate i18nKey="cardHope.acquire"/></p>
			<p><Translate i18nKey="cardHope.usage"/></p>

			<List>
				<Translate i18nKey="cardHope.list.help"/>
				<Translate i18nKey="cardHope.list.experience"/>
				<Translate i18nKey="cardHope.list.class"/>
				<Translate i18nKey="cardHope.list.tagTeam"/>
			</List>
		</Card>
	);
}

export default CardHope;
