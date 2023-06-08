import classNames from "classnames";
import React from "react";

const Button = React.forwardRef(
	({ children, className, variant = "base", ...props }, ref) => {
		const classes = classNames({
			"px-4 py-2 rounded-lg": true,
			"bg-primary text-white": variant === "primary",
			"bg-gray-300": variant === "secondary",
			...(className
				? {
						[className]: true,
				  }
				: {}),
		});

		return (
			<button ref={ref} className={classes} {...props}>
				{children}
			</button>
		);
	}
);

export default Button;
