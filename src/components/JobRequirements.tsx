import { useJobRequirements } from "../hooks";

export const JobRequirements = ({ setFilters }: { setFilters: React.Dispatch<React.SetStateAction<string[]>> }) => {
const {requirements, onClick} = useJobRequirements(setFilters)
	return (
		<div className='jobRequirementsLayout'>
			<div className='divider'></div>
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
