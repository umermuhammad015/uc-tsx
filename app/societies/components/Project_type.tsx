"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import FetchType from './FetchProjectType';

export default function ProjectType() {

    const router = useRouter()


    const [project_Type, setProject_Type] = useState('');
    const [type_List, setType_List] = useState<any>([])

    useEffect(() => {

        const query = {
            project_Type: project_Type,

        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)

    }, [project_Type])

    useEffect(() => {

        
        // if (debouncedNameKeywords !== "") {
        const fetchData = async () => {
            

            try {
                const types = await FetchType()
                // console.log(deve_name);

                setType_List(types);
                

            } catch (error) {

                console.error('Error fetching city list based on keywords:', error);
            }
        };

        fetchData();
        // console.log("nameKeywords2");
        // }

    }, []);



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
                        Project Type
                    </label>
                    <select
                        name="societies-project-type"
                        className="bg-gray-50 border border-gray-300 w-28 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={project_Type}
                        onChange={e => {
                            setProject_Type(e.target.value)

                            // setTeamsList(await FetchTeams(e.target.value))
                        }}>
                        <option value='' selected>All</option>
                        {type_List.length > 0 && type_List.map((g: { type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, i: React.Key | null | undefined) => <option key={i}>{g.type}</option>)}
                    </select>
                </div>
            </div>

        </>
    )
}

