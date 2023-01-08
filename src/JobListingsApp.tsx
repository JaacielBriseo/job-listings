import { useState } from 'react';
import data from '../data.json';
import { Jobs } from './interfaces';
import {
	Header,
	JobCard,
	JobCompany,
	JobContractAndLocation,
	JobLogo,
	JobPosition,
	JobRequirements,
} from './components';
export const JobListingsApp = () => {
	const [jobsData, setJobsData] = useState<Jobs[]>(data);
	return (
		<div className='font-LeagueSpartan bg-neutral-light-bg'>
			<Header />
			{jobsData.map((jobData) => (
				<JobCard job={jobData} key={jobData.id}>
					<JobLogo />
					<JobCompany />
					<JobPosition />
					<JobContractAndLocation />
					<JobRequirements />
				</JobCard>
			))}
		</div>
	);
};
