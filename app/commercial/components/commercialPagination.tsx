// 'use server';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';


type MetaDataTypes = {
    pageNumber?: number; // City name or undefined
    search_string?: string; // Current page number or undefined
    take?: number; // Search string or undefined
    skip?: number; // Developer name or undefined
    city?: string; // Project type or undefined
    project_type?: string; // Project type or undefined
    commercial_grade?: string; // Survey start date (ISO string) or undefined
    survey_from_date?: string; // Survey end date (ISO string) or undefined
    survey_to_date?: string; // Survey end date (ISO string) or undefined
    page: number,
    totalPages: number,
    hasNextPage: boolean,
    rows_count: number,
};

type CommercialPaginationTypes = {

    metadata: MetaDataTypes,
    city?: string,
    project_type?: string,
    commercial_grade?: string,
    survey_from_date?: string,
    survey_to_date?: string,

}

export default function CommercialPagination({ metadata, city = "",

    project_type = "",
    commercial_grade = "",
    survey_from_date = "",
    survey_to_date = "" }: CommercialPaginationTypes) {
    const { page, totalPages, hasNextPage, rows_count } = metadata;

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
        <>
            <div className="">


                <div className="flex items-center justify-between space-x-10  text-black">

                    <div className="dark:text-white">
                        Rows found: {rows_count}

                    </div>
                    <div className="space-x-6">
                        <Link
                            className={cn(
                                'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium dark:hover:bg-gray-50 dark:hover:text-black hover:bg-gray-300',
                                currentPage === 1 ? 'pointer-events-none bg-gray-100 text-black ' : 'dark:text-white',
                            )}
                            // href={`?page=${currentPage - 1}`}
                            href={'?' + (page !== undefined && ('page=' + (page - 1))) +
                                (city !== "" ? ('&city=' + city) : '') +
                                (commercial_grade !== "" ? ('&commercial_grade=' + commercial_grade) : '') +
                                (project_type !== "" ? ('&project_type=' + project_type) : '') +
                                (survey_from_date !== "" ? ('&survey_from_date=' + survey_from_date) : '') +
                                (survey_to_date !== "" ? ('&survey_to_date=' + survey_to_date) : '')
                            }


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
                                        'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium dark:hover:bg-gray-50 hover:text-black text-black ',
                                        p === currentPage
                                            ? 'pointer-events-none bg-gray-600 hover:text-black text-white dark:hover:text-black hover:bg-gray-300'
                                            : '',
                                        i === 0 ? 'rounded-l-md  dark:hover:text-black hover:bg-gray-300' : 'hover:bg-gray-300 dark:hover:bg-gray-50 dark:hover:text-black dark:text-white',
                                        i === pages.length - 1 ? 'rounded-r-md dark:hover:text-black' : 'dark:text-white hover:text-black',
                                    )}
                                    // href={`?page=${p}`}

                                    href={'?' + (p !== undefined && ('page=' + p)) +
                                        (city !== "" ? ('&city=' + city) : '') +
                                        (commercial_grade !== "" ? ('&commercial_grade=' + commercial_grade) : '') +
                                        (project_type !== "" ? ('&project_type=' + project_type) : '') +
                                        (survey_from_date !== "" ? ('&survey_from_date=' + survey_from_date) : '') +
                                        (survey_to_date !== "" ? ('&survey_to_date=' + survey_to_date) : '')
                                    }

                                >
                                    {p}
                                </Link>
                            ))}
                        </nav>

                        <Link
                            className={cn(
                                'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium dark:hover:bg-gray-50 dark:hover:text-black',
                                !hasNextPage ? 'pointer-events-none bg-gray-100 text-black ' : 'dark:text-white hover:bg-gray-300',
                            )}
                            // href={`?page=${currentPage + 1}`}
                            href={'?' + (page !== undefined && ('page=' + (page + 1))) +
                                (city !== "" ? ('&city=' + city) : '') +
                                (commercial_grade !== "" ? ('&commercial_grade=' + commercial_grade) : '') +
                                (project_type !== "" ? ('&project_type=' + project_type) : '') +
                                (survey_from_date !== "" ? ('&survey_from_date=' + survey_from_date) : '') +
                                (survey_to_date !== "" ? ('&survey_to_date=' + survey_to_date) : '')
                            }
                        >
                            Next
                        </Link>
                    </div>
                    <h1></h1>

                </div>
            </div>
        </>
    );
};
