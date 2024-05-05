"use client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import qs from 'query-string'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CityInput() {

    const router = useRouter()

    // const { pending } = useFormStatus()

    const [city, setCity] = useState('');
    // console.log(city)

    function handleSearch() {
        // // Get floors information
        // const buildings = prisma?.buildings.findMany({
        //   where: {
        //     name: input,
        //   },
        // });

        // router.push("societies?city=" + city)


    }

    useEffect(() => {

        const query = {
            city: city,

        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)

    }, [city,
    ])
    return (
        <>
            <div className="">

                <label
                    htmlFor="societies-city"
                    id="societies-city"
                    className="select  w-full max-w-xs "
                >
                    City
                </label>
                <select
                    name="societies-city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setCity(e.target.value)}

                >
                    <option value="">All</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Islamabad">Islamabad</option>
                </select>

               

            </div>
             {/* <Button onClick={() => {
                    console.log(city)
                }}>Check</Button> */}

                {/* <Select

                >
                    <SelectTrigger
                        id="societies-city"
                        className="select  w-full max-w-xs border-2 border-gray-400"
                        onChange={(e) => {setCity((e.target as HTMLInputElement).value)}}
                    >

                        <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className="text-lg">Punjab</SelectLabel>
                            <SelectItem value="Bahawalpur">Bahawalpur</SelectItem>
                            <SelectItem value="Faisalabad">Faisalabad</SelectItem>
                            <SelectItem value="Gujranwala">Gujranwala</SelectItem>
                            <SelectItem value="Islamabad">Islamabad</SelectItem>
                            <SelectItem value="Lahore">Lahore</SelectItem>
                            <SelectItem value="Multan">Multan</SelectItem>
                            <SelectItem value="Rawalpindi">Rawalpindi</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel className="text-lg">Sindh</SelectLabel>
                            <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="Karachi">Karachi</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel className="text-lg">KPK</SelectLabel>
                            <SelectItem value="Peshawar">Peshawar</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel className="text-lg">Balochistan</SelectLabel>
                            <SelectItem value="Quetta">Quetta</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select> */}
        </>
    )
}

