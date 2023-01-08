import { CSSProperties, ReactElement } from 'react';

export interface Jobs {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}
export interface JobCardProps {
	//Data
	job: Jobs;
	filters: string[];

	//Children
	children: ReactElement | ReactElement[];

	//Methods
	setFilters: React.Dispatch<React.SetStateAction<string[]>>;

	//Styling
	className?: string;
	style?: CSSProperties;
}
export interface JobsValues extends Jobs {
	filters: string[];
	setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}
