import { useContext } from 'react';
import { JobsContext } from '.';

export const JobPosition = () => {
	const {position} = useContext(JobsContext);
	return <h1>{position}</h1>;
};
