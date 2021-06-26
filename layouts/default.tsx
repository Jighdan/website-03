import { FC } from "react";
import styles from "./styles.module.scss";

const LayoutDefault: FC = ({ children }) => {
	return (
		<main className={ styles["layout"] }>
			{ children }
		</main>
	)
};

export default LayoutDefault;
