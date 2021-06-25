import useAirtable from "@/hooks/useAirtable";
import ProjectsList from "@/components/ProjectsList";

const ProjectsPage = () => {
	const projects = useAirtable();

	return (
		<main>
			<ProjectsList
				projects={ projects }
			/>
		</main>
	)
};

export default ProjectsPage;
