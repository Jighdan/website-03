import * as Section from "./sections";

const ContactPage = () => {
	return (
		<main>
			<header>
				<h2>Contact</h2>
			</header>

			<div>
				<Section.EmailSection />
				<Section.SocialMediaSection />
				<Section.AlgorithmsPlatformsSection />
			</div>
		</main>
	);
};

export default ContactPage;
