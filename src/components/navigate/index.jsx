import Button from "../button";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navigate = ({ onPrevious, onNext }) => {
	return (
		<div className="flex flex-row justify-between">
			<Button
				className="border px-10 flex flex-row items-center gap-3"
				onClick={onPrevious}
				type="button"
			>
				<AiOutlineLeft /> Previous
			</Button>
			<Button
				className="border px-10 flex flex-row items-center gap-3"
				onClick={onNext}
				type="button"
			>
				Next <AiOutlineRight />
			</Button>
		</div>
	);
};

export default Navigate;
