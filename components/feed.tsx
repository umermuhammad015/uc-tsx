import prisma from "../app/db";
import React from 'react'

import { revalidatePath } from "next/cache";
import Pagination from "./pagination";

export type FetchBuildingsType = typeof fetchBuildings;

const PAGE_SIZE = 2;

const fetchBuildings = async ({ take = PAGE_SIZE, skip = 0 }) => {
	'use server';

	const results = await prisma.buildings.findMany({
		take,
		skip,
		orderBy: {
			name: 'asc',
		},
	});

	const total = await prisma.buildings.count();

	revalidatePath('/');

	return {
		data: results,
		metadata: {
			hasNextPage: skip + take < total,
			totalPages: Math.ceil(total / take),
		},
	};
}

export const Feed = () => {
    return (
        <>

        
            <Pagination totalPages={0} hasNextPage={false} />
        </>
    )
}
