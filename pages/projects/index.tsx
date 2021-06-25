import useAirtable from "@/hooks/useAirtable";
import LayoutSecondary from "@/layouts/secondary";
import ProjectsList from "@/components/ProjectsList";

const ProjectsPage = () => {
	const { projects } = useAirtable();

	return (
		<LayoutSecondary>
			<h2>Projects</h2>

			<p>
				Here you will find a handful of my public projects
				ordered by the date of completion.
			</p>

			<ProjectsList
				projects={ projects }
			/>
		</LayoutSecondary>
	)
};

export default ProjectsPage;
