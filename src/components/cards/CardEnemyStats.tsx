import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from 'react-i18next'
import Translate from "../utils/Translate.tsx"
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardEnemyStats() {
	const { t } = useTranslation();

	return (
		<Card cardType="CardEnemyStats" title={t("cardEnemyStats.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>

			<Table>
				<Head>
					<Translate i18nKey="cardEnemyStats.head.tier"/>
					<Translate i18nKey="cardEnemyStats.head.attack"/>
					<Translate i18nKey="cardEnemyStats.head.damage"/>
					<Translate i18nKey="cardEnemyStats.head.evasion"/>
					<Translate i18nKey="cardEnemyStats.head.threshold"/>
				</Head>
				<Body>
					<Translate i18nKey="cardEnemyStats.one.tier"/>
					<Translate i18nKey="cardEnemyStats.one.attack"/>
					<Translate i18nKey="cardEnemyStats.one.damage"/>
					<Translate i18nKey="cardEnemyStats.one.evasion"/>
					<Translate i18nKey="cardEnemyStats.one.threshold"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEnemyStats.two.tier"/>
					<Translate i18nKey="cardEnemyStats.two.attack"/>
					<Translate i18nKey="cardEnemyStats.two.damage"/>
					<Translate i18nKey="cardEnemyStats.two.evasion"/>
					<Translate i18nKey="cardEnemyStats.two.threshold"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEnemyStats.three.tier"/>
					<Translate i18nKey="cardEnemyStats.three.attack"/>
					<Translate i18nKey="cardEnemyStats.three.damage"/>
					<Translate i18nKey="cardEnemyStats.three.evasion"/>
					<Translate i18nKey="cardEnemyStats.three.threshold"/>
				</Body>
				<Body>
					<Translate i18nKey="cardEnemyStats.four.tier"/>
					<Translate i18nKey="cardEnemyStats.four.attack"/>
					<Translate i18nKey="cardEnemyStats.four.damage"/>
					<Translate i18nKey="cardEnemyStats.four.evasion"/>
					<Translate i18nKey="cardEnemyStats.four.threshold"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardEnemyStats;
