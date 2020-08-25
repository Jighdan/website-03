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
			{
				name: "title",
				content: "Jighdan's Portfolio",
			},
			{
				name: "description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			// <!-- Open Graph / Facebook -->
			{
				property: "og:title",
				content: "Jighdan's Portfolio",
			},
			{
				property: "og:description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			{
				property: "og:image",
				content: "assets/images/avatar.jpeg",
			},
			// <!-- Twitter -->
			{
				property: "twitter:card",
				content: "summary_large_image",
			},
			{
				property: "twitter:title",
				content: "Jighdan's Portfolio",
			},
			{
				property: "twitter:description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			{
				property: "twitter:image",
				content: "assets/images/avatar.jpeg",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
		"@aceforth/nuxt-optimized-images",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: ["nuxt-svg-loader", "nuxt-webfontloader"],

	// Fonts
	webfontloader: {
		google: {
			families: ["Alata&display=swap"],
		},
	},

	// Shared style variables & mixins
	styleResources: {
		scss: ["assets/styles/_shared.scss"],
	},

	// Color module
	colorMode: {
		preference: "dark",
		fallback: "light",
		componentName: "LayoutColorScheme",
	},

	optimizedImages: {
		optimizeImages: true,
	},

	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
};
