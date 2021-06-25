import LayoutSecondary from "@/layouts/secondary";
import * as Section from "./sections";

const ContactPage = () => {
	return (
		<LayoutSecondary>
			<header>
				<h2>Contact</h2>
			</header>

			<div>
				<Section.EmailSection />
				<Section.SocialMediaSection />
				<Section.AlgorithmsPlatformsSection />
			</div>
		</LayoutSecondary>
	);
};

export default ContactPage;
