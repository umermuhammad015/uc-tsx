import Link from "next/link";
import prisma from "../../../db";
import FetchSociety from '@/app/societies/components/FatchSociety'
import UpdateSocietyForm from '@/app/societies/components/UpdateSocietyForm';
import FetchCommercail from "../../components/FetchCommercial";
import UpdateCommercialForm from "../../components/UpdateCommercialForm";
import FetchCommercial from "../../components/FetchCommercial";





type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editForm({ params }: any) {

    // console.log("params")
    // console.log(params)

    const commercial = await FetchCommercial(params.id)

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