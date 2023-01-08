import { useContext } from 'react';
import { JobsContext } from '.';
export const JobCompany = () => {
	const { company, featured, new: isNew } = useContext(JobsContext);
	return (
		<div className='jobCompanyLayout'>
			<span>{company}</span>
			<div className='space-x-3 w-[138px] h-6 flex uppercase font-bold text-xs'>
				<div
					className={`${isNew ? 'flex ' : 'hidden '}bg-primary text-white h-6 w-14 rounded-2xl flex-col justify-center`}
				>
					<p>new!</p>
				</div>
				<div
					className={`${
						featured ? 'flex ' : 'hidden '
					}bg-black text-white h-6 w-[79px] rounded-2xl flex-col justify-center`}
				>
					<p>featured</p>
				</div>
			</div>
		</div>
	);
};
