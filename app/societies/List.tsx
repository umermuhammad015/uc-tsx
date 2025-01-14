"use server"

import Link from "next/link";
import prisma from "../db";
import { Button } from "@/components/ui/button";
// import { useSearchParams } from 'next/navigation'
// import { Pagination } from '../../components/pagination';



import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import DeleteSocietyDialog from "./components/DeleteSocietyDialog";
import SocietyPagination from "./components/Societypagination";
// import DatePickerWithRange from "./components/date";
// import BuildingChart from "./components/BuildingChart";

// export const revalidate = 0; // revalidate the date at most every hour
// export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

const GetSocieties = async ({
    pageNumber = 1,
    search_string = undefined,
    take = PAGE_SIZE,
    skip = 0,
    developer = "",
    city = undefined,
    society_grade = undefined,
    project_type = undefined,
    survey_from_date = undefined,
    survey_to_date = undefined
}) => {

    // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
    // console.log("GetSocieties");

    // console.log("developer_name GetSocieties")
    // console.log(developer)
    // console.log("Fetching data for Building params")
    // console.log('city=', city, "page=", pageNumber,
    //   "skip=", skip, "take=", take
    // )

    // console.log("developer inside if")
    // console.log(developer)

    const prisma_query: any = {
        take,
        skip,
        where: {
            OR: [
                {
                    name: {
                        contains: search_string,
                        mode: 'insensitive',
                    },
                },
                {
                    city: {
                        contains: search_string,
                        mode: 'insensitive',
                    },
                },
            ],
            // city: city === "" ? undefined : city,
            city: city === "All" ? undefined : city,
            "survey_date": {
                "gte": survey_from_date,
                "lte": survey_to_date
            },
            developer_name: developer === "" ? undefined : developer,
            grade: society_grade === "All" ? undefined : society_grade,
            type: project_type === "All" ? undefined : project_type,

        },
        orderBy: {
            updatedAt: 'desc', // Sort by "updatedAt" in descending order
        }
    }
    const prisma_counts_query: any = {
        where: {
            OR: [
                {
                    name: {
                        contains: search_string,
                        mode: 'insensitive',
                    },
                },
                {
                    city: {
                        contains: search_string,
                        mode: 'insensitive',
                    },
                },
            ],
            // city: city === "" ? undefined : city,
            // city: city === "All" ? undefined : city ,
            city: city === "All" ? undefined : city,
            "survey_date": {
                "gte": survey_from_date,
                "lte": survey_to_date
            },
            developer_name: developer === "" ? undefined : developer,
            grade: society_grade === "All" ? undefined : society_grade,
            type: project_type === "All" ? undefined : project_type,
            // survey_date: survey_from_date === "" ? undefined : survey_date,

        },
        orderBy: {
            name: 'asc',
        },
    }

    // console.log("prisma_query if true");
    // console.log(prisma_query);

    const results = await prisma.societies.findMany(prisma_query);

    // console.log("building results")
    // console.log(results)

    const rows_count = await prisma.societies.count(prisma_counts_query);


    // const rows_count = Object.keys(results_counts_query).length;
    // console.log("rows_count")
    // console.log(rows_count)

    // const total = await prisma.buildings.count();

    // revalidatePath('/societies');

    const return_object = {
        data: results,
        metadata: {
            page: pageNumber,
            survey_to_date,
            hasNextPage: skip + take < rows_count,
            totalPages: Math.ceil(rows_count / take),
            rows_count: rows_count



        },
    };

    // console.log("RO")
    // console.log(return_object)

    return return_object

}

type Props = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
}



