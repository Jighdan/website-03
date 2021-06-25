import TProject from "@/types/project";

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
		<article>
			<header>
				<h1>{ name }</h1>
			</header>

			<div>
				<div>
					<p>{ dateFinished }</p>
					<p>{ technologies.join(" + ") }</p>
				</div>

				<div>
					<p>{ description }</p>
				</div>
			</div>

			<footer>
				{ repository as string && <a href={ repository } target="_blank" rel="noopener noreferrer">Repo</a> }
				{ demo as string && <a href={ demo } target="_blank" rel="noopener noreferrer">Demo</a> }
			</footer>
		</article>
	)
};

export default ProjectListItem;
