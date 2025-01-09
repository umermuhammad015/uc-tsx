
import Link from "next/link"
// import Create from "./Create"
import CommercialsList from "./List"
import List from "./List";
import { Button } from "@/components/ui/button";
import CityInput from "./components/CityInput";
import DateFilter from "./components/datefilter";
import BuildingStatus from "./components/Building_status";
import SearchInput from "./components/SearchInput";
import Pagination from "@/components/pagination";
import BuildingChart from "./components/BuildingChart";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

// export type PageProps = {
// 	params: { [key: string]: string | string[] | undefined };
// 	searchParams?: { [key: string]: string | undefined };
// 	// searchParams?: { city: string };
// };

// export default function Page(props: PageProps ) {
export default async function Page({
    // params, 
    // searchParams: { city, page, search, building_status, survey_from_date, survey_to_date }
    searchParams
}: {

    // searchParams: { [key: string]: string | string[] | undefined }
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

    const { city, page, search, building_status, survey_from_date, survey_to_date } = await searchParams;


    const suspenseKey = JSON.stringify({
        city,
        page,
        search,
        building_status,
        survey_from_date,
        survey_to_date
    });




    return (
        <>
            <h1></h1>

            <SearchInput />

            <header className="flex justify-between items-center mt-4 ">
                <div className="flex gap-3">
                    <CityInput />
                    <BuildingStatus />
                    <DateFilter />
                    {/* <DatePickerWithRange /> */}
                    {/* <DeveloperName /> */}
                    {/* <Grade />
              <ProjectType /> */}
                </div>
                <div className="mt-6">
                    <Button asChild>
                        <Link href="/buildings/new"
                        >
                            <span>+</span>
                            <span className="ml-2">Add New Buildings</span></Link>
                    </Button>

                </div>
            </header>


            <Suspense
                key={suspenseKey}
                fallback={<>
                    <div className="flex flex-col gap-1 mt-4">
                        <div className="space-y-2">
                            <Skeleton className="h-10 w-full bg-gray-600" />

                        </div>
                        <div className="flex flex-col gap-0.5">
                            <Skeleton className="h-12 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-12 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-12 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-12 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-12 w-full bg-gray-300 mt-4 rounded-lg" />

                        </div>

                    </div>
                </>}>
                <List
                    city={city}
                    search={search}
                    page={page}
                    building_status={building_status}
                    // survey_date={survey_date}
                    survey_from_date={survey_from_date}
                    survey_to_date={survey_to_date}

                />
            </Suspense>



            <div className="mt-4">
                <BuildingChart />
            </div>

        </>

    )
}