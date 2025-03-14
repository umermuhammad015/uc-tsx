
import Link from "next/link"
import SocietiesList from "./List"
import { Button } from "@/components/ui/button";
import SearchInput from "./components/SearchInput";
import CityInput from "./components/CityInput";
import ProjectType from "./components/Project_type";
import Grade from "./components/Grade";
import DateFilter from "./components/datefilter";
import { Suspense } from "react";
import { SocietiesSkeleton } from "./components/SocietiesSkeleton";

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

export type PageProps = {
    params: { [key: string]: string | string[] | undefined };
    searchParams?: { [key: string]: string | undefined };
    // searchParams?: { city: string };
};

// export default function Page(props: PageProps ) {
export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

    const { city, page, search, developer, society_grade, project_type, survey_from_date, survey_to_date } = await searchParams;


    const suspenseKey = JSON.stringify({
        city,
        page,
        search,
        developer,
        society_grade,
        project_type,
        survey_from_date,
        survey_to_date
    });

    return (
        <>
            <h1></h1>

            <SearchInput />
            <header className="flex justify-between items-center my-4 ">
                <div className="flex gap-3">
                    <CityInput />
                    {/* <DeveloperName /> */}
                    <ProjectType />
                    <Grade />
                    <DateFilter />


                </div>
                <div className="mt-6">



                    <Button asChild>
                        <Link href="/societies/new"
                        >
                            <span>+</span>
                            <span className="ml-2">Add Society</span></Link>
                    </Button>

                </div>



            </header>

            {/* <SocietiesList city={city} {...props} /> */}
            {/* <Suspense
                key={suspenseKey}
                fallback={<div className="mt-4">Loading....</div>}>
                <SocietiesList
                    city={city}
                    search={search}
                    page={page}
                    developer={developer}
                    society_grade={society_grade}
                    project_type={project_type}
                    survey_from_date={survey_from_date}
                    survey_to_date={survey_to_date}
                // props
                />
            </Suspense> */}

            <Suspense
                key={suspenseKey}
                fallback={<SocietiesSkeleton />}>
                <SocietiesList
                    city={city}
                    search={search}
                    page={page}
                    developer={developer}
                    society_grade={society_grade}
                    project_type={project_type}
                    survey_from_date={survey_from_date}
                    survey_to_date={survey_to_date}
                // props
                />
            </Suspense>




        </>

    )
}