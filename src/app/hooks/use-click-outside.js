import { useEffect, useCallback } from "react";

function useClickOutside(ref, handler) {
	const handleCLickOutside = useCallback(
		(event) => {
			const el = ref?.current;

			// Do nothing if clicking ref's element or descendent elements
			if (!el || el.contains(event.target)) {
				return;
			}

			handler(event);
		},
		[handler, ref]
	);

	useEffect(() => {
		window.addEventListener("click", handleCLickOutside);

		return () => {
			window.removeEventListener("click", handleCLickOutside);
		};
	}, [handleCLickOutside]);
}

export default useClickOutside;
