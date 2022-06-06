import type { NextPage } from 'next';
import Head from 'next/head';

import { NavBar } from '../components/NavBar';

const Home: NextPage = () => {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: 'max-content auto', gridTemplateRows: '100%' }}>
			<Head>
				<title>Home</title>
				<meta name='home page' />
			</Head>
			<NavBar />
			<div className='main'>
				<h1>home</h1>
			</div>
		</div>
	);
};

export default Home;
