import { useMemo, useState } from 'react';
import { Jobs } from '../interfaces';
import data from '../../data.json';

export const useJobList = () => {
	const [jobsData, setJobsData] = useState<Jobs[]>(data);
	const [filters, setFilters] = useState<string[]>([]);
	const filteredJobs = useMemo(() => {
		return jobsData.filter((job) => {
			return filters.every((filter) => {
				return job.role.includes(filter) || job.languages.includes(filter) || job.level.includes(filter);
			});
		});
	}, [jobsData, filters]);
	return {
		filters,
		filteredJobs,
		setFilters,
	};
};
