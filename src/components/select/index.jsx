import React from "react";
import useClickOutside from "@/app/hooks/use-click-outside";
import Button from "../button";
import classNames from "classnames";
import { AiOutlineDown } from "react-icons/ai";

const Select = ({ options = [], label, onSelect }) => {
	const selectListRef = React.useRef();
	const [isShowSelectList, setIsShowSelectList] = React.useState(false);

	const handleToggleSelectList = () => {
		setIsShowSelectList((prev) => !prev);
	};

	const handleCloseSelectList = () => {
		setIsShowSelectList(false);
	};

	useClickOutside(selectListRef, handleCloseSelectList);

	return (
		<div ref={selectListRef} className="relative">
			<Button
				className="rounded-md bg-slate-200 flex flex-row items-center gap-2"
				type="button"
				onClick={handleToggleSelectList}
			>
				{label} <AiOutlineDown className="mt-[2px]" />
				<div
					className={classNames({
						"absolute top-full right-0 w-auto py-3 transition-all z-50 bg-white rounded shadow-lg max-h-48 overflow-auto min-w-full": true,
						"invisible opacity-0": !isShowSelectList,
						"visible opacity-1": isShowSelectList,
					})}
				>
					{options.map((option) => {
						return (
							<div
								key={option.value}
								onClick={(e) => {
									e.preventDefault();
									onSelect(option.value);
								}}
                className="px-4 py-2 hover:bg-gray-200 transition w-full text-left"
							>
								{option.label}
							</div>
						);
					})}
				</div>
			</Button>
		</div>
	);
};

export default Select;
