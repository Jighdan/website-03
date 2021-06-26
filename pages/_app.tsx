import type { AppProps } from 'next/app';
import Head from "next/head";
import "@/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Reinny Almonte | Portfolio</title>
				<meta
					name="description"
					content="Reinny Almonte is a dedicated software apprenticeship that appreciates learning and improving myself in order to tackle challenging and complicated problems, in order to shape, design and develop performant and human solutions."
				/>
			</Head>

			<Component { ...pageProps } />
		</>
	)
}
export default MyApp
