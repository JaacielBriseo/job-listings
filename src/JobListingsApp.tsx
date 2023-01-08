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
	const [filters, setFilters] = useState<string[]>([]);
	const filteredJobs = jobsData.filter((job) => {
		return filters.every((filter) => {
			return job.role.includes(filter) || job.languages.includes(filter) || job.level.includes(filter);
		});
	});
	return (
		<div className='font-LeagueSpartan bg-neutral-light-bg'>
			<Header />
			<FiltersCard filters={filters} />
			{filteredJobs.map((jobData) => (
				<JobCard job={jobData} key={jobData.id}>
					<JobLogo />
					<JobCompany />
					<JobPosition />
					<JobContractAndLocation />
					<JobRequirements setFilters={setFilters} />
				</JobCard>
			))}
		</div>
	);
};
