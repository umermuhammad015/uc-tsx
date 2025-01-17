import AddPriceForm from "@/app/commercial/components/AddPriceForm";

// type Props = {
//     params: { id: number, name: string }
//     // searchParams: { [key: string]: string | string[] | undefined }
// }

export default async function page( {params}: {params: Promise<{ id: string }>} ) {

    const { id } = await params;

    return (
        <>

            <AddPriceForm commercial_id={Number(id)} />

        </>
    )
}
