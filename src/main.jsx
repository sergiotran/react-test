import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./app/routes";
import BaseLayout from "./app/layouts/base-layout";

import "@fontsource-variable/inter";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BaseLayout>
			<RouterProvider router={routes} />
		</BaseLayout>
	</React.StrictMode>
);
