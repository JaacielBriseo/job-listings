import { createContext } from 'react';
import { JobCardProps, JobsValues } from '../interfaces';

export const JobsContext = createContext({} as JobsValues);
const { Provider } = JobsContext;

export const JobCard = ({ children, job, style, className, filters, setFilters }: JobCardProps) => (
	<Provider
		value={{
			...job,
			filters,
			setFilters,
		}}
	>
		<section style={style} className={className}>
			{children}
		</section>
	</Provider>
);
