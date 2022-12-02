module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {},
		fontFamily: {
			'title': ['Inter', 'sans-serif'],
			'display': ['freight-display-pro'],
			'body': ['Inter', 'sans-serif']
		},
		colors: {
			'white': '#FFFFFF',
			"grey": {
				DEFAULT: '#28292A',
				"50": "#EAEBEB",
				"100": "#D3D4D5",
				"200": "#A6A8AA",
				"300": "#7C8083",
				"400": "#525456",
				"500": "#28292A",
				"600": "#202122",
				"700": "#191A1A",
				"800": "#0F0F10",
				"900": "#070808"
			},"primaryGrey": {
				DEFAULT: '#111111',
				"50": "#E8E8E8",
				"100": "#CFCFCF",
				"200": "#888888",
				"300": "#707070",
				"400": "#404040",
				"500": "#111111",
				"600": "#0D0D0D",
				"700": "#0A0A0A",
				"800": "#080808",
				"900": "#030303"
			  }
		},
	},
	plugins: [],
}
