import { MACROS } from "@/app/constants/data";
import { toSnakeCase } from "@/app/utils/string";
import Button from "@/components/button";
import Navigate from "@/components/navigate";
import Select from "@/components/select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { uniq } from "lodash";
import isEmpty from "lodash/isEmpty";

const CHECKBOXES = [
	[
		"Chronic Pain",
		"Loss of appetite",
		"Increase in appetite",
		"Unexplained weight loss",
		"Weight gain",
	],
	[
		"Fatigue/Lethargy",
		"Unexplained fever",
		"Hot or cold spelis",
		"Night sweats",
		"Sleeping pattern disruption",
	],
	[
		"Malaise (FluOLike or Vague sick feeling)",
		"None of the above consitlutional issues",
	],
];

const ConstilutionalForm = () => {
	const handleValidate = (values) => {
		const errors = {};
		if (
			isEmpty(values.symptom) ||
			Object.values(values.symptom).every((val) => !val)
		) {
			errors.symptom =
				"Please select your sympsom, if you don't have any symptom, check 'None of above' option.";
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{
				symptom: {},
				narrative: "",
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
			validate={handleValidate}
		>
			{({ values, setFieldValue, handleSubmit }) => {
				const selectedMacros = values.narrative
					.trim()
					.split(", ")
					.filter((macro) => !isEmpty(macro));

				const handleInsertMacros = (val) => {
					setFieldValue("narrative", uniq([...selectedMacros, val]).join(", "));
				};

				return (
					<Form className="flex flex-col flex-1 gap-10 text-sm">
						<div className="flex flex-col gap-10">
							<div className="flex flex-row mt-3 flex-wrap">
								{CHECKBOXES.map((col, index) => {
									return (
										<div className="flex-grow basis-full md:basis-1/2 lg:basis-1/3 flex flex-col py-3 gap-3" key={index}>
											{col.map((cell) => {
												return (
													<label
														className="text-gray-500 flex items-start cursor-pointer select-none"
														key={cell}
													>
														<Field
															name={`symptom[${toSnakeCase(cell)}]`}
															className="mr-2 leading-tight w-4 h-4 rounded-full text-sm flex-shrink-0 flex-grow-0 relative top-[3px]"
															type="checkbox"
														/>
														<span className="leading-tight">
															{cell}
														</span>
													</label>
												);
											})}
										</div>
									);
								})}
							</div>
							<label className="flex flex-col items-start cursor-pointer select-none">
								<span className="text-base font-bold">Other</span>
								<Field
									name="symptom[other]"
									className="mt-2 leading-tight w-full h-32 p-3 bg-gray-100 rounded-md outline-none border-2 border-gray-200"
									type="text"
									component="textarea"
									placeholder="Enter other symptom here..."
								/>
							</label>
							<ErrorAlert name="symptom" />
						</div>
						<hr />
						<div className="flex flex-col">
							<div className="flex flex-row w-full items-center mb-2 justify-between">
								<span className="text-base font-bold">Narative</span>
								<div className="flex flex-row gap-3">
									<Select
										options={MACROS.map((macros) => ({
											label: macros,
											value: toSnakeCase(macros),
										}))}
										label="Insert macros"
										onSelect={handleInsertMacros}
									/>
									<Button variant="primary" type="button">
										Generate
									</Button>
								</div>
							</div>
							<label className="flex flex-col items-start cursor-pointer select-none">
								<Field
									name="narrative"
									className="mt-2 leading-tight w-full h-56 p-3 bg-gray-100 rounded-md outline-none border-2 border-gray-200"
									type="text"
									component="textarea"
								/>
							</label>
							<ErrorAlert name="narrative" />
						</div>
						<Navigate
							onPrevious={() => {
								console.log("event previous");
							}}
							onNext={(e) => {
								console.log("event next");
								handleSubmit(e);
							}}
						/>
					</Form>
				);
			}}
		</Formik>
	);
};

const ErrorAlert = ({ name }) => {
	return (
		<ErrorMessage
			name={name}
			className="bg-red-500 text-white rounded p-3"
			component="div"
		/>
	);
};

export default ConstilutionalForm;
