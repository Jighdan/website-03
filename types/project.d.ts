type TProject = {
	id: string;
	name: string;
	description: string;
	technologies: Array<string>;
	repository: string | null;
	demo: string | null;
	dateFinished: string;
};

export default TProject;
