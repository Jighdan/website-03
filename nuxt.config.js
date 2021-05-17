export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Reinny Almonte",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content:
					"Reinny Almonte is a Software Engineer from the Dominican Republic that loves solving problems.",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/styles/global.scss", "@/styles/transitions.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/stylelint
		"@nuxtjs/stylelint-module",
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
		// https://google-fonts.nuxtjs.org/
		"@nuxtjs/google-fonts",
	],

	publicRuntimeConfig: {
		airtable: {
			key: process.env.AIRTABLE_KEY,
			base: process.env.AIRTABLE_BASE,
		},
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	// Tailwind CSS
	tailwindcss: {
		cssPath: "~/styles/tailwind.css",
	},

	// Google Fonts Configuration
	googleFonts: {
		prefetch: true,
		families: {
			"Fira+Sans+Condensed": [300, 400, 500],
		},
	},
};
