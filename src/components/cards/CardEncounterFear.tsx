import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../utils/Translate.tsx";
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardEncounterFear() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardEncounterFear.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>

			<Table>
				<Head>
					<Translate i18nKey="cardEncounterFear.head.encounter"/>
					<Translate i18nKey="cardEncounterFear.head.fear"/>
					<Translate i18nKey="cardEncounterFear.head.desc"/>
				</Head>
				<Body>
					<Translate i18nKey="cardEncounterFear.incidental.encounter"/>
					<Translate i18nKey="cardEncounterFear.incidental.fear"/>
					<Translate i18nKey="cardEncounterFear.incidental.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEncounterFear.minor.encounter"/>
					<Translate i18nKey="cardEncounterFear.minor.fear"/>
					<Translate i18nKey="cardEncounterFear.minor.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEncounterFear.standard.encounter"/>
					<Translate i18nKey="cardEncounterFear.standard.fear"/>
					<Translate i18nKey="cardEncounterFear.standard.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEncounterFear.major.encounter"/>
					<Translate i18nKey="cardEncounterFear.major.fear"/>
					<Translate i18nKey="cardEncounterFear.major.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEncounterFear.climactic.encounter"/>
					<Translate i18nKey="cardEncounterFear.climactic.fear"/>
					<Translate i18nKey="cardEncounterFear.climactic.desc"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardEncounterFear;
