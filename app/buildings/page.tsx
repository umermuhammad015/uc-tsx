
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

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

// export type PageProps = {
// 	params: { [key: string]: string | string[] | undefined };
// 	searchParams?: { [key: string]: string | undefined };
// 	// searchParams?: { city: string };
// };

// export default function Page(props: PageProps ) {
export default function Page({
    // params, 
    searchParams: { city, page, search, building_status, survey_from_date, survey_to_date }

}: {

    searchParams: { [key: string]: string | string[] | undefined }
}) {


    return (
        <>
            <h1></h1>

            <SearchInput />

            <header className="flex justify-between items-center mt-4 ">
                <div className="flex gap-5">
                    <CityInput />
                    <BuildingStatus />
                    <DateFilter />
                    {/* <DatePickerWithRange /> */}
                    {/* <DeveloperName /> */}
                    {/* <Grade />
              <ProjectType /> */}
                </div>
                <div className="">



                    <Button asChild>
                        <Link href="/buildings/new"
                        >
                            <span>+</span>
                            <span className="ml-2">Add New Buildings</span></Link>
                    </Button>

                </div>
            </header>

            <List
                city={city}
                search={search}
                page={page}
                building_status={building_status}
                // survey_date={survey_date}
                survey_from_date={survey_from_date}
                survey_to_date={survey_to_date}

            />



            <div className="mt-4">
                <BuildingChart />
            </div>

        </>

    )
}