"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
// import FetchType from './FetchProjectType';
import FetchBuildingStatus from './FetchBuildingstatus';

export default function BuildingStatus() {

    const router = useRouter()


    const [building_status, setBuilding_status] = useState('');
    const [status_List, setStatus_List] = useState<any>([])

    useEffect(() => {

        const query = {
            building_status: building_status,

        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)

    }, [building_status])

    // useEffect(() => {


    //     // if (debouncedNameKeywords !== "") {
    //     const fetchData = async () => {


    //         try {
    //             const types = await FetchBuildingStatus()
    //             // console.log(deve_name);

    //             setType_List(types);


    //         } catch (error) {

    //             console.error('Error fetching city list based on keywords:', error);
    //         }
    //     };

    //     fetchData();
    //     // console.log("nameKeywords2");
    //     // }

    // }, []);



    return (
        <>
            {/* Soceity/Project Name  */}
            <div className="">


                {/* league */}
                <div className="">
                    <label
                        htmlFor="societies-project-type"
                        id="societies-project-type"
                        className="select  w-full max-w-xs "
                    >
                        Building Status
                    </label>
                    <select
                        name="societies-city"
                        className="bg-gray-50 border border-gray-300 w-28 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={e => setBuilding_status(e.target.value)}

                    >
                        {/* <option value='' className='' selected>All</option>
                    {cityList.length > 0 && cityList.map((c: { city: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }, i: Key | null | undefined) =>
                        <option key={i}>{c.city}</option>
                    )} */}

                        <option value="">All</option>
                        <option value="Pre-Launch">Pre-Launch</option>
                        <option value="Under Construction">Under Construction</option>
                        <option value="Constructed">Constructed</option>
                    </select>
                   
                </div>
            </div>

        </>
    )
}

