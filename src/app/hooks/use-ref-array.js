import { isEmpty } from "lodash";
import React from "react";

const useRefArray = (arr) => {
	const [refs, setRefs] = React.useState([]);

	React.useEffect(() => {
		setRefs(
			Array(arr.length)
				.fill()
				.map((_, index) => {
					return refs[index] || React.createRef();
				})
		);
	}, []);

	const isEmptyArr = isEmpty(refs);

	return [refs, isEmptyArr];
};

export default useRefArray;
