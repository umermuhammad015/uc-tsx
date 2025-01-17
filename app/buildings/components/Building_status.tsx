"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// import FetchType from './FetchProjectType';


export default function BuildingStatus() {

    const router = useRouter()
    // useEffect(() => {

    //     const query = {
    //         building_status: building_status,

    //     }
    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)

    // }, [building_status])

    function handleChange(value: string | undefined) {
        // console.log(value)

        const query = {
            building_status: value === "All" ? undefined : value,
            page: undefined,
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)
    }

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
                        htmlFor="building-status"
                        className="select  w-full max-w-xs "
                    >
                        Building Status
                    </label>
                    {/* <select
                        name="societies-city"
                        className="bg-gray-50 border border-gray-300 w-28 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={e => setBuilding_status(e.target.value)}

                    >
    

                        <option value="">All</option>
                        <option value="Pre-Launch">Pre-Launch</option>
                        <option value="Under Construction">Under Construction</option>
                        <option value="Constructed">Constructed</option>
                    </select> */}

                    <Select
                        name="building-status"
                        onValueChange={handleChange}>
                        <SelectTrigger
                            id="building-status"
                            className="select w-40 max-w-xs border-2 border-gray-400">
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Pre-Launch">Pre-Launch</SelectItem>
                                <SelectItem value="Under Construction">Under Construction</SelectItem>
                                <SelectItem value="Constructed">Constructed</SelectItem>

                            </SelectGroup>

                        </SelectContent>
                    </Select>
                </div>
            </div>

        </>
    )
}

