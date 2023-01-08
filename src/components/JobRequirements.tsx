import { useContext } from 'react';
import { JobsContext } from '.';
export const JobRequirements = ({ setFilters }: { setFilters: React.Dispatch<React.SetStateAction<string[]>> }) => {
	const { languages, tools, role, level } = useContext(JobsContext);
	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		setFilters((prev) => [...prev, (e.target as any).name]);
	};
	return (
		<div className='jobRequirementsLayout'>
			<div className='divider'></div>
			<div className='w-[270px] h-24 mt-3'>
				<li>
					<button name={role} onClick={onClick}>
						{role}
					</button>
					<button name={level} onClick={onClick}>
						{level}
					</button>
					{tools.map((tool) => {
						if (tool.length === 0) return;
						return (
							<button key={tool} name={tool} onClick={onClick}>
								{tool}
							</button>
						);
					})}
					{languages.map((language) => {
						if (language.length === 0) return;
						return (
							<button key={language} name={language} onClick={onClick}>
								{language}
							</button>
						);
					})}
				</li>
			</div>
		</div>
	);
};
