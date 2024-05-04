"use client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
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

    return (
        <>
            <div className="">
                <label
                    htmlFor="societies-city"
                    className="block mb-2 text-sm font-medium"
                >
                    City
                </label>
                <Select
                    name="societies-city"
                    defaultValue={city}

                >
                    <SelectTrigger
                        id="societies-city"
                        className="select  w-full max-w-xs border-2 border-gray-400"
                        onChange={e => setCity((e.target as HTMLInputElement).value)}
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
                </Select>
            </div>
        </>
    )
}

