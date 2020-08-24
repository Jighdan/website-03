export const state = () => ({
	projects: [
		{
			title: "notew",
			description:
				"A command line note-taking application, with CRUD functions; based on OOP principles.",
			tags: ["python", "bash", "sql"],
			links: {
				demo: false,
				code: "https://github.com/Jighdan/notew",
			},
		},
		{
			title: "My Portfolio",
			description:
				"My formal attempt for a portfolio; learnt so much from Nuxt power for static sites.",
			tags: ["nuxt", "sass", "css"],
			links: {
				demo: false,
				code: "https://github.com/Jighdan/jighdan.github.io",
			},
		},
		{
			title: "(36 + 3) Questions",
			description:
				"A website that displays a series of questions that were portrayed in a social study.",
			tags: ["javascript", "html", "sass"],
			links: {
				demo: "https://jighdan.github.io/36-Questions",
				code: "https://github.com/Jighdan/36-Questions",
			},
		},
		{
			title: "Start Py CLI Package",
			description:
				"A Python command line application's file structure generator",
			tags: ["python", "bash"],
			links: {
				demo: false,
				code: "https://github.com/Jighdan/create-python-package",
			},
		},
	],
});

export const getters = {
	getProjects(state) {
		return state.projects;
	},
};
