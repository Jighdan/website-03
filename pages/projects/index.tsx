import useAirtable from "@/hooks/useAirtable";
import LayoutSecondary from "@/layouts/secondary";
import ProjectsList from "@/components/ProjectsList";
import styles from "./styles.module.scss";

const ProjectsPage = () => {
	const { projects } = useAirtable();

	return (
		<LayoutSecondary>
			<div className={ styles["projects-page"] }>
				<div className={ styles["projects-page-intro"] }>
					<h2>Projects</h2>

					<p>
						Here you will find a handful of my public projects
						ordered by the date of completion.
					</p>
				</div>

				<ProjectsList
					projects={ projects }
				/>
			</div>
		</LayoutSecondary>
	)
};

export default ProjectsPage;
