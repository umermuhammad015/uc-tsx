
import UpdateCommercialForm from "../../components/UpdateCommercialForm";
import FetchCommercial from "../../components/FetchCommercial";





// type Props = {
//     params: { id: number }
//     // searchParams: { [key: string]: string | string[] | undefined }
// }

export default async function editForm( {params}: {params: Promise<{ id: string }>} ) {

    const { id } = await params;
   
    //    const price = await FetchPrice(id)
    const commercial = await FetchCommercial(Number(id))

    // console.log("params")
    // console.log(commercial)

    return (
        <>
            <div className="text-lg"></div>
            <div className="container">

                <div className="mx-4">
                <UpdateCommercialForm commercial={commercial} />
                </div>
            </div>
        </>
    )
}