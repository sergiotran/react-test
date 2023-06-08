import React from "react";
import styles from "./intake-note.module.scss";
import IconButton from "@/components/icon-button";
import Button from "../button";
import { BiSearch, BiCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineEye, AiFillCheckCircle } from "react-icons/ai";
import Tabs from "@/components/tabs";

const MOCK_DATA = [
	{
		title: "Primary Code",
		status: "completed",
	},
	{
		title: "Person Present",
		status: "incomplete",
	},
	{
		title: "Chief Complaint",
		status: "incomplete",
	},
	{
		title: "History of Present IIIess",
		status: "incomplete",
	},
];

const IntakeNote = () => {
	const completedItems = () => {
		if (!MOCK_DATA.length) {
			return [];
		}

		return MOCK_DATA.filter(({ status }) => status === "completed");
	};

	const incompletedItems = () => {
		if (!MOCK_DATA.length) {
			return [];
		}

		return MOCK_DATA.filter(({ status }) => status === "incomplete");
	};

	const tabs = [
		{
			title: `All (${MOCK_DATA.length})`,
			name: "all",
			content: MOCK_DATA,
		},
		{
			title: `Completed (${completedItems().length})`,
			name: "completed",
			content: completedItems(),
		},
		{
			title: `Incomplete (${incompletedItems().length})`,
			name: "incomplete",
			content: incompletedItems(),
			color: "danger",
		},
	];

	return (
		<aside className={styles.intake__note}>
			<div>
				<div className={styles.intake__note__header}>
					<h3 className={styles.intake__note__title}>Intake Note</h3>
					<div className={styles.intake__note__btns}>
						<IconButton>
							<BiSearch />
						</IconButton>
						<IconButton>
							<FiSettings />
						</IconButton>
					</div>
				</div>
				<Button
					variant="primary"
					className="w-full font-light flex flex-row items-center justify-center gap-2 text-sm 2xl:text-base"
				>
					<AiOutlineEye className="w-[20px] h-[20px]" /> Preview note
				</Button>
			</div>
			<Tabs className="flex-1" tabs={tabs}>
				{(data) => (
					<div className="flex flex-col flex-1 h-full max-h-full overflow-auto">
						{data.map((item, index) => {
							return <NoteItem {...item} key={index} />;
						})}
					</div>
				)}
			</Tabs>
		</aside>
	);
};

const NoteItem = ({ title, status }) => {
	const statusIcon = React.useMemo(() => {
		if (status === "completed") {
			return (
				<AiFillCheckCircle className="w-[20px] h-[20px]" color="#53ad66" />
			);
		}

		return <BiCircle className="w-[20px] h-[20px]" />;
	}, [status]);

	return (
		<Button className="text-left hover:bg-gray-100 flex flex-row items-center gap-2 !px-2 !py-3 transition">
			{statusIcon} {title}
		</Button>
	);
};

export default IntakeNote;
