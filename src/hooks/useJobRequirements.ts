import { useContext } from 'react';
import { JobsContext } from '../components';

export const useJobRequirements = () => {
	const { languages, tools, role, level, filters, setFilters } = useContext(JobsContext);

	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		const filter = (e.target as any).name;
		if (!filters.includes(filter)) {
			setFilters((prev) => [...prev, filter]);
		}
	};
	const requirements = [role, level, tools.map((tool) => tool), languages.map((lang) => lang)].flat();
	return {
		requirements,
		onClick,
	};
};
