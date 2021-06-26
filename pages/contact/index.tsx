import LayoutSecondary from "@/layouts/secondary";
import Sections from "./sections";
import styles from "./styles.module.scss";

const ContactPage = () => {
	return (
		<LayoutSecondary>
			<div className={ styles["contact-page"] }>
				<header>
					<h2>Contact</h2>
				</header>

				<Sections />
			</div>
		</LayoutSecondary>
	);
};

export default ContactPage;
