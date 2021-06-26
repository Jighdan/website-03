import LayoutSecondary from "@/layouts/secondary";
import * as Section from "./sections";
import styles from "./styles.module.scss";

const ContactPage = () => {
	return (
		<LayoutSecondary>
			<div className={ styles["contact-page"] }>
				<header>
					<h2>Contact</h2>
				</header>

				<div className={ styles["contact-page-body"]}>
					<Section.EmailSection />
					<Section.SocialMediaSection />
					<Section.AlgorithmsPlatformsSection />
				</div>
			</div>
		</LayoutSecondary>
	);
};

export default ContactPage;
