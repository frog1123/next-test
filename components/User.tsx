import { useEffect, useState } from 'react';

export const User = () => {
	const [data, setData] = useState<any>(null);
	const [isLoading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const res = await fetch('https://randomuser.me/api');
			const data = await res.json();
			await setData(data.results[0]);
			await setLoading(false);

			console.log(data.results[0]);
		}

		fetchData();
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No data</p>;

	return (
		<div>
			<h1>
				{data.name.first} {data.name.last}
			</h1>
		</div>
	);
};
