import { FC } from "react";
import Link from "next/link";

const LayoutSecondary: FC = ({ children }) => {
	return (
		<main>
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
