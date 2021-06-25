import TProject from "@/types/project";
import styles from "./styles.module.scss";

type ComponentProps = {
	data: TProject
};

const ProjectListItem = ({ data }: ComponentProps) => {
	const {
		name,
		description,
		dateFinished,
		technologies,
		repository,
		demo
	} = data

	return (
		<article className={ styles["project-list-item"] }>
			<header className={ styles["project-list-item-header"] }>
				<h3>{ name }</h3>
				<h4>{ technologies.join(" + ") }</h4>
				<time dateTime={ `${ new Date(dateFinished) }` }>{ dateFinished }</time>
			</header>

			<div className={ styles["project-list-item-body"] }>
				<p>{ description }</p>
			</div>

			<footer className={ styles["project-list-item-footer"] }>
				{ repository as string && <a href={ repository } target="_blank" rel="noopener noreferrer">Repo</a> }
				{ demo as string && <a href={ demo } target="_blank" rel="noopener noreferrer">Demo</a> }
			</footer>
		</article>
	)
};

export default ProjectListItem;
