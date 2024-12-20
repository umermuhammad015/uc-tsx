// 'use server';

import { cn } from '@/lib/utils';
// import { cn } from '@/lib/cn';
import Link from 'next/link';
import React from 'react';

type PaginationProps = {
	page?: string;
	totalPages: number;
	hasNextPage: boolean;
};

export default function Pagination({metadata}:any){
	const { page, totalPages, hasNextPage } = metadata;

	// console.log("jhghjgh")
	// console.log(page)
	// console.log(totalPages)
	// console.log(metadata)

	// const currentPage = Math.min(Math.max(Number(page), 1), totalPages);
	const currentPage = page;
	// console.log("currentPage")
	// console.log(currentPage)

	const getPagesToShow = () => {
		let startPage = currentPage - 1;
		let endPage = currentPage + 1;

		if (currentPage <= 3) {
			startPage = 1;
			// endPage = 5;
			endPage = totalPages;
		} else if (currentPage >= totalPages - 2) {
			// startPage = totalPages - 4;
			startPage = 1;
			endPage = totalPages;
		}

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i,
		);
	};
	// const [pagination, setPagination] = useState('');

	const pages = getPagesToShow();

	// console.log("pages")
	// console.log(pages)
	// const pages = totalPages;

	return (

		
		<div className="flex items-center justify-center space-x-6 text-black">

			<Link
				className={cn(
					'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
					currentPage === 1 ? 'pointer-events-none bg-gray-100' : 'text-white',
				)}
				href={`?page=${currentPage - 1}`}
			>
				Previous
			</Link>

			<nav
				aria-label="Pagination"
				className="relative z-0 inline-flex -space-x-px rounded-md"
			>
				{pages.map((p, i) => (
					<Link
						key={p}
						className={cn(
							'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50',
							p === currentPage
								? 'pointer-events-none bg-gray-100 '
								: '',
							i === 0 ? 'rounded-l-md text-black' : 'text-white',
							i === pages.length - 1 ? 'rounded-r-md ' : 'text-white',
						)}
						href={`?page=${p}`}
					>
						{p}
					</Link>
				))}
			</nav>

			<Link
				className={cn(
					'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
					!hasNextPage ? 'pointer-events-none bg-gray-100' : 'text-white',
				)}
				href={`?page=${currentPage + 1}`}
			>
				Next
			</Link>


		</div>
	);
};
function useState(arg0: string): [any, any] {
	throw new Error('Function not implemented.');
}

