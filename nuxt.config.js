export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: "universal",
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: "static",
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: "Jighdan's Portfolio",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Alata&display=swap",
			},
		],
	},
	/*
	 ** Global CSS
	 */
	css: ["~/assets/styles/base.css"],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		"@nuxtjs/color-mode",
		"@nuxtjs/style-resources",
		"@nuxtjs/eslint-module",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: ["nuxt-svg-loader"],

	// Shared style variables & mixins
	styleResources: {
		scss: ["assets/styles/_shared.scss"],
	},

	// Color module
	colorMode: {
		preference: "dark",
		fallback: "light",
	},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
};
