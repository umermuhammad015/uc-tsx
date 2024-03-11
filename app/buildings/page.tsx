
import Link from "next/link"
import Create from "./Create"
import BuildingsList from "./List"

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};

// export default function Page({searchParams: { search = "" }}) {
export default function Page(props: PageProps) {
    return (
        <>
            <h1></h1>
            <BuildingsList {...props} />
            <Create />
            
        </>

    )
}