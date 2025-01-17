
import FetchBuilding from '@/app/buildings/components/FetchBuilding'
import UpdateBuildingForm from '@/app/buildings/components/UpdateBuildingForm';
// import { Buildings } from '@prisma/client';
// import { Buildings } from '@prisma/client';


// type Props = {
//     params: { id: number }
//     // searchParams: { [key: string]: string | string[] | undefined }
// }



export default async function editForm( {params}: {params: Promise<{ id: string }>} ) {

    const { id } = await params;
    const building = await FetchBuilding(Number(id))

    return (
        <>
            <div className="text-lg"></div>
            <div className="container">

                <div className="mx-4">
                    <UpdateBuildingForm building={building}/>
                </div>
            </div>
        </>
    )
}