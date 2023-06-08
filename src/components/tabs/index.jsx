import React from "react";
import classNames from "classnames";
import Button from "@/components/button";

const Tabs = ({ tabs = [], className = "", children }) => {
	const classes = classNames({
		[className]: true,
	});
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleChangeTab = (index) => (e) => {
		e.preventDefault();
		setSelectedTab(index);
	};

	return (
		<div className={classes}>
			{(() => {
				if (!tabs.length) {
					return <>No data</>;
				}

				const currentTabContent = tabs[selectedTab];

				return (
					<div className="flex flex-col h-full gap-3">
						<div className="flex flex-row border-b-2 justify-between">
							{tabs.map((tab, index) => (
								<TabItem
									key={index}
									{...tab}
									isActive={index === selectedTab}
									onClick={handleChangeTab(index)}
								/>
							))}
						</div>
						<div className="flex-1">{children(currentTabContent.content)}</div>
					</div>
				);
			})()}
		</div>
	);
};

const TabItem = ({ isActive, title, color, onClick }) => {
	const classes = classNames({
		"cursor-pointer px-2 py-3 flex flex-row flex-nowrap relative border-b-2 mb-[-2px] hover:text-primary hover:border-b-primary font-normal transition text-gray-500 rounded-none !px-2 text-sm 2xl:text-base": true,
		"!text-danger": !!color && color === "danger" && !isActive,
		"border-b-primary !text-primary hover:text-primary !font-bold": isActive,
	});

	return (
		<Button variant="base" onClick={onClick} className={classes}>
			{title}
		</Button>
	);
};

export default Tabs;
