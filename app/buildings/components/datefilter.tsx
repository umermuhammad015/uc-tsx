"use client";

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// import FetchType from './FetchProjectType';
import FetchBuildingStatus from './FetchBuildingstatus';
import { DateRange } from 'react-day-picker';
import { addDays, format, subDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import FetchDate from './fetchdate';

export default function DateFilter() {

    const router = useRouter()
    const searchParams = useSearchParams();


    // const [survey_date, setSurvey_date] = useState('');
    const [survey_date_from, setSurvey_date_from] = React.useState<Date>(new Date('2024-01-01'))
    const [survey_date_to, setSurvey_date_to] = React.useState<Date>(new Date('2024-12-31'))

    // console.log(survey_date_from)



    // const [status_List, setStatus_List] = useState<any>([])

    // useEffect(() => {

    //     // console.log("survey_date")
    //     // console.log(survey_date?.from.toLocaleDateString('en-CA'))
    //     // console.log("survey_date")
    //     // console.log(survey_date?.to.toLocaleDateString('en-CA'))

    //     // const query = {
    //     //     survey_from_date: survey_date_from.toLocaleDateString('en-CA'),
    //     //     survey_to_date: survey_date_to.toLocaleDateString('en-CA'),
    //     // }

    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         // query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)

    // }, [survey_date_from, survey_date_to])



    const handleToDateChange = (date: Date | undefined) => {

        if (!date) return;

        setSurvey_date_to(date);
        const formattedDate = format(date, "yyyy-MM-dd");
        

        // Create a new URLSearchParams instance to merge query params
        const params = new URLSearchParams(searchParams.toString());
        params.set("survey_to_date", formattedDate); // Add or update the "date" parameter
        params.delete("page"); // Add or update the "page" parameter

        // Push the updated query string to the router
        router.push(`?${params.toString()}`);
    }

    const handleFromDateChange = (date: Date | undefined) => {
        if (!date) return;
        setSurvey_date_from(date);
        const formattedDate = format(date, "yyyy-MM-dd");

        // Create a new URLSearchParams instance to merge query params
        const params = new URLSearchParams(searchParams.toString());
        params.set("survey_from_date", formattedDate); // Add or update the "date" parameter
        params.delete("page"); // Add or update the "page" parameter

        // Push the updated query string to the router
        router.push(`?${params.toString()}`);
    }



    return (
        <>
            {/* Soceity/Project Name  */}
            <div className={cn("flex gap-2")}>
                {/* <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                                "w-[300px] justify-start text-left font-normal",
                                !survey_date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {survey_date?.from ? (
                                survey_date.to ? (
                                    <>
                                        {format(survey_date.from, "LLL dd, y")} -{" "}
                                        {format(survey_date.to, "LLL dd, y")}
                                    </>
                                ) : (
                                    format(survey_date.from, "LLL dd, y")
                                )
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={survey_date?.from}
                            selected={survey_date}
                            onSelect={setSurvey_date}
                            numberOfMonths={1}

                        />
                    </PopoverContent>
                </Popover> */}

                <div className="">
                    <div>Survey Period</div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal border-2 border-gray-400 rounded-md",
                                    !survey_date_from && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {survey_date_from ? format(survey_date_from, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                defaultMonth={survey_date_from}
                                selected={survey_date_from}
                                onSelect={handleFromDateChange}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="">
                    <div>-</div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal border-2 border-gray-400 rounded-md",
                                    !survey_date_to && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {survey_date_to ? format(survey_date_to, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={survey_date_to}
                                onSelect={handleToDateChange}

                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

        </>
    )
}