// export default async function List(props: PageProps) {
export default async function List({ city, page, search, developer, society_grade, project_type, survey_from_date, survey_to_date }: any) {


    const pageNumber = Number(page || 1); // Get the page number. Default to 1 if not provided.

    const take = PAGE_SIZE;
    const skip = (pageNumber - 1) * take; // Calculate skip based on page number.

    const search_string = search || ''

    // console.log("city param")
    // console.log(city)

    const { data, metadata } = await GetSocieties({ pageNumber, search_string, take, skip, city, developer, society_grade, project_type, survey_from_date, survey_to_date });

    const queryParams = new URLSearchParams();

    if (search) queryParams.append("search_string", search);
    if (city) queryParams.append("city", city);
    if (society_grade) queryParams.append("society_grade", society_grade);
    if (project_type) queryParams.append("project_type", project_type);
    if (survey_from_date) queryParams.append("survey_from_date", survey_from_date);
    if (survey_to_date) queryParams.append("survey_to_date", survey_to_date);



    return (
        <>

            <Table className="table text-base">
                <TableHeader>
                    <TableRow className="">
                        <TableHead>
                            <div className="text-lg">Societies Names</div>
                        </TableHead>
                        <TableHead>
                            <div className="text-lg">Location</div>
                        </TableHead>
                        <TableHead>
                            <div className="text-lg">Project Status</div>
                        </TableHead>

                        <TableHead>
                            <div className="text-lg">Grade</div>
                        </TableHead>
                        <TableHead>
                            <div className="text-lg">Size (Acres)</div>
                        </TableHead>
                        <TableHead>
                            <div className="text-lg">Occupancy</div>
                        </TableHead>
                        <TableHead className="flex justify-between">
                            <div className="text-lg mt-2">Action</div>
                            <Button asChild>
                                <Link
                                    href={
                                        "/api/tables/plots?format=xlsx" +
                                        [
                                            search && search !== "undefined" ? `&search=${search}` : "",
                                            city && city !== "undefined" ? `&city=${city}` : "",
                                            developer && developer !== "undefined" ? `&developer=${developer}` : "",
                                            society_grade && society_grade !== "undefined" ? `&society_grade=${society_grade}` : "",
                                            project_type && project_type !== "undefined" ? `&project_type=${project_type}` : "",
                                            survey_from_date && survey_from_date !== "undefined" ? `&survey_from_date=${survey_from_date}` : "",
                                            survey_to_date && survey_to_date !== "undefined" ? `&survey_to_date=${survey_to_date}` : "",
                                        ]
                                            .filter(Boolean) // Remove empty strings
                                            .join("") // Join parameters with '&'
                                    }
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-download">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" x2="12" y1="15" y2="3" />
                                    </svg>
                                    <span className="ml-2">Export</span>
                                </Link>
                            </Button>
                        </TableHead>



                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((societies) => (
                        <TableRow key={societies.id} className="">
                            {/* <TableCell><Link href={"societies/" + societies.id + "?"}>{societies.name}</Link></TableCell> */}
                            <TableCell><Link href={`societies/${societies.id}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`}>{societies.name}</Link></TableCell>
                            <TableCell>{societies.address}</TableCell>
                            <TableCell>{societies.type}</TableCell>

                            <TableCell className="text-center">{societies.grade}</TableCell>
                            <TableCell className="text-center">{Number(societies.area).toLocaleString() === "0" ? "-" : Number(societies.area).toLocaleString()}</TableCell>
                            <TableCell className="text-center">

                                {(societies?.occupancy === null ? "0%" : societies?.occupancy + "%")}
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-around gap-2">
                                    <div className="flex gap-4">
                                        <Button asChild>
                                            <Link href={"societies/edit/" + societies.id}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                                Edit
                                            </Link>
                                        </Button>


                                    </div>

                                    <Button asChild>
                                        <Link href={"societies/plots/add/" + societies.id}>
                                            Add Price
                                        </Link>
                                    </Button>


                                    <DeleteSocietyDialog society_id={societies.id} />


                                </div>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>

            </Table >


            {/* <LoadMore datas ={data} /> */}

            <div className="mt-6">
                <SocietyPagination metadata={metadata}
                    city={city}
                    search={search}
                    page={page}
                    developer={developer}
                    society_grade={society_grade}
                    project_type={project_type}
                    survey_from_date={survey_from_date}
                    survey_to_date={survey_to_date}


                />

            </div>
        </>
    );
}
