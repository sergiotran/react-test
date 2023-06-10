import React from "react";
import classNames from "classnames";
import Button from "@/components/button";
import styles from "./tabs.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import useClickOutside from "@/app/hooks/use-click-outside";
import useResize from "@/app/hooks/use-resize";
import useRefArray from "@/app/hooks/use-ref-array";

const Tabs = ({
	tabs = [],
	className = "",
	activeClassName = "",
	itemClassName = "",
	children,
	isAutoCollapse = false,
}) => {
	// Refs
	const tabRef = React.createRef();
	const moreBtnRef = React.createRef();

	// States
	const [moreItems, setMoreItems] = React.useState([]);
	const [itemRefs] = useRefArray(tabs);

	// Component props
	const classes = classNames({
		[className]: true,
	});

	const [selectedTab, setSelectedTab] = React.useState(0);
	const [isShowMore, setIsShowMore] = React.useState(false);
	const [width] = useResize();

	const handleChangeTab = (_name) => (e) => {
		e.preventDefault();
		const selectedTabIndex = tabs.findIndex(({ name }) => name === _name);
		setSelectedTab(selectedTabIndex);
	};

	const handleToggleShowMore = () => {
		setIsShowMore((prev) => !prev);
	};

	const handleCloseShowMore = () => {
		setIsShowMore(false);
	};

	useClickOutside(moreBtnRef, handleCloseShowMore);

	React.useEffect(() => {
		if (isAutoCollapse && moreBtnRef.current && itemRefs.length) {
			const tabRect = tabRef.current.getBoundingClientRect();
			const moreBtnRect = moreBtnRef.current.getBoundingClientRect();
			const itemRefRect = itemRefs
				.filter(({ current }) => {
					const itemRect = current.getBoundingClientRect();
					return (
						itemRect.left + itemRect.width >
						tabRect.left + tabRect.width - moreBtnRect.width
					);
				})
				.map(({ current }) => current.dataset.name);

			setMoreItems(itemRefRect);
		}
	}, [width, itemRefs]);

	return (
		<div className={classes}>
			{(() => {
				if (!tabs.length) {
					return <>No data</>;
				}

				const currentTabContent = tabs[selectedTab];
				const moreList = tabs.filter(({ name }) => moreItems.includes(name));

				return (
					<div className="flex flex-col h-full gap-3">
						<div ref={tabRef} className={styles.tab__items}>
							{tabs.map((tab, index) => {
								const classes = classNames({
									[itemClassName]: !!itemClassName,
									"invisible z-[-1]": moreItems.includes(tab.name),
								});

								return (
									<TabItem
										ref={itemRefs[index]}
										key={tab.name}
										{...tab}
										isActive={currentTabContent.name === tabs[index].name}
										onClick={handleChangeTab(tab.name, false)}
										activeClassName={activeClassName}
										className={classes}
									/>
								);
							})}
							{isAutoCollapse && (
								<TabItem
									ref={moreBtnRef}
									title={
										<>
											More <AiOutlineDown />
										</>
									}
									isActive={false}
									className={classNames({
										"visible !absolute right-0 top-0 flex items-center gap-2": true,
										[itemClassName]: !!itemClassName,
									})}
									onClick={handleToggleShowMore}
								>
									<div
										className={classNames({
											"absolute top-full right-0 w-auto p-3 shadow-lg rounded-md transition bg-white max-h-56 overflow-auto z-50 border	": true,
											"opacity-0 invisible": !isShowMore,
											"opacity-1 visible": isShowMore,
										})}
									>
										{moreList.map((tab) => {
											return (
												<TabItem
													key={tab.name}
													{...tab}
													isActive={tabs[selectedTab].name === tab.name}
													onClick={handleChangeTab(tab.name, true)}
													activeClassName="!border-0 bg-gray-100"
													className="w-full !border-0 hover:bg-gray-100 !px-4"
												/>
											);
										})}
									</div>
								</TabItem>
							)}
						</div>
						<div className="flex-1 overflow-auto flex flex-col">
							{children(currentTabContent.content)}
						</div>
					</div>
				);
			})()}
		</div>
	);
};

const TabItem = React.forwardRef(
	(
		{
			isActive,
			title,
			name,
			color,
			onClick,
			activeClassName = "",
			className = "",
			children,
		},
		ref
	) => {
		const classes = classNames({
			"!bg-transparent cursor-pointer px-2 py-3 flex flex-row flex-nowrap relative border-b-2 hover:text-primary hover:border-b-primary font-normal transition text-gray-500 rounded-none !px-2 text-sm 2xl:text-base": true,
			"!text-danger": !!color && color === "danger" && !isActive,
			"border-b-primary !text-primary hover:text-primary z-50": isActive,
			[activeClassName]: !!activeClassName && isActive,
			[className]: !!className,
		});

		return (
			<Button
				ref={ref}
				variant="base"
				onClick={onClick}
				className={classes}
				data-name={name}
			>
				{title}
				{children}
			</Button>
		);
	}
);

export default Tabs;
