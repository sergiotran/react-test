import classNames from "classnames";
import React from "react";

const IconButton = React.forwardRef(
	({ className, children, ...props }, ref) => {
		const classes = classNames({
			"bg-gray-100 p-2 rounded": true,
			...(className
				? {
						[className]: true,
				  }
				: {}),
		});

		return (
			<button ref={ref} {...props} className={classes}>
				{children}
			</button>
		);
	}
);

export default IconButton;
