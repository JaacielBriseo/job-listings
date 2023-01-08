import { useContext } from 'react';
import { JobsContext } from '.';
export const JobRequirements = () => {
	const { languages, tools, role, level } = useContext(JobsContext);
	return (
		<div className='jobRequirementsLayout'>
			<div className='divider'></div>
			<div className='w-[270px] h-24 mt-3'>
				<li>
					<button>{role}</button>
					<button>{level}</button>
					{tools.map((tool) => {
						if (tool.length === 0) return;
						return <button key={tool}>{tool}</button>;
					})}
					{languages.map((language) => {
						if (language.length === 0) return;
						return <button key={language}>{language}</button>;
					})}
				</li>
			</div>
		</div>
	);
};
