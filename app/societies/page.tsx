
import Link from "next/link"
import SocietiesList from "./List"

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
    searchParams: { city, page, search, developer, society_Grade, project_Type }

}: {
    // params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    // console.log("developer_name socities page");
    // console.log(developer_name);

    return (
        <>
            <h1></h1>



            {/* <SocietiesList city={city} {...props} /> */}
            <SocietiesList city={city}
                search={search}
                page={page}
                developer={developer}
                society_Grade={society_Grade}
                project_Type={project_Type}
            />


        </>

    )
}