/** @type {import('tailwindcss').Config} */
export default {
	content: ["index.html", "src/**/*.{jsx,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#5b70c0",
				secondary: "#404559",
				danger: "#FF6D62"
			},
			fontFamily: {
				sans: ["Inter Variable", "sans-serif"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					lg: "1.25rem",
				},
			},
		},
	},
	plugins: [],
};
