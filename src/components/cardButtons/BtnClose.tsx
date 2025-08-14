import CardButton, { type CardButtonProps } from "../atoms/CardButton";
import { IoClose } from "react-icons/io5";
import useCard from "../../contexts/CardContext";
import useScreen from "../../contexts/ScreenContext";

type BtnCloseProps = Omit<CardButtonProps, "color" | "children">;

function BtnClose(props: BtnCloseProps) {
	const card = useCard();
	const { cardRemove } = useScreen();

	return (
			<CardButton color="var(--color-btn-close)" onClick={() => cardRemove(card)} {...props}>
				<IoClose/>
			</CardButton>
	);
}

export default BtnClose;
