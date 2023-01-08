import { useContext } from 'react';
import { JobsContext } from '.';

export const JobLogo = () => {
	const { logo } = useContext(JobsContext);
	return <img src={logo} alt={logo} />;
};
