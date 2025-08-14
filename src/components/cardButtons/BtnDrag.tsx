import CardButton, { type CardButtonProps } from "../atoms/CardButton.tsx";
import { RiDragDropLine } from "react-icons/ri";

type BtnDragProps = Omit<CardButtonProps, "color" | "children">;

function BtnDrag(props: BtnDragProps) {

	return (
			<CardButton color="var(--color-btn-drag)" {...props}>
				<RiDragDropLine/>
			</CardButton>
	);
}

export default BtnDrag;
