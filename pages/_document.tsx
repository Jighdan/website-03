import Document, { DocumentContext } from "next/document";
import { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	};

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
};

export default AppDocument;