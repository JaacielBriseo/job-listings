import { createContext, CSSProperties, ReactElement } from 'react';
import { Jobs } from '../interfaces';

export const JobsContext = createContext({} as Jobs);
const { Provider } = JobsContext;

export interface JobCardProps {
	job: Jobs;
	children: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
}
export const JobCard = ({ children, job, style, className }: JobCardProps) => (
	<Provider value={job}>
		<section style={style} className={className}>
			{children}
		</section>
	</Provider>
);
