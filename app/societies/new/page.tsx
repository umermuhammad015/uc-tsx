"use client";

import { useState } from "react";

import AddButton from "../components/AddButton";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import createSociety from "../../actions/createSociety"

import { redirect } from "next/navigation";
// import AddButton from "../components/AddButton";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"



import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export default function NewSocietyPage() {

  const [area, setArea] = useState(0);
  const [population, setPoputation] = useState(0);
  const [plot_sizes_residential, setPlot_sizes_residential] = useState(0);
  const [plot_sizes_commercial, setPlot_sizes_commercial] = useState(0);
  const [societies_apartment_size, setSocieties_apartment_size] = useState(0);
  const [plot_price, setPlot_price] = useState(0);
  const [vilas_price, setVilas_price] = useState(0);
  const [vilas_monthly_rent, setVilas_monthly_rent] = useState(0);
  const [commercial_plot_price, setCommercial_plot_price] = useState(0);
  const [apartment_size, setApartment_size] = useState(0);
  const [apartments_price, setApartments_price] = useState(0);
  const [apartments_monthly_rent, setApartments_monthly_rent] = useState(0);

  // const [date, setDate] = useState<Date>()

  return (
    <>
      <div className="text-lg">Societies</div>
      <form
        action={createSociety}
      >
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700">

          {/* Survey Date */}

          <div className="relative max-w-sm">
            <label
              htmlFor="surveyor-name"
              className="block mb-2 text-sm font-medium "
            >
              Survey Date

            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
              <svg
                className="w-4 h-4  dark:text-gray-400 mt-6"
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
              // defaultValue="2024-12-13"
              defaultValue={(new Date).toISOString().split('T')[0]}
              // value="12/26/2024"
              className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
              placeholder="Survey date"
            />
          </div>

          {/* Soceity/Project Name  */}
          <div className="mt-4">
            <label
              htmlFor="soceity-project-name"
              className="block mb-2 text-sm font-medium "
            >
              Soceity/Project Name:
            </label>
            <Input
              id="soceity-project-name"
              name="soceity-project-name"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              required
            />

          </div>

          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
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

          {/* City */}
          <div className="mt-4">
            <label
              htmlFor="societies-city"
              className="block mb-2 text-sm font-medium"
            >
              City
            </label>
            <select
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
            </select>
          </div>

          {/* Project Type */}
          <div className="mt-4">
            <label
              htmlFor="societies-project-type"
              className="block mb-2 text-sm font-medium"
            >
              Project Type
            </label>
            <select
              id="societies-project-type"
              name="societies-project-type"
              className="select  w-full max-w-xs border-2 border-gray-400 "
            >
              <option>New Launch</option>
              <option>Existing</option>

            </select>
          </div>



          {/* Zone/ Region  */}
          <div className="mt-4">
            <label
              htmlFor="societies-zone"
              className="block mb-2 text-sm font-medium"
            >
              Zone/ Region:
            </label>
            <select
              id="societies-zone"
              name="societies-zone"
              className="select  w-full max-w-xs border-2 border-gray-400  "
            >
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
              <option>Central</option>

            </select>
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
              placeholder="address"
            />
          </div>

          {/* Total Phase/ Sectors/ Blocks*/}
          <div className="mt-4">
            <label
              htmlFor="societies-blocks"
              className="block mb-2 text-sm font-medium"
            >
              Total Phase/ Sectors/ Blocks:
            </label>
            <Input
              type="text"
              id="societies-blocks"
              name="societies-blocks"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
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
            <select
              id="societies-grade"
              name="societies-grade"
              className="select w-full max-w-xs border-2 border-gray-400  "
            >
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>

          {/* Occupancy Ratio */}
          <div className="mt-4">
            <label
              htmlFor="societies-occupancy"
              className="block mb-2 text-sm font-medium"
            >
              Occupancy Ratio
            </label>
            <Input
              // type="number"
              id="societies-occupancy"
              name="societies-occupancy"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
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
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
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

          {/* Population*/}
          <div className="mt-4">
            <label
              htmlFor="societies-population"
              className="block mb-2 text-sm font-medium"
            >
              Population:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-population"
                name="societies-population"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                onChange={(e) => {
                  setPoputation(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(population).toLocaleString()}
              </div>
            </div>
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
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* Total Plots Residential*/}
          <div className="mt-4">
            <label
              htmlFor="total-plots-residential"
              className="block mb-2 text-sm font-medium"
            >
              Total Plots Residential:
            </label>
            <Input
              type="text"
              id="total-plots-residential"
              name="total-plots-residential"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Plot Sizes Residential (Sq. Yards)  */}
          <div className="mt-4">
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
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
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
          </div>

          {/*Total Plots Commercial  */}
          <div className="mt-4">
            <label
              htmlFor="total-plots-commercial"
              className="block mb-2 text-sm font-medium"
            >
              Total Plots Commercial :
            </label>
            <Input
              type="text"
              id="total-plots-commercial"
              name="total-plots-commercial"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Plot Sizes Commercial (Sq. Yards) */}
          <div className="mt-4">
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
          </div>

          {/* Total No. of Apartments  */}
          <div className="mt-4">
            <label
              htmlFor="societies-total-apartments"
              className="block mb-2 text-sm font-medium"
            >
              Total No. of Apartments:
            </label>
            <Input
              type="text"
              id="societies-total-apartments"
              name="societies-total-apartments"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Apartment Sizes (Sq. Ft)  */}
          <div className="mt-4">
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
          </div>

        </div>

        {/* Residentiall Plots */}

        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
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
                onChange={(e) => {
                  setPlot_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
                type="text"
                id="societies-plot-price"
                name="societies-plot-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
              />
              <div className="m-4">
                {Number(plot_price).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Bungalows/ Vilas: */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
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
                placeholder="Rs."
                onChange={(e) => {
                  setVilas_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(vilas_price).toLocaleString()}
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
                placeholder="Rs."
                onChange={(e) => {
                  setVilas_monthly_rent(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(vilas_monthly_rent).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Plots: */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
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
                placeholder="Rs."
                onChange={(e) => {
                  setCommercial_plot_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(commercial_plot_price).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/*Apartment */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
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
                placeholder=""
                onChange={(e) => {
                  setApartment_size(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(apartment_size).toLocaleString()}
              </div>
            </div>
          </div>


          {/*Apartment Price*/}
          <div className="mt-4">
            <label
              htmlFor="apartments-price"
              className="block mb-2 text-sm font-medium"
            >
              Apartment Price:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="apartments-price"
                name="apartments-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setApartments_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(apartments_price).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Monthly Rent*/}
          <div className="mt-4">
            <label
              htmlFor="apartments-monthly-rent"
              className="block mb-2 text-sm font-medium"
            >
              Monthly Rent:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="apartments-monthly-rent"
                name="apartments-monthly-rent"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setApartments_monthly_rent(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(apartments_monthly_rent).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">

          {/* Payment Terms*/}
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
              className="select  w-full max-w-xs border-2 border-gray-400 "
            >
              <option value="Lumpsum Payment">Lumpsum Payment</option>
              <option value="Instalments">Instalments</option>
            </select>
          </div>
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-parks"
                  className="ml-2 text-sm font-medium "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-school"
                  className="ml-2 text-sm font-medium  "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-zoo"
                  className="ml-2 text-sm font-medium  "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-gated-community"
                  className="ml-2 text-sm font-medium  "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-masjid"
                  className="ml-2 text-sm font-medium  "
                >
                  Masjid
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-community-club"
                  name="features-type-community-club"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-community-club"
                  className="ml-2 text-sm font-medium  "
                >
                  Community Club
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-grid-station"
                  name="features-type-grid-station"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-grid-station"
                  className="ml-2 text-sm font-medium  "
                >
                  Grid Station
                </label>
              </div>
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-underground-electrification"
                  className="ml-2 text-sm font-medium  "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-gas"
                  className="ml-2 text-sm font-medium  "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-water"
                  className="ml-2 text-sm font-medium "
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
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-utilities-electricity"
                  className="ml-2 text-sm font-medium "
                >
                  Electricity
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="utilities-type-drainage "
                  name="utilities-type-drainage "
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-drainage "
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
              type="text"
              id="contact-no"
              name="contact-no"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
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
              className="textarea  w-full border-2 border-gray-400  "
              placeholder="Leave a comment..."
            ></Textarea>
          </div>

        </div >

        {/* <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
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

        <div className="flex gap-2 justify-center mt-3">
          <AddButton />
          {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

          <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
            <Link href="/societies">Cancel</Link>
          </Button>

        </div>
        {/* <button className="btn" type="submit">Add New</button> */}
      </form>
    </>

  )
}

