import { createContext, ReactElement } from 'react';
import { Jobs } from '../interfaces';

export const JobsContext = createContext({} as Jobs);
const { Provider } = JobsContext;

export interface JobCardProps {
	job: Jobs;
	children: ReactElement | ReactElement[];
}
export const JobCard = ({ children, job }: JobCardProps) => {
	return (
		<Provider value={job}>
			<section>{children}</section>;
		</Provider>
	);
};
