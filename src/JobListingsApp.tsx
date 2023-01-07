import { useState } from 'react';
import data from '../data.json';
import { Jobs } from './interfaces';
import { JobCard } from './components';
export const JobListingsApp = () => {
	const [jobsData, setJobsData] = useState<Jobs[]>(data);
	return (
		<div>
			{jobsData.map((jobData) => (
				<JobCard job={jobData} key={jobData.id} />
			))}
		</div>
	);
};
