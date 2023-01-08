import { useState } from 'react';
import data from '../data.json';
import { Jobs } from './interfaces';
import { Header, JobCard } from './components';
export const JobListingsApp = () => {
	const [jobsData, setJobsData] = useState<Jobs[]>(data);
	return (
		<div className='font-LeagueSpartan bg-neutral-light-bg'>
			<Header />
			{jobsData.map((jobData) => (
				<JobCard job={jobData} key={jobData.id} />
			))}
		</div>
	);
};
