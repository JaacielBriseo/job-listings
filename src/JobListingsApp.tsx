import { useJobList } from './hooks';
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
	const { filteredJobs, filters, setFilters } = useJobList();
	return (
		<>
			<Header />
			<FiltersCard filters={filters} setFilters={setFilters} />
			{filteredJobs.map((jobData) => (
				<JobCard job={jobData} key={jobData.id} filters={filters} setFilters={setFilters}>
					<JobLogo />
					<JobCompany />
					<JobPosition />
					<JobContractAndLocation />
					<JobRequirements />
				</JobCard>
			))}
		</>
	);
};
