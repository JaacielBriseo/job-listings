import { createContext, ReactElement } from 'react';
import { Jobs } from '../interfaces/interfaces';

export const JobsContext = createContext({});
const { Provider } = JobsContext;

export interface JobCardProps {
	job: Jobs;
	children?: ReactElement | ReactElement[];
}
export const JobCard = ({ children, job }: JobCardProps) => {
    console.log(job);
	return <div>JobCard</div>;
};
