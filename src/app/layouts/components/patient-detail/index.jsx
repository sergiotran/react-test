import Button from "@/components/button";
import styles from "./patient-detail.module.scss";

const MOCK_DATA = {
	doctor: {
		name: "Leslie Alexander",
		avatar: "/doctor.jpg",
		role: "Provider",
	},
	patient: {
		name: "Thiennguyen",
		dob: "10 Oct 1999",
		appointment_date: "5 Feb 2022",
		appointment_duration: "20 minutes",
		start_time: "08:00 AM",
		end_time: "08:00 AM",
	},
};

const PatientDetail = () => {
	const getFieldLabel = (fieldName) => {
		switch (fieldName) {
			case "dob":
				return "DOB";
			case "appointment_date":
				return "Appointment Date";
			case "appointment_duration":
				return "Appointment Duration";
			case "start_time":
				return "Start Time";
			case "end_time":
				return "End Time";
			default:
				return "Patient";
		}
	};

	return (
		<div className={styles.patient__detail}>
			<div className="flex flex-col divide-y h-full overflow-auto max-h-full">
				<div className="flex flex-col justify-center items-center py-5 px-4 gap-2">
					<img
						className="rounded-full w-[100px] h-[100px]"
						src={MOCK_DATA.doctor.avatar}
						alt={`Doctor ${MOCK_DATA.doctor.name}`}
						width={100}
						height={100}
					/>
					<h4 className="text-lg font-bold">{MOCK_DATA.doctor.name}</h4>
					<div className="px-4 py-1 block bg-gray-700 text-white rounded-md text-sm">
						{MOCK_DATA.doctor.role}
					</div>
				</div>
				<div className="flex flex-col justify-center items-stretch p-4 text-sm xl:text-base">
					<h4 className="font-bold text-md text-left mb-1">Patient Information</h4>
					<div className="flex flex-col gap-3 divide-y">
						{Object.entries(MOCK_DATA.patient).map(([field, value], index) => {
							return (
								<div
									key={index}
									className="flex flex-row justify-between gap-3 pt-3"
								>
									<span className="text-gray-500">{getFieldLabel(field)}</span>
									<span>{value}</span>
								</div>
							);
						})}
						<div>
							<Button className="!bg-white !text-primary border border-primary mt-3 w-full" variant="primary">
								History
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDetail;
