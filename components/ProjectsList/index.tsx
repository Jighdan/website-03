import TProject from "@/types/project";
import ProjectListItem from "./ProjectListItem";
import styles from "./styles.module.scss";

type ComponentProps = {
	projects: Array<TProject>;
};

const ProjectsList = ({ projects }: ComponentProps) => {
	return (
		<ul className={ styles["projects-list"] }>
			{
				projects.map(project => (
					<ProjectListItem
						key={ project.id }
						data={ project }
					/>
				))
			}
		</ul>
	)
};

export default ProjectsList;
