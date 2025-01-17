
import UpdatePriceForm from '@/app/commercial/components/UpdatePriceForm';
import FetchPrice from '@/app/commercial/components/FetchPrice';


// type Props = {
//     params: { id: number }
//     // searchParams: { [key: string]: string | string[] | undefined }
// }



export default async function editPriceForm( {params}: {params: Promise<{ id: string }>} ) {

 const { id } = await params;

    const price = await FetchPrice(Number(id))

    
    return (
        <>
            <div className="text-lg">Price Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                <UpdatePriceForm price={price} />
                </div>
            </div>
        </>
    )
}