import { useState } from "react";
import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from 'react-i18next'
import Card from "../atoms/Card.tsx";
import styled from "styled-components";
import { TbPhotoShare } from "react-icons/tb";

const StyledInput = styled.input`
	width: 83%;
	height: 1.77rem;
	background: inherit;
	color: inherit;
	border: none;
	outline: none;
	font-size: 1rem;
`;

const StyledView = styled.img`
	display: none;
	width: 100%;
	border-radius: 12px;
`;

const StyledButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: var(--color-plus);
	background: inherit;
	border: none;
	margin: 0;
	padding: 0;
	cursor: pointer;
	font-size: 1.5rem;
`;

const StyledRow = styled.span`
	display: inline-flex;
	width: 100%;
	align-items: center;
	gap: 5px;
	padding: 0 0.4rem;
`;

function CardImage() {
	const { t } = useTranslation();

	return (
		<Card cardType="Image" expand={true}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.4rem"/>

			<StyledRow>
				<StyledButton>
					<TbPhotoShare/>
				</StyledButton>
				<StyledInput placeholder={t("cardImage.placeHolder")}/>
			</StyledRow>
			<StyledView src=""/>
		</Card>
	);
}

export default CardImage;
