import { FC } from "react";
import Link from "next/link";
import LayoutDefault from "./default";
import styles from "./styles.module.scss";

const LayoutSecondary: FC = ({ children }) => {
	return (
		<LayoutDefault>
			<header className={ styles["layout-back-link"] }>
				<nav>
					<Link href="/">Back</Link>
				</nav>
			</header>

			<div>
				{ children }
			</div>
		</LayoutDefault>
	);
};

export default LayoutSecondary;
