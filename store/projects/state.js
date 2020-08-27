export default () => ({
	projects: [
		{
			title: "Notew",
			description:
				"A command line note-taking application, with CRUD functions; based on OOP principles.",
			descriptionLong:
				"When I first switched from Windows to Linux, using CLI programs became an habit; so I decided to make an app that would allow me to take notes without leaving the command line. The biggest challenge for working on this project, was refractoring after having a minimum viable app; making use of OOP concepts.",
			tags: ["python", "bash", "sql"],
			links: {
				demo: false,
				code: "https://github.com/Jighdan/notew",
			},
			main: true,
		},
		{
			title: "My Portfolio",
			description:
				"My formal attempt for a portfolio; learnt so much from Nuxt power for static sites.",
			descriptionLong:
				"The one you are seeing right now. Vue and Nuxt are such amazing web frameworks, inmediatly fell for it when a fellow programmer told me about this. Looking forward to try new things with it.",
			tags: ["nuxt", "vue", "javascript"],
			links: {
				demo: "https://jighdan.github.io",
				code: "https://github.com/Jighdan/jighdan.github.io",
			},
			main: true,
		},
		{
			title: "(36 + 3) Questions",
			description:
				"A website that displays a series of questions that were portrayed in a social study.",
			descriptionLong:
				"A website that displays a series of questions that were portrayed in a social study. The biggest challenge for making this website was to make the questions swipe-able, which I was able to fulfill using the Swipe library.",
			tags: ["javascript", "html", "css"],
			links: {
				demo: "https://jighdan.github.io/36-Questions",
				code: "https://github.com/Jighdan/36-Questions",
			},
			main: false,
		},
		{
			title: "Create Py Package",
			description:
				"A Python command line application's file structure generator",
			descriptionLong:
				"After making notew, I found about packaging and it's benefits; figured out I will be making packages more frequently and to ease the process, made this package template initializer.",
			tags: ["python", "bash"],
			links: {
				demo: false,
				code: "https://github.com/Jighdan/create-python-package",
			},
			main: true,
		},
		{
			title: "Flasky Fox",
			description: "Static website made with flask",
			descriptionLong:
				"A static website generated using Frozen-Flask and deployed to GitHub pages; later migrated to Nuxt First engement with Python for back-end",
			tags: ["nuxt", "vue", "flask"],
			links: {
				demo: "https://jighdan.github.io/flasky_fox/",
				link: "https://github.com/Jighdan/flasky_fox",
			},
			main: false,
		},
	],
});
