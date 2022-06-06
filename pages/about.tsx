import type { NextPage } from 'next';
import Head from 'next/head';

import { NavBar } from '../components/NavBar';

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>About</title>
				<meta name='about page' />
			</Head>
			<NavBar />
			<div className='main'>
				<h1>about</h1>
			</div>
		</div>
	);
};

export default About;
