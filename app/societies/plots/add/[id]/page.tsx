
import AddPlotForm from "@/app/societies/components/AddPlotForm";

// type Props = {
//     params: { id: number, name: string }
//     // searchParams: { [key: string]: string | string[] | undefined }
// }

export default async function page( {params}: {params: Promise<{ id: string }>} ) {

    const { id } = await params;

    return (
        <>

            <AddPlotForm society_id={Number(id)} />

        </>
    )
}
