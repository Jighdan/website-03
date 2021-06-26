import Link from "next/link";
import styles from "./styles.module.scss";

const Navigation = () => {
	return (
		<nav className={ styles["navigation"] }>
			<Link href="/projects">
				Projects
			</Link>

			<Link href="/contact">
				Contact
			</Link>
		</nav>
	);
};

export default Navigation;
