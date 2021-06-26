import styles from "./styles.module.scss";

const EmailSection = () => {
	const email = "reynsth@gmail.com";

	return (
		<section>
			<h3>E-Mail</h3>
			<p>
				<a
					href={ `mailto:${ email }` }
					target="_blank"
					rel="noopener noreferrer"
				>
					{ email }
				</a>
			</p>
		</section>
	)
};

const SocialMediaSection = () => {
	const links = {
		twitter: "https://twitter.com/jighdan",
		linkedIn: "https://www.linkedin.com/in/jighdan/",
		gitHub: "https://github.com/jighdan"
	};

	return (
		<section>
			<h3>Social Media</h3>
			<p>
				You could find me on <a
						href={ links.twitter }
						target="_blank"
						rel="noopener noreferrer">
							Twitter
					</a>, <a
						href={ links.linkedIn }
						target="_blank"
						rel="noopener noreferrer">
							LinkedIn
					</a>, or <a
						href={ links.gitHub }
						target="_blank"
						rel="noopener noreferrer">
							GitHub
					</a>.
			</p>
		</section>
	);
};

const AlgorithmsPlatformsSection = () => {
	const links = {
		codeWars: "https://www.codewars.com/users/Jighdan",
		binarySearch: "https://binarysearch.com/@/jighdan",
		leetCode: "https://leetcode.com/jighdan/",
		codeSignal: "https://app.codesignal.com/profile/jighdan",
	};

	return (
		<section>
			<h3>Algorithms Platforms</h3>

			<p>
				I love solving problems (or attempting to), which also
				means researching efficient ways to create solutions
				as new problems arise.
			</p>

			<p>
				Some of the platforms in which I have been learning
				and practicing such skills are <a
					href={ links.codeWars }
					target="_blank"
					rel="noopener noreferrer">
						Code Wars
					</a>, <a
						href={ links.binarySearch }
						target="_blank"
						rel="noopener noreferrer">
							Binary Search
					</a>, <a
						href={ links.leetCode }
						target="_blank"
						rel="noopener noreferrer">
							LeetCode
					</a>, and <a
						href={ links.codeSignal }
						target="_blank"
						rel="noopener noreferrer">
							Code Signal
					</a>.
			</p>
		</section>
	);
};

const Sections = () => (
	<div className={ styles["contact-page-body"]}>
		<EmailSection />
		<SocialMediaSection />
		<AlgorithmsPlatformsSection />
	</div>
);

export default Sections;
