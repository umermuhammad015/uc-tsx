
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
export default function Page( { 
    // params, 
    searchParams: { city, page, search }

}: {
    // params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  } ) {
    
    // console.log("city socities page");
    // console.log(city);

    return (
        <>
            <h1></h1>



            {/* <SocietiesList city={city} {...props} /> */}
            <SocietiesList city={city} search={search} page={page} />
           
            
        </>

    )
}