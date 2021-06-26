import AirtableData from "library/airtableData";
import TProject from "@/types/project";
import LayoutSecondary from "@/layouts/secondary";
import ProjectsList from "@/components/ProjectsList";
import styles from "./styles.module.scss";

type ComponentProps = {
	projects: Array<TProject>;
};

const ProjectsPage = ({ projects }: ComponentProps) => {
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

export const getStaticProps = async () => {
	const airtable = new AirtableData();
	const projects = await airtable.fetchProjects();

	return {
		props: { projects }
	};
};

export default ProjectsPage;
