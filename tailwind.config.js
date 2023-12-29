/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#FF6363",
				secondary: {
					100: "#E2E2D5",
					200: "#888883",
				},
				tertiary: "#f3f3f3",
			},
			boxShadow: {
				card: "0 5px 10px rgba(0, 0, 0, 0.12)",
			},
			screens: {
				xs: "450px",
			},
			backImg: {
				hero: "url('/src/assets/herobg.jpg')",
			},
		},
	},
	plugins: [],
};
