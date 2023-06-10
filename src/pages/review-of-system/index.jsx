import ContentLayout from "@/app/layouts/content-layout";
import Tabs from "@/components/tabs";
import ConstilutionalForm from "./forms/constilutional";
import EyesForm from "./forms/eyesForm";
import OtorhinolaryngologyForm from "./forms/otorhinolaryngology";
import CardiovascularForm from "./forms/cardiovascular";
import RespiratoryForm from "./forms/respiratory";

const ReviewOfSystemScreen = () => {
	const tabs = [
		{
			title: `Constilutional`,
			name: "constilutional",
			content: <ConstilutionalForm />,
		},
		{
			title: `Eyes`,
			name: "eyes",
			content: <EyesForm />,
		},
		{
			title: `Ears, Nose, Mouth & Throat`,
			name: "otorhinolaryngology",
			content: <OtorhinolaryngologyForm />,
		},
		{
			title: "Cardiovascular",
			name: "cardiovascular",
			content: <CardiovascularForm />,
		},
		{
			title: "Respiratory",
			name: "respiratory",
			content: <RespiratoryForm />,
		},
		{
			title: "Musculoskeletal",
			name: "musculoskeletal",
			content: <RespiratoryForm />,
		},
		{
			title: "Gastrointestinal",
			name: "gastrointestinal",
			content: <RespiratoryForm />,
		},
		{
			title: "More 1",
			name: "more_1",
			content: <RespiratoryForm />,
		},
		{
			title: "More 2",
			name: "more_2",
			content: <RespiratoryForm />,
		},
		{
			title: "More 3",
			name: "more_3",
			content: <RespiratoryForm />,
		},
	];

	return (
		<ContentLayout
			title="Review of Systems"
			subtitle='Please look at the list of physical symptoms below and check off any that you have experienced in the last several days. If you have NOT experienced any symptoms in an area, be sure to check "None of abobe" for that area. If you are filling this out on behalf of the patient, please awnser from patient&apos;s perspective.'
			backOption={{
				label: "Back to the Clinical notes list",
				src: "#",
			}}
		>
			<Tabs
				className="w-full max-w-full flex-1 overflow-hidden"
				itemClassName="!px-5 !pb-3 !pt-2 text-gray-900 whitespace-nowrap flex-1"
				tabs={tabs}
				isAutoCollapse
			>
				{(content) => content}
			</Tabs>
		</ContentLayout>
	);
};

export default ReviewOfSystemScreen;
