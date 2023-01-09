import { useJobRequirements } from '../hooks';
export const JobRequirements = () => {
	const { requirements, onClick } = useJobRequirements();
	return (
		<div className='jobRequirementsLayout'>
			<div className='divider lg:hidden'></div>
			<div className='w-[270px] h-24 mt-3'>
				<li>
					{requirements.map((requirement) => (
						<button key={requirement} type='button' name={requirement} onClick={onClick}>
							{requirement}
						</button>
					))}
				</li>
			</div>
		</div>
	);
};
