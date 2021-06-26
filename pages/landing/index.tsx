import LayoutDefault from "@/layouts/default";
import styles from "./styles.module.scss";

const LandingPage = () => {
	return (
		<LayoutDefault>
			<div className={ styles["landing-page"] }>
				<h1>Reinny Almonte</h1>
				<p>Hey ~ I<span>&#39;</span>m a Software Apprenticeship from the Dominican Republic 🇩🇴</p>
			</div>
		</LayoutDefault>
	)
};

export default LandingPage;
