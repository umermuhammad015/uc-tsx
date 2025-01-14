"use client"

// import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
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
// import FetchCity from "./fetchCity"
// import FetchCity from "./FetchCity"

export default function CityInput() {

    const router = useRouter()

    // const { pending } = useFormStatus()

    // const [city, setCity] = useState('');
    // const [cityList, setCityList] = useState<any>([])
    // console.log(city)


    // useEffect(() => {

    //     const query = {
    //         city: city,

    //     }
    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)

    // }, [city])
    function handleChange(value: any) {
        console.log(value)

        const query = {
            city: value === "All" ? undefined : value,
            page: undefined,
            
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)
    }

    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             // console.log("CityInput use effect trying")
    //             const all_cities = await FetchCity()

    //             // console.log("all_cities");
    //             // console.log(all_cities);

    //             setCityList(all_cities);
    //         } catch (error) {

    //             console.error('Error fetching cities list:', error);
    //         }
    //     };

    //     fetchData();

    // }, []);




    return (
        <>
            <div className="">

                <label
                    htmlFor="building-city"
                    id="building-city"
                    className="select  w-full max-w-xs "
                >
                    City
                </label>
                {/* <select
                    name="building-city"
                    className="bg-gray-50 border border-gray-300 w-28 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setCity(e.target.value)}

                >
                    

                    <option value="">All</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                </select> */}

                <Select
                    name="building-city"
                    onValueChange={handleChange}>
                    <SelectTrigger
                        id="building-city"
                        className="select  w-40 max-w-xs border-2 border-gray-400">
                        <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="All">All</SelectItem>
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
                </Select>



            </div>

        </>
    )
}

