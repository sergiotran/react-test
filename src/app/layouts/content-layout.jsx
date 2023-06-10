import Button from "@/components/button";
import { BsArrowLeft } from "react-icons/bs";

const ContentLayout = ({
	title,
	subtitle,
	backOption = { src: "#", label: "Back" },
	children,
}) => {
	return (
		<div className="p-5 flex flex-col gap-3 overflow-auto flex-1">
			<BackButton {...backOption} />
			<h2 className="text-2xl font-bold m-0 leading-none">{title}</h2>
			<h4 className="text-sm text-gray-400">{subtitle}</h4>
			<div className="flex-1 flex flex-col">{children}</div>
		</div>
	);
};

const BackButton = ({ label, src }) => (
	<Button href={src} className="inline-flex align-baseline flex-row items-center !p-0 gap-3 text-primary flex-nowrap">
		<BsArrowLeft /> {label}
	</Button>
);

export default ContentLayout;
