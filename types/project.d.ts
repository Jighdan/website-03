type TProject = {
	id: string;
	name: string;
	description: string;
	technologies: Array<string>;
	repository: string | undefined;
	demo: string | undefined;
	dateFinished: string;
};

export default TProject;
