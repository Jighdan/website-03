export const state = () => ({
	languages: [
		"python",
		"javascript",
		"typescript",
		"html",
		"css",
		"sass",
		"sql",
	],
	frameworks: ["vue", "nuxt", "quasar", "flask", "tailwind", "bootstrap"],
	tools: ["git", "node", "npm", "travis", "heroku", "netlify", "figma"],
});

export const getters = {
	getLanguages(state) {
		return state.languages;
	},
	getFrameworks(state) {
		return state.frameworks;
	},
	getTools(state) {
		return state.tools;
	},
};
