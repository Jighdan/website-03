export const state = () => ({
  allProjects: [
    {
      title: "notew",
      shortDescription: "Command line tool for taking notes",
      longDescription:
        "When I first switched from Windows to Linux, using CLI programs became an habit; so I decided to make an app that would allow me to take notes without leaving the command line.",
      demo: false,
      code: "https://github.com/Jighdan/notew",
      tags: ["Python", "CLI", "SQL"]
    },
    {
      title: "Portfolio",
      shortDescription: "My first portfolio",
      longDescription: "The one you are seeing right now. Vue is such an amazing web framework, inmediatly fell for it when a fellow programmer told me about it. Looking forward to try new things with it.",
      demo: "https://jighdan-portfolio.netlify.app/#/",
      code: "https://github.com/Jighdan/portfolio",
      tags: ["Nuxt.js", "Vue.js", "VueX", "Vue Router", "Sass", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "(36+3) Questions",
      shortDescription: "Responsive static website",
      longDescription: "A website that displays a series of questions that were portrayed in a social study. The biggest challenge for making this website was to make the questions swipe-able, which I was able to fulfill using the Swipe library.",
      demo: "https://jighdan.github.io/36-Questions",
      code: "https://github.com/Jighdan/36-Questions",
      tags: ["HTML5", "CSS3", "Sass", "JavaScript"]
    },
    {
      title: "create-python-package",
      shortDescription: "Python package template generator",
      longDescription:
        "After making notew, I found about packaging and it's benefits; figured out I will be making packages more frequently and to ease the process, made this package template initializer.",
      demo: false,
      code: "https://github.com/Jighdan/create-python-package",
      tags: ["Python", "Template", "CLI"]
    },
    {
      title: "MUBI-wbs",
      shortDescription: "A movie recommendator",
      longDescription:
        "The product of my first interactions with Python; a simple script with two functionalities, the first, scrape data about movies and store them in a JSON file, the second, pick a random movie from the JSON database and compose a HTML email from it.",
      demo: false,
      code: "https://github.com/Jighdan/MUBI-wbs",
      tags: ["Python", "Web Scraping"]
    },
    {
      title: "Rock, Paper & Scissors",
      shortDescription: "Classic RPS Web-based game",
      longDescription: "First project making use of JavaScript. In this project I changed my aproach to programming from 'try-not-to-break-anything-omg' to 'wonder-what-error-will-bring-typing-this' mentality.",
      demo: "https://jighdan.github.io/rockPaperScissors/",
      code: "https://github.com/Jighdan/rockPaperScissors",
      tags: ["HTML5", "CSS3", "JavaScript"]
    }
  ]
});
