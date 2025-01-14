"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ProjectType() {

    const router = useRouter()


    // const [project_type, setProject_type] = useState('');
    // const [type_List, setType_List] = useState<any>([])

    // useEffect(() => {

    //     const query = {
    //         project_type: project_type,

    //     }
    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)



    // }, [project_type])

    function handleChange(value: any) {
        console.log(value)

        const query = {
            project_type: value === "All" ? undefined : value,
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
    //             const types = await FetchProjectType()
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
                        htmlFor="commercial-project-status"
                        id="commercial-project-status"
                        className="select  w-full max-w-xs "
                    >
                        Project Status
                    </label>
                    {/* <select
                        name="commercial-project-status"
                        className="bg-gray-50 border border-gray-300 w-28 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        // defaultValue={project_type}
                        onChange={e => {
                            setProject_type(e.target.value)

                            // setTeamsList(await FetchTeams(e.target.value))
                        }}>
                        <option value="">All</option>
                        <option value="Developed">Developed</option>
                        <option value="Under Developed">Under Developed</option>
                        <option value="New Launch">New Launch</option>
                        <option value="Files">Files</option>
                    </select> */}

                    <Select
                        name="commercial-project-status"
                        onValueChange={handleChange}>
                        <SelectTrigger
                            id="commercial-project-status"
                            className="select w-40 max-w-xs border-2 border-gray-400">
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Developed">Developed</SelectItem>
                                <SelectItem value="Under Developed">Under Developed</SelectItem>
                                <SelectItem value="New Launch">New Launch</SelectItem>
                                <SelectItem value="Files">Files</SelectItem>

                            </SelectGroup>

                        </SelectContent>
                    </Select>
                </div>
            </div>

        </>
    )
}

