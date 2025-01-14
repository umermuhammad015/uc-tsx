"use client"

import Link from "next/link";
import UpdateButton from "../components/UpdateButton";
import UpdateSociety from "./UpdateSociety"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function UpdatePlotForm({ societies }: any) {

    const [area, setArea] = useState(societies?.area)
    const [occupancy, setOccupancy] = useState(societies?.occupancy);
    const [population, setPoputation] = useState(societies?.population)
    // const [plot_sizes_residential, setPlot_sizes_residential] = useState(societies?.plot_sizes_residential)
    // const [plot_sizes_commercial, setPlot_sizes_commercial] = useState(societies?.plot_sizes_commercial)
    // const [societies_apartment_size, setSocieties_apartment_size] = useState(societies?.societies_apartment_size)
    const [price, setPrice] = useState(societies?.plot_price)
    const [vilaprice, setVilaprice] = useState(societies?.vilas_price)
    const [rent, setRent] = useState(societies?.vilas_monthly_rent)
    const [commericalprice, setCommericalPrice] = useState(societies?.commercial_plot_price)
    const [apartments_size, setApartments_size] = useState(societies?.apartments_size)
    const [min_apartments_price, setMin_Apartments_price] = useState(societies?.min_apartments_price)
    const [max_apartments_price, setMax_Apartments_price] = useState(societies?.max_apartments_price)
    const [min_apartments_monthly_rent, setMin_Apartments_monthly_rent] = useState(societies?.min_apartments_monthly_rent)
    const [max_apartments_monthly_rent, setMax_Apartments_monthly_rent] = useState(societies?.max_apartments_monthly_rent)
    const [instalment_total_amount, setInstalment_total_amount] = useState(societies?.instalment_total_amount)
    const [instalment_down_payment, setInstalment_down_payment] = useState(societies?.instalment_down_payment)
    const [instalment_possession_Amount, setInstalment_possession_Amount] = useState(societies?.instalment_possession_Amount)
    const [instalment_period, setinstalment_period] = useState(societies?.instalment_period)


    const [paymentTerms, setPaymentTerms] = useState(societies?.payment_terms)


    return (
        <>
            <div>{societies?.name}</div>

            <form
                action={UpdateSociety}
            >
                <div className="p-5 border-2 border-gray-200 dark:border-gray-700">

                    <div className="relative max-w-sm">
                        <label
                            htmlFor="societies-id"
                            className="block mb-2 text-sm font-medium"
                        >
                            Society ID

                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
                        </div>
                        <Input
                            type="text"
                            id="societies-id"
                            name="societies-id"
                            // defaultValue={societies?.survey_date as unknown as string}
                            value={societies?.id as string}
                            onChange={() => (societies)}
                            className="max-w-xs border-gray-400 border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="ID"
                        />
                    </div>


                    {/* Survey Date */}
                    <div className="relative max-w-sm mt-4">
                        <label
                            htmlFor="surveyor-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Survey Date: (Month/Day/year)

                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <Input
                            type="date"
                            id="societies-survey-date"
                            name="societies-survey-date"
                            // defaultValue={societies?.survey_date as unknown as string}
                            defaultValue={societies?.survey_date as string}
                            className="max-w-xs border-gray-400 border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="Survey date"
                        />
                    </div>

                    {/* City */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-city"
                            className="block mb-2 text-sm font-medium"
                        >
                            City
                        </label>
                        {/* <select
              id="societies-city"
              name="societies-city"
              className="select  w-full max-w-xs border-2 border-gray-400 "
            >
              <option>Bahawalpur</option>
              <option>Faisalabad</option>
              <option>Gujranwala</option>
              <option>Hyderabad</option>
              <option>Islamabad</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Multan</option>
              <option>Peshawar</option>
              <option>Quetta</option>
              <option>Rawalpindi</option>
            </select> */}


                        <Select
                            defaultValue={societies?.city}
                            name="societies-city">
                            <SelectTrigger
                                id="societies-city"
                                className="select  w-full max-w-xs border-2 border-gray-400"
                            >
                                <SelectValue />
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

                    {/* Zone/ Region  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-zone"
                            className="block mb-2 text-sm font-medium"
                        >
                            Zone/ Region:
                        </label>
                        <Select
                            defaultValue={societies?.zone as string}
                            name="societies-zone">
                            <SelectTrigger
                                id="societies-zone"
                                className="select  w-full max-w-xs border-2 border-gray-400">
                                <SelectValue placeholder="Select Zone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="East">East</SelectItem>
                                    <SelectItem value="West">West</SelectItem>
                                    <SelectItem value="North">North</SelectItem>
                                    <SelectItem value="South">South</SelectItem>
                                    <SelectItem value="Central">Central</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Soceity/Project Name  */}
                    <div className="mt-4">
                        <label
                            htmlFor="soceity-project-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Soceity/Project Name:
                        </label>
                        <Input
                            id="soceity-project-name"
                            name="soceity-project-name"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.name as string}

                        />

                    </div>

                    {/* Total Phase/ Sectors/ Blocks*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-phase"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total phase / sectors :
                        </label>
                        <Input
                            type="text"
                            id="societies-phase"
                            name="societies-phase"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.phase as string}
                            placeholder=""
                        />
                    </div>

                    {/* Total Blocks*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-blocks"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Blocks :
                        </label>
                        <Input
                            type="number"
                            id="societies-blocks"
                            name="societies-blocks"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.blocks as string}
                            placeholder=""
                        />
                    </div>

                    {/* Location/Address  */}
                    <div className="mt-4">
                        <label htmlFor="societies-address" className="block mb-2 text-sm font-medium">
                            Location/Address:
                        </label>
                        <Input
                            type="text"
                            id="societies-address"
                            name="societies-address"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.address as string}
                            placeholder="address"
                        />
                    </div>

                    {/* Project Type */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-project-type"
                            className="block mb-2 text-sm font-medium"
                        >
                            Project Status
                        </label>
                        <Select
                            defaultValue={societies?.type as string}
                            name="societies-project-type">
                            <SelectTrigger
                                id="societies-project-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Developed">Developed</SelectItem>
                                    <SelectItem value="Under Developed">Under Developed</SelectItem>
                                    <SelectItem value="New Launch">New Launch</SelectItem>
                                    <SelectItem value="Commercial Zone">Commercial Zone</SelectItem>
                                    <SelectItem value="Residential Files">Residential Files</SelectItem>
                                    <SelectItem value="Commercial Files">Commercial Files</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Launch Year*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-launch-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Launch Year:
                        </label>
                        <Input
                            type="text"
                            id="societies-launch-year"
                            name="societies-launch-year"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.launch_year as number}
                            placeholder=""
                        />
                    </div>

                    {/*Grade  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-grade"
                            className="block mb-2 text-sm font-medium"
                        >
                            Grade
                        </label>
                        <Select
                            defaultValue={societies?.grade as string}
                            name="societies-grade">
                            <SelectTrigger
                                id="societies-grade"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue placeholder="Select Grade" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="A+">A+</SelectItem>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B">B</SelectItem>
                                    <SelectItem value="C">C</SelectItem>
                                    <SelectItem value="D">D</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Total Area of Society (Acres) */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-area"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Area of Society (Acres):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="societies-area"
                                name="societies-area"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.area as string}
                                placeholder=""
                                onChange={(e) => {
                                    setArea(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(area).toLocaleString()}
                            </div>
                        </div>
                    </div>



                    {/* Occupancy Ratio */}
                    <div className="">
                        <label
                            htmlFor="societies-occupancy"
                            className="block mb-2 text-sm font-medium"
                        >
                            Occupancy Ratio
                        </label>
                        <div className="flex">
                            <Input
                                type="number"
                                id="societies-occupancy"
                                name="societies-occupancy"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                defaultValue={societies?.occupancy as number}
                                min={0}
                                max={100}
                                placeholder=""
                                onChange={(e) => {
                                    setOccupancy(Number(e.target.value))
                                }}
                            />
                            <div className="m-4">
                                {occupancy + "%"}
                            </div>
                        </div>
                    </div>



                    {/* Population*/}
                    <div className="">
                        <label
                            htmlFor="societies-population"
                            className="block mb-2 text-sm font-medium"
                        >
                            Population:
                        </label>
                        <div className="flex">
                            <Input
                                type="number"
                                id="societies-population"
                                name="societies-population"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                defaultValue={societies?.population as number}
                                placeholder=""
                                onChange={(e) => {
                                    setPoputation(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4 mb-0">
                                {Number(population).toLocaleString()}
                            </div>
                        </div>
                    </div>


                </div>

                {/* Total Plots Residential*/}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="">
                        <label
                            htmlFor="total-plots-residential"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Plots Residential:
                        </label>
                        <Input
                            type="number"
                            id="total-plots-residential"
                            name="total-plots-residential"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.total_plots_residential as number}
                            placeholder=""
                        />
                    </div>

                    {/* Plot Sizes Residential (Sq. Yards)  */}
                    <div className="">
                        <div className="mt-4">
                            <fieldset className="flex gap-10 text-lg">
                                <legend className="block mb-4 text-sm font-medium">
                                    Plot Sizes Residential (Sq. Yards):
                                </legend>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-87-5"
                                        name="plot-sizes-residential-87-5"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_residential_87_5 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-87-5"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        87.5
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-125"
                                        name="plot-sizes-residential-125"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.plot_sizes_residential_125 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-125"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        125
                                    </label>
                                </div>


                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-200"
                                        name="plot-sizes-residential-200"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_residential_200 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-200"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        200
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-250"
                                        name="plot-sizes-residential-250"
                                        defaultChecked={societies?.plot_sizes_residential_250 ? true : false}
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-250"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        250
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-300"
                                        name="plot-sizes-residential-300"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.plot_sizes_residential_300 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-300"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        300
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-400"
                                        name="plot-sizes-residential-400"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.plot_sizes_residential_400 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-400"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        400
                                    </label>
                                </div>


                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-500"
                                        name="plot-sizes-residential-500"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_residential_500 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-500"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        500
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-600"
                                        name="plot-sizes-residential-600"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_residential_600 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-600"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        600
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-800"
                                        name="plot-sizes-residential-800"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_residential_800 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-800"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        800
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-1000"
                                        name="plot-sizes-residential-1000"
                                        defaultChecked={societies?.plot_sizes_residential_1000 ? true : false}
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-1000"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        1,000
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-residential-2000"
                                        name="plot-sizes-residential-2000"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_residential_2000 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-residential-2000"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        2000
                                    </label>
                                </div>




                            </fieldset>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-4">
                        <label
                            htmlFor="plot-sizes-residential"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Sizes Residential (Sq. Yards):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="plot-sizes-residential"
                                name="plot-sizes-residential"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.plot_sizes_residential as number}
                                placeholder="(Sq. Yards)"
                                onChange={(e) => {
                                    setPlot_sizes_residential(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(plot_sizes_residential).toLocaleString()}
                            </div>
                        </div>
                    </div> */}

                {/*Total Plots Commercial  */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="mt-4">
                        <label
                            htmlFor="total-plots-commercial"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Plots Commercial :
                        </label>
                        <Input
                            type="number"
                            id="total-plots-commercial"
                            name="total-plots-commercial"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.total_plots_commercial as number}
                            placeholder=""
                        />
                    </div>

                    {/* Plot Sizes Commercial (Sq. Yards) */}
                    <div className="">
                        <div className="mt-4">
                            <fieldset className="flex gap-10 text-lg">
                                <legend className="block mb-4 text-sm font-medium">
                                    Plot Sizes Commercial (Sq. Yards):
                                </legend>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-87-5"
                                        name="plot-sizes-commercial-87-5"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_commercial_87_5 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-87-5"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        87.5
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-100"
                                        name="plot-sizes-commercial-100"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_commercial_100 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-100"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        100
                                    </label>
                                </div>


                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-125"
                                        name="plot-sizes-commercial-125"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.plot_sizes_commercial_125 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-125"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        125
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-200"
                                        name="plot-sizes-commercial-200"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.plot_sizes_commercial_200 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-200"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        200
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-250"
                                        name="plot-sizes-commercial-250"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.plot_sizes_commercial_250 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-250"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        250
                                    </label>
                                </div>




                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-500"
                                        name="plot-sizes-commercial-500"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_commercial_500 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-500"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        500
                                    </label>
                                </div>



                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-1000"
                                        name="plot-sizes-commercial-1000"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_commercial_1000 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-1000"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        1,000
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="plot-sizes-commercial-2000"
                                        name="plot-sizes-commercial-2000"
                                        type="checkbox"
                                        defaultChecked={societies?.plot_sizes_commercial_2000 ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="plot-sizes-commercial-2000"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        2000
                                    </label>
                                </div>




                            </fieldset>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-4">
                        <label
                            htmlFor="plot-sizes-commercial"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Sizes Commercial (Sq. Yards):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="plot-sizes-commercial"
                                name="plot-sizes-commercial"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.plot_sizes_commercial as number}
                                placeholder="(Sq. Yards)"
                                onChange={(e) => {
                                    setPlot_sizes_commercial(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(plot_sizes_commercial).toLocaleString()}
                            </div>
                        </div>
                    </div> */}

                {/* Total No. of Apartments  */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="mt-4">
                        <label
                            htmlFor="societies-total-apartments"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total No. of Apartments:
                        </label>
                        <Input
                            type="number"
                            id="societies-total-apartments"
                            name="societies-total-apartments"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.total_apartments as number}
                            placeholder=""
                        />
                    </div>

                    {/* Apartment Sizes (Sq. Ft)  */}
                    <div className="">
                        <div className="mt-4">
                            <fieldset className="flex gap-10 text-lg">
                                <legend className="block mb-4 text-sm font-medium">
                                    Apartments Sizes:
                                </legend>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-studio"
                                        name="apartment-studio"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.apartment_studio ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-studio"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        Studio
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-one-bad"
                                        name="apartment-one-bad"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.apartment_one_bad ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-one-bad"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        1 Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-two-bad"
                                        name="apartment-two-bad"
                                        type="checkbox"
                                        defaultChecked={societies?.apartment_two_bad ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-two-bad"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        2 Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-three-bad"
                                        name="apartment-three-bad"
                                        type="checkbox"
                                        defaultChecked={societies?.apartment_three_bad ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-three-bad"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        3 Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-four-bad"
                                        name="apartment-four-bad"
                                        type="checkbox"
                                        defaultChecked={societies?.apartment_four_bad ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-four-bad"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        4 Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-five-bad"
                                        name="apartment-five-bad"
                                        type="checkbox"
                                        defaultChecked={societies?.apartment_four_bad ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-five-bad"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        5 Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-penthouse"
                                        name="apartment-penthouse"
                                        type="checkbox"
                                        defaultChecked={societies?.apartment_penthouse ? true : false}
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-penthouse"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        Penthouse
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-duplex"
                                        name="apartment-duplex"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.apartment_duplex ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-duplex"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        Duplex
                                    </label>
                                </div>

                                {/* <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-size-2000"
                                        name="apartment-size-2000"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={societies?.apartment_size_2000 ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-size-2000"
                                        className="ml-2 text-sm font-medium "
                                    >
                                        2000
                                    </label>
                                </div>
 */}



                            </fieldset>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-4">
                        <label
                            htmlFor="societies-apartment-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Sizes (Sq. Ft):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="societies-apartment-size"
                                name="societies-apartment-size"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.apartment_size as number}
                                placeholder="(Sq. Ft)"
                                onChange={(e) => {
                                    setSocieties_apartment_size(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(societies_apartment_size).toLocaleString()}
                            </div>
                        </div>
                    </div> */}



                {/* Residentiall Plots */}

                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
                    <div className="text-lg">Residentiall Plots:</div>
                    {/* Plot Size (Yards)*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-plot-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Size (Yards):
                        </label>
                        <select
                            id="societies-plot-size"
                            name="societies-plot-size"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.plot_size ? true : false}
                        >
                            <option>87.5</option>
                            <option>125</option>
                            <option>200</option>
                            <option>250</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                        </select>
                    </div>


                    {/* Plot Price  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-plot-price "
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Price :
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="societies-plot-price"
                                name="societies-plot-price"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.plot_price as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(price).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bungalows/ Vilas: */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
                    <div className="text-lg">Bungalows/ Vilas:</div>
                    {/* Bungalows/ Vilas Size (Yards)*/}
                    <div className="mt-4">
                        <label
                            htmlFor=" vilas-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Bungalows/ Vilas Size (Yards):
                        </label>
                        <select
                            id="vilas-size"
                            name="vilas-size"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.vilas_size ? true : false}

                        >
                            <option>87.5</option>
                            <option>125</option>
                            <option>200</option>
                            <option>250</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                        </select>
                    </div>


                    {/* Bungalows/ Vilas Price*/}
                    <div className="mt-4">
                        <label
                            htmlFor="vilas-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Bungalows/ Vilas Price:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="vilas-price"
                                name="vilas-price"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.vilas_price as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setVilaprice(e.target.value)
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(vilaprice).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Monthly Rent*/}
                    <div className="mt-4">
                        <label
                            htmlFor="vilas-monthly-rent"
                            className="block mb-2 text-sm font-medium"
                        >
                            Monthly Rent:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="vilas-monthly-rent"
                                name="vilas-monthly-rent"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.vilas_monthly_rent as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setRent(e.target.value)
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(rent).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commercial Plots: */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
                    <div className="text-lg">Commercial Plots:</div>
                    {/* Plot Size (Yards)*/}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-plot-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Size (Yards):
                        </label>
                        <select
                            id="commercial-plot-size"
                            name="commercial-plot-size"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.commercial_plot_size ? true : false}
                        >
                            <option>100</option>
                            <option>125</option>
                            <option>200</option>
                            <option>300</option>
                            <option>500</option>

                        </select>
                    </div>


                    {/* Plot Price */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-plot-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Price:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="commercial-plot-price"
                                name="commercial-plot-price"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.commercial_plot_price as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setCommericalPrice(e.target.value)
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(commericalprice).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Apartment */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
                    <div className="text-lg">Apartment:</div>
                    {/* Apartment Size*/}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Size:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="apartment-size"
                                name="apartment-size"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.apartment_size as number}
                                placeholder=""
                                onChange={(e) => {
                                    setApartments_size(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(apartments_size).toLocaleString()}
                            </div>
                        </div>
                    </div>


                    {/*Apartment Price*/}
                    <div className="mt-4">
                        <label
                            htmlFor="min-apartments-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Minimum Apartment Price:
                        </label>
                        <div className="flex">
                            <Input

                                type="text"
                                id="min-apartments-price"
                                name="min-apartments-price"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.min_apartments_price as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setMin_Apartments_price(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(min_apartments_price).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="max-apartments-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Maximum Apartment Price:
                        </label>
                        <div className="flex">
                            <Input

                                type="text"
                                id="max-apartments-price"
                                name="max-apartments-price"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.max_apartments_price as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setMax_Apartments_price(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(max_apartments_price).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Monthly Rent*/}
                    <div className="mt-4">
                        <label
                            htmlFor="min-apartments-monthly-rent"
                            className="block mb-2 text-sm font-medium"
                        >
                            Minimum Monthly Rent:
                        </label>
                        <div className="flex">
                            <Input

                                type="text"
                                id="min-apartments-monthly-rent"
                                name="min-apartments-monthly-rent"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.min_apartments_monthly_rent as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setMin_Apartments_monthly_rent(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(min_apartments_monthly_rent).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="max-apartments-monthly-rent"
                            className="block mb-2 text-sm font-medium"
                        >
                            Maximum Monthly Rent:
                        </label>
                        <div className="flex">
                            <Input

                                type="text"
                                id="max-apartments-monthly-rent"
                                name="max-apartments-monthly-rent"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={societies?.max_apartments_monthly_rent as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setMax_Apartments_monthly_rent(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(max_apartments_monthly_rent).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Terms*/}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">


                    <div className="mt-4">
                        <label
                            htmlFor="payment-terms"
                            className="block mb-2 text-sm font-medium"
                        >
                            Payment Terms:
                        </label>
                        <select
                            id="payment-terms"
                            name="payment-terms"
                            className="select  w-full max-w-xs border-2 border-gray-400  "
                            onChange={(e) => setPaymentTerms(e.target.value)}
                            defaultValue={societies?.payment_terms as string}
                        >
                            <option value="Lumpsum Payment">Lumpsum Payment</option>
                            <option value="Instalments">Instalments</option>
                        </select>
                    </div>

                    {/* Total Amount: */}
                    {/* Down Payment:      */}
                    {/* Possession Amount  : */}
                    {/* Instalment Period Years: */}

                    {
                        paymentTerms === "Instalments" &&
                        <>


                            <div className="mt-4">
                                <label
                                    htmlFor="instalment-total-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Total Amount:
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="instalment-total-amount"
                                        name="instalment-total-amount"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        defaultValue={societies?.instalment_total_amount as number}
                                        placeholder="Rs."
                                        onChange={(e) => {
                                            setInstalment_total_amount(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(instalment_total_amount).toLocaleString()}
                                    </div>
                                </div>
                            </div>


                            <div className="mt-4">
                                <label
                                    htmlFor="instalment-down-payment"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Down Payment:
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="instalment-down-payment"
                                        name="instalment-down-payment"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        defaultValue={societies?.instalment_down_payment as number}
                                        placeholder="Rs."
                                        onChange={(e) => {
                                            setInstalment_down_payment(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(instalment_down_payment).toLocaleString()}
                                    </div>
                                </div>
                            </div>


                            <div className="mt-4">
                                <label
                                    htmlFor="instalment-possession-Amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Possession Amount  :
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="instalment-possession-Amount"
                                        name="instalment-possession-Amount"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        defaultValue={societies?.instalment_possession_Amount as number}
                                        placeholder="Rs."
                                        onChange={(e) => {
                                            setInstalment_possession_Amount(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(instalment_possession_Amount).toLocaleString()}
                                    </div>
                                </div>
                            </div>


                            <div className="mt-4">
                                <label
                                    htmlFor="instalment-period"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Instalment Period Years:
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="instalment-period"
                                        name="instalment-period"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        defaultValue={societies?.instalment_period as number}
                                        placeholder=""
                                        onChange={(e) => {
                                            setinstalment_period(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(instalment_period).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </>

                    }
                </div >

                {/* Features: */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="mt-4">
                        <fieldset>

                            <legend className="block mb-2 text-sm font-medium">
                                Features:
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-parks"
                                    name="features-type-parks"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_parks ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-parks"
                                    className="ml-2 text-sm font-medium"
                                >
                                    Parks
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-school"
                                    name="features-type-school"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_school ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-school"
                                    className="ml-2 text-sm font-medium "
                                >
                                    School
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-university"
                                    name="features-type-university"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_university ? true : false}

                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-university"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    University
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-hospital"
                                    name="features-type-hospital"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_hospital ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-hospital"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Hospital
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-commercial-market"
                                    name="features-type-commercial-market"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_commercial_market ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-commercial-market"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Commercial Market
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-zoo"
                                    name="features-type-zoo"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_zoo ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-zoo"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Zoo
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-food-arena"
                                    name="features-type-food-arena"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_food_arena ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-food-arena"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Food Arena
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-gated-community"
                                    name="features-type-gated-community"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_gated_community ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-gated-community"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Gated Community
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-college"
                                    name="features-type-college"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_college ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-college"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    College
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-graveyard"
                                    name="features-type-graveyard"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_graveyard ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-graveyard"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Graveyard
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-masjid"
                                    name="features-type-masjid"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_masjid ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-masjid"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Masjid
                                </label>
                            </div>

                            {/* <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-community-club"
                                    name="features-type-community-club"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_community_club ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-community-club"
                                    className="ml-2 text-sm font-medium"
                                >
                                    Community Club
                                </label>
                            </div> */}

                            {/* <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-grid-station"
                                    name="features-type-grid-station"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_grid_station ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-grid-station"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Grid Station
                                </label>
                            </div> */}
                        </fieldset>
                    </div>
                </div>


                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    {/*Utilities: */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Utilities:
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-underground-electrification"
                                    name="utilities-type-underground-electrification"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_underground_electrification ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-underground-electrification"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Underground Electrification
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-gas"
                                    name="utilities-type-gas"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_gas ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-gas"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Gas
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-water"
                                    name="utilities-type-water"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_water ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-water"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Water
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-utilities-electricity"
                                    name="utilities-type-utilities-electricity"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_utilities_electricity ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-utilities-electricity"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Open Electrification
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-drainage"
                                    name="utilities-type-drainage"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_drainage ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-drainage"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Drainage
                                </label>
                            </div>


                        </fieldset>
                    </div>

                    {/* Developer Name*/}
                    <div className="mt-4">
                        <label
                            htmlFor="developer-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Developer Name:
                        </label>
                        <Input
                            type="text"
                            id="developer-name"
                            name="developer-name"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={societies?.developer_name as string}
                            placeholder=""
                        />
                    </div>

                    {/*Contact No*/}
                    <div className="mt-4">
                        <label
                            htmlFor="contact-no"
                            className="block mb-2 text-sm font-medium"
                        >
                            Contact No:
                        </label>
                        <Input
                            type="number"
                            id="contact-no"
                            name="contact-no"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={societies?.contact_no as string}
                            placeholder=""
                        />
                    </div>


                    {/* Remarks  */}
                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your Remarks
                        </label>
                        <Textarea
                            id="societies-survery-remarks"
                            name="societies-survery-remarks"
                            className="textarea  w-full border-2 border-gray-400 "
                            defaultValue={societies?.survery_remarks as string}
                            placeholder="Leave a comment..."
                        ></Textarea>
                    </div>

                </div >
                <div className="flex gap-2 justify-end mt-3">
                    <UpdateButton />
                    {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                    <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                        <Link href="/societies" >Cancel</Link>
                    </Button>

                    {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}

                </div>

                {/* <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !societies?.survey_date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {societies?.survey_date ? format(societies?.survey_date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover> */}
            </form >
        </>
    )
}
