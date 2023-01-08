import { useContext } from 'react';
import { JobsContext } from '.';
export const JobContractAndLocation = () => {
	const { contract, location, postedAt } = useContext(JobsContext);
	return (
		<div className='jobContractAndLocationLayout'>
			<small>{postedAt}</small>
			<small>{contract}</small>
			<small>{location}</small>
		</div>
	);
};
