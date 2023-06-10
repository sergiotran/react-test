import ReviewOfSystemScreen from "@/pages/review-of-system";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <ReviewOfSystemScreen />,
	},
]);

export default routes;
