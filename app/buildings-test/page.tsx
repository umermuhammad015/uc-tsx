
// export default function Page(props: PageProps ) {
export default async function Page({
    // params, 
    // searchParams: { city, page, search, building_status, survey_from_date, survey_to_date }

}: {

    // searchParams: { [key: string]: string | string[] | undefined }
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {



    return (
        <>
            <div>Hi</div>

        </>

    )
}