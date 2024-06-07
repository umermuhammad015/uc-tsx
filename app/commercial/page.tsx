
import Link from "next/link"
// import Create from "./Create"
import CommercialsList from "./List"

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
    searchParams: { city, page, search, project_type, commercial_grade }

}: {
    
    searchParams: { [key: string]: string | string[] | undefined }
}) {


    return (
        <>
            <h1></h1>

            <CommercialsList city={city}
            search={search}
            page={page}
            project_type={project_type}
            commercial_grade={commercial_grade}
                
            />


        </>

    )
}