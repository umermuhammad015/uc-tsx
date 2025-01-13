
import FetchBuilding from '@/app/buildings/components/FetchBuilding'
import UpdateBuildingForm from '@/app/buildings/components/UpdateBuildingForm';


type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editForm({ params }: any) {

    const { id } = await params;

    const buildings = await FetchBuilding(id)



    return (
        <>
            <div className="text-lg"></div>
            <div className="container">

                <div className="mx-4">
                    <UpdateBuildingForm building={buildings} />
                </div>
            </div>
        </>
    )
}