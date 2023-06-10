import React from "react";

const useResize = () => {
	const [size, setSize] = React.useState([0, 0]);

	const handleResize = React.useCallback(() => {
		setSize([window.innerWidth, window.innerHeight]);
	}, []);

	React.useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return size;
};

export default useResize;
