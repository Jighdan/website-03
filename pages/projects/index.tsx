import useAirtable from "@/hooks/useAirtable";
import ProjectsList from "@/components/ProjectsList";

const ProjectsPage = () => {
	const { projects } = useAirtable();

	return (
		<main>
			<h2>Projects</h2>

			<p>
				Here you will find a handful of my public projects
				ordered by the date of completion.
			</p>

			<ProjectsList
				projects={ projects }
			/>
		</main>
	)
};

export default ProjectsPage;
