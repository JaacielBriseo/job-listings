import { useContext } from 'react';
import { JobsContext } from '../components';

export const useJobRequirements = (setFilters: React.Dispatch<React.SetStateAction<string[]>>) => {
	const { languages, tools, role, level } = useContext(JobsContext);
	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		setFilters((prev) => [...prev, (e.target as any).name]);
	};
	const requirements = [role, level, tools.map((tool) => tool), languages.map((lang) => lang)].flat();
	console.log(requirements);
	return {
		requirements,
		onClick,
	};
};
