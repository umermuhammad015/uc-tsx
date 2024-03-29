"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import AddButton from "../components/AddButton";
import { useState } from "react";
import createBuilding from "../../actions/createBuilding"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



export default function Page() {

  const [buildingStatus, setBuildingStatus] = useState("Existing")

  const [apartments_maintenance_fee, setApartments_Maintenance_Fee] = useState(0);
  const [retail_floors_maintenance_fee, setRetail_Floors_Maintenance_Fee] = useState(0);
  const [office_maintenance_fee, setOffice_Maintenance_Fee] = useState(0);
  const [plot_size, setPlot_Size] = useState(0);
  const [construction_area, setConstruction_Area] = useState(0);
  
  // const [office_maintenance_fee, setOffice_Maintenance_Fee] = useState(0);
  // function onbuildingStatusChange(e) {
  //   setBuildingStatus(e.target.value)
  // }

  return (
    <>
      <Link href="/buildings" className="text-lg">Buildings</Link>

      <form action={createBuilding}>
        <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
          {/* Building Name  */}
          <div className="">
            <div className="">
              <label
                htmlFor="building-name"
                className="block mb-2 text-sm font-medium"
              >
                Building name:
              </label>
              <Input
                type="text"
                id="building-name"
                name="building-name"
                required
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Building Name"
              />
            </div>

            {/* City */}
            <div className="mt-4">
              <label
                htmlFor="building-city"
                className="block mb-2 text-sm font-medium"
              >
                City
              </label>
              <select
                id="building-city"
                name="building-city"
                className="select  w-full max-w-xs border-2 border-gray-400"
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
          </div>
        </div>

        <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
          <label
            htmlFor="building-status"
            className="block mb-2 text-sm font-medium"
          >
            Building Status
          </label>
          <select
            id="building-status"
            name="building-status"
            className="select w-full max-w-xs border-2 border-gray-400 "
          >
            <option>New Launch</option>
            <option>Pre-Launch</option>
            <option>Existing</option>
            <option>Other</option>

          </select>


          {/* Building Status */}
          {/* <div className="flex gap-10">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
              <Input name="type" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="html" />
              <span
                className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="html">
              HTML
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
              <Input name="type" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="react" checked />
              <span
                className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="react">
              React
            </label>
          </div>
        </div>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="New Launch" id="building-status-1" />
            <Label htmlFor="building-status-1">New Launch</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Pre-Launch" id="building-status-2" />
            <Label htmlFor="building-status-2">Pre-Launch</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Existing" id="building-status-3" />
            <Label htmlFor="building-status-3">Existing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Other" id="building-status-4" />
            <Label htmlFor="building-status-4">Other</Label>
          </div>
        </RadioGroup> */}

          {/* Facilities */}
          <div className="mt-8">
            <fieldset>
              <legend className="block mb-2 text-sm font-medium">
                Building Facilities
              </legend>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-facility-centrally-air-conditioned"
                  name="building-facility-centrally-air-conditioned"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-facility-centrally-air-conditioned"
                  className="ml-2 text-sm font-medium  "
                >
                  Centrally Air Conditioned
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-facility-security"
                  name="building-facility-security"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-facility-security"
                  className="ml-2 text-sm font-medium  "
                >
                  Security
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-facility-escalators"
                  name="building-facility-escalators"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-facility-escalators"
                  className="ml-2 text-sm font-medium  "
                >
                  Escalators
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-facility-food-court"
                  name="building-facility-food-court"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-facility-food-court"
                  className="ml-2 text-sm font-medium  "
                >
                  Food Court
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-facility-entertainment-area"
                  name="building-facility-entertainment-area"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-facility-entertainment-area"
                  className="ml-2 text-sm font-medium  "
                >
                  Entertain Area
                </label>
              </div>
            </fieldset>
          </div>

          {/* Building Type  */}
          <div className="mt-4">
            <fieldset>
              <legend className="block mb-2 text-sm font-medium">
                Building Type
              </legend>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-type-mixed-use"
                  name="building-type-mixed-use"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-type-mixed-use"
                  className="ml-2 text-sm font-medium  "
                >
                  Mixed use
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-type-retail"
                  name="building-type-retail"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-type-retail"
                  className="ml-2 text-sm font-medium  "
                >
                  Retail
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-type-offices"
                  name="building-type-offices"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-type-offices"
                  className="ml-2 text-sm font-medium  "
                >
                  Offices
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-type-apartments"
                  name="building-type-apartments"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-type-apartments"
                  className="ml-2 text-sm font-medium  "
                >
                  Apartments
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="building-type-other"
                  name="building-type-other"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="building-type-other"
                  className="ml-2 text-sm font-medium "
                >
                  Other
                </label>
              </div>
            </fieldset>
          </div>
        </div>


        {/* Location/Address Section */}
        <div className="grid grid-cols-3 gap-4 p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
          {/* Zone  */}
          <div className="mt-4">
            <label htmlFor="zone" className="block mb-2 text-sm font-medium">
              Zone:
            </label>
            <Input
              type="text"
              name="zone"
              id="zone"
              placeholder="Type here"
              className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
            />
          </div>

          {/* Area/Society  */}
          <div className="mt-4">
            <label htmlFor="area" className="block mb-2 text-sm font-medium">
              Area/Society:
            </label>
            <Input
              type="text"
              id="area"
              name="area"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Location/Address  */}
          <div className="mt-4">
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Location/Address:
            </label>
            <Input
              type="text"
              id="address"
              name="address"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400"
              placeholder="address"
            />
          </div>
        </div>

        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          {/* Plot size  */}
          <div className="mt-4">
            <label
              htmlFor="plot-size"
              className="block mb-2 text-sm font-medium"
            >
              Plot Size (Sq. Yards):
            </label>
            <div className="flex">
              <Input

                type="number"
                id="plot-size"
                name="plot-size"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="(Sq. Yards)"
                onChange={(e) => {
                  setPlot_Size(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(plot_size).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Total Covered Area of Building (Sq. Yards)  */}
          <div className="mt-4">
            <label
              htmlFor="construction-area"
              className="block mb-2 text-sm font-medium"
            >
              Total Covered Area of Building (Sq Ft):
            </label>
            <div className="flex">
              <Input
                type="number"
                id="construction-area"
                name="construction-area"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder="(Sq. Yards)"
                onChange={(e) => {
                  setConstruction_Area(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(construction_area).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Construction Year  */}
          <div className="mt-4">
            <label
              htmlFor="construction-year"
              className="block mb-2 text-sm font-medium"
            >
              Construction Year:
            </label>
            <Input
              type="number"
              id="construction-year"
              name="construction-year"
              min="1900"
              className="input input-bordered input-primary w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Builder Name  */}
          <div className="mt-4">
            <label
              htmlFor="builder-name"
              className="block mb-2 text-sm font-medium"
            >
              Builder Name:
            </label>
            <Input
              id="builder-name"
              name="builder-name"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Building Rank  */}
          <div className="mt-4">
            <label
              htmlFor="building-rank"
              className="block mb-2 text-sm font-medium"
            >
              Building Rank
            </label>
            <select
              id="building-rank"
              name="building-rank"
              className="select w-full max-w-xs border-2 border-gray-400  "
            >
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          {/* Total Floors  */}
          <div className="mt-4">
            <label
              htmlFor="total-floors"
              className="block mb-2 text-sm font-medium"
            >
              Total Floors:
            </label>
            <Input
              type="number"
              id="total-floors"
              name="total-floors"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* Parking Floors  */}
          <div className="mt-4">
            <label
              htmlFor="parking-floors"
              className="block mb-2 text-sm font-medium"
            >
              Parking Floors:
            </label>
            <Input
              type="number"
              id="parking-floors"
              name="parking-floors"
              className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>
        </div>

        {/* Apartments section */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          {/* No. of Apartment Floors  */}
          <div className="mt-4">
            <label
              htmlFor="apartment-floors-count"
              className="block mb-2 text-sm font-medium"
            >
              No. of Apartment Floors:
            </label>
            <Input
              type="number"
              id="apartment-floors-count"
              name="apartment-floors-count"
              className="input input-bordered input-primary w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* No. of Apartments  */}
          <div className="mt-4">
            <label
              htmlFor="apartments-count"
              className="block mb-2 text-sm font-medium"
            >
              No. of Apartment:
            </label>
            <Input
              type="number"
              id="apartments-count"
              name="apartments-count"
              min="0"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Apartments Type  */}
          <div className="mt-4">
            <fieldset>
              <legend className="block mb-2 text-sm font-medium">
                Apartments Type
              </legend>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="apartment-has-type-1-bed"
                  name="apartment-has-type-1-bed"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="apartment-has-type-1-bed"
                  className="ml-2 text-sm font-medium  "
                >
                  1-Bed
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="apartment-has-type-2-bed"
                  name="apartment-has-type-2-bed"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="apartment-has-type-2-bed"
                  className="ml-2 text-sm font-medium  "
                >
                  2-Bed
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="apartment-has-type-3-bed"
                  name="apartment-has-type-3-bed"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="apartment-has-type-3-bed"
                  className="ml-2 text-sm font-medium  "
                >
                  3-Bed
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="apartment-has-type-4-bed"
                  name="apartment-has-type-4-bed"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="apartment-has-type-4-bed"
                  className="ml-2 text-sm font-medium  "
                >
                  4-Bed
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="apartment-has-type-duplex"
                  name="apartment-has-type-duplex"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="apartment-has-type-duplex"
                  className="ml-2 text-sm font-medium  "
                >
                  Duplex
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="apartment-has-type-penthouse"
                  name="apartment-has-type-penthouse"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="apartment-has-type-penthouse"
                  className="ml-2 text-sm font-medium  "
                >
                  Penthouse
                </label>
              </div>
            </fieldset>
          </div>

          {/* Servant Quarter  */}
          <div className="mt-4">
            <label
              htmlFor="apartment-has-servant-quarter"
              className="block mb-2 text-sm font-medium"
            >
              Servant Quarter
            </label>
            <select
              id="apartment-has-servant-quarter"
              name="apartment-has-servant-quarter"
              className="select w-full max-w-xs border-2 border-gray-400  "
            >
              <option>Yes</option>
              <option>No</option>

            </select>
          </div>

          {/* Maintenance fee of apartment  */}
          <div className="mt-4">
            <label
              htmlFor="apartments-maintenance-fee"
              className="block mb-2 text-sm font-medium"
            >
              Maintenance Fee (Per Sq. Ft.):
            </label>
            <div className="flex">
              <Input
                onChange={(e) => {
                  setApartments_Maintenance_Fee(Number(e.target.value))
                  console.log(e.target.value)
                }}
                type="number"
                id="apartments-maintenance-fee"
                name="apartments-maintenance-fee"
                min="0"
                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                placeholder="Rs."
              />
              <div className="m-4">
                {Number(apartments_maintenance_fee).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Retail floors */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          {/* No. of Retail Floors */}
          <div className="mt-4">
            <label
              htmlFor="retail-floors-count"
              className="block mb-2 text-sm font-medium"
            >
              No. of Retail Floors:
            </label>
            <Input
              type="number"
              id="retail-floors-count"
              name="retail-floors-count"
              min="0"
              className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* No. of Shops  */}
          <div className="mt-4">
            <label
              htmlFor="retail-floors-shops-count"
              className="block mb-2 text-sm font-medium"
            >
              No. of Shops:
            </label>
            <Input
              type="number"
              id="retail-floors-shops-count"
              name="retail-floors-shops-count"
              min="0"
              className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Maintenance Fee */}
          <div className="mt-4">
            <label
              htmlFor="retail-floors-maintenance-fee"
              className="block mb-2 text-sm font-medium"
            >
              Maintenance Fee:
            </label>
            <div className="flex">
              <Input
                onChange={(e) => {
                  setRetail_Floors_Maintenance_Fee(Number(e.target.value))
                  console.log(e.target.value)
                }}
                type="number"
                id="retail-floors-maintenance-fee"
                name="retail-floors-maintenance-fee"
                min="0"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
              />
              <div className="m-4">
                {Number(retail_floors_maintenance_fee).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Brands/Type of Products & Services: */}
          <div className="mt-4">
            <label
              htmlFor="retail-floors-brands-type"
              className="block mb-2 text-sm font-medium"
            >
              Brands/Type of Products & Services:
            </label>
            <Input
              type="text"
              id="retail-floors-brands-type"
              name="retail-floors-brands-type"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>
        </div>

        {/* Office floors section */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          {/* No. of Office Floors */}
          <div className="mt-4">
            <label
              htmlFor="office-floors-count"
              className="block mb-2 text-sm font-medium"
            >
              No. of Office Floors:
            </label>
            <Input
              type="number"
              id="office-floors-count"
              name="office-floors-count"
              min="0"
              className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* No. of Offices */}
          <div className="mt-4">
            <label
              htmlFor="offices-count"
              className="block mb-2 text-sm font-medium"
            >
              No. of Offices:
            </label>
            <Input
              type="number"
              id="offices-count"
              name="offices-count"
              min="0"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* Maintenance fee of offices */}
          <div className="mt-4">
            <label
              htmlFor="office-maintenance-fee"
              className="block mb-2 text-sm font-medium"
            >
              Maintenance Fee (Per Sq. Ft.):
            </label>
            <div className="flex">
              <Input
                onChange={(e) => {
                  setOffice_Maintenance_Fee(Number(e.target.value))
                  console.log(e.target.value)
                }}
                type="number"
                id="office-maintenance-fee"
                name="office-maintenance-fee"
                min="0"
                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                placeholder="Rs."
              />
              <div className="m-4">
                {Number(office_maintenance_fee).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Survey date and feedback */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          {/* Survey Date */}
          <div className="relative max-w-sm">
            <label
              htmlFor="surveyor-name"
              className="block mb-2 text-sm font-medium "
            >
              Date: (Month/Day/year)
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
              id="survey-date"
              name="survey-date"
              defaultValue={(new Date).toISOString().split('T')[0]}
              className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
              placeholder="Survey date"
            />
          </div>

          {/* Surveyor Name  */}
          <div className="mt-4">
            <label
              htmlFor="surveyor-name"
              className="block mb-2 text-sm font-medium"
            >
              Surveyor Name:
            </label>
            <Input
              type="text"
              id="surveyor-name"
              name="surveyor-name"
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
              id="building-survery-remarks"
              name="building-survery-remarks"
              className="textarea  w-full border-2 border-gray-400  "
              placeholder="Leave a comment..."
            ></Textarea>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex gap-6 justify-center mt-3">
          <AddButton />
          {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

          <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
            <Link href="/buildings">Cancel</Link>
          </Button>


          {/* <button
            type="submit"
            className="border border-gray-300 text-sm rounded-lg block p-2.5"
          >
            Create
          </button> */}
        </div>
      </form >
    </>
  );
}
