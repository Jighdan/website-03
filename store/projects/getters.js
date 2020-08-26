export default {
	getAllProjects(state) {
		return state.projects;
	},
	getMainProjects(state) {
		const isMain = (project) => project.main;
		return state.projects.filter(isMain);
	},
	getAvailableTags(state) {
		const tags = [];
		state.projects.forEach((project) => tags.push(...project.tags));
		return [...new Set(tags)];
	},
	getProjectsByTag(state, tag) {
		const includesTag = (project) => project.tags.includes(tag);
		return state.projects.filter(includesTag);
	},
};
