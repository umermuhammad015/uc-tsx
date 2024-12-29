"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import FetchGrade from './FetchGrade';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Grade() {

    const router = useRouter()


    const [society_grade, setSociety_grade] = useState('');
    // const [grade_List, setGrade_List] = useState<any>([])

    // useEffect(() => {

    //     const query = {
    //         society_grade: society_grade,

    //     }
    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)

    // }, [society_grade])


    function handleChange(value: any) {
        console.log(value)

        const query = {
            society_grade: value === "All" ? undefined : value,
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
    //             const gradese = await FetchGrade()
    //             // console.log(deve_name);

    //             setGrade_List(gradese);


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
                        htmlFor="soicety-grade"
                        id="soicety-grade"
                        className="select  w-full max-w-xs "
                    >
                        Grade
                    </label>
                    {/* <select
                        name="developer-name"
                        className="bg-gray-50 border border-gray-300 w-28 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={society_grade}
                        onChange={e => {
                            setSociety_grade(e.target.value)

                            // setTeamsList(await FetchTeams(e.target.value))
                        }}>

                        <option value="">All</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select> */}

                    <Select
                        name="soicety-grade"
                        onValueChange={handleChange}>
                        <SelectTrigger
                            id="soicety-grade"
                            className="select w-40 max-w-xs border-2 border-gray-400">
                            <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="A+">A+</SelectItem>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                                <SelectItem value="D">D</SelectItem>

                            </SelectGroup>

                        </SelectContent>
                    </Select>
                </div>
            </div>

        </>
    )
}

