
import Link from "next/link"
// import Create from "./Create"
import CommercialsList from "./List"
import { Button } from "@/components/ui/button";
import CityInput from "./components/CityInput";
import ProjectType from "./components/project_type";
import Grade from "./components/Grade";
import SearchInput from "./components/SearchInput";
import DateFilter from "./components/datefilter";
import { Suspense } from "react";

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | undefined };
	// searchParams?: { city: string };
};
// export default function Page(props: PageProps ) {
export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

    const { city, page, search, project_type, commercial_grade, survey_from_date, survey_to_date } = await searchParams;


    const suspenseKey = JSON.stringify({
        city,
        page,
        search,
        commercial_grade,
        project_type,
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
                    <ProjectType />
                    <Grade />
                    <DateFilter />
                    {/* <DeveloperName /> */}
                    {/* <Grade />
        <ProjectType /> */}
                </div>
                <div className="mt-6">



                    <Button asChild>
                        <Link href="/commercial/new"
                        >
                            <span>+</span>
                            <span className="ml-2">Add New</span></Link>
                    </Button>

                </div>



            </header>


            <Suspense
                key={suspenseKey}
                fallback={<div className="mt-4">Loading....</div>}>
                <CommercialsList city={city}
                    search={search}
                    page={page}
                    project_type={project_type}
                    commercial_grade={commercial_grade}
                    survey_from_date={survey_from_date}
                    survey_to_date={survey_to_date}

                />
            </Suspense>


        </>

    )
}