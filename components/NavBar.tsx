import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<Link href='/'>home</Link>
			<Link href='/about'>about</Link>
			<Link href='/user'>user</Link>
		</div>
	);
};
