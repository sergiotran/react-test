import Header from "@/components/header";
import IntakeNote from "@/app/layouts/components/intake-note";
import PatientDetail from "@/app/layouts/components/patient-detail";
import useResize from "../hooks/use-resize";

const BaseLayout = ({ children }) => {
	const [width] = useResize();

	return (
		<div className="h-full flex flex-col">
			<Header />
			<main className="flex flex-col md:flex-row flex-1 h-full w-full max-w-full">
				{width >= 992 && <IntakeNote />}
				{children}
				<PatientDetail />
			</main>
		</div>
	);
};

export default BaseLayout;
