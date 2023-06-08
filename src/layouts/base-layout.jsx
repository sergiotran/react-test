import Footer from "@/components/footer";
import Header from "@/components/header";
import IntakeNote from "@/components/intake-note";

const BaseLayout = ({ children }) => {
	return (
		<div className="h-full flex flex-col">
			<Header />
			<main className="flex flex-row flex-1">
				<IntakeNote />
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default BaseLayout;
