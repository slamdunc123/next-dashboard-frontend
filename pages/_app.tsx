import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const isLoggedIn = false
	return (
		<Layout isLoggedIn={isLoggedIn}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
