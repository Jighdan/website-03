export default {
	getLanguages: (state) => state.languages,

	getFrameworks: (state) => state.frameworks,

	getTools: (state) => state.tools,

	getSkillByName: (state) => (name) => {
		const data = [...state.languages, ...state.frameworks, ...state.tools];
		return data.find((item) => item.name === name);
	},
};
