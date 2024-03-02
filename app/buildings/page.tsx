
import Link from "next/link"
import Create from "./Create"
import BuildingsList from "./List"

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <>
            <h1></h1>
            <BuildingsList />
            <Create />
            
        </>

    )
}