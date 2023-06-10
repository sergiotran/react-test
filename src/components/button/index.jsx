import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Button = React.forwardRef(
	({ children, href, className, variant = "base", ...props }, ref) => {
		const classes = classNames({
			"px-4 py-2 rounded-lg hover:bg-gray-100 transition": true,
			"bg-primary text-white hover:bg-[#404f8b]": variant === "primary",
			"bg-gray-300": variant === "secondary",
			...(className
				? {
						[className]: true,
				  }
				: {}),
		});

		return (
			<button ref={ref} className={classes} {...props}>
				{(() => {
					if(href) {
						return <Link className={className} to={href}>
							{children}	
						</Link>
					}

					return children;
				})()}
			</button>
		);
	}
);

export default Button;
