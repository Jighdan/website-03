export default () => ({
	projects: [
		{
			title: "Notew",
			description:
				"A command line note-taking application, with CRUD functions; based on OOP principles.",
			descriptionLong:
				"When I first switched from Windows to Linux, using CLI programs became a habit; so I decided to make an app that would allow me to take notes without leaving the command line. The biggest challenge for working on this project was refactoring after having a minimum viable app; making use of OOP concepts.",
			tags: ["python", "bash", "sql"],
			links: {
				demo: false,
				code: "https://github.com/Jighdan/notew",
			},
			main: true,
		},
		{
			title: "Nuxt Portfolio",
			description:
				"My developer portfolio, recreated with Nuxt. Felt in love with it right away; such an amazing framework and community.",
			descriptionLong:
				"A portfolio to display my projects and a little about me. While not making use of any CSS framework, and having a mobile-first design pattern, I was able to make a really simple yet practical looking website; also, making use of nuxt-community very own tools, such as, nuxt-color-mode and styled-resources, managing components and making sure they are just fulfilling one responsibility, made the code feel clean, and kept that scalability Vue preaches on.",
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
				"A static website that displays a series of questions that were portrayed in a social study.",
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
			description: "Static website made with Nuxt",
			descriptionLong:
				"A static website about foxes first made with Flask and generated using Frozen-Flask; later migrated to Nuxt. Such a difference from working with these two frameworks for a simple website.",
			tags: ["nuxt", "vue", "flask"],
			links: {
				demo: "https://jighdan.github.io/flasky_fox/",
				link: "https://github.com/Jighdan/flasky_fox",
			},
			main: false,
		},
	],
});
