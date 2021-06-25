import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const LayoutSecondary: FC = ({ children }) => {
	return (
		<main className={ styles["layout"] }>
			<header>
				<nav>
					<Link href="/">Back</Link>
				</nav>
			</header>

			<div>
				{ children }
			</div>
		</main>
	);
};

export default LayoutSecondary;
