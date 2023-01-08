import { useState } from 'react';
import data from '../data.json';
import { Jobs } from './interfaces';
import {
	FiltersCard,
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
	const [filters, setFilters] = useState<string[]>([])
	console.log(filters)
	return (
		<div className='font-LeagueSpartan bg-neutral-light-bg'>
			<Header />
			<FiltersCard filters={filters}/>
			{jobsData.map((jobData) => (
				<JobCard job={jobData} key={jobData.id}>
					<JobLogo />
					<JobCompany />
					<JobPosition />
					<JobContractAndLocation />
					<JobRequirements setFilters={setFilters}/>
				</JobCard>
			))}
		</div>
	);
};
