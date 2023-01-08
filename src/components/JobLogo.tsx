import { useContext } from 'react';
import { JobsContext } from '.';

export const JobLogo = () => {
	const { logo } = useContext(JobsContext);
	return <img src={logo} alt='' className='absolute -top-5 w-14 h-14' />;
};
