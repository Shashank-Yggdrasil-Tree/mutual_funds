'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
	const pathname = usePathname();

	const tab_arr = [
		{ name: 'Absolute Returns', link: 'abr' },
		{ name: 'Annualised Returns', link: 'anr' },
		{ name: 'CAGR', link: 'cagr' },
		{ name: 'XIRR', link: 'xirr' },
	];

	return (
		<div className="light-bg-header dark:dark-bg-header px-2 md:px-[5%] dark:border-0 border-b border-b-[#424242]">
			<p className="w-full h-20 flex items-center font-bold text-2xl">Mutual Funds</p>
			<div className="flex gap-1">
				{tab_arr.map((item) => (
					<>
						<Link
							href={item.link}
							className={clsx(
								'w-fit p-2 rounded-t flex items-center text-sm select-none cursor-pointer hover:bg-[#3a3a3a] hover:text-[#dfdede]',
								{
									'text-[#dfdede] bg-[#242424]': pathname === `/${item.link}`,
									'text-[#4b4847] bg-[#1f1f1f] border-t border-t-[#424242] border-x border-x-[#424242]':
										pathname !== `/${item.link}`,
								}
							)}
						>
							{item.name}
						</Link>
					</>
				))}
			</div>
		</div>
	);
}
