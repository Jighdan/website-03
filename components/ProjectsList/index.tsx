import TProject from "@/types/project";
import ProjectListItem from "./ProjectListItem";

type ComponentProps = {
	projects: Array<TProject>;
};

const ProjectsList = ({ projects }: ComponentProps) => {
	return (
		<ul>
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
