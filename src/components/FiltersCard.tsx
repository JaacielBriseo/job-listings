export const FiltersCard = ({ filters }: { filters: string[] }) => {
	return (
		<div
			className={`${
				filters.length !== 0 ? 'flex ' : 'hidden '
			}w-[327px] min-h-28 mx-auto -mt-20 p-2 bg-white m-12 rounded-lg`}
		>
			<div className='w-3/4'>
				{filters.map((filter) => (
					<button key={filter}>{filter}</button>
				))}
			</div>
			<div className='w-1/4 flex items-center justify-center'>
				{/* <h5 className='font-bold text-base text-neutral-dark'>Clear</h5> */}
				<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' onClick={() => console.log('clickk')}>
					<path
						fill='hsl(180, 8%, 52%)'
						fillRule='evenodd'
						d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
					/>
				</svg>
			</div>
		</div>
	);
};
