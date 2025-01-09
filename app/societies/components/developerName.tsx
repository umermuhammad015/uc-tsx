"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import FetchDeveloper from './FetchDeveloper';

export default function DeveloperName() {

    const router = useRouter()


    const [developer, setDeveloper] = useState('');
    const [developerNames, setDeveloperNames] = useState<any>([])

    useEffect(() => {

        const query = {
            developer: developer,

        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)

    }, [developer])

    useEffect(() => {

        
        // if (debouncedNameKeywords !== "") {
        const fetchData = async () => {
            

            try {
                const deve_name = await FetchDeveloper()
                // console.log(deve_name);

                setDeveloperNames(deve_name);
                

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
                <div className="hidden">
                    <label
                        htmlFor="developer-name"
                        id="developer-name"
                        className="select  w-full max-w-xs "
                    >
                        Developer Name
                    </label>
                    <select
                        name="developer-name"
                        className="bg-gray-50 border border-gray-300 w-40 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={developer}
                        onChange={e => {
                            setDeveloper(e.target.value)

                            // setTeamsList(await FetchTeams(e.target.value))
                        }}>
                        <option value='' selected>All</option>
                        {developerNames.length > 0 && developerNames.map((dn: { developer_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, i: React.Key | null | undefined) => <option key={i}>{dn.developer_name}</option>)}
                    </select>
                </div>
            </div>

        </>
    )
}

