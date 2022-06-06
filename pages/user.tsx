import type { NextPage } from 'next';
import Head from 'next/head';

import { NavBar } from '../components/NavBar';
import { User } from '../components/User';

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>About</title>
				<meta name='about page' />
			</Head>
			<NavBar />
			<div className='main'>
				<User />
			</div>
		</div>
	);
};

export default About;
